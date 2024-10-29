import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Suggestion from "./pages/suggestion";
import Search from "./pages/search";
import Planning from "./pages/planning";

import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App layout-app">

        <div className="layout-header">
          <Header />
        </div>
        
        <div className="layout-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suggestion" element={<Suggestion />} />
            <Route path="/search" element={<Search />} />
            <Route path="/planning" element={<Planning />} />
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
