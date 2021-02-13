import { useGetPostsFromApi } from '../api';
import { PostList } from './PostList';
import styled from 'styled-components';

const AppContainer = styled.main`
  max-width: 1200px;
  padding: 1rem;
  margin: auto;
`;

function App() {
  const [posts, wasError] = useGetPostsFromApi();
  return (
    <AppContainer>
      <h1>Robot Articles by NetConstruct</h1>
      <PostList posts={posts} wasError={wasError} />
    </AppContainer>
  );
}

export default App;
