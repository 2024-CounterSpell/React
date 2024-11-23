import React from "react";
import CameraImage from "../assets/imgs/camera.png";
import "../Styles/Footer.css";
import { useLocation, useNavigate } from "react-router-dom";
import HomeFill from "../assets/imgs/home_fill.png";
import Home from "../assets/imgs/home.png";
import Book from "../assets/imgs/book.png";
import Task from "../assets/imgs/task.png";
import User from "../assets/imgs/usericon.png";

// const Footer = () => {
//     const menuItems = [
//         { icon: '🏠', text: '홈' },
//         { icon: '📷', text: '촬영' },
//         { icon: '📝', text: '기록' },
//         { icon: '📊', text: '통계' },
//         { icon: '👤', text: '내정보' }
//     ];

//     return (
//         <footer className="footer">
//             <nav className="footer-nav">
//                 {menuItems.map((item, index) => (
//                     <div key={index} className="footer-item">
//                         <span className="footer-icon">{item.icon}</span>
//                         <span className="footer-text">{item.text}</span>
//                     </div>
//                 ))}
//             </nav>
//         </footer>
//     );
// }

// export default Footer;

const GlobalFooter = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

  return (
    <footer>
      <div className="camera"></div>
      <div className="contents">
        <img src={pathname === "/" ? HomeFill : Home} alt="Home" onClick={() => navigate("/")}/>
        <img src={pathname === "/book" ? HomeFill : Book} alt="Book" onClick={() => navigate("/book")}/>
        <img src={CameraImage} alt="Camera" className="cameraIcon" onClick={() => navigate("/camera")}/>
        <img src={pathname === "/task" ? HomeFill : Task} alt="Task" onClick={() => navigate("/task")}/>
        <img src={pathname === "/user" ? HomeFill : User} alt="User" onClick={() => navigate("/user")}/>
      </div>
    </footer>
  );
};

export default GlobalFooter;
