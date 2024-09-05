import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import oringE from "../../assets/oringE.svg";
import logo from "../../assets/logo.svg";
import welcome from "../../assets/welcome.svg";
import mail from "../../assets/mail.svg";
import password_img from "../../assets/password.svg";

const index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = () => {
    navigate(`/home`);
  };

  const isFormFilled = email !== "" && password !== "";

  return (
    <>
      <S.Container>
        <S.Background size={900} />
        <S.Logo>
          <S.LogoImg src={logo} alt="logo" />
          <S.LogoText src={oringE} alt="oringE" />
        </S.Logo>
        <S.Welcome src={welcome} alt="welcome" />
        <S.Text>로그인 후 더 다양한 기능을 누려보세요 :)</S.Text>
        <S.Input>
          <S.InputWrapper>
            <S.Icon src={mail} alt="mail" />
            <S.Mail
              type="text"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Icon src={password_img} alt="password" />
            <S.Password
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.InputWrapper>
        </S.Input>
        <S.Login isFormFilled={isFormFilled} onClick={onClick}>
          로그인
        </S.Login>
      </S.Container>
    </>
  );
};

export default index;
