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
  const onHome = () => {
    navigate(`/home`);
  };
  const onInsert = () => {
    navigate(`/insert`);
  };
  return (
    <>
      {location.pathname === "/home" ||
      location.pathname === "/mypage" ||
      location.pathname === "/opinion" ||
      location.pathname === "/conference" ||
      location.pathname === "/opinion_2" ||
      location.pathname === "/insert" ||
      location.pathname === "/insert_2" ||
      location.pathname === "/cam" ||
      location.pathname === "/conference_2" ? (
        <S.Header>
          <S.Logo>
            <S.LogoImg src={logo} alt="logo" onClick={onHome} />
            <S.LogoText src={oringE} alt="oringE" onClick={onHome} />
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
          <S.Logo2>
            <S.LogoImg src={logo} alt="logo" />
            <S.LogoText src={oringE} alt="oringE" />
            <S.PlusBtn onClick={onInsert}>
              <S.Btn>재고 추가</S.Btn>
            </S.PlusBtn>
          </S.Logo2>
        </S.Header>
      ) : null}
    </>
  );
};

export default Header;
