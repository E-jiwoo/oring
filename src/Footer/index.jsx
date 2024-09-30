import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import * as S from "./style"; // Import your styled components or CSS
import home_off from "../assets/footer_home.svg"; // Example icon
import item_off from "../assets/footer_item.svg"; // Example icon
import opinion_on from "../assets/footer_opinion.svg"; // Example icon
import mypage_off from "../assets/footer_mypage.svg"; // Example icon
import home_on from "../assets/home_on.svg"; // Example icon
import item_on from "../assets/items_on.svg"; // Example icon
import opinion_off from "../assets/opinion_off.svg"; // Example icon
import mypage_on from "../assets/mypage_on.svg"; // Example icon

const Footer = () => {
  const location = useLocation(); // Get the current location

  // Define the paths where the footer should be displayed
  const footerPaths = [
    "/home",
    "/items",
    "/chat",
    "/chat_2",
    "/opinion",
    "/opinion_2",
    "/mypage",
    "/detail",
    "/chat_2",
  ];

  // Check if the current path is one of the specified paths
  const showFooter = footerPaths.includes(location.pathname);

  // Render the footer only if showFooter is true
  return showFooter ? (
    <S.Footer>
      <S.FooterContent>
        <Link to="/home">
          <S.Box>
            <S.Icon
              src={location.pathname === "/home" ? home_on : home_off}
              alt="home"
            />
            <S.Text>홈</S.Text>
          </S.Box>
        </Link>
        <Link to={location.pathname === "/detail" ? "/detail" : "/items"}>
          <S.Box>
            <S.Icon
              src={
                location.pathname === "/items" ||
                location.pathname === "/detail"
                  ? item_on
                  : item_off
              }
              alt="item"
            />
            <S.Text>상품</S.Text>
          </S.Box>
        </Link>
        <Link to={location.pathname === "/chat" ? "/chat" : "/opinion"}>
          <S.Box>
            <S.Icon
              src={
                location.pathname === "/opinion" ||
                location.pathname === "/chat"
                  ? opinion_on
                  : opinion_off
              }
              alt="opinion"
            />
            <S.Text>의견</S.Text>
          </S.Box>
        </Link>
        <Link to="/mypage">
          <S.Box>
            <S.Icon
              src={location.pathname === "/mypage" ? mypage_on : mypage_off}
              alt="mypage"
            />
            <S.Text>마이페이지</S.Text>
          </S.Box>
        </Link>
      </S.FooterContent>
    </S.Footer>
  ) : null; // Return null if the footer should not be shown
};

export default Footer;
