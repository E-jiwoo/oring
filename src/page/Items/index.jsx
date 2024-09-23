import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import oringE from "../../assets/oringE.svg";
import logo from "../../assets/logo.svg";

const Index = () => {
  const menuItems = ["전체", "과자", "음료", "아이스크림", "생필품"];

  return (
    <>
      <S.Container>
        <S.CategoryList>
          {menuItems.map((item, index) => (
            <S.CategoryBox key={index}>
              <S.Category>{item}</S.Category>
            </S.CategoryBox>
          ))}
        </S.CategoryList>
      </S.Container>
    </>
  );
};

export default Index;
