import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import picnic_red from "../../assets/items/picnic_red.jpg";
import picnic_green from "../../assets/items/picnic_green.jpg";
import meat from "../../assets/items/meat.jpg";
import kimchi from "../../assets/items/kimchi.jpg";
import worldcon_red from "../../assets/items/worldcon_red.png";
import worldcon_blue from "../../assets/items/worldcon_blue.png";
import alloa from "../../assets/items/alloa.jpg";
import con from "../../assets/items/99con.jpg";
import supercon_red from "../../assets/items/supercon_red.jpg";

const index = () => {
  const navigate = useNavigate();
  const username = "이예흔";
  const amount = 5400;

  const onCharge = () => {
    navigate(`/charge`);
  };

  const menuItems = [
    { name: "매일_피크닛_사과맛", img: picnic_red, price: 700, num: 50 },
    { name: "매일_피크닛_청포도맛", img: picnic_green, price: 700, num: 48 },
    { name: "사조_고기포자만두", img: meat, price: 2000, num: 20 },
    { name: "사조_김치포자만두", img: kimchi, price: 2000, num: 22 },
    { name: "롯데_월드콘_바닐라맛", img: worldcon_red, price: 1400, num: 10 },
    { name: "롯데_월드콘_쿠앤크맛", img: worldcon_blue, price: 1400, num: 13 },
    { name: "웅진_가야농장_알로에", img: alloa, price: 1300, num: 38 },
    { name: "롯데_구구콘_오리지널", img: con, price: 1400, num: 7 },
    { name: "빙그레_슈퍼콘_초코맛", img: supercon_red, price: 1400, num: 15 },
  ];

  const menuItems2 = [
    { name: "웅진_가야농장_알로에", img: alloa, price: 1300, num: 38 },
    { name: "롯데_구구콘_오리지널", img: con, price: 1400, num: 7 },
    { name: "빙그레_슈퍼콘_초코맛", img: supercon_red, price: 1400, num: 15 },
    { name: "사조_김치포자만두", img: kimchi, price: 2000, num: 22 },
    { name: "롯데_월드콘_바닐라맛", img: worldcon_red, price: 1400, num: 10 },
    { name: "롯데_월드콘_쿠앤크맛", img: worldcon_blue, price: 1400, num: 13 },
    { name: "매일_피크닛_사과맛", img: picnic_red, price: 700, num: 50 },
    { name: "매일_피크닛_청포도맛", img: picnic_green, price: 700, num: 48 },
    { name: "사조_고기포자만두", img: meat, price: 2000, num: 20 },
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
          {menuItems2.map((item, index) => (
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
