import { useGetPostsFromApi } from '../api';
import { PostList } from './PostList';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 100ch;
  padding: 1rem;
  margin: auto;
`;

function App() {
  const [posts, wasError] = useGetPostsFromApi();
  return (
    <AppContainer>
      <hgroup>
        <h1>NetConstruct</h1>
        <h2>Articles by Robots</h2>
      </hgroup>
      <PostList posts={posts} wasError={wasError} />
    </AppContainer>
  );
}

export default App;
