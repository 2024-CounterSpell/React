import "../Styles/Review.css";
import GlobalFooter from "./Footer";
import CameraFill from "../assets/imgs/camera-fill.png";
import { useNavigate } from "react-router-dom";

const wordList = ['안녕', '강아지', '고양이', '인사', '사랑']

const Review = () => {
    const navigate = useNavigate();

    return <div className="review-wrap">
        <div className="review-container">
            <h3 className="review-title">이전에 배웠던 단어를<br/> 복습해볼까요?</h3>
            <div className="reviewWordList">
                {
                    wordList.map(word => (
                        <div className="reviewWord">
                            <div></div>
                            <p>{word}</p>
                            <img src={CameraFill} onClick={() => navigate("/camera", {state: word})}/>
                        </div>
                    ))
                }
            </div>
            <GlobalFooter/>
        </div>
    </div>
}

export default Review;