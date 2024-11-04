// src/components/header.jsx

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GOOGLE_AUTH_URL, ACCESS_TOKEN } from '../constants';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 상태를 감지
  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, [location]); // location이 변경될 때마다 실행

  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      await fetch('http://www.leafresher.shop:8080/logout', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` // 수정된 부분
        },
      });
      localStorage.removeItem(ACCESS_TOKEN); // 로컬 스토리지에서 토큰 제거
      localStorage.removeItem("userId"); // 로�� 스토리지에서 userId 제거
      setIsLoggedIn(false); // 로그인 상태 업데이트
      navigate('/'); // 로그아웃 후 홈 페이지로 이동
    } catch (error) {
      console.error('로그아웃에 실패했습니다.', error);
    }
  };

  const routeNames = {
    "/": "I Home",
    "/suggestion": "I Suggest",
    "/search": "I Search",
    "/planning": "I Plan",
  };

  const routeName = routeNames[location.pathname];

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="title">
          약국이
        </Link>
        <div className="location">{routeName}</div>
      </div>

      {isLoggedIn ? (
        <button className="login" onClick={handleLogout}>
          로그아웃
        </button>
      ) : (
        <button className="login" onClick={handleGoogleLogin}>
          로그인
        </button>
      )}
    </div>
  );
}

export default Header;
