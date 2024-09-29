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

export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  left: 20%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
`;

export const Arrow = styled.img`
  position: relative;
  bottom: 0.3rem;
  padding-left: 14.5rem;
`;

export const Fix = styled.img`
  position: relative;
  bottom: 0.3rem;
  padding-left: 17rem;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 330px;
  padding-top: 2rem;
`;

export const DetailBox = styled.div`
  width: 100%;
  height: 420px;
  background-color: white;
`;

export const Contain = styled.div`
  padding-left: 2rem;
`;

export const ItemName = styled.div`
  position: relative;
  font-size: 24px;
  font-family: "NanumSquareEB";
  text-align: left;
  padding-top: 3rem;
`;

export const ItemPrice = styled.div`
  position: relative;
  font-size: 16px;
  font-family: "NanumSquareEB";
  text-align: left;
  color: #999999;
  padding-top: 0.3rem;
`;

export const Inventory = styled.div`
  position: relative;
  font-size: 16px;
  font-family: "NanumSquareEB";
  text-align: left;
  padding-top: 2rem;
`;

export const ItemInventory = styled.div`
  position: relative;
  font-size: 12px;
  font-family: "NanumSquareEB";
  text-align: left;
  display: flex;
  flex-direction: row;
  padding-top: 0.3rem;
`;
export const Num = styled.div`
  color: black;
`;
export const Date = styled.div`
  color: #999999;
`;
export const RecommendBox = styled.div`
  width: 100%;
  height: 469px;
  background-color: white;
`;

export const RecommedText = styled.div`
  position: relative;
  font-size: 0.9rem;
  margin-top: 0rem;
  text-align: left;
  left: 2rem;
  font-family: "NanumSquareEB";
`;

export const MenuList = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  white-space: nowrap;
  padding: 1rem 0;
  width: 100%;
  padding-left: 1.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuBox = styled.div`
  position: relative;
  min-width: 120px;
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
  left: 0.7rem;
  width: 100%;
`;

export const MenuPrice = styled.div`
  position: relative;
  font-size: 0.6rem;
  font-family: "NanumSquareL";
  text-align: left;
  margin-top: 0.3rem;
  left: 0.7rem;
  width: 100%;
`;
