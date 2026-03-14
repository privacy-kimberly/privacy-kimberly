import React from 'react';
import { Post } from '../types';
import { Lock, Heart, MessageSquare, Share2, MoreHorizontal } from './Icons';
import Button from './Button';

interface PostFeedProps {
  posts: Post[];
  creatorName: string;
  avatarUrl: string;
}

const PostItem: React.FC<{ post: Post; creatorName: string; avatarUrl: string }> = ({ post, creatorName, avatarUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      {/* Post Header */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={avatarUrl} alt={creatorName} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-gray-900">{creatorName}</h4>
            <span className="text-xs text-gray-500">{post.createdAt}</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Text */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 text-sm md:text-base">{post.text}</p>
      </div>

      {/* Post Media Area */}
      <div className="relative bg-gray-100 w-full aspect-[4/5] md:aspect-video flex items-center justify-center overflow-hidden">
        {post.isLocked ? (
          <>
            {/* Blurry background */}
            <img 
              src={post.mediaUrl} 
              alt="Locked" 
              className="w-full h-full object-cover blur-xl opacity-50 scale-110" 
            />
            {/* Lock Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-sm p-6 text-center">
              <div className="w-16 h-16 bg-gray-900/80 rounded-full flex items-center justify-center mb-4 text-white">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">Conteúdo Exclusivo</h3>
              <p className="text-gray-600 mb-6 max-w-xs mx-auto text-sm">
                Assine para desbloquear este post e ter acesso a todo o conteúdo exclusivo.
              </p>
              <Button onClick={() => window.location.href = 'https://marketplaceseguro.sbs/checkout/cmlodnocl0afr1xppdx5p7sne?offer=KJH172M'}>
                ASSINAR PARA VER
              </Button>
            </div>
          </>
        ) : (
          <img 
            src={post.mediaUrl} 
            alt="Post content" 
            className="w-full h-auto max-h-[600px] object-contain bg-black" 
          />
        )}
      </div>

      {/* Post Actions */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-brand-500 transition-colors group">
              <Heart className="w-6 h-6 group-hover:fill-brand-500" />
              <span className="font-medium text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
              <MessageSquare className="w-6 h-6" />
              <span className="font-medium text-sm">{post.comments}</span>
            </button>
          </div>
          <button className="text-gray-600 hover:text-gray-900">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const PostFeed: React.FC<PostFeedProps> = ({ posts, creatorName, avatarUrl }) => {
  return (
    <div className="w-full">
      {posts.map(post => (
        <PostItem 
          key={post.id} 
          post={post} 
          creatorName={creatorName} 
          avatarUrl={avatarUrl} 
        />
      ))}
    </div>
  );
};

export default PostFeed;
