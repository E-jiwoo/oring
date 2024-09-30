import React, { useRef, useEffect } from "react"; // Import useRef and useEffect
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Index = ({ setBarcode }) => {
  // Accept setBarcode as a prop
  const videoRef = useRef(null); // Create a ref for the video element
  const navigate = useNavigate(); // Use navigate hook

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (error) {
        console.error("Error accessing webcam: ", error);
      }
    };

    startCamera();

    return () => {
      // Cleanup function to stop the video stream
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, []);

  const handleButtonClick = () => {
    console.log("Button clicked, setting barcode"); // Log to check button click
    setBarcode("809695254925"); // Set the barcode value when the button is clicked
    navigate("/insert_2"); // Navigate to the Insert screen
  };

  return (
    <S.Container>
      <S.Title>바코드를 찍어주세요</S.Title>
      <S.Video ref={videoRef} />
      <S.Btn onClick={handleButtonClick}>바코드를 입력합니다</S.Btn>
    </S.Container>
  );
};

export default Index;
