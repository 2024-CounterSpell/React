import GlobalFooter from "./Footer";
import "../Styles/Book.css";
import EasyIcon from "../assets/imgs/easy.png";
import NormalIcon from "../assets/imgs/normal.png";
import HardIcon from "../assets/imgs/hard.png";

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

const ButtonWrap = () => {
  return (
    <div className="button_wrap">
      <div className="button easy">
        <div className="img_wrap">
          <img src={EasyIcon} alt="Easy" />
        </div>
        <p className="difficult">쉬움</p>
      </div>
      <div className="button normal">
        <div className="img_wrap">
          <img src={NormalIcon} alt="Normal" />
        </div>
        <p className="difficult">보통</p>
      </div>

      <div className="button hard">
        <div className="img_wrap">
          <img src={HardIcon} alt="Normal" />
        </div>
        <p className="difficult">보통</p>
      </div>
    </div>
  );
};

const Book = () => {
  return (
    <div className="wrap">
      <div className="container">
        <TitleWrap />
        <ButtonWrap></ButtonWrap>
      </div>
      <GlobalFooter />
    </div>
  );
};

export default Book;
