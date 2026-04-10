
import React from 'react';
import { UserProfile } from '../types';
import { PROFILES } from '../mockData';

interface ProfilesProps {
  onSelect: (profile: UserProfile) => void;
}

const Profiles: React.FC<ProfilesProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in">
      <h1 className="text-5xl font-bold mb-16 drop-shadow-lg text-center">Quem está assistindo?</h1>
      
      <div className="flex flex-wrap justify-center gap-12 items-center px-8">
        {PROFILES.map((profile) => (
          <div 
            key={profile.id}
            onClick={() => onSelect(profile)}
            className="group flex flex-col items-center gap-6 cursor-pointer"
          >
            <div className="relative w-48 h-48 rounded-full p-1.5 transition-all duration-500 group-hover:scale-110 group-hover:red-glow spatial-shadow">
              <div className="absolute inset-0 rounded-full glass border border-white/20" />
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="relative w-full h-full rounded-full object-cover border-2 border-white/10"
              />
              <div className="absolute inset-0 rounded-full border-2 border-[#E50914]/0 group-hover:border-[#E50914]/50 transition-all duration-500" />
              
              {profile.isKids && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg">
                  <i className="fas fa-star text-white text-xs"></i>
                </div>
              )}
            </div>
            <span className="text-2xl font-medium text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-500">
              {profile.name}
            </span>
          </div>
        ))}

        {/* Adicionar Perfil */}
        <div className="group flex flex-col items-center gap-6 cursor-pointer">
          <div className="w-48 h-48 rounded-full glass flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
            <i className="fas fa-plus text-4xl text-white/20 group-hover:text-white transition-colors"></i>
          </div>
          <span className="text-2xl font-medium text-white/20 group-hover:text-white transition-all duration-500">
            Adicionar
          </span>
        </div>
      </div>
      
      <button className="mt-20 px-10 py-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all tracking-widest text-sm font-bold uppercase">
        Gerenciar Perfis
      </button>
    </div>
  );
};

export default Profiles;
