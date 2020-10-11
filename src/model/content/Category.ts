import { Article } from './Article';

export class Category {
  name?: string;
  description?: string;
  featuredImage?: string;
  slug?: string;
  addedAt?: Date;
  subCategories?: Category[];
  articles?: Article[];
}

export class CategoriesMessage {
  content?: Category[];
  message?: string;
}

export class CategoryMessage {
  content?: Category;
  message?: string;
}
