
import React from 'react';
import GlassPanel from '../components/GlassPanel';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full animate-fade-in">
      <div className="mb-12 animate-float text-center">
        <h1 className="text-8xl font-black tracking-tighter text-[#E50914] drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">REDX</h1>
        <p className="text-center text-white/40 tracking-[0.3em] font-light mt-2 uppercase">Streaming Ultra Espacial</p>
      </div>

      <GlassPanel className="w-full max-w-md bg-white/5 border-white/10">
        <h2 className="text-3xl font-bold text-center mb-8">Bem-vindo de volta</h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/60 ml-1">E-mail ou Usuário</label>
            <input 
              type="text" 
              placeholder="Digite seu e-mail"
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#E50914]/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/60 ml-1">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#E50914]/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20"
            />
          </div>

          <button 
            onClick={onLogin}
            className="w-full py-4 rounded-2xl bg-[#E50914] text-white font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#E50914]/20 red-glow mt-4"
          >
            Entrar
          </button>
          
          <div className="flex justify-between items-center text-sm text-white/40 pt-4 px-2">
            <button className="hover:text-white transition-colors">Esqueceu a senha?</button>
            <button className="hover:text-white transition-colors">Criar conta</button>
          </div>
        </div>
      </GlassPanel>

      <div className="mt-12 text-white/20 text-xs font-medium uppercase tracking-widest">
        Otimizado para Vision Pro & Computação Espacial
      </div>
    </div>
  );
};

export default Login;
