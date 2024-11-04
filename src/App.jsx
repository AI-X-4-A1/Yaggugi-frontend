// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Suggestion from "./pages/suggestion";
import Search from "./pages/search";
import Planning from "./pages/planning";
import Profile from "./pages/profile";
import OAuth2RedirectHandler from "./oauth2/OAuth2RedirectHandler";

import Header from './components/header';
import Footer from './components/footer';
import RequireAuth from './components/RequireAuth'; // 보호 컴포넌트 추가

function App() {
  const userId = localStorage.getItem("userId"); // localStorage에서 userId 가져오기
  return (
    <Router>
      <div className="App layout-app">
        <div className="layout-header">
          <Header />
        </div>
        
        <div className="layout-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
            {/* userId가 있는 경우에만 Suggestion 페이지로 이동 */}
            <Route 
              path="/suggestion" 
              element={<Navigate to={`/suggestion/${userId}`} replace />} 
            />
            <Route 
              path="/suggestion/:userId" 
              element={<RequireAuth><Suggestion /></RequireAuth>} 
            />
            <Route path="/search" element={<RequireAuth><Search /></RequireAuth>} />
            <Route path="/planning" element={<RequireAuth><Planning /></RequireAuth>} />
          </Routes>
        </div>
        
        <div className="layout-footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
