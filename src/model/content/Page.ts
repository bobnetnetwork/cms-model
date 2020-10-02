import { Observable } from 'rxjs';
import { User } from '../..';

export class Page {
  title?: string;
  headline?: string;
  content?: string;
  featuredImage?: string;
  author?: Observable<User>;
  slug?: string;
  addedAt?: Date;
}
