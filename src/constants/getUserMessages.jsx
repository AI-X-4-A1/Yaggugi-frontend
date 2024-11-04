import axios from 'axios';

const getUserMessages = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axios.get('http://localhost:8080/chat/getUserMessages', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data; // 대화 메시지 배열 반환
  } catch (error) {
    console.error("메시지 불러오기 오류:", error);
    return [];
  }
};

export default getUserMessages;
