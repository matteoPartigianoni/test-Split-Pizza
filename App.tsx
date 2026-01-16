
import React from 'react';
import Header from './components/Header';
import { MENU_ITEMS, REVIEWS } from './constants';
import { MenuItem, Review } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/192/1920/1080" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="Pizza oven"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6">L'Arte della Tradizione</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Pizza Split
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light leading-relaxed">
            Impasto a lievitazione naturale 48h, ingredienti DOP e la passione di una volta in ogni morso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition shadow-2xl">
              Scopri il Menu
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-stone-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">Il Nostro Menu</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
            <p className="text-stone-500 mt-6 max-w-2xl mx-auto">
              Selezioniamo solo i migliori produttori locali per garantirti un'esperienza autentica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_ITEMS.map((item: MenuItem) => (
              <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-stone-100">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-stone-800">
                    €{item.price.toFixed(2)}
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-tighter">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">{item.name}</h3>
                  <p className="text-stone-600 font-light text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <button className="w-full border-2 border-stone-200 text-stone-800 py-3 rounded-xl font-bold hover:bg-stone-800 hover:text-white hover:border-stone-800 transition">
                    Aggiungi all'Ordine
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Cosa dicono di noi</h2>
            <p className="text-stone-500">I nostri clienti sono la nostra miglior pubblicità.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review: Review) => (
              <div key={review.id} className="bg-stone-50 p-8 rounded-3xl border border-stone-100 flex flex-col h-full">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-700 italic mb-8 flex-grow">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="font-bold text-stone-800">{review.author}</h4>
                    <span className="text-xs text-stone-400">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 text-white p-2 rounded-lg font-bold text-xl rotate-3">PS</div>
              <span className="text-2xl font-bold tracking-tight">PIZZA SPLIT</span>
            </div>
            <p className="text-stone-400 max-w-sm mb-8">
              Portiamo il vero sapore dell'Italia direttamente a casa tua. Ogni pizza è un'opera d'arte creata con amore e ingredienti di prima scelta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition">IG</a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition">FB</a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 transition">TW</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contatti</h4>
            <ul className="space-y-4 text-stone-400">
              <li>Via della Pizza, 123</li>
              <li>00100 Roma (RM)</li>
              <li>Tel: +39 06 123 4567</li>
              <li>Email: info@pizzasplit.it</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Orari</h4>
            <ul className="space-y-4 text-stone-400">
              <li>Lun - Gio: 18:30 - 23:00</li>
              <li>Ven - Sab: 18:30 - 00:00</li>
              <li>Dom: 12:30 - 15:00, 18:30 - 23:30</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-stone-500 text-sm">
          &copy; {new Date().getFullYear()} Pizza Split. Tutti i diritti riservati. P.IVA 12345678901
        </div>
      </footer>
    </div>
  );
};

export default App;
