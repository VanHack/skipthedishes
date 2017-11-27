import styled from "styled-components";

const ListItem = styled.li`
  margin: 15px;
  border-radius: 3px;
  padding: 15px;
  min-height: 30px;
  font-size: 20px;
  background: ${({ theme: { colors } }) => colors.primary};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export default ListItem;
