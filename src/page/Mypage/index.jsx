import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import setting from "../../assets/setting.svg";
import conference from "../../assets/conference.svg";
import refund from "../../assets/refund.svg";
import help from "../../assets/help.svg";
import arrow from "../../assets/arrow2.svg";

const index = () => {
  const navigate = useNavigate();
  const onConference = () => {
    navigate(`/conference`);
  };
  return (
    <>
      <S.Container>
        <S.Profile src={logo} alt="logo" />
        <S.UserName>이예흔</S.UserName>
        <S.ListBox>
          <S.Box>
            <S.ListIcon src={setting} alt="setting" />
            <S.ListText>정보 수정</S.ListText>
            <S.Arrow src={arrow} alt="arrow" />
          </S.Box>
          <S.Box onClick={onConference}>
            <S.ListIcon src={conference} alt="conference" />
            <S.ListText>총회</S.ListText>
            <S.Arrow src={arrow} alt="arrow" />
          </S.Box>
          <S.Box>
            <S.ListIcon src={refund} alt="refund" />
            <S.ListText>환불 / 반품 목록</S.ListText>
            <S.Arrow src={arrow} alt="arrow" />
          </S.Box>
          <S.Box>
            <S.ListIcon src={help} alt="help" />
            <S.ListText>고객 센터</S.ListText>
            <S.Arrow src={arrow} alt="arrow" />
          </S.Box>
        </S.ListBox>
      </S.Container>
    </>
  );
};

export default index;
