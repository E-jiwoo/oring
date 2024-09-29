import styled from "styled-components";

export const Footer = styled.footer`
  position: absolute;
  bottom: 0rem;
  left: 0;
  width: 100%;
  height: 64px; // Adjust height as needed
  background-color: white; // Change to your desired color
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000; // Ensure it stays above other content
`;

export const FooterContent = styled.div`
  display: flex; // Align icons horizontally
  justify-content: space-around; // Space out icons evenly
  width: 100%; // Full width
`;

export const Box = styled.div`
  text-align: center;
`;

export const Icon = styled.img`
  width: 24px; // Adjust icon size
  height: 24px; // Adjust icon size
  cursor: pointer; // Change cursor to pointer on hover
  transition: transform 0.2s; // Add a hover effect

  &:hover {
    transform: scale(1.1); // Scale up on hover
  }
`;

export const Text = styled.div`
  font-family: "NanumSquareR";
  font-size: 12px;
  color: black;
`;
