
import React, { useState, useMemo } from 'react';
import { LIVE_CHANNELS } from '../mockData';
import { Channel } from '../types';
import GlassPanel from '../components/GlassPanel';

const LiveTV: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<Channel>(LIVE_CHANNELS[0]);
  const [activeGenre, setActiveGenre] = useState<string>('Todos');

  const genres = useMemo(() => {
    const g = new Set(LIVE_CHANNELS.map(c => c.genero));
    return ['Todos', ...Array.from(g)];
  }, []);

  const filteredChannels = useMemo(() => {
    if (activeGenre === 'Todos') return LIVE_CHANNELS;
    return LIVE_CHANNELS.filter(c => c.genero === activeGenre);
  }, [activeGenre]);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 animate-fade-in max-w-[1600px] h-[80vh]">
      {/* Sidebar Channels */}
      <div className="w-full lg:w-[450px] flex flex-col gap-6">
        <header className="px-4">
          <h2 className="text-3xl font-black mb-6 tracking-tight">Canais Ao Vivo</h2>
          
          {/* Genre Pills */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {genres.map(genre => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                  activeGenre === genre 
                    ? 'bg-white text-black border-white' 
                    : 'glass text-white/60 border-white/10 hover:border-white/30'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </header>

        <div className="flex flex-col gap-3 overflow-y-auto pr-4 custom-scrollbar flex-1 pb-10">
          {filteredChannels.map((ch) => (
            <button
              key={ch.nome}
              onClick={() => setSelectedChannel(ch)}
              className={`group relative flex items-center gap-5 p-4 rounded-[28px] transition-all duration-500 border ${
                selectedChannel.nome === ch.nome 
                  ? 'glass border-[#E50914]/50 shadow-2xl shadow-[#E50914]/10 -translate-y-1' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center p-2 overflow-hidden spatial-shadow group-hover:scale-105 transition-transform duration-500">
                {ch.logo ? (
                  <img src={ch.logo} alt={ch.nome} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-2xl font-black text-white/20">{ch.nome[0]}</span>
                )}
              </div>
              
              <div className="flex-1 text-left">
                <div className="font-bold text-lg group-hover:text-white transition-colors">{ch.nome}</div>
                <div className="text-sm text-white/40 font-medium">{ch.genero}</div>
              </div>

              {selectedChannel.nome === ch.nome && (
                <div className="flex flex-col items-center gap-1 pr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
                    <span className="text-[10px] font-black text-[#E50914] uppercase tracking-tighter">Live</span>
                </div>
              )}

              {/* Focus Glow */}
              <div className={`absolute inset-0 rounded-[28px] border-2 border-[#E50914]/0 ${selectedChannel.nome === ch.nome ? 'border-[#E50914]/40' : ''} pointer-events-none transition-all duration-500`} />
            </button>
          ))}
        </div>
      </div>

      {/* Main Player Area */}
      <div className="flex-1 flex flex-col gap-6 h-full min-h-[500px]">
        <div className="relative flex-1 rounded-[48px] overflow-hidden spatial-shadow border border-white/10 glass group bg-black">
            {/* 
                In a real production environment, we'd use hls.js for cross-browser .m3u8 support.
                Here we use a standard video tag which works natively in Safari (VisionOS target).
            */}
            <video 
              key={selectedChannel.url}
              src={selectedChannel.url}
              className="w-full h-full object-cover"
              poster={selectedChannel.logo}
              autoPlay
              controls
              muted
            />
            
            <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="px-4 py-2 rounded-full bg-[#E50914] text-white text-[10px] font-black tracking-widest flex items-center gap-2 shadow-2xl animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    AO VIVO
                </div>
                <div className="glass px-4 py-2 rounded-full text-[10px] font-bold tracking-widest text-white/80 border-white/20">
                    {selectedChannel.genero}
                </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <div className="glass p-8 rounded-[32px] border-white/20 backdrop-blur-xl spatial-shadow max-w-lg">
                    <div className="flex items-center gap-4 mb-4">
                        <img src={selectedChannel.logo} alt="" className="w-12 h-12 object-contain" />
                        <div>
                            <h3 className="text-3xl font-black mb-1 leading-none">{selectedChannel.nome}</h3>
                            <p className="text-white/40 text-sm font-bold tracking-widest uppercase">Sinal Digital HD</p>
                        </div>
                    </div>
                    <p className="text-white/60 leading-relaxed font-medium">
                        Você está assistindo ao sinal ao vivo de {selectedChannel.nome}. 
                        Otimizado para REDX Spatial Cinema.
                    </p>
                </div>
                
                <div className="flex gap-4">
                    <button className="w-20 h-20 rounded-full glass border border-white/20 flex items-center justify-center text-2xl hover:bg-white/10 transition-all">
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className="w-20 h-20 rounded-full bg-white text-[#E50914] flex items-center justify-center text-3xl spatial-shadow hover:scale-110 active:scale-95 transition-all">
                        <i className="fas fa-play ml-1"></i>
                    </button>
                </div>
            </div>
        </div>

        {/* Channel Metadata Panel */}
        <GlassPanel className="bg-white/5 border-white/10 py-6 px-10">
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-white/30 text-xs font-black uppercase tracking-[0.3em] mb-2">Programação</h4>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4">
                            <span className="text-[#E50914] font-black text-lg">20:30</span>
                            <span className="font-bold text-lg">Jornal da Noite</span>
                        </div>
                        <div className="w-px h-6 bg-white/10" />
                        <div className="flex items-center gap-4 opacity-40">
                            <span className="font-black text-lg">21:30</span>
                            <span className="font-bold text-lg">Cine REDX: Estreia</span>
                        </div>
                    </div>
                </div>
                <button className="px-6 py-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all text-xs font-black uppercase tracking-widest">
                    Grade Completa
                </button>
            </div>
        </GlassPanel>
      </div>
    </div>
  );
};

export default LiveTV;
