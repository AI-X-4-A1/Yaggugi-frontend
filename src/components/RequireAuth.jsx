// src/components/RequireAuth.js
import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // useSelector 추가
import { ACCESS_TOKEN } from '../constants';

const RequireAuth = ({ children, path }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem(ACCESS_TOKEN);
  const userId = useSelector((state) => state.user.userId); // Redux에서 userId 가져오기

  useEffect(() => {
    if (!token) {
      alert('로그인이 필요합니다.'); // 경고 알림창 표시
      navigate('/'); // 토큰이 없으면 홈 페이지로 리디렉션
    }
  }, [token, navigate]);

  // userId가 없으면 지정된 경로로 리다이렉트
  if (!token) {
    return null; // 리디렉션 전까지 아무것도 렌더링하지 않음
  }

  if (!userId) {
    return <Navigate to="/" replace />; // userId가 없으면 홈으로 리다이렉트
  }

  // userId가 있으면 경로에 포함해 리다이렉트
  if (path) {
    return <Navigate to={`${path}/${userId}`} replace />;
  }

  return children; // 토큰과 userId가 있으면 자식 컴포넌트를 렌더링
};

export default RequireAuth;
