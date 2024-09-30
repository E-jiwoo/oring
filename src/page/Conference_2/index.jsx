import React from "react";
import * as S from "./style";
import logo from "../../assets/happyface.svg";

const index = () => {
  return (
    <>
      <S.Container>
        <S.Box>
          <S.Title>1. 2023년도 종합감사보고 및 승인의 건</S.Title>
          <S.Text>
            투표참여 인원 수 : 18
            <br />
            <br></br>
            찬성 : 10%
            <br />
            반대 : 90%
            <br />
          </S.Text>
          <S.StartBtn>안건 투표 시작</S.StartBtn>
          <S.EndBtn>안건 투표 종료</S.EndBtn>
        </S.Box>
      </S.Container>
    </>
  );
};

export default index;
