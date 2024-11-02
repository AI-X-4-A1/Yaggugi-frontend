import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <Link to="/" className="title">
        약국이
      </Link>
      <button className="login">로그인</button>
    </div>
  );
}

export default header;
