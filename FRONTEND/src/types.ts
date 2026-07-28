export type Language = 'EN' | 'HI' | 'GU';

export type BackgroundMode = 'plan' | 'blueprint' | 'minimal';

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  tag: Record<Language, string>;
}

export interface ProjectData {
  studio: string;
  architects: string[];
  location: Record<Language, string>;
  area: string;
  year: string;
  category: Record<Language, string>;
  features: Record<Language, string[]>;
}

export interface GalleryItem {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  tag: Record<Language, string>;
  imageUrl: string;
  spec: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  location: Record<Language, string> | string;
  category: Record<Language, string> | string;
  year: string;
  area: string;
  imageUrl: string;
  description: Record<Language, string> | string;
}
