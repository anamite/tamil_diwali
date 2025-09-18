import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Users, Music, Utensils, Gamepad2, Sparkles } from 'lucide-react';

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
            <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-pulse">
              தீபாவளி விழா
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Tamil Deepavali Celebration
            </h2>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-yellow-200 mb-2">
            <Calendar className="w-5 h-5" />
            <span className="text-lg md:text-xl font-medium">October 18th, 2024</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-orange-200">
            <MapPin className="w-4 h-4" />
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Kultur+Zentrum+NEun+Ingolstadt', '_blank')}
              className="text-sm md:text-base hover:text-yellow-300 hover:underline transition-colors duration-200 cursor-pointer"
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
                  src="/poster.png" 
                  alt="Deepavali Celebration Poster" 
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8dGV4dCB4PSIyMDAiIHk9IjI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RGVlcGF2YWxpIFBvc3RlcjwvdGV4dD4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkY4QzAwIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGNDUwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==';
                  }}
                />
              </div>
            </div>

            {/* Event details */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start">
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
                    onClick={() => window.open('#register', '_blank')}
                    className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full max-w-xs border-2 border-transparent hover:border-yellow-300 hover:shadow-yellow-400/50"
                  >
                    <span className="relative z-10">🎟️ Register Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
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