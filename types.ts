
export interface Media {
  id: string;
  tmdb_id: number;
  title: string;
  type: 'movie' | 'series';
  description: string;
  rating: string;
  year: number;
  duration?: string;
  seasons?: number;
  genre: string[];
  backdrop: string;
  poster: string;
  logoUrl?: string;
  stars: string[];
  trailerKey?: string;
}

export interface Channel {
  nome: string;
  logo: string;
  genero: string;
  url: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  isKids: boolean;
}

export enum Page {
  LOGIN = 'LOGIN',
  PROFILES = 'PROFILES',
  HOME = 'HOME',
  MOVIES = 'MOVIES',
  SERIES = 'SERIES',
  LIVE = 'LIVE',
  MY_LIST = 'MY_LIST',
  KIDS = 'KIDS',
  DETAILS = 'DETAILS',
  PLAYER = 'PLAYER',
  SEARCH = 'SEARCH'
}
