
import React from 'react';
import { Media } from '../types';
import MediaCard from '../components/MediaCard';

interface KidsProps {
  movies: Media[];
  onSelectMedia: (media: Media) => void;
}

const Kids: React.FC<KidsProps> = ({ movies, onSelectMedia }) => {
  return (
    <div className="w-full space-y-12 pb-20 animate-fade-in">
      <header className="text-center px-12 pt-12">
        <div className="inline-block glass p-6 rounded-[40px] border-white/20 spatial-shadow mb-8">
          <h1 className="text-6xl font-black bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            UNIVERSO KIDS
          </h1>
        </div>
      </header>

      <section className="px-12">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-200">Hora de Aventura!</h2>
        <div className="flex gap-12 overflow-x-auto pb-12 px-6 -mx-6 scrollbar-hide">
          {movies.slice(5, 15).map(m => (
            <div key={m.id} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400/20 to-pink-500/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <MediaCard media={m} onClick={() => onSelectMedia(m)} size="lg" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-12">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow-200">Personagens Favoritos</h2>
        <div className="flex justify-center gap-12">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="group cursor-pointer">
              <div className="w-40 h-40 rounded-full glass border-2 border-white/20 p-2 spatial-shadow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <img 
                  src={`https://picsum.photos/seed/kidscartoon${i}/200/200`} 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="mt-4 text-center font-bold text-white/60 group-hover:text-white uppercase tracking-tighter">Herói {i}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Kids;
