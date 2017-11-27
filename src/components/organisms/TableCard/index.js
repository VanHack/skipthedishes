import React from "react";
import Card from "../../molecules/Card";
import Table from "../../molecules/Table";

const TableCard = ({ heading, data }) => {
  return (
    <Card heading={heading} isLoading={!data.rows}>
      <Table data={data} />
    </Card>
  );
};

export default TableCard;
