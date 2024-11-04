import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux"; // useSelector 추가
import store from "./store";

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
  return (
    <Provider store={store}>
      <Router>
        <div className="App layout-app">
          <div className="layout-header">
            <Header />
          </div>

          <div className="layout-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
              {/* 각 경로에서 userId를 쿼리 파라미터로 전달 */}
              <Route path="/suggestion" element={<RequireAuth path="/suggestion" />} />
              <Route path="/search" element={<RequireAuth path="/search" />} />
              <Route path="/planning" element={<RequireAuth path="/planning" />} />
              <Route path="/profile" element={<RequireAuth path="/profile" />} />

              {/* 각 페이지에서 :userId를 쿼리 파라미터로 수신 */}
              <Route path="/suggestion/:userId" element={<RequireAuth><Suggestion /></RequireAuth>} />
              <Route path="/search/:userId" element={<RequireAuth><Search /></RequireAuth>} />
              <Route path="/planning/:userId" element={<RequireAuth><Planning /></RequireAuth>} />
              <Route path="/profile/:userId" element={<RequireAuth><Profile /></RequireAuth>} />
            </Routes>
          </div>

          <div className="layout-footer">
            <Footer />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
