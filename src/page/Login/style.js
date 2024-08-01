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
