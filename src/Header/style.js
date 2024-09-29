import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 56px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

export const Logo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
`;
export const Logo2 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  margin-right: 13.5rem;
`;

export const Alarm = styled.img`
  position: relative;
  bottom: 0.3rem;
  padding-left: 12.5rem;
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

export const Arrow = styled.img`
  position: relative;
  margin-top: 3rem;
  right: 9rem;
`;
export const PlusBtn = styled.div`
  padding-left: 9rem;
`;

export const Btn = styled.button`
  padding: 8px 10px 8px 10px;
  background-color: #f49e15;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-family: "NanumSquareL";
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
