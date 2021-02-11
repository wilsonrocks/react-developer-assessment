import { useGetPostsFromApi } from '../api';
import { Posts } from './Posts';

function App() {
  const [posts, wasError] = useGetPostsFromApi();

  return (
    <div>
      <Posts posts={posts} wasError={wasError} />
    </div>
  );
}

export default App;
