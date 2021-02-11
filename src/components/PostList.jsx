import { Post } from './Post';

export const PostList = ({ posts, wasError }) => {
  if (wasError) return <div>Something went wrong!</div>;
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* use a key so that React can keep track of the list if we sort or filter */}
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
