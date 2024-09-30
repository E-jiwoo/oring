import React, { useState } from "react"; // Import useState
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

const Index = ({ barcode }) => {
  // Accept barcode as a prop
  const navigate = useNavigate();
  const [showItem, setShowItem] = useState(false); // State to control visibility of S.Item
  const [productName, setProductName] = useState(""); // State for product name
  const [barcodeInput, setBarcodeInput] = useState(barcode || ""); // State for barcode input
  const [quantity, setQuantity] = useState(""); // State for quantity

  const onInsert2 = () => {
    navigate(`/insert_2`);
  };

  const handleSave = () => {
    setShowItem(true); // Show the item when the button is clicked
    // Clear the input fields
    setProductName("");
    setBarcodeInput("");
    setQuantity("");
  };

  return (
    <>
      <S.Container>
        <S.Title>재고 추가</S.Title>
        <S.Header>
          <S.Head2 onClick={onInsert2}>기준 제고 입고</S.Head2>
          <S.Head>변동 제고 입고</S.Head>
        </S.Header>
        <S.Contain>
          <S.Text>상품명</S.Text>
          <S.Input
            placeholder="입고할 상품명을 입력해주세요."
            value={productName} // Bind the input value to state
            onChange={(e) => setProductName(e.target.value)} // Update state on change
          />
          <S.Text>바코드 입력</S.Text>
          <S.Input
            placeholder="상품의 바코드를 입력해주세요."
            value={barcodeInput} // Bind the input value to state
            onChange={(e) => setBarcodeInput(e.target.value)} // Update state on change
          />
          <S.Text>상품 개수</S.Text>
          <S.InputContainer>
            <S.AmountInput
              placeholder="재고 개수를 입력해주세요."
              value={quantity} // Bind the input value to state
              onChange={(e) => setQuantity(e.target.value)} // Update state on change
            />
            <S.Icon src={up} alt="Increase" />
            <S.Icon src={down} alt="Decrease" />
          </S.InputContainer>
          <S.SaveBtn onClick={handleSave}>저장하기</S.SaveBtn>
          <S.OtherBtn>다른 상품 추가하기</S.OtherBtn>
          {showItem && (
            <S.Item>
              현재 입력된 상품: <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;동아_샤프펜_샤프심_지우개
            </S.Item>
          )}
        </S.Contain>
      </S.Container>
    </>
  );
};

export default Index;
