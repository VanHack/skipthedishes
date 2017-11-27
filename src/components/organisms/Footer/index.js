import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px;
  background: ${({ theme }) => theme.colors.primaryDark};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
`;

const Footer = () => <Wrapper>{`Made with by <3 Irving Ventura`}</Wrapper>;

export default Footer;
