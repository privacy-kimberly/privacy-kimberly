import React, { useState } from 'react';
import { CreatorProfile } from '../types';
import { BadgeCheck, Share2, MoreHorizontal, Star } from './Icons';
import Button from './Button';

interface ProfileHeaderProps {
  profile: CreatorProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="bg-white pb-4 mb-4 shadow-sm md:rounded-b-xl relative">
      {/* Banner */}
      <div className="h-48 md:h-80 w-full overflow-hidden relative bg-gray-200">
        <img 
          src={profile.bannerUrl} 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
      </div>

      {/* Profile Info Container */}
      <div className="px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end -mt-12 md:-mt-16 mb-4 relative z-10">
          
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-lg">
              <img 
                src={profile.avatarUrl} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-4 h-4 md:w-6 md:h-6 bg-green-500 border-2 border-white rounded-full" title="Online"></div>
          </div>

          {/* Name & Actions Desktop */}
          <div className="mt-3 md:mt-0 md:ml-6 flex-1 w-full flex justify-between items-end">
             <div>
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-900">
                  {profile.name}
                  {profile.isVerified && <BadgeCheck className="w-6 h-6 text-brand-500 fill-current" />}
                </h1>
                <p className="text-gray-500 font-medium">
                  {profile.username}
                </p>
             </div>
             
             {/* Desktop Actions */}
             <div className="hidden md:flex gap-3 mb-2">
                <Button variant="outline" onClick={() => setIsFollowing(!isFollowing)}>
                  <Star className={`w-4 h-4 ${isFollowing ? 'fill-brand-500' : ''}`} />
                  {isFollowing ? 'Seguindo' : 'Seguir'}
                </Button>
                <Button variant="ghost" className="!p-2 rounded-full border border-gray-200">
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button variant="ghost" className="!p-2 rounded-full border border-gray-200">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
             </div>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex gap-2 md:hidden mb-6">
           <Button variant="outline" fullWidth onClick={() => setIsFollowing(!isFollowing)}>
              <Star className={`w-4 h-4 ${isFollowing ? 'fill-brand-500' : ''}`} />
              {isFollowing ? 'Seguindo' : 'Seguir'}
           </Button>
           <Button variant="ghost" className="!p-2 border border-gray-300 rounded-full">
              <Share2 className="w-5 h-5 text-gray-600" />
           </Button>
        </div>

        {/* Bio */}
        <div className="mb-6 max-w-2xl">
          <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-4">
            {profile.bio}
          </p>
          <Button 
            className="uppercase font-bold text-sm w-full md:w-auto"
            onClick={() => window.location.href = 'https://marketplaceseguro.sbs/checkout/cmlodnocl0afr1xppdx5p7sne?offer=KJH172M'}
          >
            ASSINAR POR {profile.subscription.currency} {profile.subscription.price.toFixed(2).replace('.', ',')}
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-6 md:gap-12 border-t border-gray-100 pt-4">
          <div className="text-center md:text-left">
            <span className="block font-bold text-gray-900 text-lg">{profile.stats.posts}</span>
            <span className="text-sm text-gray-500">Posts</span>
          </div>
          <div className="text-center md:text-left">
            <span className="block font-bold text-gray-900 text-lg">{profile.stats.photos}</span>
            <span className="text-sm text-gray-500">Fotos</span>
          </div>
          <div className="text-center md:text-left">
            <span className="block font-bold text-gray-900 text-lg">{profile.stats.videos}</span>
            <span className="text-sm text-gray-500">Vídeos</span>
          </div>
          <div className="text-center md:text-left">
            <span className="block font-bold text-gray-900 text-lg">{(profile.stats.likes / 1000).toFixed(1)}K</span>
            <span className="text-sm text-gray-500">Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
