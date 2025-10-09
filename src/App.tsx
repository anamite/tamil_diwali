import React, { useEffect, useState } from 'react';
import { Calendar, Users, Music, Utensils, Gamepad2, Sparkles } from 'lucide-react';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const createFirework = () => {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(firework);
    
    setTimeout(() => {
      if (document.body.contains(firework)) {
        document.body.removeChild(firework);
      }
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(createFirework, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="text-yellow-400 opacity-60" size={12 + Math.random() * 8} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 min-h-screen transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <header className="text-center pt-8 pb-4 px-4">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-300">
              Ingolstadt Tamilargal
            </h1>
            <h2 className="text-lg md:text-xl font-medium mb-2 text-orange-300">
              presents
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 animate-pulse text-yellow-300">
            Tamil Deepavali Celebration 2025
          </h3>
          
          <div className="flex items-center justify-center gap-2 text-yellow-200 mb-2">
            <Calendar className="w-5 h-5" />
            <span className="text-lg md:text-xl font-medium">October 19th, 2025 (Sunday)</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-orange-200">
            <img src="maps.png" alt="Location" className="w-4 h-6" />
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Kultur+Zentrum+Neun+Ingolstadt', '_blank')}
              className="text-sm md:text-base text-yellow-200 underline hover:text-yellow-300 hover:no-underline transition-all duration-200 cursor-pointer"
            >
              Kultur Zentrum Neun, Ingolstadt
            </button>
          </div>
        </header>

        {/* Main container */}
        <div className="max-w-6xl mx-auto px-4 pb-8">
          {/* Desktop layout: Poster left, Details right | Mobile: Stacked */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 mb-8">
            {/* Poster section */}
            <div className="mb-8 lg:mb-0 flex justify-center lg:w-1/2">
              <div className="w-full max-w-md lg:max-w-none">
                <img 
                  src="poster.png" 
                  alt="Deepavali Celebration Poster" 
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'poster.png';
                  }}
                />
              </div>
            </div>

            {/* Event details */}
            <div className="lg:w-1/2 flex flex-col gap-8">
              {/* Event details box */}
              <div className="flex justify-center lg:justify-start">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-yellow-500/30 w-full max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6 text-center">
                    🪔 Festival of Lights 🪔
                  </h3>
                  
                  <div className="space-y-5 mb-8">
                    <div className="flex items-center gap-4 text-orange-200">
                      <Utensils className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-lg font-medium">Biriyani Feast</span>
                    </div>
                    <div className="flex items-center gap-4 text-orange-200">
                      <Users className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-lg font-medium">Cultural Performances</span>
                    </div>
                    <div className="flex items-center gap-4 text-orange-200">
                      <Gamepad2 className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-lg font-medium">Traditional Games</span>
                    </div>
                    <div className="flex items-center gap-4 text-orange-200">
                      <Music className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <span className="text-lg font-medium">DJ & Music</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-4 items-center">
                    <button 
                      onClick={() => window.open('https://www.cognitoforms.com/ingolstadttamizhargal/deepavalikondattam2025', '_blank')}
                      className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-xs border-2 border-transparent hover:border-yellow-300 hover:shadow-yellow-400/50"
                    >
                      <span className="relative z-10">🎟️ Register Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Menu section */}
              <div className="flex justify-center lg:justify-start">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-yellow-500/30 w-full max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6 text-center">
                    🍽️ Menu 🍽️
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Non-Vegetarian */}
                    <div>
                      <h4 className="text-lg font-semibold text-orange-300 mb-3">Non-Vegetarian</h4>
                      <ul className="space-y-2 text-orange-200">
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Chicken Biriyani
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Chicken 65 (Boneless)
                        </li>
                      </ul>
                    </div>
                    
                    {/* Vegetarian */}
                    <div>
                      <h4 className="text-lg font-semibold text-orange-300 mb-3">Vegetarian</h4>
                      <ul className="space-y-2 text-orange-200">
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Veg Biriyani
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Cauliflower Fry
                        </li>
                      </ul>
                    </div>

                    {/* Accompaniments */}
                    <div>
                      <h4 className="text-lg font-semibold text-orange-300 mb-3">Accompaniments</h4>
                      <ul className="space-y-2 text-orange-200">
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Plain Rice
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Dal Curry
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Sambar
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Rasam
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Raita
                        </li>
                      </ul>
                    </div>
                    
                    {/* Dessert */}
                    <div>
                      <h4 className="text-lg font-semibold text-orange-300 mb-3">Dessert</h4>
                      <ul className="space-y-2 text-orange-200">
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Gulab Jamun
                        </li>
                      </ul>
                    </div>
                    
                    {/* Evening Snack */}
                    <div>
                      <h4 className="text-lg font-semibold text-orange-300 mb-3">Evening Snack</h4>
                      <ul className="space-y-2 text-orange-200">
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">•</span>
                          Tea - Parupu Vadai
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-yellow-200/80">
            <p className="text-sm md:text-base">
              Join us for an evening of joy, lights, and celebration! 🎉
            </p>
            <p className="text-xs md:text-sm mt-2 opacity-75">
              Bringing the Tamil community together in Ingolstadt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

