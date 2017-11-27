import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 25px;
  width: 30px;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: white;
`;
const Menu = () => (
  <Wrapper>
    <Line />
    <Line />
    <Line />
  </Wrapper>
);

export default Menu;
