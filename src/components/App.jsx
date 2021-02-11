import { useGetPostsFromApi } from '../api';
import { PostList } from './PostList';

function App() {
  const [posts, wasError] = useGetPostsFromApi();
  return (
    <div>
      <PostList posts={posts} wasError={wasError} />
    </div>
  );
}

export default App;
