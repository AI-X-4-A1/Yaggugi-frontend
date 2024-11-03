import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

import HomeIcon from "@mui/icons-material/Home";
import ContactIcon from "@mui/icons-material/ContactSupport";
import SearchIcon from "@mui/icons-material/Search";
import EventIcon from "@mui/icons-material/EventAvailable";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? " active" : "");

  return (
    <div className="footer">
      <Button as={Link} to="/" className={`footer-button${isActive("/")}`}>
        <HomeIcon className="icon" />
      </Button>
      <Button
        as={Link}
        to="/suggestion"
        className={`footer-button${isActive("/suggestion")}`}
      >
        <ContactIcon className="icon" />
      </Button>
      <Button
        as={Link}
        to="/search"
        className={`footer-button${isActive("/search")}`}
      >
        <SearchIcon className="icon" />
      </Button>
      <Button
        as={Link}
        to="/planning"
        className={`footer-button${isActive("/planning")}`}
      >
        <EventIcon className="icon" />
      </Button>
      <Button
        href="https://github.com/AI-X-4-A1/Yaggugi-frontend"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-button-git"
      >
        <GitHubIcon className="icon-git" />
      </Button>
    </div>
  );
}

export default Footer;
