
import React from 'react';
import { Media } from '../types';
import MediaCard from '../components/MediaCard';
import TrailerBanner from '../components/TrailerBanner';

interface HomeProps {
  movies: Media[];
  series: Media[];
  onSelectMedia: (media: Media) => void;
}

const Home: React.FC<HomeProps> = ({ movies, series, onSelectMedia }) => {
  const featured = movies[0] || series[0];

  if (!featured) return null;

  return (
    <div className="w-full space-y-20 pb-20 animate-fade-in">
      {/* Hero Section with Trailer */}
      <TrailerBanner 
        media={featured} 
        onSelect={onSelectMedia} 
        title="Destaque de Hoje" 
      />

      {/* Row: Filmes em Alta */}
      <section className="px-12">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
          Filmes em Alta
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-12 px-4 -mx-4 scrollbar-hide">
          {movies.map(m => (
            <MediaCard key={m.id} media={m} onClick={() => onSelectMedia(m)} />
          ))}
        </div>
      </section>

      {/* Row: Séries Populares */}
      <section className="px-12">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
          Séries Populares
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-12 px-4 -mx-4 scrollbar-hide">
          {series.map(s => (
            <MediaCard key={s.id} media={s} onClick={() => onSelectMedia(s)} />
          ))}
        </div>
      </section>

      {/* Row: Continuar Assistindo */}
      <section className="px-12">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
          Continuar Assistindo
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-12 px-4 -mx-4 scrollbar-hide">
          {series.slice().reverse().map(m => (
            <div key={m.id} className="relative">
              <MediaCard media={m} onClick={() => onSelectMedia(m)} />
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#E50914] w-[60%]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
