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
