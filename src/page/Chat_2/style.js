import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 56px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Icons = styled.div``;

export const Arrow = styled.img`
  position: relative;
  margin-top: 3rem;
  right: 9rem;
  padding-left: 18rem;
`;

export const Plus = styled.img`
  position: relative;
  margin-bottom: 0.15rem;
  right: 9rem;
  padding-left: 20rem;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px; // Width when open
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 650px;
  padding: 1rem;
  margin-top: 0rem; // To avoid overlap with header
  overflow-y: auto; // Enable scrolling
  background-color: white;
  margin-left: 0.5rem; // Light background for chat area
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column; // 변경: 세로 방향으로 정렬
  align-items: flex-start; // Align items to the start
  margin: 5px 0;
`;

export const Message = styled.div`
  position: relative;
  font-family: "NanumSquareR";
  background-color: ${(props) =>
    props.isUser
      ? "#F49E15"
      : "white"}; // Change background color based on sender
  color: ${(props) => (props.isUser ? "white" : "black")};
  border-radius: 18px;
  padding: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  margin: 5px 0;
  max-width: 70%;
  right: ${(props) =>
    props.isUser
      ? "2rem"
      : "0"}; // User's message offset by 2rem from the right
  align-self: ${(props) =>
    props.isUser ? "flex-end" : "flex-start"}; // Align based on sender
`;

export const InputContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 10px;
  background-color: white;
  bottom: 10rem;
`;

export const InputContainerWrapper = styled.div`
  display: flex;
  flex: 0.85; // 추가: 입력 필드와 아이콘을 포함하는 래퍼
  position: relative; // 추가: 아이콘을 절대 위치로 배치하기 위해
`;

export const Input = styled.input`
  flex: 1; // 변경: 입력 필드가 가능한 공간을 차지하도록 설정
  padding: 15px;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  color: #999999;
  background-color: #f1f1f1;
  padding-right: 50px; // 추가: 아이콘 공간을 위해 오른쪽 패딩 추가
`;

export const SendIcon = styled.img`
  width: 28px; // 아이콘 크기 조정
  height: 28px; // 아이콘 크기 조정
  cursor: pointer; // 커서 포인터로 변경
  position: absolute; // 추가: 절대 위치로 설정
  right: 10px; // 추가: 입력 필드 오른쪽에 위치
  top: 50%; // 추가: 수직 중앙 정렬
  transform: translateY(-50%); // 추가: 수직 중앙 정렬
`;

export const ChatPlusIcon = styled.img`
  // 추가: chat_plus 아이콘 스타일
  width: 28px; // 아이콘 크기 조정
  height: 28px; // 아이콘 크기 조정
  // 커서 포인터로 변경
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px; // Space between profile and message
`;

export const ProfilePic = styled.img`
  width: 30px;
  height: 30px;
`;

export const Nickname = styled.div`
  font-family: "NanumSquareB";
  font-size: 14px; // 닉네임을 굵게 표시
  margin-left: 6px; // 닉네임과 프로필 이미지 간의 간격
`;

export const NewChatBtn = styled.button`
  width: 17rem;
  height: 2.3rem;
  background-color: #f49e15;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 16px;
  margin-top: 4rem;
  text-align: center;
  display: flex;
  font-family: "NanumSquareR";
  justify-content: center;
  align-items: center;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 8rem;
  gap: 0.5rem;
`;

export const Box = styled.div`
  width: 360px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-size: 12px;
  font-family: "NanumSquareR";
  padding-left: 1rem;
  flex-grow: 1;
`;

export const ListText = styled.div`
  font-size: 14px;
  font-family: "NanumSquareB";
  padding-left: 1rem;
  flex-grow: 1;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25); // Black with 25% opacity
  z-index: 1; // Ensure it sits below the sidebar but above other content
`;
