import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style.js";
import oringE from "../assets/oringE.svg";
import logo from "../assets/logo.svg";
import alarm from "../assets/alarm.svg";
import arrow from "../assets/arrow_gray.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onAlarm = () => {
    navigate(`/alarm`);
  };
  const onBack = () => {
    navigate(-1);
  };
  return (
    <>
      {location.pathname === "/home" ||
      location.pathname === "/mypage" ||
      location.pathname === "/opinion" ? (
        <S.Header>
          <S.Logo>
            <S.LogoImg src={logo} alt="logo" />
            <S.LogoText src={oringE} alt="oringE" />
            <S.Alarm src={alarm} alt="alarm" onClick={onAlarm} />
          </S.Logo>
        </S.Header>
      ) : location.pathname === "/alarm" ||
        location.pathname === "/charge" ||
        location.pathname === "/account" ? (
        <S.Header>
          <S.Arrow src={arrow} alt="arrow" onClick={onBack} />
        </S.Header>
      ) : location.pathname == "/items" ? (
        <S.Header>
          <S.Logo>
            <S.LogoImg src={logo} alt="logo" />
            <S.LogoText src={oringE} alt="oringE" />
            <S.PlusBtn>
              <S.Btn>재고 추가</S.Btn>
            </S.PlusBtn>
          </S.Logo>
        </S.Header>
      ) : null}
    </>
  );
};

export default Header;
