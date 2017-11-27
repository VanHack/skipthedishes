// Spinner taken from https://codepen.io/irvingv8/pen/GOBXZY

import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.4);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const shrink = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.6);
  }
  100% {
    transform: scale(1);
  }
`;

const Spinner = styled.div`
  margin: 100px auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  &:after,
  &:before {
    content: "";
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    border: 4px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.primary};
    border-bottom-color: ${({ theme }) => theme.colors.primary};
    top: -4px;
    left: -4px;
    animation: ${spin} 2s linear infinite;
  }
  &::before {
    position: absolute;
    top: 17px;
    left: 17px;
    height: 35px;
    width: 35px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    animation: ${shrink} 3s ease infinite;
  }
`;

export default Spinner;
