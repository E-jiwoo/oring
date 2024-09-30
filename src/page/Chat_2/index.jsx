import React, { useState, useEffect, useRef } from "react"; // useRef 추가
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import arrow from "../../assets/arrow_gray.svg";
import plus from "../../assets/plus.svg";
import send_off from "../../assets/send_off.svg"; // 추가: send_off 이미지 import
import send_on from "../../assets/send_on.svg"; // 추가: send_on 이미지 import
import chat_plus from "../../assets/chat_plus.svg";
import logo from "../../assets/happyoring.svg"; // 상대방 프로필 이미지 추가

const ChatPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]); // State for chat messages
  const [inputValue, setInputValue] = useState(""); // State for input value
  const sidebarRef = useRef(null); // Create a ref for the sidebar

  const onBack = () => {
    navigate(-1);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const Refresh = () => {
    window.location.reload();
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add the user's message to the messages array
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, isUser: true }, // Include the text and user info
      ]);
      setInputValue("");
    }
  };

  // useEffect를 사용하여 컴포넌트가 마운트될 때 기본 메시지를 설정
  useEffect(() => {
    // 상대방의 기본 메시지 추가
    setMessages([
      {
        isUser: false,
        profilePic: logo, // 상대방 프로필 이미지
        nickname: "2107 이예흔", // 상대방 닉네임
        text: "민트초코 아이스크림 언제 들어오나요?",
      },
    ]);
  }, []);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <>
      <S.Header>
        <S.Icons>
          <S.Arrow src={arrow} alt="arrow" onClick={onBack} />
          <S.Plus src={plus} alt="plus" onClick={toggleSidebar} />
        </S.Icons>
      </S.Header>
      {isOpen && <S.Overlay />} {/* Render the overlay when sidebar is open */}
      {isOpen && (
        <S.Sidebar ref={sidebarRef}>
          <S.NewChatBtn onClick={Refresh}>새 채팅하기</S.NewChatBtn>
          <S.ListBox>
            <S.Text>오늘</S.Text>
            <S.Box>
              <S.ListText>민트초코 아이스크림은 언제 들어오나요?</S.ListText>
            </S.Box>
            <S.Text>어제</S.Text>
            <S.Box>
              <S.ListText>매점 문 언제 열어요?</S.ListText>
            </S.Box>
            <S.Box>
              <S.ListText>민트초코 먹고 싶어요ㅠㅠ</S.ListText>
            </S.Box>
            <S.Box>
              <S.ListText>매점부 들어가고 싶은데 어떻게하면 ...</S.ListText>
            </S.Box>
          </S.ListBox>
        </S.Sidebar>
      )}
      <S.ChatContainer>
        {messages.map((msg, index) => (
          <S.MessageContainer key={index} isUser={msg.isUser}>
            {!msg.isUser && (
              <S.Profile>
                <S.ProfilePic src={msg.profilePic} alt="Profile" />
                <S.Nickname>{msg.nickname}</S.Nickname>
              </S.Profile>
            )}
            <S.Message
              isUser={msg.isUser}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          </S.MessageContainer>
        ))}
      </S.ChatContainer>
      <S.InputContainer>
        <S.ChatPlusIcon
          src={chat_plus}
          alt="chat_plus"
          onClick={toggleSidebar}
        />
        <S.InputContainerWrapper>
          <S.Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="매점부에게 질문을 남겨주세요!"
          />
          <S.SendIcon
            src={inputValue.trim() ? send_on : send_off} // 변경: inputValue에 따라 아이콘 변경
            alt="send"
            onClick={handleSendMessage}
          />
        </S.InputContainerWrapper>
      </S.InputContainer>
    </>
  );
};

export default ChatPage;
