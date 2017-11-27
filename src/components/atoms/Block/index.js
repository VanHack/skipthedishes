import React from "react";
import styled from "styled-components";

const applyMediaQuery = (val, query) => {
  if (val) {
    return `
    @media (min-width: ${query}) {
      width: ${val};
    }
    `;
  }
};

const Wrapper = styled.div`
  width: ${({ xs }) => (xs ? xs : "100%")};
  padding: 15px;

  ${({ sm, theme }) => applyMediaQuery(sm, theme.breakpoints.sm)};
  ${({ md, theme }) => applyMediaQuery(md, theme.breakpoints.md)};
  ${({ lg, theme }) => applyMediaQuery(lg, theme.breakpoints.lg)};
`;

const Block = props => <Wrapper {...props}>{props.children}</Wrapper>;

export default Block;
