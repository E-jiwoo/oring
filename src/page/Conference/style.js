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

export const Logo = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const Title = styled.div`
  position: relative;
  font-size: 22px;
  font-family: "NanumSquareEB";
  padding-top: 2rem;
`;
export const Text = styled.div`
  position: relative;
  text-align: center;
  font-size: 16px;
  font-family: "NanumSquareR";
  padding-top: 0.5rem;
`;

export const PdfBtn = styled.button`
  width: 146px;
  height: 40px;
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
