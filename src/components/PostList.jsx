import { useState } from 'react';
import styled from 'styled-components';
import { filterPosts } from '../util/filterPosts';
import { getCategoryNames } from '../util/getCategoryNames';
import { Button } from './Button';
import { CategoryPicker } from './CategoryPicker';
import { Post } from './Post';
import { Spinner } from './Spinner';

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PostList = ({ posts, status }) => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [numberOfDisplayedPosts, setNumberOfDisplayedPosts] = useState(10);
  const categories = getCategoryNames(posts);
  const filteredPosts = filterPosts(
    posts,
    categoryFilter,
    numberOfDisplayedPosts
  );
  const displayShowMoreButton = numberOfDisplayedPosts < posts.length;

  switch (status) {
    case 'NOT_REQUESTED':
    case 'WAITING':
      return <Spinner>Waiting to retrieve posts...</Spinner>;

    case 'COMPLETED':
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
            <ButtonContainer>
              <Button
                onClick={() => {
                  setNumberOfDisplayedPosts(numberOfDisplayedPosts + 5);
                }}
              >
                Show More
              </Button>
            </ButtonContainer>
          ) : null}
        </PostListContainer>
      );

    case 'ERROR':
    default:
      return (
        <p>
          Sorry! Something went wrong with fetching the posts. Please try
          refreshing, or contact NetConstruct.
        </p>
      );
  }
};
