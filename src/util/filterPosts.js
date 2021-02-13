export const filterPosts = (posts, categoryName) => {
  if (categoryName === 'All') return posts;

  const filteredPosts = posts.filter((post) =>
    post.categories.some((category) => category.name === categoryName)
  );

  return filteredPosts;
};
