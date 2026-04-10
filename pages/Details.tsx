
import React from 'react';
import { Media } from '../types';
import GlassPanel from '../components/GlassPanel';

interface DetailsProps {
  media: Media;
  onPlay: () => void;
  onBack: () => void;
}

const Details: React.FC<DetailsProps> = ({ media, onPlay, onBack }) => {
  return (
    <div className="relative w-full min-h-[120vh] -mt-24 pb-24 animate-fade-in overflow-x-hidden">
      {/* Immersive Backdrop */}
      <div className="fixed inset-0 -z-20">
        <img src={media.backdrop} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/60 to-transparent" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-12 pt-40">
        <button 
          onClick={onBack}
          className="mb-8 w-12 h-12 flex items-center justify-center glass rounded-full hover:bg-white/20 transition-all border border-white/20"
        >
          <i className="fas fa-arrow-left"></i>
        </button>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Floating Poster */}
          <div className="flex-shrink-0 animate-float">
            <div className="w-80 rounded-[32px] overflow-hidden spatial-shadow border border-white/20 transition-transform duration-500 hover:scale-105">
              <img src={media.poster} alt={media.title} className="w-full object-cover" />
            </div>
          </div>

          {/* Info Side */}
          <div className="flex-1 space-y-8">
            <h1 className="text-8xl font-black tracking-tighter drop-shadow-2xl">{media.title}</h1>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="glass px-4 py-2 rounded-full border-white/20 text-sm font-bold flex items-center gap-2">
                <i className="fas fa-star text-yellow-400"></i> TMDB
              </div>
              <div className="glass px-4 py-2 rounded-full border-white/20 text-sm font-medium">
                {media.year}
              </div>
              <div className="glass px-4 py-2 rounded-full border-white/20 text-sm font-medium">
                {media.rating}
              </div>
              <div className="glass px-4 py-2 rounded-full border-white/20 text-sm font-medium">
                {media.duration || `${media.seasons} Temporadas`}
              </div>
            </div>

            <GlassPanel className="bg-white/5 border-white/10 p-10 max-w-4xl">
              <p className="text-xl text-white/80 leading-relaxed italic mb-8">
                "{media.description || 'Sem descrição disponível.'}"
              </p>
              
              <div className="flex gap-6">
                <button 
                  onClick={onPlay}
                  className="px-12 py-5 rounded-full bg-[#E50914] text-white font-bold text-xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all red-glow-strong"
                >
                  <i className="fas fa-play"></i> Reproduzir
                </button>
                <button className="w-16 h-16 rounded-full glass border border-white/20 text-white flex items-center justify-center text-xl hover:bg-white/20 transition-all">
                  <i className="fas fa-plus"></i>
                </button>
                <button className="w-16 h-16 rounded-full glass border border-white/20 text-white flex items-center justify-center text-xl hover:bg-white/20 transition-all">
                  <i className="fas fa-share-nodes"></i>
                </button>
              </div>
            </GlassPanel>

            {/* Cast Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Elenco Principal</h3>
              <div className="flex gap-8">
                {(media.stars.length > 0 ? media.stars : ['Ator 1', 'Ator 2', 'Ator 3']).map((star, idx) => (
                  <div key={idx} className="group flex flex-col items-center gap-3">
                    <div className="w-24 h-24 rounded-full glass border border-white/10 overflow-hidden spatial-shadow group-hover:scale-110 group-hover:red-glow transition-all duration-500">
                      <img src={`https://picsum.photos/seed/${star}/200/200`} alt={star} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">{star}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#E50914]/20 via-transparent to-transparent pointer-events-none -z-10" />
    </div>
  );
};

export default Details;
