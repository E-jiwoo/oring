import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import arrow from "../../assets/arrow_gray.svg";

const index = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/home`);
  };

  const menuItems = [
    {
      title: "{item.name}이 품절 직전이에요!",
      text: " 다 팔리기 전에 얼른 가서 사는 건 어때요?",
      time: "방금 전",
    },
    {
      title: "{item.name}이 품절 직전이에요!",
      text: " 다 팔리기 전에 얼른 가서 사는 건 어때요?",
      time: "30분 전",
    },
  ];

  return (
    <>
      <S.Container>
        <S.Arrow src={arrow} alt="arrow" onClick={onClick} />
        <S.Title>알림</S.Title>
        <S.AlarmList>
          {menuItems.map((alarm, index) => (
            <S.AlarmBox key={index}>
              <S.AlarmContain>
                <S.AlarmTitle>{alarm.title}</S.AlarmTitle>
                <S.AlarmTime>{alarm.time}</S.AlarmTime>
              </S.AlarmContain>
              <S.AlarmText>{alarm.text}</S.AlarmText>
            </S.AlarmBox>
          ))}
        </S.AlarmList>
      </S.Container>
    </>
  );
};

export default index;
