
export interface Book {
  id: string;
  title: string;
  titleAmharic: string;
  coverUrl: string;
  synopsis: string;
  fullDescription: string;
  price: string;
  year: string;
}

export interface Article {
  id: string;
  title: string;
  titleAmharic: string;
  publication: string;
  date: string;
  excerpt: string;
  category: 'Politics' | 'Culture' | 'Philosophy' | 'Economy';
  url: string;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  BOOKS = 'books',
  ARTICLES = 'articles',
  CONTACT = 'contact'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
