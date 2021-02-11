export const filterPosts = (posts, categoryName, numberOfPosts) => {
  if (categoryName === 'All') return truncatePosts(posts, numberOfPosts);
  const filteredPosts = posts.filter((post) =>
    post.categories.some((category) => category.name === categoryName)
  );
  return truncatePosts(filteredPosts, numberOfPosts);
};

const truncatePosts = (posts, numberOfPosts) => {
  return posts.slice(0, numberOfPosts);
};
