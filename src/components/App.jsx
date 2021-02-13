import { useGetPostsFromApi } from '../api';
import { PostList } from './PostList';
import styled from 'styled-components';
import './base.css';

const AppContainer = styled.main`
  max-width: 1200px;
  padding: 1rem;
  margin: auto;
`;

function App() {
  const [posts, status] = useGetPostsFromApi();
  return (
    <AppContainer>
      <h1>Robot Articles by NetConstruct</h1>
      <PostList posts={posts} status={status} />
    </AppContainer>
  );
}

export default App;
