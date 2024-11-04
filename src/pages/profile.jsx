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
        const response = await axios.get('http://localhost:8080/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        console.log(response);
        if (response.status === 200) {
          const profileData = response.data.user.user;
          setUser(profileData);

          // userId를 로컬 스토리지에 저장
          if (profileData && profileData.id) {
            localStorage.setItem("userId", profileData.id);
          }
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

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <>
          <h2>환영합니다, {user.displayName}님!</h2>
          {user.photo && (
            <img
              src={user.photo}
              alt="Profile"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          )}
          <p>이메일: {user.email}</p>
        </>
      ) : (
        <p>프로필 정보를 가져오는 중...</p>
      )}
    </div>
  );
};

export default Profile;
