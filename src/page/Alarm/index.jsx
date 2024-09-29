import { React, useState } from "react";
import * as S from "./style";

const index = () => {
  const menuItems = [
    {
      title: "슈퍼콘_민트초코맛이 품절 직전이에요!",
      text: " 다 팔리기 전에 얼른 가서 사는 건 어때요?",
      time: "방금 전",
    },
    {
      title: "슈퍼콘_초코맛 품절 직전이에요!",
      text: " 다 팔리기 전에 얼른 가서 사는 건 어때요?",
      time: "30분 전",
    },
    {
      title: "30분뒤에 총회가 시작됩니다",
      text: "제 시간에 맞추어 참여 부탁드립니다",
      time: "50분 전",
    },
  ];

  return (
    <>
      <S.Container>
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
