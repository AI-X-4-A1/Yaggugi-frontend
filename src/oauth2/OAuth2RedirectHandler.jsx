import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { ACCESS_TOKEN } from '../constants';

const OAuth2RedirectHandler = ({ updateUserId }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const error = params.get('error');

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            try {
                // 토큰에서 user 정보 파싱
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.user.id; // 토큰에서 userId 추출
                updateUserId(userId); // userId 상태 즉시 업데이트
            } catch (e) {
                console.error("토큰 파싱 중 오류 발생:", e);
            }
            navigate("/", { state: { from: location } }); // 홈 페이지로 이동
        } else {
            navigate("/login", { state: { from: location, error } });
        }
    }, [location, navigate, updateUserId]);

    return <div>처리 중...</div>;
};

export default OAuth2RedirectHandler;
