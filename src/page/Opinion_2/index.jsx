import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/logo.svg";
import state from "../../assets/state.svg";

const Index = () => {
  const navigate = useNavigate();

  const onChat = () => {
    navigate(`/chat_2`);
  };

  const UserInfo = [
    { name: "2108 이예흔", content: "민트초코 아이스크림 언제 입고되..." },
    { name: "2310 박현겸", content: "매점부에 리듬게임 넣어주세요" },
    { name: "2303 김동현", content: "채팅 기능 잘 되는 지 체크!" },

    { name: "2315 이지우", content: "바나나우유 팩은 진짜 아닌 것 같은..." },
  ];

  return (
    <S.Container>
      <S.Contain>
        <S.Title>매점의 소리</S.Title>
        <S.Guide>
          타인에 대한 조롱 또는 비방, 비난으로 인해 발생하는 문제에 대한
          <br />
          온전히 본인에게 있습니다.
        </S.Guide>
      </S.Contain>
      <S.ChatList>
        {UserInfo.map((user, index) => (
          <S.Chat key={index} onClick={onChat}>
            <S.Profile src={profile} alt="profile" />
            <div
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <S.Name>{user.name}</S.Name>
              <S.Content>{user.content}</S.Content>
            </div>
            {user.name === "2108 이예흔" && <S.State src={state} alt="state" />}
          </S.Chat>
        ))}
      </S.ChatList>
    </S.Container>
  );
};

export default Index;
