
import React from 'react';
import { Media } from '../types';
import MediaCard from '../components/MediaCard';
import TrailerBanner from '../components/TrailerBanner';

interface MoviesProps {
  movies: Media[];
  onSelectMedia: (media: Media) => void;
}

const Movies: React.FC<MoviesProps> = ({ movies, onSelectMedia }) => {
  const featured = movies[1] || movies[0];

  return (
    <div className="w-full space-y-12 pb-20 animate-fade-in">
      {featured && (
        <TrailerBanner 
          media={featured} 
          onSelect={onSelectMedia} 
          title="Grande Estréia" 
        />
      )}

      {/* Filter Panel */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-8 px-12">
        <h1 className="text-5xl font-black">Filmes</h1>
        
        <div className="flex items-center gap-4 glass p-2 px-4 rounded-full border-white/20">
          <button className="px-5 py-2 rounded-full bg-white/10 text-white font-bold text-sm">Todos os Gêneros</button>
          <button className="px-5 py-2 rounded-full text-white/40 font-bold text-sm hover:text-white transition-colors">Populares</button>
          <button className="px-5 py-2 rounded-full text-white/40 font-bold text-sm hover:text-white transition-colors">Novidades</button>
          <div className="h-6 w-px bg-white/20" />
          <div className="relative">
            <i className="fas fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm"></i>
            <input 
              type="text" 
              placeholder="Buscar filmes..." 
              className="bg-transparent border-none outline-none pl-10 py-2 text-sm text-white w-48 placeholder:text-white/20"
            />
          </div>
        </div>
      </header>

      <div className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12">
        {movies.map(m => (
          <MediaCard key={m.id} media={m} onClick={() => onSelectMedia(m)} size="md" />
        ))}
      </div>
    </div>
  );
};

export default Movies;
