import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import oringE from "../../assets/oringE.svg";
import logo from "../../assets/logo.svg";
const index = () => {
  const navigate = useNavigate();
  const username = "이지우";
  return (
    <>
      <S.Container>
        <S.Logo>
          <S.LogoImg src={logo} alt="logo" />
          <S.LogoText src={oringE} alt="oringE" />
        </S.Logo>
        <S.UserName>
          좋은 아침이에요,
          <br />
          {username}님!
        </S.UserName>
        <S.UserAmountBox></S.UserAmountBox>
      </S.Container>
    </>
  );
};
export default index;
