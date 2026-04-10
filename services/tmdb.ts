
import { Media } from '../types';

const API_KEY = 'aa1d921feb99069e464f5f713c415ffd';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/original';

export const fetchMovies = async (type: 'popular' | 'top_rated' = 'popular'): Promise<Media[]> => {
  const res = await fetch(`${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=pt-BR`);
  const data = await res.json();
  return Promise.all(data.results.map((item: any) => transformTMDBItem(item, 'movie')));
};

export const fetchSeries = async (type: 'popular' | 'top_rated' = 'popular'): Promise<Media[]> => {
  const res = await fetch(`${BASE_URL}/tv/${type}?api_key=${API_KEY}&language=pt-BR`);
  const data = await res.json();
  return Promise.all(data.results.map((item: any) => transformTMDBItem(item, 'series')));
};

export const getTrailer = async (id: number, type: 'movie' | 'series'): Promise<string | undefined> => {
  const res = await fetch(`${BASE_URL}/${type === 'movie' ? 'movie' : 'tv'}/${id}/videos?api_key=${API_KEY}&language=pt-BR`);
  const data = await res.json();
  const trailer = data.results?.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube');
  return trailer?.key;
};

const transformTMDBItem = async (item: any, type: 'movie' | 'series'): Promise<Media> => {
  return {
    id: `${type}-${item.id}`,
    tmdb_id: item.id,
    title: item.title || item.name,
    type,
    description: item.overview,
    rating: item.adult ? '18+' : '14+',
    year: new Date(item.release_date || item.first_air_date).getFullYear(),
    genre: [], // Simplified for this demo
    backdrop: `${IMAGE_BASE}${item.backdrop_path}`,
    poster: `${IMAGE_BASE}${item.poster_path}`,
    stars: [],
    duration: type === 'movie' ? '2h 15m' : undefined,
    seasons: type === 'series' ? 1 : undefined
  };
};
