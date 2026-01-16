
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white p-2 rounded-lg font-bold text-xl rotate-3">PS</div>
            <span className="text-2xl font-bold text-stone-800 tracking-tight">PIZZA SPLIT</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#menu" className="text-stone-600 hover:text-red-600 transition font-medium">Menu</a>
            <a href="#about" className="text-stone-600 hover:text-red-600 transition font-medium">Chi Siamo</a>
            <a href="#reviews" className="text-stone-600 hover:text-red-600 transition font-medium">Recensioni</a>
          </nav>
          <button className="bg-red-600 text-white px-6 py-2.5 rounded-full hover:bg-red-700 transition font-semibold shadow-lg shadow-red-200">
            Prenota Tavolo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
