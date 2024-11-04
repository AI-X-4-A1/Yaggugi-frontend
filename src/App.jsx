// src/App.jsx

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Suggestion from "./pages/suggestion";
import Search from "./pages/search";
import Planning from "./pages/planning";
import Profile from "./pages/profile";
import OAuth2RedirectHandler from "./oauth2/OAuth2RedirectHandler";

import Header from './components/header';
import Footer from './components/footer';
import RequireAuth from './components/RequireAuth';

function App() {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  const updateUserId = (id) => {
    localStorage.setItem("userId", id);
    setUserId(id);
  };

  useEffect(() => {
    // 이 코드에서 Profile 컴포넌트에 updateUserId 함수를 props로 전달하여 userId 상태가 변경될 때 실시간으로 반영됩니다.
    const handleStorageChange = () => {
      setUserId(localStorage.getItem("userId"));
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <div className="App layout-app">
        <div className="layout-header">
          <Header />
        </div>
        
        <div className="layout-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<RequireAuth><Profile updateUserId={updateUserId} /></RequireAuth>} />
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
            <Route 
              path="/suggestion" 
              element={
                userId ? (
                  <Navigate to={`/suggestion/${userId}`} replace />
                ) : (
                  <Navigate to="/" replace />
                )
              }
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
