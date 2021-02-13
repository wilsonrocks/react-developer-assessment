import styled from 'styled-components';

const CategoryPickerContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Label = styled.label`
  line-height: 2rem;
`;

const Select = styled.select`
  height: 2rem;
`;

export const CategoryPicker = ({
  setCategoryFilter,
  categoryFilter,
  categories,
}) => (
  <CategoryPickerContainer>
    <Label for="categoryPicker">Category:</Label>
    <Select
      id="categoryPicker"
      onChange={(event) => {
        setCategoryFilter(event.target.value);
      }}
      value={categoryFilter}
    >
      <optgroup>
        <option>All</option>
      </optgroup>
      <optgroup label="Categories">
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </optgroup>
    </Select>
  </CategoryPickerContainer>
);
