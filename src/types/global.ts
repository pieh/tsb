export interface Image {
  url: string;
}

export interface Post {
  title: string;
  slug: string;
  smallIntro: string;
  thumbnailImage?: Image;
  mainImage: Image;
  category: string;
  date: Date;
}
