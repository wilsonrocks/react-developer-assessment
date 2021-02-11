export const CategoryList = ({ categories }) => {
  return (
    <ul>
      {categories.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};
