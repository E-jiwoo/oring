import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import arrow from "../../assets/arrow_gray.svg";

const index = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/home`);
  };

  const user = [
    {
      id: "2210 이예흔",
      code: 2023049,
      amount: 1000,
      chargetime: "2024-07-20 13:48:24",
    },
  ];

  const payItems = [
    {
      day: "7월 9일",
      item: "샌드위치",
      time: "23:15",
      price: -1000,
    },
    {
      day: "7월 9일",
      item: "샌드위치",
      time: "11:25",
      price: -1000,
    },
    {
      day: "7월 8일",
      item: "샌드위치",
      time: "15:25",
      price: -1000,
    },
    {
      day: "7월 8일",
      item: "샌드위치",
      time: "20:15",
      price: -1000,
    },
  ];

  return (
    <>
      <S.Container>
        <S.Arrow src={arrow} alt="arrow" onClick={onClick} />
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
                  <S.PayText>{pay.price}원</S.PayText>
                  <S.Amount>{user[0].amount.toLocaleString()}원</S.Amount>
                </S.AmountContain>
              </S.PayContain>
            </S.PayBox>
          ))}
          <S.DayBox>
            <S.Day>7월 8일</S.Day>
          </S.DayBox>
          {payItems.map((pay, index) => (
            <S.PayBox key={index}>
              <S.PayContain>
                <S.PayTitle>{pay.item}</S.PayTitle>
                <S.PayTime>{pay.time}</S.PayTime>
                <S.AmountContain>
                  <S.PayText>{pay.price}원</S.PayText>
                  <S.Amount>{user[0].amount.toLocaleString()}원</S.Amount>
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
