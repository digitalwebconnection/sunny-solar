export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Solar Basics' | 'Batteries' | 'Buying Solar' | 'Technical' | 'Existing Solar';
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  content: string[];
  keyTakeaways: string[];
}
