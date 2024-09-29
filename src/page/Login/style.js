import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f49e15;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Contain = styled.div`
  position: absolute;
  top: 4rem;
`;

export const Background = styled.div`
  position: absolute;
  background-color: white;
  width: 80rem;
  height: 100rem;
  border-radius: ${(props) => props.size / 2}%;
  z-index: 0;
  top: 8rem;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Mail = styled.input`
  width: 15rem;
  height: 3rem;
  padding-left: 3rem;
  border: 1px solid #999999;
  border-radius: 8px 8px 0 0;
`;

export const Password = styled.input`
  width: 15rem;
  height: 3rem;
  padding-left: 3rem;
  border: 1px solid #999999;
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

export const Icon = styled.img`
  position: absolute;
  width: 16px;
  height: 18px;
  left: 1.3rem;
`;

export const Text = styled.div`
  font-size: 0.85rem;
  margin-top: 1rem;
  text-align: center;
  font-family: "NanumSquare";
`;

export const Welcome = styled.div`
  font-family: "LOTTERIACHAB";
  font-size: 2.2rem;
  -webkit-text-stroke: 1px black;
  line-height: 2.5rem;
  color: white;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const LogoText = styled.img`
  width: 81px;
  height: 32px;
  margin-left: 0.5rem;
`;

export const Login = styled.button`
  width: 18rem;
  height: 3rem;
  background-color: ${(props) => (props.isFormFilled ? "#F49E15" : "#CCCCCC")};
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  cursor: ${(props) => (props.isFormFilled ? "pointer" : "default")};
  margin-top: 1rem;
  text-align: center;
  display: flex;
  font-family: "NanumSquareR";
  justify-content: center;
  align-items: center;
`;
