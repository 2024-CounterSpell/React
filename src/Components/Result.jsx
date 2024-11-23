import { useEffect, useState } from "react";
import "../Styles/Result.css";
import { useNavigate } from "react-router-dom";
import GlobalFooter from "./Footer";

const Result = () => {
    const navigate = useNavigate();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const randomScore = Math.floor(Math.random() * 100);
    setScore(randomScore);
  }, []);

  return (
    <div className="result_wrap">
      <div className="result_container">
        <h2 className="result_title">발음 점수를 확인해보세요</h2>
        <div className="score_wrap">
          <p className="score">{score}</p>
          <p>/ 100</p>
        </div>
      <button className="next_btn" onClick={() => navigate("/camera")}>단어 발음하기</button>
          <GlobalFooter/>
          </div>
    </div>
  );
};

export default Result;
