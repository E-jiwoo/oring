import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  position: relative;
  margin-top: 3rem;
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

export const UserName = styled.div`
  position: relative;
  color: black;
  font-size: 24px;
  font-weight: 700;
  margin-top: 3rem;
  right: 5.7rem;
`;

export const UserAmountBox = styled.div`
  position: relative;
  width: 342px;
  height: 80px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  margin-top: 1.5rem;
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

export const RecommedText1 = styled.div`
  position: relative;
  font-size: 0.9rem;
  margin-top: 3rem;
  text-align: left;
  right: 3rem;
  font-family: "NanumSquareEB";
`;
export const RecommedText2 = styled.div`
  position: relative;
  font-size: 0.9rem;
  margin-top: 1rem;
  text-align: left;
  right: 5.5rem;
  font-family: "NanumSquareEB";
`;

export const MenuList = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  white-space: nowrap;
  padding: 1rem 0;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuBox = styled.div`
  position: relative;
  width: 120px;
  height: 160px;
  border-radius: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const MenuImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

export const MenuItem = styled.div`
  position: relative;
  font-size: 0.7rem;
  font-family: "NanumSquareEB";
  text-align: left;
  margin-top: 0.3rem;
  left: 1rem;
  width: 100%;
`;

export const MenuPrice = styled.div`
  position: relative;
  font-size: 0.6rem;
  font-family: "NanumSquareL";
  text-align: left;
  margin-top: 0.3rem;
  left: 1rem;
  width: 100%;
`;
