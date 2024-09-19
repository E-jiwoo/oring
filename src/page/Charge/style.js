import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #fffbf4;
`;

export const Arrow = styled.img`
  position: relative;
  margin-top: 3rem;
  right: 9rem;
`;

export const UserAmountBox = styled.div`
  width: 100vw;
  height: 300px;
  margin-top: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserInfo = styled.div`
  position: relative;
  font-size: 16px;
  font-family: "NanumSquareB";
  margin-top: 1.5rem;
  right: 3.7rem;
`;
export const UserAmount = styled.div`
  position: relative;
  font-size: 32px;
  font-family: "NanumSquareEB";
  margin-top: 1rem;
  right: 5.6rem;
`;
export const ChargeTime = styled.div`
  position: relative;
  font-size: 12px;
  font-family: "NanumSquareB";
  color: #cccccc;
  margin-top: 0.7rem;
  right: 5.3rem;
`;
export const ChargeBtn = styled.button`
  width: 18.5rem;
  height: 2.5rem;
  background-color: #f49e15;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-family: "NanumSquareB";
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HistoryBox = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 1rem;
  background-color: white;
`;

export const DayBox = styled.div`
  position: relative;
  width: 100vw;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Day = styled.div`
  position: relative;
  font-size: 12px;
  font-family: "NanumSquareB";
  right: 7.5rem;
`;

export const PayBox = styled.div`
  position: relative;
  width: 100vw;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const PayContain = styled.div`
  display: flex;
`;

export const PayTitle = styled.div`
  position: relative;
  color: black;
  font-size: 12px;
  right: 3rem;
  width: auto;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  font-family: "NanumSquareB";
`;

export const PayTime = styled.div`
  position: relative;
  font-size: 12px;
  right: 9rem;
  font-family: "NanumSquareB";
`;

export const AmountContain = styled.div`
  position: fixed;
  display: flex;
  left: 15.5rem;
`;

export const PayText = styled.div`
  position: relative;
  color: #999999;
  font-size: 12px;
  left: 2.5rem;
  font-family: "NanumSquareB";
`;

export const Amount = styled.div`
  color: #cccccc;
  font-size: 10px;
  margin-top: 1rem;
  font-family: "NanumSquareB";
`;
