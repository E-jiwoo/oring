import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import picnicImg from "../../assets/items/picnic_red.jpg";

const index = () => {
  const navigate = useNavigate();
  const username = "이지우";
  const amount = 100;

  const onCharge = () => {
    navigate(`/charge`);
  };

  const menuItems = [
    { name: "피크닉 청포도맛", img: picnicImg, price: 100, num: 10 },
    { name: "감자칩", img: picnicImg, price: 100, num: 10 },
    { name: "콜라", img: picnicImg, price: 100, num: 10 },
    { name: "샌드위치", img: picnicImg, price: 100, num: 10 },
  ];
  return (
    <>
      <S.Container>
        <S.UserName>
          좋은 아침이에요,
          <br />
          {username}님!
        </S.UserName>
        <S.UserAmountBox onClick={onCharge}>
          <S.AmountText>
            현재 사용 가능한 금액
            <S.Arrow src={arrow} alt="arrow" />
          </S.AmountText>
          <S.Amount>{amount.toLocaleString()}원</S.Amount>
        </S.UserAmountBox>
        <S.RecommedText1>
          ‘피크닉 청포도맛’을 즐겨드시는 {username}님!
          <br />
          오늘은 이거 어때요?
        </S.RecommedText1>
        <S.MenuList>
          {menuItems.map((item, index) => (
            <S.MenuBox key={index}>
              <S.MenuImg src={item.img} alt={item.name} />
              <S.MenuItem>{item.name}</S.MenuItem>
              <S.MenuPrice>
                {item.price.toLocaleString()}원 | {item.num} 개
              </S.MenuPrice>
            </S.MenuBox>
          ))}
        </S.MenuList>
        <S.RecommedText2>오늘의 추천 상품이에요 😎</S.RecommedText2>
        <S.MenuList>
          {menuItems.map((item, index) => (
            <S.MenuBox key={index}>
              <S.MenuImg src={item.img} alt={item.name} />
              <S.MenuItem>{item.name}</S.MenuItem>
              <S.MenuPrice>
                {item.price.toLocaleString()}원 | {item.num} 개
              </S.MenuPrice>
            </S.MenuBox>
          ))}
        </S.MenuList>
      </S.Container>
    </>
  );
};
export default index;
