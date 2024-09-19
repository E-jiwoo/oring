import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div`
  position: absolute;
  top: 5rem;
  left: 2rem;
`;

export const LogoImg = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
  bottom: 0.2rem;
  right: 0.2rem;
`;

export const LogoText = styled.img`
  position: relative;
  width: 81px;
  height: 32px;
`;

export const UserName = styled.div`
  position: relative;
  color: "black";
  font-size: 24px;
  font-weight: 700;
  top: 10rem;
  right: 5rem;
`;

export const UserAmountBox = styled.div`
  position: absolute;
  width: 342px;
  height: 80px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  top: 15rem;
`;

export const AmountText = styled.div`
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: left;
  padding-left: 1.7rem;
  font-family: "NanumSquareR";
`;
export const Arrow = styled.img`
  position: relative;
  width: 8px;
  height: 12px;
  top: 0.05rem;
  padding-left: 1rem;
`;
export const Amount = styled.div`
  font-size: 1.3rem;
  margin-top: 0.6rem;
  text-align: left;
  padding-left: 1.7rem;
  font-family: "NanumSquareEB";
`;
