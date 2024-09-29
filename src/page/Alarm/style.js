import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 5rem;
`;

export const Arrow = styled.img`
  position: relative;
  margin-top: 3rem;
  right: 9rem;
`;

export const Title = styled.div`
  position: relative;
  color: black;
  font-size: 24px;
  margin-top: 2rem;
  right: 8rem;
  font-family: "NanumSquareEB";
`;

export const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlarmBox = styled.div`
  position: relative;
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align items to the start (left)
  justify-content: center;
  background-color: white;
  margin-top: 1.5rem;
`;

export const AlarmContain = styled.div`
  display: flex;
`;

export const AlarmTitle = styled.div`
  position: relative;
  color: black;
  font-size: 12px;
  width: auto;
  text-align: left; // Ensure text is left-aligned
  white-space: nowrap;
  overflow: hidden;
  font-family: "NanumSquareB";
  margin-left: 3rem;
`;

export const AlarmText = styled.div`
  position: relative;
  color: black;
  font-size: 10px;
  margin-top: 0.5rem;
  font-family: "NanumSquareL";
  margin-left: 3rem;
  text-align: left; // Ensure text is left-aligned
`;

export const AlarmTime = styled.div`
  position: fixed;
  color: #999999;
  font-size: 12px;
  left: 20rem;
  text-align: right;
  font-family: "NanumSquareB";
`;
