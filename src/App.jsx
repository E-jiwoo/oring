import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./Header/index";
import Login from "./page/Login/index";
import Splash from "./page/Splash/index";
import Home from "./page/Home/index";
import Alarm from "./page/Alarm/index";
import Charge from "./page/Charge/index";
import Items from "./page/Items/index";
import Detail from "./page/Detail/index";
import Mypage from "./page/Mypage/index";
import Bar from "./NavigationBar/index";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          {showSplash ? (
            <Route path="/" element={<Splash />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/alarm" element={<Alarm />}></Route>
          <Route path="/charge" element={<Charge />}></Route>
          <Route path="/items" element={<Items />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
    white-space: nowrap;
  }
`;

export default App;
