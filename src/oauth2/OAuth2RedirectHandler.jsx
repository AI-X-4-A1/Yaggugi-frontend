
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constants';

const OAuth2RedirectHandler = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const error = params.get('error');

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            navigate("/profile", { state: { from: location } }); // 프로필 페이지로 이동
        } else {
            navigate("/login", { state: { from: location, error } });
        }
    }, [location, navigate]);

    return <div>처리 중...</div>;
};

export default OAuth2RedirectHandler;
