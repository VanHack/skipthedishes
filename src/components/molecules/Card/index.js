import React from "react";
import styled from "styled-components";

import Heading from "../../atoms/Heading";
import Spinner from "../../atoms/Spinner";

const Wrapper = styled.div`
  height: 100%;
  padding: 15px;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;
const Card = ({ heading, children, isLoading }) => (
  <Wrapper>
    <Heading level="1">{heading}</Heading>
    {isLoading ? <Spinner /> : children}
  </Wrapper>
);

export default Card;
