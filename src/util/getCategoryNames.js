export const getCategoryNames = (posts) => {
  const categoryObjects = posts.flatMap((post) => post.categories);
  const categoryNames = categoryObjects.map((category) => category.name);
  const uniqueCategories = [...new Set(categoryNames)];
  return uniqueCategories;
};
