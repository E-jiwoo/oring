import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

const Index = () => {
  const navigate = useNavigate();

  const onInsert2 = () => {
    navigate(`/insert_2`);
  };
  return (
    <>
      <S.Container>
        <S.Title>재고 추가</S.Title>
        <S.Header>
          <S.Head2 onClick={onInsert2}>기준 제고 입고</S.Head2>
          <S.Head>변동 제고 입고</S.Head>
        </S.Header>
        <S.Contain>
          <S.Text>상품명</S.Text>
          <S.Input placeholder="입고할 상품명을 입력해주세요."></S.Input>
          <S.Text>바코드 입력</S.Text>
          <S.Input placeholder="터치 시 카메라로 전환됩니다."></S.Input>
          <S.Text>상품 개수</S.Text>
          <S.InputContainer>
            <S.AmountInput placeholder="재고 개수를 입력해주세요."></S.AmountInput>
            <S.Icon src={up} alt="Increase" />
            <S.Icon src={down} alt="Decrease" />
          </S.InputContainer>
          <S.SaveBtn>저장하기</S.SaveBtn>
          <S.OtherBtn>다른 상품 추가하기</S.OtherBtn>
        </S.Contain>
      </S.Container>
    </>
  );
};

export default Index;
