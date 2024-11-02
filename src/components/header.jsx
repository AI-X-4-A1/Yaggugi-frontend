import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

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

      <button className="login">로그인</button>
    </div>
  );
}

export default Header;
