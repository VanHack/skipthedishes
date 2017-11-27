import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import Menu from "../../atoms/Menu";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 70px;
  padding: 15px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => (
  <Wrapper>
    <InnerWrapper>
      <Logo src="/skip.png" />
      <Menu />
    </InnerWrapper>
  </Wrapper>
);

export default Header;
