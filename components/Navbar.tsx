import React from 'react';
import { Search, Bell, Menu, User, Home } from './Icons';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-brand-500 tracking-tight">PRIVACY</span>
            </div>
            
            {/* Desktop Search */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar criadores..." 
                className="bg-transparent border-none focus:outline-none text-sm ml-2 w-full text-gray-700"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-brand-500 transition-colors">
              <Home className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-brand-500 transition-colors">
              <Bell className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-brand-500 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
               <User className="w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Search className="w-6 h-6 text-gray-600" />
             <Menu className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
