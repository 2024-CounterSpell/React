import React, { useRef, useEffect, useState } from "react";
import axios from 'axios';
import '../Styles/Camera.css';
import { useNavigate } from "react-router-dom";

const wordList = ['개발', '디자인', '콩깍지', '영동', '꽁치', '참치', '창살']

const Camera = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoBlob, setVideoBlob] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isStart, setIsStart] = useState(false); 
  const [word, setWord] = useState();

  useEffect(() => {
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    setWord(word);
  }, []);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          mediaRecorderRef.current = new MediaRecorder(stream, {
            mimeType: "video/webm",
          });

          mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data && event.data.size > 0) {
              setRecordedChunks((prev) => [...prev, event.data]);
              console.log("데이터 청크 추가됨:", event.data.size);
            }
          };
        }
      } catch (err) {
        console.error("카메라 접근 실패: ", err);
      }
    };

    enableCamera();
  }, []);

  const startRecording = () => {
    setRecordedChunks([]); 
    mediaRecorderRef.current.start(100);
    setIsRecording(true);
    console.log("녹화 시작");
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;
    
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    
    mediaRecorderRef.current.onstop = async () => {
      try {
        const blob = new Blob(recordedChunks, { type: "video/webm" });
        setVideoBlob(blob);
        
        const formData = new FormData();
        formData.append('file', blob, 'recording.webm');

        const response = await axios.post('http://localhost:8083/api/v1/ai/conversation', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true
        });
        
        console.log('업로드 성공:', response.data);
      } catch (error) {
        console.error('업로드 실패:', error);
      }
    };
    console.log("녹화 중지");
  };

  return (
    <div className="camera-container">
      <h1>카메라 화면</h1>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="camera-video"
      />
      <div className="camera-controls">
        <button 
          onClick={isRecording ? stopRecording : startRecording}
          className={`record-button ${isRecording ? 'recording' : 'not-recording'}`}
        >
          {isRecording ? "녹화 중지" : "녹화 시작"}
        </button>
      </div>
    </div>
  );
};

export default Camera;
