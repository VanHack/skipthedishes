import React from "react";
import styled from "styled-components";

import Card from "../../molecules/Card";
import ListItem from "../../atoms/ListItem";

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const renderListItems = items => {
  return items.map((item, index) => (
    <ListItem primary key={index}>
      {item}
    </ListItem>
  ));
};

const RecommendCard = ({ heading, data }) => (
  <Card heading={heading} isLoading={!data.length > 0}>
    <List>{renderListItems(data)}</List>
  </Card>
);

export default RecommendCard;
