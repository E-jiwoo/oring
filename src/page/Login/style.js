import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f49e15;
  display: flex;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  background-color: white;
  width: 40rem;
  height: 40rem;
  border-radius: ${(props) => props.size / 2}%;
  top: 20%;
`;

export const Input = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 19rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Mail = styled.input`
  display: flex;
  width: 10rem;
  height: 2.4rem;
  padding-left: 4rem;
  padding-right: 2rem;
  border: 1px #999999 solid;
  border-radius: 8px 8px 0 0;
`;

export const Password = styled.input`
  width: 10rem;
  height: 2.4rem;
  padding-left: 4rem;
  padding-right: 2rem;
  border: 1px #999999 solid;
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

export const Icon = styled.img`
  position: absolute;
  width: 16px;
  height: 18px;
  left: 2rem;
`;

export const Text = styled.div`
  position: relative;
  color: "white";
  font-size: 35;
  top: 14rem;
  left: 2.2rem;
`;

export const Welcome = styled.img`
  position: relative;
  width: 183px;
  height: 80px;
  top: 7rem;
  left: 16rem;
`;

export const Logo = styled.div`
  position: absolute;
  top: 4rem;
  left: 7rem;
`;

export const LogoImg = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
  bottom: 0.2rem;
  right: 0.2rem;
`;

export const LogoText = styled.img`
  position: relative;
  width: 81px;
  height: 32px;
`;

export const Login = styled.button`
  position: relative;
  width: 20rem;
  height: 2rem;
  top: 25rem;
  right: 13.7rem;
  color: white;
  background-color: ${(props) => (props.isFormFilled ? "#F49E15" : "#CCCCCC")};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: ${(props) => (props.isFormFilled ? "pointer" : "default")};
  padding: 1rem 6.7rem 2rem 6.7rem;
  display: flex;
  justify-content: center;
`;
