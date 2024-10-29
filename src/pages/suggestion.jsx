import React, { useState, useRef } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatApp() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "안녕하세요! 질문 해 주세요", sender: "bot" },
  ]);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (userInput.trim() === "") return;

    setMessages([...messages, { text: userInput, sender: "user" }]);
    setUserInput("");
    setLoading(true); // 로딩 상태 시작
    inputRef.current.focus();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/chat/",
        new URLSearchParams({ text: userInput }).toString(),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }
      );

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.result, sender: "bot" }
      ]);
    } catch (error) {
      console.error("Error fetching response from server:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "서버 응답 실패 😥", sender: "bot" }
      ]);
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

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
    <Container className="p-3" style={{ maxWidth: "500px", height: "calc(100vh - 22%)", display: "flex", flexDirection: "column" }}>
      <div className="chat-output mb-3" style={{ flexGrow: 1, overflowY: "auto", paddingBottom: "1rem" }}>
        {messages.map((msg, index) => (
          <Row key={index} className={`mb-2 ${msg.sender === "user" ? "justify-content-end" : ""}`}>
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
        ))}

        {loading && ( // 로딩 상태 시 표시
          <Row className="mb-2">
            <Col xs="auto">
              <Spinner animation="border" variant="primary" role="status" size="sm" />
              <span className="ms-2">응답 생성 중...</span>
            </Col>
          </Row>
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
          disabled={loading} // 로딩 중 입력 비활성화
        />
        <Button onClick={handleSend} variant="primary" disabled={loading}>전송</Button>
      </Form>
    </Container>
  );
}

export default ChatApp;
