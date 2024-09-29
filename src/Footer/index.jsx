import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import * as S from "./style"; // Import your styled components or CSS
import home from "../assets/footer_home.svg"; // Example icon
import item from "../assets/footer_item.svg"; // Example icon
import opinion from "../assets/footer_opinion.svg"; // Example icon
import mypage from "../assets/footer_mypage.svg"; // Example icon

const Footer = () => {
  const location = useLocation(); // Get the current location

  // Define the paths where the footer should be displayed
  const footerPaths = ["/home", "/items", "/chat", "/opinion", "/mypage"];

  // Check if the current path is one of the specified paths
  const showFooter = footerPaths.includes(location.pathname);

  // Render the footer only if showFooter is true
  return showFooter ? (
    <S.Footer>
      <S.FooterContent>
        <Link to="/home">
          <S.Box>
            <S.Icon src={home} alt="home" />
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
  ) : null; // Return null if the footer should not be shown
};

export default Footer;
