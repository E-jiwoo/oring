import React from "react";
import * as S from "./style";
import logo from "../../assets/happyface.svg";

const index = () => {
  return (
    <>
      <S.Container>
        <S.Logo src={logo} alt="logo" />
        <S.Title>총회가 준비 중이에요!</S.Title>
        <S.Text>시작 전, 총회 자료집 PDF를 읽어주세요.</S.Text>
        <S.PdfBtn>PDF 읽어보기</S.PdfBtn>
      </S.Container>
    </>
  );
};

export default index;
