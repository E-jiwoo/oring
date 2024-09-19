import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import oringE from "../../assets/oringE.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";

const index = () => {
  const navigate = useNavigate();
  const username = "이지우";
  const amount = 100;
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
        <S.UserAmountBox>
          <S.AmountText>
            현재 사용 가능한 금액
            <S.Arrow src={arrow} alt="arrow" />
          </S.AmountText>
          <S.Amount>{amount.toLocaleString()}원</S.Amount>
        </S.UserAmountBox>
      </S.Container>
    </>
  );
};
export default index;
