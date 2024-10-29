import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/EventAvailable';

function Footer() {
    const location = useLocation();

    // 현재 경로가 버튼의 경로와 일치하는지 확인하여 활성화 클래스 적용
    const isActive = (path) => location.pathname === path ? ' active' : '';

    return (
        <div className="footer">
            <Button as={Link} to="/" className={`footer-button${isActive('/')}`}>
                <HomeIcon className="icon" />
            </Button>
            <Button as={Link} to="/suggestion" className={`footer-button${isActive('/suggestion')}`}>
                <ContactIcon className="icon" />
            </Button>
            <Button as={Link} to="/search" className={`footer-button${isActive('/search')}`}>
                <SearchIcon className="icon" />
            </Button>
            <Button as={Link} to="/planning" className={`footer-button${isActive('/planning')}`}>
                <EventIcon className="icon" />
            </Button>
        </div>
    );
}

export default Footer;
