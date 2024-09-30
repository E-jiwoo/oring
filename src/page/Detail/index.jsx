import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import detail_arrow from "../../assets/detailarrow.svg";
import detail_fix from "../../assets/detailfix.svg";
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
  const menuItems = [
    { name: "매일_피크닛_사과맛", img: picnic_red, price: 700, num: 50 },
    { name: "웅진_가야농장_알로에", img: alloa, price: 1300, num: 38 },
    { name: "롯데_월드콘_쿠앤크맛", img: worldcon_blue, price: 1400, num: 13 },
    { name: "롯데_구구콘_오리지널", img: con, price: 1400, num: 7 },
    { name: "빙그레_슈퍼콘_초코맛", img: supercon_red, price: 1400, num: 15 },
    { name: "롯데_월드콘_바닐라맛", img: worldcon_red, price: 1400, num: 10 },
    { name: "사조_고기포자만두", img: meat, price: 2000, num: 20 },
    { name: "사조_김치포자만두", img: kimchi, price: 2000, num: 22 },
  ];
  const onFix = () => {
    navigate("./");
  };

  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <S.Container>
        <S.Icon>
          <S.Arrow src={detail_arrow} alt="arrow" onClick={onBack} />
        </S.Icon>
        <S.ItemImg src={picnic_green} alt="picnic_green" />
        <S.DetailBox>
          <S.Contain>
            <S.ItemName>매일_피크닉_청포도맛</S.ItemName>
            <S.ItemPrice>700원</S.ItemPrice>
            <S.Inventory>제품 제고</S.Inventory>
            <S.ItemInventory>
              <S.Num>48개 </S.Num>&nbsp;
              <S.Date>· 2024.07.09 기준</S.Date>
            </S.ItemInventory>
          </S.Contain>
        </S.DetailBox>
        <S.RecommendBox>
          <S.RecommedText>비슷한 다른 메뉴를 추천해드릴게요! 🥰</S.RecommedText>
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
        </S.RecommendBox>
      </S.Container>
    </>
  );
};

export default index;
