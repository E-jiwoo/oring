// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import * as S from "./style"; // Import your styled components or CSS
import home from "../assets/footer_home.svg"; // Example icon
import item from "../assets/footer_item.svg"; // Example icon
import opinion from "../assets/footer_opinion.svg"; // Example icon
import mypage from "../assets/footer_mypage.svg"; // Example icon

const index = () => {
  return (
    <S.Footer>
      <S.FooterContent>
        <Link to="/home">
          <S.Box>
            <S.Icon src={home} alt="hgome" />
            <S.Text>홈</S.Text>
          </S.Box>
        </Link>
        <Link to="/items">
          <S.Box>
            <S.Icon src={item} alt="item" />
            <S.Text>상품</S.Text>
          </S.Box>
        </Link>
        <Link to="/opinion">
          <S.Box>
            <S.Icon src={opinion} alt="opinion" />
            <S.Text>의견</S.Text>
          </S.Box>
        </Link>
        <Link to="/mypage">
          <S.Box>
            <S.Icon src={mypage} alt="mypage" />
            <S.Text>마이페이지</S.Text>
          </S.Box>
        </Link>
      </S.FooterContent>
    </S.Footer>
  );
};

export default index;
