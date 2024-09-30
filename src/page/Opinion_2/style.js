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

export const Contain = styled.div`
  padding-right: 3.5rem;
`;

export const Title = styled.div`
  position: relative;
  font-size: 24px;
  font-family: "NanumSquareEB";
`;

export const Guide = styled.div`
  position: relative;
  text-align: left;
  font-size: 10px;
  line-height: 16px;
  color: #999999;
  font-family: "NanumSquareL";
  padding-top: 0.5rem;
`;

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 13rem; // Ensure the chat list takes full width: ;
`;

export const Chat = styled.div`
  width: 100%; // Use full width for the chat item
  height: 74px;
  display: flex; // Use flexbox for horizontal alignment
  align-items: center; // Center items vertically
  padding: 0 1rem; // Add some padding for spacing
  box-sizing: border-box;
  padding-left: 2rem; // Include padding in width calculation
`;

export const Profile = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 15px; // Add space between profile and text
`;

export const Name = styled.div`
  text-align: left;
  font-size: 12px;
  color: black;
  font-family: "NanumSquareB";
`;

export const Content = styled.div`
  text-align: left;
  font-size: 12px;
  color: black;
  font-family: "NanumSquareL";
  padding-top: 0.4rem;
`;

export const State = styled.img`
  padding-right: 1rem;
`;
