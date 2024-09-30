import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.div`
  padding-top: 1.5rem;
  display: flex;
  gap: 1px;
  padding-bottom: 0.3rem;
`;

export const Head = styled.div`
  width: 171px;
  height: 40px;
  background-color: #f49e15;
  font-size: 16px;
  color: white;
  font-family: "NanumSquareB";
  display: flex; // Use flexbox
  align-items: center; // Center vertically
  justify-content: center; // Center horizontally
  border-top-left-radius: 8px; // Top-left corner radius
  border-top-right-radius: 8px; // Top-right corner radius
`;
export const Head2 = styled.div`
  width: 171px;
  height: 40px;
  background-color: white;
  font-size: 16px;
  color: #cccccc;
  font-family: "NanumSquareB";
  display: flex; // Use flexbox
  align-items: center; // Center vertically
  justify-content: center; // Center horizontally
  border-top-left-radius: 8px; // Top-left corner radius
  border-top-right-radius: 8px; // Top-right corner radius
`;

export const Title = styled.div`
  font-size: 24px;
  font-family: "NanumSquareEB";
  text-align: left;
  padding-right: 13rem;
`;

export const Contain = styled.div`
  text-align: left;
`;

export const Text = styled.div`
  font-size: 16px;
  font-family: "NanumSquareB";
  text-align: left;
  padding-right: 13rem;
  padding-top: 1rem;
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center; // Center icons vertically with the input
`;

export const Input = styled.input`
  width: 310px;
  height: 16px;
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
  margin-top: 8px;
`;

export const AmountInput = styled.input`
  width: 200px;
  height: 16px;
  border-radius: 4px;
  padding: 8px 16px 8px 16px;
  margin-top: 8px;
`;

export const Icon = styled.img`
  width: 47px; // Adjust icon size as needed
  height: 32px; // Adjust icon size as needed
  cursor: pointer; // Change cursor to pointer on hover
  margin-left: 8px;
  margin-top: 5px; // Space between input and icons
`;

export const SaveBtn = styled.button`
  width: 345px;
  height: 40px;
  background-color: #f49e15;
  border: 2px #f49e15 solid;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  margin-top: 40px;
  text-align: center;
  display: flex;
  font-family: "NanumSquareR";
  justify-content: center;
  align-items: center;
`;

export const OtherBtn = styled.button`
  width: 345px;
  height: 40px;
  background-color: white;
  border: 2px #f49e15 solid;
  border-radius: 0.5rem;
  color: Black;
  font-size: 1rem;
  margin-top: 10px;
  text-align: center;
  display: flex;
  font-family: "NanumSquareR";
  justify-content: center;
  align-items: center;
`;
export const Color = styled.div`
  color: #ff0000;
`;
