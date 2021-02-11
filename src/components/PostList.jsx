import { useState } from 'react';
import { filterPosts } from '../util/filterPosts';
import { getCategoryNames } from '../util/getCategoryNames';
import { Post } from './Post';

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
    <div>
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
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            {/* use a key so that React can keep track of the list if we sort or filter */}
            <Post {...post} />
          </li>
        ))}
      </ul>

      {displayShowMoreButton ? (
        <button
          onClick={() => {
            setNumberOfDisplayedPosts(numberOfDisplayedPosts + 5);
          }}
        >
          Show More
        </button>
      ) : null}
    </div>
  );
};
