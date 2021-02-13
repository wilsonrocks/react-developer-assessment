import styled from 'styled-components';

const List = styled.ul`
  /** cancel default list styles */
  list-style-type: none;
  padding-left: 0;

  /** make it wrap nicely */
  display: flex;
  flex-wrap: wrap;

  margin-top: auto;

  align-items: baseline;
`;

const Item = styled.li`
  background: darkcyan;
  color: white;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  font-size: 0.75rem;
`;

export const CategoryList = ({ categories }) => {
  return (
    <List>
      {categories.map(({ name, id }) => (
        <Item key={id}>{name}</Item>
      ))}
    </List>
  );
};
