
import React from 'react';
import { Media } from '../types';

interface MediaCardProps {
  media: Media;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const MediaCard: React.FC<MediaCardProps> = ({ media, onClick, size = 'md' }) => {
  const widthClass = size === 'sm' ? 'w-48' : size === 'md' ? 'w-64' : 'w-80';
  const heightClass = size === 'sm' ? 'h-72' : size === 'md' ? 'h-96' : 'h-[480px]';

  return (
    <div 
      onClick={onClick}
      className={`group relative flex-shrink-0 cursor-pointer perspective-1000 ${widthClass} ${heightClass} transition-all duration-500 ease-out`}
    >
      <div className="relative w-full h-full rounded-[24px] overflow-hidden border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-4 group-hover:rotate-x-2 group-hover:red-glow group-hover:z-50">
        <img 
          src={media.poster} 
          alt={media.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Details on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{media.title}</h3>
          <div className="flex items-center gap-2 text-xs text-white/80">
            <span className="px-1.5 py-0.5 rounded border border-white/30">{media.rating}</span>
            <span>{media.year}</span>
            <span>{media.duration || `${media.seasons} Seasons`}</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 bg-white text-black py-2 rounded-full text-xs font-bold hover:bg-[#E50914] hover:text-white transition-colors">
              <i className="fas fa-play mr-2"></i> Play
            </button>
            <button className="w-10 h-10 flex items-center justify-center glass rounded-full hover:bg-white/20 transition-colors">
              <i className="fas fa-plus text-xs"></i>
            </button>
          </div>
        </div>

        {/* Highlight Ring */}
        <div className="absolute inset-0 border-2 border-[#E50914]/0 group-hover:border-[#E50914]/50 rounded-[24px] pointer-events-none transition-all duration-500" />
      </div>
      
      {/* Dynamic Shadow */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default MediaCard;
