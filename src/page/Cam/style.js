import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Title = styled.div`
  position: relative;
  font-size: 24px;
  font-family: "NanumSquareEB";
  text-align: left;
  padding-top: 10rem;
`;

export const Video = styled.video`
  width: 100%; // Adjust width as needed
  height: auto; // Maintain aspect ratio
  margin-top: 2rem; // Space between input and video
  border: 1px solid #ccc; // Optional border for the video
`;

export const Btn = styled.button`
  width: 220px;
  height: 45px;
  background-color: #f49e15;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  font-family: "NanumSquareR";
  margin-top: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;
