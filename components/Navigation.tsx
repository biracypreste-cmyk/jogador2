
import React from 'react';
import { Page, UserProfile } from '../types';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  profile: UserProfile | null;
  onProfileClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, profile, onProfileClick }) => {
  const navItems = [
    { id: Page.HOME, label: 'Início', icon: 'fa-house' },
    { id: Page.MOVIES, label: 'Filmes', icon: 'fa-film' },
    { id: Page.SERIES, label: 'Séries', icon: 'fa-tv' },
    { id: Page.LIVE, label: 'Ao Vivo', icon: 'fa-broadcast-tower' },
    { id: Page.MY_LIST, label: 'Minha Lista', icon: 'fa-plus' },
    { id: Page.KIDS, label: 'Kids', icon: 'fa-face-grin-stars' },
    { id: Page.SEARCH, label: 'Buscar', icon: 'fa-magnifying-glass' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1 px-2 rounded-full glass spatial-shadow border border-white/20 animate-fade-in">
      <div className="flex items-center px-4 py-2 mr-2 border-r border-white/10">
        <span className="text-xl font-black tracking-tighter text-[#E50914]">REDX</span>
      </div>
      
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
            currentPage === item.id 
              ? 'bg-white/15 text-white shadow-lg shadow-black/20' 
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          <i className={`fas ${item.icon} text-xs ${currentPage === item.id ? 'text-[#E50914]' : ''}`}></i>
          {item.label}
        </button>
      ))}

      {profile && (
        <button 
          onClick={onProfileClick}
          className="ml-4 w-10 h-10 rounded-full border border-white/20 overflow-hidden hover:scale-105 active:scale-95 transition-transform"
        >
          <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
        </button>
      )}
    </nav>
  );
};

export default Navigation;
