import React from "react";

import Container from "../../atoms/Container";
import Block from "../../atoms/Block";
import Header from "../../organisms/Header";
import GraphCard from "../../organisms/GraphCard";
import TableCard from "../../organisms/TableCard";
import RecommendCard from "../../organisms/RecommendCard";

// props will be passed from DashboardPageContainer
const DashboardPage = ({
  recommends,
  dailySales,
  hourlySales,
  bestsellers
}) => {
  return (
    <div>
      <Header />
      <Container>
        <Block sm="50%">
          <RecommendCard heading="Insights" data={recommends} />
        </Block>
        <Block sm="50%">
          <GraphCard heading="Customers this week" data={dailySales} />
        </Block>
        <Block sm="50%">
          <TableCard heading="Sales by hour" data={hourlySales} />
        </Block>
        <Block sm="50%">
          <TableCard heading="Bestseller by hour" data={bestsellers} />
        </Block>
      </Container>
    </div>
  );
};

export default DashboardPage;
