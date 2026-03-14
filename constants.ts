import { CreatorProfile, Post, PostType } from './types';

export const MOCK_PROFILE: CreatorProfile = {
  id: 'kimberly_reiiss',
  name: 'Kimberly Reis',
  username: '@kimberly_reiiss',
  avatarUrl: 'https://i.ibb.co/wNMDB3gm/CJZAXFw4.webp',
  bannerUrl: 'https://i.ibb.co/Rk6yQ82k/i543406.webp',
  bio: 'Sejam bem-vindos ao meu perfil oficial! ✨\nConteúdo exclusivo todos os dias.\nsua branquinha favorita 🔥\n\n🇧🇷 Brasil',
  isVerified: true,
  stats: {
    posts: 423,
    photos: 310,
    videos: 113,
    likes: 15400
  },
  subscription: {
    price: 14.97,
    currency: 'R$',
    features: [
      'Acesso total ao conteúdo',
      'Mensagens diretas',
      'Conteúdo exclusivo semanal',
      'Lives exclusivas'
    ],
    discount: 20
  }
};

export const MOCK_POSTS: Post[] = [
  {
    id: '2',
    text: 'Videozinho novo disponível! Corre pra ver o que aprontei hoje... 😈',
    createdAt: '5 horas atrás',
    likes: 3500,
    comments: 120,
    isLocked: true,
    mediaUrl: 'https://picsum.photos/id/400/600/400', // Placeholder for locked content
    type: PostType.VIDEO
  },
  {
    id: '3',
    text: 'Ensaio novo exclusivo para assinantes. Não percam! 📸',
    createdAt: '1 dia atrás',
    likes: 890,
    comments: 22,
    isLocked: true,
    mediaUrl: 'https://picsum.photos/id/237/600/600',
    type: PostType.IMAGE
  },
  {
    id: '5',
    text: 'Só um spoiler do que vem por aí...',
    createdAt: '3 dias atrás',
    likes: 4200,
    comments: 310,
    isLocked: true,
    mediaUrl: 'https://picsum.photos/id/100/600/600',
    type: PostType.IMAGE
  }
];
