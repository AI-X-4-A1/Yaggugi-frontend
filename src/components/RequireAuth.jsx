// src/components/RequireAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constants';

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    if (!token) {
      alert('로그인이 필요합니다.'); // 경고 알림창 표시
      navigate('/'); // 토큰이 없으면 홈 페이지로 리디렉션
    }
  }, [token, navigate]);

  if (!token) {
    return null; // 리디렉션 전까지 아무것도 렌더링하지 않음
  }

  return children; // 토큰이 있으면 페이지 렌더링
};

export default RequireAuth;