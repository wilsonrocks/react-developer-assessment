import styled from 'styled-components';
import { formatDate } from '../util/dateFormatter';
import { Author } from './Author';
import { CategoryList } from './CategoryList';

const PostContainer = styled.article`
  border: 2px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #fff;
`;

const Title = styled.h3``;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Summary = styled.p``;

export const Post = ({ title, publishDate, author, summary, categories }) => {
  return (
    <PostContainer>
      <Information>
        <Author {...author} />
        <span>{formatDate(publishDate)}</span>
      </Information>
      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      <CategoryList categories={categories} />
    </PostContainer>
  );
};
