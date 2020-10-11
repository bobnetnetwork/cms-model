import { Category } from './Category';
import { Tag } from './Tag';
import { User } from '../..';

export class Article {
  title?: string;
  headline?: string;
  content?: string;
  featuredImage?: string;
  author?: User;
  slug?: string;
  addedAt?: Date;
  tags?: Tag[];
  categories?: Category[];
  status?: string;
}

export class ArticlesMessage {
  content?: Article[];
  message?: string;
}

export class ArticleMessage {
  content?: Article;
  message?: string;
  success?: boolean;
}
