
export interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  imageUrl: string;
  socials: {
    instagram?: string;
    spotify?: string;
    twitter?: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Release {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  releaseDate: string;
  coverUrl: string;
  type: 'album' | 'single' | 'ep';
}

export interface Track {
  id: string;
  title: string;
  artistName: string;
  duration: string;
  audioUrl: string;
  coverUrl: string;
  releaseDate: string;
}

export interface LabelEvent {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
  ticketUrl: string;
}

export type Currency = 'UGX' | 'USD';

export interface StoreItem {
  id: string;
  name: string;
  category: 'beats' | 'songs' | 'merch' | 'gear';
  priceUGX: number;
  priceUSD: number;
  imageUrl: string;
  description: string;
  customizable?: boolean;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: 'studio' | 'event' | 'lifestyle';
}

export interface DistributionFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface User {
  email: string;
  name?: string;
  isLoggedIn: boolean;
}

export interface CartItem extends StoreItem {
  quantity: number;
}
