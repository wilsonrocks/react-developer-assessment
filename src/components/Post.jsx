import { formatDate } from '../util/dateFormatter';
import { Author } from './Author';
import { CategoryList } from './CategoryList';

export const Post = ({ title, publishDate, author, summary, categories }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{formatDate(publishDate)}</p>
      <Author {...author} />
      <p>{summary}</p>
      <CategoryList categories={categories} />
    </div>
  );
};
