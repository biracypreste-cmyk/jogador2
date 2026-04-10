
import React, { useState, useEffect } from 'react';
import { Media } from '../types';
import { getTrailer } from '../services/tmdb';

interface TrailerBannerProps {
  media: Media;
  onSelect: (media: Media) => void;
  title: string;
}

const TrailerBanner: React.FC<TrailerBannerProps> = ({ media, onSelect, title }) => {
  const [trailerKey, setTrailerKey] = useState<string | undefined>();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const loadTrailer = async () => {
      const key = await getTrailer(media.tmdb_id, media.type);
      setTrailerKey(key);
      if (key) {
        const timer = setTimeout(() => setShowVideo(true), 3000);
        return () => clearTimeout(timer);
      }
    };
    loadTrailer();
  }, [media]);

  return (
    <section className="relative w-full h-[650px] flex items-center px-12 group overflow-hidden rounded-[40px] spatial-shadow border border-white/10 glass">
      {/* Background Image */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
        <img 
          src={media.backdrop} 
          alt={media.title} 
          className="w-full h-full object-cover brightness-[0.6] scale-105 group-hover:scale-110 transition-transform duration-[10s]"
        />
      </div>

      {/* Video Trailer */}
      {showVideo && trailerKey && (
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full scale-150 pointer-events-none"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-transparent to-transparent opacity-90 z-10" />

      <div className="relative z-20 max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/20 text-xs font-bold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
          {title}
        </div>
        <h1 className="text-7xl font-black mb-6 drop-shadow-2xl leading-tight">{media.title}</h1>
        <p className="text-xl text-white/70 mb-8 line-clamp-3 leading-relaxed max-w-xl">
          {media.description}
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => onSelect(media)}
            className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-3 hover:bg-[#E50914] hover:text-white transition-all scale-100 active:scale-95 shadow-xl hover:red-glow"
          >
            <i className="fas fa-play"></i> Assistir Agora
          </button>
          <button 
            onClick={() => onSelect(media)}
            className="px-8 py-4 rounded-full glass border border-white/20 text-white font-bold flex items-center gap-3 hover:bg-white/10 transition-all scale-100 active:scale-95 shadow-xl"
          >
            <i className="fas fa-circle-info"></i> Mais Informações
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrailerBanner;
