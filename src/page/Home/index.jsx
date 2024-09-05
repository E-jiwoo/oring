import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import oringE from "../../assets/oringE.svg";
import logo from "../../assets/logo.svg";
const index = () => {
  const navigate = useNavigate();
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
          {userName} 님!
        </S.UserName>
      </S.Container>
    </>
  );
};
export default index;
