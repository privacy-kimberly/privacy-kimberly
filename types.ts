export interface CreatorProfile {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  bannerUrl: string;
  bio: string;
  isVerified: boolean;
  stats: {
    posts: number;
    photos: number;
    videos: number;
    likes: number;
  };
  subscription: {
    price: number;
    currency: string;
    features: string[];
    discount?: number;
  };
}

export enum PostType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  TEXT = 'TEXT'
}

export interface Post {
  id: string;
  text: string;
  createdAt: string;
  likes: number;
  comments: number;
  isLocked: boolean;
  mediaUrl?: string;
  type: PostType;
}

export interface PixPaymentResponse {
  success: boolean;
  paymentId: string;
  encodedImage: string; // Base64 do QR Code
  payload: string; // Código Copia e Cola
  expirationDate: string;
}
