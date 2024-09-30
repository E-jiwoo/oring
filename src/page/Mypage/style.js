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

export const Profile = styled.img`
  position: relative;
  width: 110px;
  height: 110px;
`;

export const UserName = styled.div`
  position: relative;
  font-size: 24px;
  font-family: "NanumSquareEB";
  padding-top: 1rem;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-top: 4rem;
  padding-bottom: 8rem;
  gap: 0.5rem;
`;

export const Box = styled.div`
  width: 360px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ListIcon = styled.img``;

export const ListText = styled.div`
  font-size: 12px;
  font-family: "NanumSquareR";
  padding-left: 1rem;
  flex-grow: 1;
`;

export const Arrow = styled.img`
  padding-right: 2rem;
`;
