import React from "react";
import styled, { css } from "styled-components";

const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`;

const styles = css`
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${({ white, theme }) => (white ? "white" : theme.colors.primary)};
`;

const Heading = styled(
  ({ level, children, reverse, palette, theme, ...props }) =>
    React.createElement(`h${level}`, props, children)
)`
  ${styles};
`;

export default Heading;
