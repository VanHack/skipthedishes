import styled from "styled-components";

const applyColors = (index, colors, isWhite) => {
  if (isWhite) return "color: white";
  if (index === 0) return "color: black";
  if (index === 1) return `color: ${colors.primary}`;
  if (index === 2) return `color: ${colors.primaryLight}`;
};

const Cell = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  ${({ index, theme: { colors }, isWhite }) =>
    applyColors(index, colors, isWhite)};
`;

export default Cell;
