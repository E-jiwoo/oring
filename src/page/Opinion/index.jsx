import React from "react";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();

  const onChat = () => {
    navigate(`/chat`);
  };
  return (
    <>
      <S.Container>
        <S.Logo src={logo} alt="logo" />
        <S.Title>매점의 소리를 들려주세요!</S.Title>
        <S.Text>
          매점 이용 중 궁금하거나 불편한 점이 있다면<br></br>
          매점부에게 알려주세요.
        </S.Text>
        <S.Guide>
          타인에 대한 조롱 또는 비방, 비난으로 인해 발생하는 문제에 대한 책임은
          <br></br>
          온전히 본인에게 있습니다.
        </S.Guide>
        <S.ChatBtn onClick={onChat}>채팅하기</S.ChatBtn>
      </S.Container>
    </>
  );
};

export default index;
