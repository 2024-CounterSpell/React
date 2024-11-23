import React, { useRef, useEffect, useState } from "react";
import axios from 'axios';
import '../Styles/Camera.css';

const Camera = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoBlob, setVideoBlob] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          mediaRecorderRef.current = new MediaRecorder(stream, {
            mimeType: "video/webm",
          });

          mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
              setRecordedChunks((prev) => [...prev, event.data]);
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
    mediaRecorderRef.current.start();
    setIsRecording(true);
    console.log("녹화 시작");
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;
    
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      setVideoBlob(blob);
      
      const formData = new FormData();
      formData.append('video', blob, 'recording.webm');

      // 서버로 전송
      axios.post('http://localhost:3030/upload/video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      })
      .then(response => {
        console.log('업로드 성공:', response.data);
      })
      .catch(error => {
        console.error('업로드 실패:', error);
      });
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
