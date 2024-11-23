import { useEffect, useState } from "react";
import "../Styles/Home.css";
import UserImage from "../assets/imgs/user.png";
import GlobalFooter from "./Footer";

const UserInfo = () => {
    const [username, setUsername] = useState("Guest");
    
    const getUsernameFromLocalStorage = () => {
        setUsername(localStorage.getItem("username"));
    }

    useEffect(() => {
        getUsernameFromLocalStorage();
    }, []);

    const changeUsername = ({target}) => {
        const { value } = target;
        setUsername(value);
        localStorage.setItem("username", value);
    }

  return (
    <div className="userinfo">
      <div className="user_wrap">
        <img src={UserImage} alt="User Image" className="user" />
      </div>
        <input type="text" className="username" value={username} onChange={changeUsername}/>
    </div>
  );
};

const Controls = () => {
  return (
    <div className="control_wrap">
      <div className="button_container">
        <p className="control_content">어제 했었던 공부 복습하기</p>
      </div>
      <div className="button_container">
        <p className="control_content">오늘 할 공부 계획하기</p>
      </div>
      <div className="button_container">
        <p className="control_content">오늘의 발음</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="wrap">
      <div className="container">
        <UserInfo />
        <Controls />
      </div>
      <GlobalFooter />
    </div>
  );
};

export default Home;
