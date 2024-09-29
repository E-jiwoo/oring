import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 5rem;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  gap: 8px;
  padding-top: 1.5rem;
`;

export const CategoryBox = styled.div`
  padding: 4px 16px 4px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cccccc;
  color: white;
  border-radius: 12px;
`;

export const Category = styled.div`
  font-family: "NanumSquareL";
  font-size: 12px;
`;

export const MenuList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;
export const MenuBox = styled.div`
  position: relative;
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  background-color: white;
  border-top: 1px solid #cccccc;
`;

export const MenuImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  margin-left: 4.5rem;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15rem;
`;

export const MenuItem = styled.div`
  position: relative;
  font-size: 0.7rem;
  font-family: "NanumSquareEB";
  text-align: left;
  margin-top: 0.3rem;
`;

export const MenuPrice = styled.div`
  position: relative;
  font-size: 0.6rem;
  font-family: "NanumSquareL";
  text-align: left;
  margin-top: 0.3rem;
`;
