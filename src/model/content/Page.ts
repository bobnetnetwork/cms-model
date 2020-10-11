import { User } from '../..';

export class Page {
  title?: string;
  headline?: string;
  content?: string;
  featuredImage?: string;
  author?: User;
  slug?: string;
  addedAt?: Date;
}
