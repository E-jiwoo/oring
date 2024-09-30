import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 320px;
  height: 350px;
  border: 3px #f49e15 solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const Title = styled.div`
  position: relative;
  font-size: 16px;
  font-family: "NanumSquareEB";
  padding-top: 1rem;
  padding-bottom: 2rem;
`;
export const Text = styled.div`
  position: relative;
  text-align: center;
  line-height: 22px;
  font-size: 16px;
  font-family: "NanumSquareR";
  padding-top: 0.5rem;
`;

export const StartBtn = styled.button`
  width: 250px;
  height: 40px;
  background-color: #f49e15;
  border: 2px #f49e15 solid;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  font-family: "NanumSquareR";
  margin-top: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EndBtn = styled.button`
  width: 250px;
  height: 40px;
  background-color: white;
  color: black;
  border: 2px #f49e15 solid;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: "NanumSquareR";
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
