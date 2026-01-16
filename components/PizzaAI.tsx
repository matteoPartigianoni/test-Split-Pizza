
import React, { useState } from 'react';
import { getPizzaRecommendation } from '../services/geminiService';

const PizzaAI: React.FC = () => {
  const [mood, setMood] = useState('');
  const [prefs, setPrefs] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!mood || !prefs) return;
    setLoading(true);
    const result = await getPizzaRecommendation(mood, prefs);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-20 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl mb-6">Non sai cosa scegliere?</h2>
        <p className="text-stone-400 mb-12 text-lg">Chiedi al nostro Maestro Pizzaiolo AI per un consiglio personalizzato.</p>
        
        <div className="bg-stone-800 p-8 rounded-3xl shadow-2xl border border-stone-700 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-left">
              <label className="block text-sm font-medium text-stone-400 mb-2">Come ti senti oggi?</label>
              <input 
                type="text" 
                placeholder="es: Affamato, Felice, Avventuroso..." 
                className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-red-500 outline-none transition"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-stone-400 mb-2">Cosa preferisci?</label>
              <input 
                type="text" 
                placeholder="es: Piccante, vegetariano, tartufo..." 
                className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-red-500 outline-none transition"
                value={prefs}
                onChange={(e) => setPrefs(e.target.value)}
              />
            </div>
          </div>
          
          <button 
            onClick={handleAskAI}
            disabled={loading || !mood || !prefs}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-stone-600 py-4 rounded-xl font-bold text-lg transition shadow-xl"
          >
            {loading ? 'Il pizzaiolo sta pensando...' : 'Ricevi il Consiglio'}
          </button>

          {recommendation && (
            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 animate-fade-in">
              <p className="italic text-xl leading-relaxed text-red-200">
                "{recommendation}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PizzaAI;
