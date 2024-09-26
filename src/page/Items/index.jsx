import React, { useState } from "react";
import * as S from "./style";

const Index = () => {
  const menuItems = ["전체", "과자", "음료", "아이스크림", "생필품"];
  const [selectedCategory, setSelectedCategory] = useState("전체");

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
    </S.Container>
  );
};

export default Index;
