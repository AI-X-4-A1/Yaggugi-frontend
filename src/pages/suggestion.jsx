import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatApp() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "안녕하세요! 질문 해 주세요", sender: "bot" },
  ]);
  const [loading, setLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);

  const inputRef = useRef(null);
  const audioRef = useRef(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (userInput.trim() === "") return;

    setMessages([...messages, { text: userInput, sender: "user" }]);
    setUserInput("");
    setLoading(true);
    inputRef.current.focus();

    try {
      const response = await axios.post(
          "http://127.0.0.1:8000/chat/",
          new URLSearchParams({ text: userInput }).toString(),
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
          }
      );

      const botResponse = response.data.result;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" }
      ]);

      const audioResponse = await axios.post(
          "http://127.0.0.1:8080/synthesize",
          { text: botResponse },
          {
            headers: { "Content-Type": "application/json" },
            responseType: "blob"
          }
      );

      const audioBlob = new Blob([audioResponse.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioSrc(audioUrl);

    } catch (error) {
      console.error("Error fetching response from server:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "서버 응답 실패 😥", sender: "bot" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (audioSrc && audioRef.current) {
      audioRef.current.pause(); // 새 오디오 URL이 설정되면 자동으로 일시정지
    }
  }, [audioSrc]);

  const onKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      e.stopPropagation();
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
      <Container className="p-3" style={{ maxWidth: "500px", height: "calc(100vh - 18%)", display: "flex", flexDirection: "column" }}>
        <div className="chat-output mb-3" style={{ flexGrow: 1, overflowY: "auto", paddingBottom: "1rem" }}>
          {messages.map((msg, index) => (
              <React.Fragment key={index}>
                <Row className={`mb-2 ${msg.sender === "user" ? "justify-content-end" : ""}`}>
                  <Col xs="auto">
                    <div style={{
                      backgroundColor: msg.sender === "user" ? "#4c6ef5" : "#e0f7ff",
                      color: msg.sender === "user" ? "#ffffff" : "#333333",
                      padding: "10px 15px",
                      borderRadius: "15px",
                      maxWidth: "250px",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)"
                    }}>
                      {msg.text}
                    </div>
                  </Col>
                </Row>
              </React.Fragment>
          ))}

          {loading && (
              <Row className="mb-2">
                <Col xs="auto">
                  <Spinner animation="border" variant="primary" role="status" size="sm" />
                  <span className="ms-2">응답 생성 중...</span>
                </Col>
              </Row>
          )}

          {/* 사용자 재생 버튼을 위한 audio 요소 */}
          {audioSrc && (
              <audio ref={audioRef} src={audioSrc} controls />
          )}
        </div>

        <Form className="chat-input d-flex">
          <Form.Control
              type="text"
              placeholder="메세지를 입력하세요..."
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={onKeyDown}
              ref={inputRef}
              className="me-2"
              disabled={loading}
          />
          <Button onClick={handleSend} variant="primary" disabled={loading}>전송</Button>
        </Form>

        {/* 안내 문구 추가 */}
        <p className="text-muted mt-2" style={{ fontSize: "0.875rem", textAlign: "center"}}>
          약국이는 실수를 할 수 있습니다. 제안의 용도로만 사용하세요.
        </p>
      </Container>
  );
}

export default ChatApp;
