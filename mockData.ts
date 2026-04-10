
import { Media, UserProfile, Channel } from './types';

export const PROFILES: UserProfile[] = [
  { id: '1', name: 'Alex', avatar: 'https://picsum.photos/seed/alex/300/300', isKids: false },
  { id: '2', name: 'Sarah', avatar: 'https://picsum.photos/seed/sarah/300/300', isKids: false },
  { id: '3', name: 'Junior', avatar: 'https://picsum.photos/seed/kids/300/300', isKids: true },
];

export const MEDIA_CONTENT: Media[] = [
  {
    id: 'm1',
    tmdb_id: 157336,
    title: 'Interstellar',
    type: 'movie',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity survival.',
    rating: 'PG-13',
    year: 2014,
    duration: '2h 49m',
    genre: ['Sci-Fi', 'Drama', 'Adventure'],
    backdrop: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000',
    poster: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=800',
    stars: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain']
  },
  {
    id: 's1',
    tmdb_id: 82856,
    title: 'The Mandalorian',
    type: 'series',
    description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
    rating: 'TV-14',
    year: 2019,
    seasons: 3,
    genre: ['Action', 'Adventure', 'Fantasy'],
    backdrop: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&q=80&w=2000',
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800',
    stars: ['Pedro Pascal', 'Carl Weathers', 'Giancarlo Esposito']
  },
  {
    id: 'm2',
    tmdb_id: 335984,
    title: 'Blade Runner 2049',
    type: 'movie',
    description: 'Young Blade Runner K discovery of a long-buried secret leads him on a quest to find former Blade Runner Rick Deckard.',
    rating: 'R',
    year: 2017,
    duration: '2h 44m',
    genre: ['Sci-Fi', 'Mystery', 'Action'],
    backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800',
    stars: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas']
  }
];

export const LIVE_CHANNELS: Channel[] = [
    {
        "nome": "Agro+",
        "logo": "http://api.cdnapp.fun:80/images/60e4c6de48e6b39693eb8904f87d136d.png",
        "genero": "Canais - Abertos",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/1.m3u8"
    },
    {
        "nome": "Canal Brasil HD",
        "logo": "http://api.cdnapp.fun:80/images/7f026fb107674792ccfc4b30a1bdd53f.png",
        "genero": "Canais - Abertos",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/2.m3u8"
    },
    {
        "nome": "Cultura",
        "logo": "http://api.cdnapp.fun:80/images/9563345ec7cd63944d9900e9c091e661.png",
        "genero": "Canais - Abertos",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/5.m3u8"
    },
    {
        "nome": "RedeTV!",
        "logo": "http://api.cdnapp.fun:80/images/0cb21e2d7c03d3fceb868d1a1eeb0ea5.png",
        "genero": "Canais - Abertos",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/7.m3u8"
    },
    {
        "nome": "Band SP HD",
        "logo": "http://api.cdnapp.fun:80/images/0c0fdf1d9fabeb1bd3e468f6ceeafcc6.png",
        "genero": "Canais - Abertos",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/15.m3u8"
    },
    {
        "nome": "Record SP HD",
        "logo": "http://api.cdnapp.fun:80/images/ad82afc305b7456ccfc0c5e882e2c479.png",
        "genero": "Canais - Abertos",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/21.m3u8"
    },
    {
        "nome": "SBT SP HD",
        "logo": "http://api.cdnapp.fun:80/images/b1e983d082e93e5a31d089e8db99f8bd.png",
        "genero": "Canais - Abertos",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/32.m3u8"
    },
    {
        "nome": "Discovery Channel HD",
        "logo": "http://api.cdnapp.fun:80/images/28a05132fb2c78cc4e0c6a208b2cdfae.png",
        "genero": "Canais – Documentários",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/41.m3u8"
    },
    {
        "nome": "History HD",
        "logo": "http://api.cdnapp.fun:80/images/e34ec168c74bca1fdd01c180ec9a4126.png",
        "genero": "Canais – Documentários",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/61.m3u8"
    },
    {
        "nome": "ESPN 1 HD",
        "logo": "http://api.cdnapp.fun:80/images/e6e050c3bd8a18d931080c2bbb6bc9e9.png",
        "genero": "Canais – Esportes",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/69.m3u8"
    },
    {
        "nome": "SporTV 1 HD",
        "logo": "http://api.cdnapp.fun:80/images/827448d224d3dff5e00c588de090f1b7.png",
        "genero": "Canais – Esportes",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/81.m3u8"
    },
    {
        "nome": "Telecine Premium HD",
        "logo": "http://api.cdnapp.fun:80/images/096a021387bfce6cbf28090ca51a8d00.png",
        "genero": "Canais – Filmes e Séries",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/172.m3u8"
    },
    {
        "nome": "HBO HD",
        "logo": "http://api.cdnapp.fun:80/images/1fea778a66cf4957b55062ff892325cd.png",
        "genero": "Canais – Filmes e Séries",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/176.m3u8"
    },
    {
        "nome": "Cartoon Network HD",
        "logo": "http://api.cdnapp.fun:80/images/61f608be98fd5522b96d095ece9997b2.png",
        "genero": "Canais – Infantis",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/282.m3u8"
    },
    {
        "nome": "Gloob HD",
        "logo": "http://api.cdnapp.fun:80/images/b41f36594998380ff44e1a8c18cd777b.png",
        "genero": "Canais – Infantis",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/288.m3u8"
    },
    {
        "nome": "CNN Brasil HD",
        "logo": "http://api.cdnapp.fun:80/images/cb47fa38d96afbff2c2013e8328f0cd2.png",
        "genero": "Canais – Notícias",
        "url": "http://api.cdnapp.fun:80/7vhBfEjRrF/ZMeqfpmeH9/312.m3u8"
    }
];
