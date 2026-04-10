
import React, { useState, useEffect } from 'react';
import { Page, UserProfile, Media } from './types';
import { fetchMovies, fetchSeries } from './services/tmdb';
import Login from './pages/Login';
import Profiles from './pages/Profiles';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Kids from './pages/Kids';
import MyList from './pages/MyList';
import LiveTV from './pages/LiveTV';
import Details from './pages/Details';
import Player from './pages/Player';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LOGIN);
  const [activeProfile, setActiveProfile] = useState<UserProfile | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [movies, setMovies] = useState<Media[]>([]);
  const [series, setSeries] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [movieData, seriesData] = await Promise.all([
          fetchMovies(),
          fetchSeries()
        ]);
        setMovies(movieData);
        setSeries(seriesData);
      } catch (err) {
        console.error("Error fetching TMDB data:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const navigate = (page: Page, media: Media | null = null) => {
    if (media) setSelectedMedia(media);
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setCurrentPage(Page.PROFILES);
  };

  const handleProfileSelect = (profile: UserProfile) => {
    setActiveProfile(profile);
    setCurrentPage(profile.isKids ? Page.KIDS : Page.HOME);
  };

  const handleBackToHome = () => {
    if (activeProfile?.isKids) {
      setCurrentPage(Page.KIDS);
    } else {
      setCurrentPage(Page.HOME);
    }
  };

  const renderPage = () => {
    if (loading && currentPage !== Page.LOGIN) {
      return (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <div className="w-16 h-16 border-4 border-[#E50914] border-t-transparent rounded-full animate-spin" />
          <p className="text-white/40 font-medium tracking-widest uppercase">Carregando...</p>
        </div>
      );
    }

    switch (currentPage) {
      case Page.LOGIN:
        return <Login onLogin={handleLogin} />;
      case Page.PROFILES:
        return <Profiles onSelect={handleProfileSelect} />;
      case Page.HOME:
        return <Home movies={movies} series={series} onSelectMedia={(m) => navigate(Page.DETAILS, m)} />;
      case Page.MOVIES:
        return <Movies movies={movies} onSelectMedia={(m) => navigate(Page.DETAILS, m)} />;
      case Page.SERIES:
        return <Series series={series} onSelectMedia={(m) => navigate(Page.DETAILS, m)} />;
      case Page.KIDS:
        return <Kids movies={movies} onSelectMedia={(m) => navigate(Page.DETAILS, m)} />;
      case Page.MY_LIST:
        return <MyList onSelectMedia={(m) => navigate(Page.DETAILS, m)} />;
      case Page.LIVE:
        return <LiveTV />;
      case Page.DETAILS:
        return (
          <Details 
            media={selectedMedia!} 
            onPlay={() => navigate(Page.PLAYER)} 
            onBack={handleBackToHome}
          />
        );
      case Page.PLAYER:
        return (
          <Player 
            media={selectedMedia!} 
            onClose={() => navigate(Page.DETAILS)} 
          />
        );
      default:
        return <Home movies={movies} series={series} onSelectMedia={(m) => navigate(Page.DETAILS, m)} />;
    }
  };

  const showNav = ![Page.LOGIN, Page.PROFILES, Page.PLAYER, Page.DETAILS].includes(currentPage);

  // Background for ambient UI
  const bgImage = selectedMedia?.backdrop || (movies[0]?.backdrop) || '';

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center">
      {/* Background Layer with Depth Blur */}
      <div 
        className="fixed inset-0 transition-all duration-[2000ms] ease-in-out -z-10 scale-105"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: currentPage === Page.PLAYER ? 'none' : 'blur(50px) brightness(0.3)',
        }}
      />
      
      {/* Ambient Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#0B0B0F]/40 to-[#0B0B0F] pointer-events-none -z-10" />

      {/* Navigation Header */}
      {showNav && (
        <Navigation 
          currentPage={currentPage} 
          onNavigate={setCurrentPage} 
          profile={activeProfile}
          onProfileClick={() => setCurrentPage(Page.PROFILES)}
        />
      )}

      {/* Main Content Area */}
      <main className="w-full flex-1 flex flex-col items-center justify-center p-4 md:p-8 pt-24">
        {renderPage()}
      </main>
      
      {/* Volumetric Light Effects */}
      <div className="fixed -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E50914]/10 blur-[120px] rounded-full pointer-events-none -z-5" />
    </div>
  );
};

export default App;
