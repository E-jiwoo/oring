import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import oring from "../../assets/oring.svg";

const index = () => {
  return (
    <>
      <S.Container>
        <S.Contain>
          <S.Logo src={logo} alt="logo" />
          <S.Oring>오링</S.Oring>
        </S.Contain>
      </S.Container>
    </>
  );
};

export default index;
