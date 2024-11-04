// src/constants/saveMessageToBackend.js
import axios from "axios";

const saveMessageToBackend = async (message, sender) => {
  try {
    // 로컬 스토리지에서 토큰과 userId 가져오기
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    await axios.post(
      `http://localhost:8080/chat/saveMessage`,
      { sender, text: message, userId }, // userId 추가
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
  } catch (error) {
    console.error("메시지 저장 중 오류:", error);
  }
};

export default saveMessageToBackend;
