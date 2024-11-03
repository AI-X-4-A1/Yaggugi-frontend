import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";

function ChatApp() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "안녕하세요! 영양제에 대한 질문을 해주세요!", sender: "bot" },
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
        process.env.REACT_APP_LLM,
        { prompt: userInput },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const botResponse = response.data.result;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);

      const audioResponse = await axios.post(
        process.env.REACT_APP_TTS,
        { text: botResponse },
        {
          headers: { "Content-Type": "application/json" },
          responseType: "blob",
        }
      );

      const audioBlob = new Blob([audioResponse.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioSrc(audioUrl);
    } catch (error) {
      console.error("Error fetching response from server:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "서버 응답 실패 😥", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (audioSrc && audioRef.current) {
      audioRef.current.pause();
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

  const formatResponseText = (text) => {
    // 줄바꿈을 <br />로 변환하여 HTML로 안전하게 렌더링
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <Container
      style={{
        maxWidth: "500px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "5px",
      }}
    >
      <div
        className="chat-output mb-3"
        style={{ flexGrow: 1, overflowX: "hidden", overflowY: "auto" }}
      >
        {messages.map((msg, index) => (
          <React.Fragment key={index}>
            <Row
              className={`mb-2 ${
                msg.sender === "user" ? "justify-content-end" : ""
              }`}
            >
              <Col
                xs="auto"
                className={msg.sender === "bot" ? "bot-message-container" : ""}
              >
                {msg.sender === "bot" && (
                  <img
                    src="mascot.webp"
                    alt="Mascot"
                    className="mascotImg mb-2"
                  />
                )}
                <div
                  className={`chat-context ${
                    msg.sender === "bot" ? "bot-message" : ""
                  }`}
                  style={{
                    backgroundColor:
                      msg.sender === "user" ? "#4A4A4A" : "#66CDAA",
                  }}
                >
                  {formatResponseText(msg.text)}
                </div>
              </Col>
            </Row>
          </React.Fragment>
        ))}

        {loading && (
          <Row className="mb-2">
            <Col xs="auto">
              <Spinner animation="border" role="status" size="sm" />
              <span className="ms-2">
                답변을 준비중이에요... 잠시만 기다려주세요...
              </span>
            </Col>
          </Row>
        )}
        <div style={{ display: loading ? "none" : "block" }}>
          {audioSrc && <audio ref={audioRef} src={audioSrc} controls />}
        </div>
      </div>

      <Form className="chat-input">
        <Form.Control
          type="text"
          placeholder="메세지를 입력하세요..."
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          ref={inputRef}
          disabled={loading}
        />
        <Button onClick={handleSend} disabled={loading}>
          전송
        </Button>
      </Form>

      <p className="text-muted mb-0">
        약국이는 실수를 할 수 있습니다. 참고의 용도로만 사용하세요.
      </p>
    </Container>
  );
}

export default ChatApp;
