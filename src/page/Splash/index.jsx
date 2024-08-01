import React from "react";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import oring from "../../assets/oring.svg";

const index = () => {
  return (
    <>
      <S.Container>
        <S.Contain>
          <S.Logo src={logo} alt="logo" />
          <S.Oring src={oring} alt="oring" />
        </S.Contain>
      </S.Container>
    </>
  );
};

export default index;
