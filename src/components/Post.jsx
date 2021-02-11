import { Author } from './Author';
import { CategoryList } from './CategoryList';

export const Post = ({
  post: { title, publishDate, author, summary, categories },
}) => (
  <div>
    <h3>{title}</h3>
    <p>{publishDate}</p>
    <Author author={author} />
    <p>{summary}</p>
    <CategoryList categories={categories} />
  </div>
);
