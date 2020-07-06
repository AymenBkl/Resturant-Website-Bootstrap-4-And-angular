import { Comment } from './comment';
export class Food {
  id : string;
  name : string;
  category : string;
  description : string;
  price : string;
  mainImage : string;
  images : string[];
  rate : string;
  comments : Comment[];
}
