import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    const menuItems = [
        { icon: '🏠', text: '홈' },
        { icon: '📷', text: '촬영' },
        { icon: '📝', text: '기록' },
        { icon: '📊', text: '통계' },
        { icon: '👤', text: '내정보' }
    ];

    return (
        <footer className="footer">
            <nav className="footer-nav">
                {menuItems.map((item, index) => (
                    <div key={index} className="footer-item">
                        <span className="footer-icon">{item.icon}</span>
                        <span className="footer-text">{item.text}</span>
                    </div>
                ))}
            </nav>
        </footer>
    );
}

export default Footer;