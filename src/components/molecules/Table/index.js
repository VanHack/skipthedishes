import React from "react";
import styled from "styled-components";

import Row from "../../atoms/TableRow";
import Cell from "../../atoms/TableCell";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
`;

const renderCells = (row, isWhite) => {
  return row.map((cell, index) => (
    <Cell key={index} index={index} isWhite={isWhite}>
      {cell}
    </Cell>
  ));
};

const renderRows = (rows, highlight) => {
  return rows.map((row, index) => {
    const isOdd = index % 2 === 0;
    return (
      <Row key={index} isOdd={isOdd} highlight={index === highlight}>
        {renderCells(row, index === highlight)}
      </Row>
    );
  });
};

const renderHeader = headers => <Row header>{renderCells(headers, true)}</Row>;

const Table = ({ data }) => (
  <Wrapper>
    {renderHeader(data.headers)}
    {renderRows(data.rows, data.max)}
  </Wrapper>
);

export default Table;
