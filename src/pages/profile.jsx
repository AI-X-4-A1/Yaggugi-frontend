import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../constants";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem(ACCESS_TOKEN);
        const response = await axios.get(process.env.REACT_APP_LOGIN, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true, // 쿠키를 포함하여 요청
        });
        console.log(response);
        if (response.status === 200) {
          setUser(response.data.user.user); // 중첩된 user 객체에 접근
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("프로필 정보를 가져오지 못했습니다.", error);
        navigate("/");
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem(ACCESS_TOKEN);
      await axios.get(process.env.REACT_APP_LOGOUT, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // credentials: 'include' 대신 사용
      });
      localStorage.removeItem(ACCESS_TOKEN); // 로컬 스토리지에서 토큰 제거
      navigate("/"); // 로그아웃 후 로그인 페이지로 이동
    } catch (error) {
      console.error("로그아웃에 실패했습니다.", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <>
          <h2>환영합니다, {user.displayName}님!</h2>
          {user.photos && user.photos[0] && (
            <img
              src={user.photos[0].value}
              alt="Profile"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          )}
          {user.emails && user.emails[0] && (
            <p>이메일: {user.emails[0].value}</p>
          )}
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <p>프로필 정보를 가져오는 중...</p>
      )}
    </div>
  );
};

export default Profile;
