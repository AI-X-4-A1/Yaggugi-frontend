import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GOOGLE_AUTH_URL } from '../constants';

function Header() {
  const location = useLocation();

  const routeNames = {
    "/": "I Home",
    "/suggestion": "I Suggest",
    "/search": "I Search",
    "/planning": "I Plan",
  };
  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
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

      <button className="login" onClick={handleGoogleLogin} >로그인</button>
    </div>
  );
}

export default Header;
