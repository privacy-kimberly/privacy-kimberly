import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import SubscriptionCard from './components/SubscriptionCard';
import PostFeed from './components/PostFeed';
import { MOCK_PROFILE, MOCK_POSTS } from './constants';
import { ImageIcon, Video, Lock } from './components/Icons';
import Button from './components/Button';

function App() {
  const [activeTab, setActiveTab] = useState<'posts' | 'media'>('posts');

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Navbar />
      
      <main className="pb-20">
        {/* Profile Header Section */}
        <ProfileHeader profile={MOCK_PROFILE} />

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto px-0 md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column (Feed) */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white md:rounded-xl shadow-sm border-b md:border border-gray-100 mb-6 sticky top-16 z-30">
                <div className="flex">
                  <button 
                    onClick={() => setActiveTab('posts')}
                    className={`flex-1 py-4 text-sm font-semibold border-b-2 transition-colors flex items-center justify-center gap-2 ${
                      activeTab === 'posts' 
                        ? 'border-brand-500 text-brand-500' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="uppercase">Posts</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                      {MOCK_PROFILE.stats.posts}
                    </span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('media')}
                    className={`flex-1 py-4 text-sm font-semibold border-b-2 transition-colors flex items-center justify-center gap-2 ${
                      activeTab === 'media' 
                        ? 'border-brand-500 text-brand-500' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="uppercase">Mídias</span>
                    <div className="flex gap-1">
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                            <ImageIcon className="w-3 h-3" /> {MOCK_PROFILE.stats.photos}
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                            <Video className="w-3 h-3" /> {MOCK_PROFILE.stats.videos}
                        </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Feed Content */}
              <div className="px-4 md:px-0">
                {activeTab === 'posts' ? (
                  <PostFeed 
                    posts={MOCK_POSTS} 
                    creatorName={MOCK_PROFILE.name} 
                    avatarUrl={MOCK_PROFILE.avatarUrl} 
                  />
                ) : (
                   <div className="grid grid-cols-3 gap-1 md:gap-2">
                      {/* Grid View for Media Tab */}
                      {MOCK_POSTS.map((post) => (
                        <div key={post.id} className="relative aspect-square bg-gray-200 cursor-pointer group overflow-hidden rounded-md">
                           <img src={post.mediaUrl} className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${post.isLocked ? 'blur-md' : ''}`} alt="" />
                           {post.isLocked && (
                             <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                               <Lock className="w-8 h-8 text-white drop-shadow-md" />
                             </div>
                           )}
                        </div>
                      ))}
                      {/* Fake extra items to fill grid */}
                      {[...Array(6)].map((_, i) => (
                        <div key={`fake-${i}`} className="relative aspect-square bg-gray-200 cursor-pointer group overflow-hidden rounded-md">
                           <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                             <Lock className="w-8 h-8 text-gray-400" />
                           </div>
                        </div>
                      ))}
                   </div>
                )}
              </div>
            </div>

            {/* Right Column (Sidebar - Subscription) */}
            <div className="hidden lg:block lg:col-span-1">
              <SubscriptionCard subscription={MOCK_PROFILE.subscription} />
              
              {/* Footer Links */}
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-400 px-4">
                <a href="#" className="hover:underline">Sobre</a>
                <a href="#" className="hover:underline">Blog</a>
                <a href="#" className="hover:underline">Carreiras</a>
                <a href="#" className="hover:underline">Ajuda</a>
                <a href="#" className="hover:underline">Termos</a>
                <a href="#" className="hover:underline">Privacidade</a>
                <span>© 2024 Privacy</span>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Mobile Sticky Subscribe Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden z-40">
        <div className="flex gap-2 items-center">
          <div className="flex-1">
             <span className="block text-xs text-gray-500 uppercase">Assinar por</span>
             <span className="block font-bold text-brand-500 text-lg">
                {MOCK_PROFILE.subscription.currency} {MOCK_PROFILE.subscription.price.toFixed(2).replace('.', ',')}
             </span>
          </div>
          <Button 
            className="flex-1 uppercase font-bold text-sm"
            onClick={() => window.location.href = 'https://marketplaceseguro.sbs/checkout/cmlodnocl0afr1xppdx5p7sne?offer=KJH172M'}
          >
            Assinar
          </Button>
        </div>
      </div>

    </div>
  );
}

export default App;