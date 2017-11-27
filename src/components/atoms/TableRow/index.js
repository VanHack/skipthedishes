import styled from "styled-components";

const rowColor = (isOdd, isHeader, isHighlight, theme) => {
  if (isHeader) return theme.colors.primary;
  if (isHighlight) return theme.colors.primaryLight;
  return isOdd ? "white" : "rgba(0,0,0,0.1)";
};

const Row = styled.div`
  flex-shrink: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;

  color: ${({ header, highlight }) =>
    header || highlight ? "white" : "black"};

  background: ${({ isOdd, header, theme, highlight }) =>
    rowColor(isOdd, header, highlight, theme)};

  ${"" /* ${({ header, highlight, theme: { colors } }) =>
    applyColors(header || highlight, colors)}; */} @media (max-width: 600px) {
    & > * {
      &:nth-child(3) {
        display: none;
      }
    }
  }
`;

export default Row;
