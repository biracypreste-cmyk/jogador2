
import React from 'react';
import { Media } from '../types';
import MediaCard from '../components/MediaCard';

interface MyListProps {
  onSelectMedia: (media: Media) => void;
}

const MyList: React.FC<MyListProps> = ({ onSelectMedia }) => {
  // Mock empty list as it's not saved to TMDB
  const myList: Media[] = [];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12 pb-20 animate-fade-in px-12">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-black">Minha Lista</h1>
        <div className="text-white/40 text-sm font-medium uppercase tracking-[0.2em]">{myList.length} Itens Salvos</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {myList.map(m => (
          <div key={m.id} className="relative group">
            <MediaCard media={m} onClick={() => onSelectMedia(m)} size="md" />
            <button className="absolute -top-4 -right-4 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20 hover:text-red-500">
              <i className="fas fa-trash-can text-sm"></i>
            </button>
          </div>
        ))}
        
        {/* Placeholder para encorajar navegação */}
        <div className="w-64 h-96 rounded-[24px] glass border-dashed border-white/20 flex flex-col items-center justify-center gap-4 text-white/20 hover:text-white/40 hover:bg-white/5 transition-all cursor-pointer">
          <i className="fas fa-plus-circle text-4xl"></i>
          <span className="font-bold text-sm uppercase tracking-widest">Descobrir Mais</span>
        </div>
      </div>
    </div>
  );
};

export default MyList;
