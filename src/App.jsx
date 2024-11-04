// src/App.jsx

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Suggestion from "./pages/suggestion";
import Search from "./pages/search";
import Planning from "./pages/planning";
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
          <Header userId={userId} />
        </div>
        
        <div className="layout-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler updateUserId={updateUserId} />} />
            <Route path="/suggestion" element={userId ? (<Navigate to={`/suggestion/${userId}`} replace />) : (<Navigate to="/" replace />)}/>
            <Route path="/suggestion/:userId" element={<RequireAuth><Suggestion /></RequireAuth>} />
            <Route path="/search" element={userId ? (<Navigate to={`/search/${userId}`} replace />) : (<Navigate to="/" replace />)}/>
            <Route path="/search/:userId" element={<RequireAuth><Search /></RequireAuth>} />
            <Route path="/planning" element={userId ? (<Navigate to={`/planning/${userId}`} replace />) : (<Navigate to="/" replace />)}/>
            <Route path="/planning/:userId" element={<RequireAuth><Planning /></RequireAuth>} />
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
