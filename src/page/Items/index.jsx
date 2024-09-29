import React, { useState } from "react";
import * as S from "./style";
import picnic_red from "../../assets/items/picnic_red.jpg";
import picnic_green from "../../assets/items/picnic_green.jpg";
import meat from "../../assets/items/meat.jpg";
import kimchi from "../../assets/items/kimchi.jpg";
import worldcon_red from "../../assets/items/worldcon_red.png";
import worldcon_blue from "../../assets/items/worldcon_blue.png";
import alloa from "../../assets/items/alloa.jpg";
import con from "../../assets/items/99con.jpg";
import supercon_red from "../../assets/items/supercon_red.jpg";

const Index = () => {
  const menuItems = ["전체", "과자", "음료", "아이스크림", "생필품"];
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const Items = [
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

  return (
    <S.Container>
      <S.CategoryList>
        {menuItems.map((item, index) => (
          <S.CategoryBox
            key={index}
            onClick={() => setSelectedCategory(item)}
            style={{
              backgroundColor:
                selectedCategory === item ? "#F49E15" : "#CCCCCC",
            }}
          >
            <S.Category>{item}</S.Category>
          </S.CategoryBox>
        ))}
      </S.CategoryList>
      <S.MenuList>
        {Items.map((item, index) => (
          <S.MenuBox key={index}>
            <S.MenuImg src={item.img} alt={item.name} />
            <S.MenuContent>
              <S.MenuItem>{item.name}</S.MenuItem>
              <S.MenuPrice>
                가격 : {item.price.toLocaleString()}원 | 수량 : {item.num}개
              </S.MenuPrice>
            </S.MenuContent>
          </S.MenuBox>
        ))}
      </S.MenuList>
    </S.Container>
  );
};

export default Index;
