import { React, useState } from "react";
import * as S from "./style";

const index = () => {
  const user = [
    {
      id: "2210 이예흔",
      code: 2023049,
      amount: 5400,
      chargetime: "2024-07-09 12:33:24",
    },
  ];

  const payItems = [
    {
      day: "7월 9일",
      item: "초코에몽",
      time: "18:55",
      price: "-1,300",
      amount: 5400,
    },
    {
      day: "7월 9일",
      item: "초코에몽",
      time: "12:35",
      price: "-1300",
      amount: 6700,
    },
    {
      day: "7월 9일",
      item: "온라인 충전",
      time: "12:33",
      price: "5,000",
      amount: 8000,
    },
  ];
  const payItems2 = [
    {
      day: "7월 8일",
      item: "오미자차",
      time: "18:15",
      price: "-1,700",
      amount: 3000,
    },
    {
      day: "7월 8일",
      item: "초코에몽",
      time: "12:40",
      price: "-1,300",
      amount: 4700,
    },
  ];

  return (
    <>
      <S.Container>
        <S.UserAmountBox>
          <S.UserInfo>
            {user[0].id} &nbsp;
            {user[0].code} &nbsp;
          </S.UserInfo>
          <S.UserAmount>{user[0].amount.toLocaleString()}원</S.UserAmount>
          <S.ChargeTime> {user[0].chargetime}</S.ChargeTime>
          <S.ChargeBtn>충전하기</S.ChargeBtn>
        </S.UserAmountBox>
        <S.HistoryBox>
          <S.DayBox>
            <S.Day>7월 9일</S.Day>
          </S.DayBox>
          {payItems.map((pay, index) => (
            <S.PayBox key={index}>
              <S.PayContain>
                <S.PayTitle>{pay.item}</S.PayTitle>
                <S.PayTime>{pay.time}</S.PayTime>
                <S.AmountContain>
                  <S.PayText
                    style={{
                      color: pay.price.includes("-") ? "#999999" : "#F49E15",
                    }}
                  >
                    {pay.price}원
                  </S.PayText>
                  <S.Amount>{pay.amount.toLocaleString()}원</S.Amount>
                </S.AmountContain>
              </S.PayContain>
            </S.PayBox>
          ))}

          <S.DayBox>
            <S.Day>7월 8일</S.Day>
          </S.DayBox>
          {payItems2.map((pay, index) => (
            <S.PayBox key={index}>
              <S.PayContain>
                <S.PayTitle>{pay.item}</S.PayTitle>
                <S.PayTime>{pay.time}</S.PayTime>
                <S.AmountContain>
                  <S.PayText>{pay.price}원</S.PayText>
                  <S.Amount>{pay.amount.toLocaleString()}원</S.Amount>
                </S.AmountContain>
              </S.PayContain>
            </S.PayBox>
          ))}
        </S.HistoryBox>
      </S.Container>
    </>
  );
};

export default index;
