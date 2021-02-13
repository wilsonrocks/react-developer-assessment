export const CategoryPicker = ({
  setCategoryFilter,
  categoryFilter,
  categories,
}) => (
  <label>
    Category:
    <select
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
    </select>
  </label>
);
