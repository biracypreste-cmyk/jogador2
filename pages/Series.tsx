
import React from 'react';
import { Media } from '../types';
import MediaCard from '../components/MediaCard';
import TrailerBanner from '../components/TrailerBanner';

interface SeriesProps {
  series: Media[];
  onSelectMedia: (media: Media) => void;
}

const Series: React.FC<SeriesProps> = ({ series, onSelectMedia }) => {
  const featured = series[1] || series[0];

  return (
    <div className="w-full space-y-12 pb-20 animate-fade-in">
      {featured && (
        <TrailerBanner 
          media={featured} 
          onSelect={onSelectMedia} 
          title="Nova Temporada" 
        />
      )}

      <header className="flex flex-col md:flex-row justify-between items-center gap-8 px-12">
        <h1 className="text-5xl font-black">Séries</h1>
        
        <div className="flex items-center gap-4 glass p-2 px-4 rounded-full border-white/20">
          <button className="px-5 py-2 rounded-full bg-white/10 text-white font-bold text-sm">Tendências</button>
          <button className="px-5 py-2 rounded-full text-white/40 font-bold text-sm hover:text-white transition-colors">Recentes</button>
          <button className="px-5 py-2 rounded-full text-white/40 font-bold text-sm hover:text-white transition-colors">Ação</button>
          <button className="px-5 py-2 rounded-full text-white/40 font-bold text-sm hover:text-white transition-colors">Sci-Fi</button>
        </div>
      </header>

      <div className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12">
        {series.map(s => (
          <MediaCard key={s.id} media={s} onClick={() => onSelectMedia(s)} size="md" />
        ))}
      </div>
    </div>
  );
};

export default Series;
