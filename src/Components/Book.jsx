import GlobalFooter from "./Footer";
import "../Styles/Book.css";
import EasyIcon from "../assets/imgs/easy.png";
import NormalIcon from "../assets/imgs/normal.png";
import HardIcon from "../assets/imgs/hard.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TitleWrap = () => {
  return (
    <div className="title_wrap">
      <div className="title">
        <h2>배우고 싶은 단어의 난이도를 선택해주세요.</h2>
      </div>
      <div className="subtitle">
        <p>선택 후 변경도 가능해요!</p>
      </div>
    </div>
  );
};

const ButtonWrap = ({unit}) => {
    const navigate = useNavigate();

  return (
    <div className="button_wrap">
      <div
        className="button easy"
        onClick={() => navigate("/camera", { state: unit })}
      >
        <div className="img_wrap">
          <img src={EasyIcon} alt="Easy" />
        </div>
        <p className="difficult">쉬움</p>
      </div>
      <div
        className="button normal"
        onClick={() => navigate("/camera", { state: unit })}
      >
        <div className="img_wrap">
          <img src={NormalIcon} alt="Normal" />
        </div>
        <p className="difficult">보통</p>
      </div>

      <div
        className="button hard"
        onClick={() => navigate("/camera", { state: unit })}
      >
        <div className="img_wrap">
          <img src={HardIcon} alt="Normal" />
        </div>
        <p className="difficult">어려움</p>
      </div>
    </div>
  );
};

const Book = () => {
  const [unit, setUnit] = useState("jaum");

  const changeUnit = ({ target }) => {
    const { value } = target;
    setUnit(value);
  }

  return (
    <div className="book_wrap">
      <div className="book_container">
        <TitleWrap />
        <select className="unit" onChange={changeUnit}>
          <option value="jaum" defaultValue={true}>
            자음
          </option>
          <option value="moum">모음</option>
          <option value="word">단어</option>
          <option value="sentence">문장</option>
        </select>
        <ButtonWrap unit={unit}></ButtonWrap>
      </div>
      <GlobalFooter />
    </div>
  );
};

export default Book;
