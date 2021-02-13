import { useState } from 'react';
import styled from 'styled-components';
import { filterPosts } from '../util/filterPosts';
import { getCategoryNames } from '../util/getCategoryNames';
import { CategoryPicker } from './CategoryPicker';
import { Post } from './Post';

const PostListContainer = styled.div``;

const Posts = styled.ul`
  display: grid;
  padding-left: 0;
  list-style-type: none;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

const ListItem = styled.li`
  display: contents;
  /** 'display: contents' can be confusing, but it this case, I'm using it because
  the li elements belong to the PostList component - we might want to reuse the
  Post component outside of here and using an li in there would be semantically
  wrong.justify-content
   */
`;

export const PostList = ({ posts, wasError }) => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [numberOfDisplayedPosts, setNumberOfDisplayedPosts] = useState(10);
  const categories = getCategoryNames(posts);
  const filteredPosts = filterPosts(
    posts,
    categoryFilter,
    numberOfDisplayedPosts
  );
  const displayShowMoreButton = numberOfDisplayedPosts < posts.length;

  if (wasError) return <div>Something went wrong!</div>;

  return (
    <PostListContainer>
      <CategoryPicker
        categories={categories}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <Posts>
        {filteredPosts.map((post) => (
          <ListItem key={post.id}>
            {/* use a key so that React can keep track of the list if we sort or filter */}
            <Post {...post} />
          </ListItem>
        ))}
      </Posts>

      {displayShowMoreButton ? (
        <button
          onClick={() => {
            setNumberOfDisplayedPosts(numberOfDisplayedPosts + 5);
          }}
        >
          Show More
        </button>
      ) : null}
    </PostListContainer>
  );
};
