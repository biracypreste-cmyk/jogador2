
import React, { useState, useEffect } from 'react';
import { Media } from '../types';

interface PlayerProps {
  media: Media;
  onClose: () => void;
}

const Player: React.FC<PlayerProps> = ({ media, onClose }) => {
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(35);
  
  useEffect(() => {
    let timeout: number;
    const handleMouseMove = () => {
      setShowControls(true);
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => setShowControls(false), 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden cursor-none">
      <img src={media.backdrop} alt="" className="w-full h-full object-cover scale-105 brightness-[0.8]" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

      {/* Top Controls */}
      <div className={`absolute top-0 inset-x-0 p-12 flex justify-between items-start transition-opacity duration-700 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col gap-2">
          <span className="text-white/40 uppercase tracking-[0.3em] font-bold text-xs">Assistindo Agora</span>
          <h2 className="text-4xl font-black tracking-tight">{media.title}</h2>
          <span className="text-sm text-white/60">S1:E4 • O Cerco • 24:12 restantes</span>
        </div>
        <button 
          onClick={onClose}
          className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center text-2xl hover:bg-white/20 transition-all pointer-events-auto"
        >
          <i className="fas fa-xmark"></i>
        </button>
      </div>

      {/* Center Playback Hint */}
      {showControls && (
        <div className="flex gap-12 items-center pointer-events-auto">
          <button className="w-20 h-20 rounded-full glass border border-white/20 flex items-center justify-center text-2xl hover:bg-white/10 transition-all">
            <i className="fas fa-backward-step"></i>
          </button>
          <button className="w-32 h-32 rounded-full glass border border-white/30 flex items-center justify-center text-4xl hover:scale-110 active:scale-95 transition-all bg-white/10 red-glow">
            <i className="fas fa-pause text-[#E50914]"></i>
          </button>
          <button className="w-20 h-20 rounded-full glass border border-white/20 flex items-center justify-center text-2xl hover:bg-white/10 transition-all">
            <i className="fas fa-forward-step"></i>
          </button>
        </div>
      )}

      {/* Bottom Controls Panel */}
      <div className={`absolute bottom-12 inset-x-12 transition-all duration-700 ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass p-8 rounded-[32px] border border-white/10 pointer-events-auto">
          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-white/10 rounded-full mb-8 cursor-pointer group">
            <div 
              className="absolute left-0 inset-y-0 bg-[#E50914] rounded-full red-glow shadow-[0_0_15px_rgba(229,9,20,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-8 items-center">
              <button className="text-xl text-white/60 hover:text-white transition-colors"><i className="fas fa-volume-high"></i></button>
              <button className="text-xl text-white/60 hover:text-white transition-colors"><i className="fas fa-closed-captioning"></i></button>
              <button className="text-xl text-white/60 hover:text-white transition-colors"><i className="fas fa-gear"></i></button>
            </div>

            <div className="flex gap-8 items-center font-bold text-white/60">
              <span>00:42:15</span>
              <span className="text-white/20">|</span>
              <span>01:12:34</span>
            </div>

            <div className="flex gap-8 items-center">
              <button className="text-xl text-white/60 hover:text-white transition-colors"><i className="fas fa-list"></i> Episódios</button>
              <button className="text-xl text-white/60 hover:text-white transition-colors"><i className="fas fa-expand"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
