export interface Screenshot {
  imageURL: string;
  altText?: string;
}

export interface GalleryItem {
  description: string;
  screenshots: Screenshot[];
}

export interface Project {
  imageURL?: string;
  title: string;
  summary?: string;
  featured?: boolean;
  sections?: { title: string; text: string; items?: string[] }[];
  stack: string;
  description: string;
  link?: string;
  slug: string;
  route: { name: string; params: { slug: string } };
  gallery: GalleryItem[];
}
