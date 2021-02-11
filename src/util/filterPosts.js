export const filterPosts = (posts, categoryName) => {
  if (categoryName === 'All') return posts;
  return posts.filter((post) =>
    post.categories.some((category) => category.name === categoryName)
  );
};
