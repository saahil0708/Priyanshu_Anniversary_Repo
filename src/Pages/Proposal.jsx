import { useState, useEffect } from 'react';
import { Heart, ChevronRight, ChevronLeft, Gift, Camera, Music, Coffee, Sun, Moon, Stars } from 'lucide-react';

import Pic1 from '../assets/Pic3.jpg'
import Pic2 from '../assets/Pic1.jpg'
import Pic3 from '../assets/Pic2.jpg'
import Pic4 from '../assets/Pic4.jpg'
import Pic5 from '../assets/Pic5.jpg'
import Pic6 from '../assets/Pic6.jpg'
import Pic7 from '../assets/Pic7.jpg'

export default function AnniversaryLoveStory() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showHeart, setShowHeart] = useState(true);
  const [showHeartSprinkles, setShowHeartSprinkles] = useState(false);
  
  // Define your love story phases here
  const phases = [
    {
      title: "How We Met",
      content: "Saw you at my brother's wedding—helping your cousin, lost in smiles and chaos. Just one moment, one glance… and my world paused. We spoke near the flowers, just a few words—but something began, softly, silently.",
      image: Pic1,
      imageAlt: "The day we first met",
      icon: <Coffee className="h-10 w-10 text-pink-500" />
    },
    {
      title: "Our First Date",
      content: "Our first date was at City Centre Junction Mall. I waited with a nervous smile and a single rose in hand. She arrived—eyes sparkling, smile brighter than the lights around. I gave her the rose, she blushed, and in that quiet moment, the world felt perfect.",
      image: Pic4,
      imageAlt: "Our first date together",
      icon: <Moon className="h-10 w-10 text-purple-500" />
    },
    {
      title: "Growing Together",
      content: "Through every up and down, you've been by my side. We've grown so much together this past year, learning from each other and building something beautiful.",
      image: Pic2,
      imageAlt: "Growing together through the year",
      icon: <Sun className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Little Moments",
      content: "It's the little things I cherish most - your morning sleepy smile, the way you laugh at my jokes, how you always know when I need a hug. These moments make every day special.",
      image: Pic6,
      imageAlt: "The little moments we share",
      icon: <Camera className="h-10 w-10 text-green-500" />
    },
    {
      title: "One Year Together",
      content: "Today marks 365 days of laughter, love, and adventure. Thank you for making this the best year of my life. I love you more than words can express!",
      image: Pic5,
      imageAlt: "Celebrating one year together",
      icon: <Gift className="h-10 w-10 text-red-500" />
    },
    {
      title: "Our Future",
      content: "I'm so excited for all the adventures ahead. Every day with you is a gift, and I can't wait to see where our journey takes us next. Here's to many more anniversaries!",
      image: Pic7,
      imageAlt: "Our future together",
      icon: <Stars className="h-10 w-10 text-yellow-500" />
    }
  ];

  // Pulsing heart animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHeart(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Heart sprinkles effect for final phase
  useEffect(() => {
    if (currentPhase === phases.length - 1) {
      setShowHeartSprinkles(true);
    } else {
      setShowHeartSprinkles(false);
    }
  }, [currentPhase, phases.length]);

  const goToNextPhase = () => {
    if (currentPhase < phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
    }
  };

  const goToPreviousPhase = () => {
    if (currentPhase > 0) {
      setCurrentPhase(currentPhase - 1);
    }
  };

  return (
    <div className="flex flex-col font-[Poppins] items-center justify-center min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 p-4 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`bg-heart-${i}`}
            className="absolute animate-float opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          >
            <Heart 
              size={[30, 40, 50, 60][i % 4]} 
              className="text-pink-400"
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Subtle light rays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-pink-100/50 to-transparent opacity-60"></div>
      
      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-4xl font-bold text-pink-600 mb-2 drop-shadow-sm">Our Love Story</h1>
        <p className="text-lg text-gray-700">Happy 1st Anniversary, My Love!</p>
        <div className="flex justify-center mt-2">
          <Heart 
            className={`h-8 w-8 text-red-500 transition-transform duration-500 ${showHeart ? 'scale-125' : 'scale-100'}`}
            fill="currentColor" 
          />
        </div>
      </div>

      {/* Main content card */}
      <div className="w-full max-w-md rounded-lg overflow-hidden mb-8 transition-all duration-500 bg-white/90 backdrop-blur-sm shadow-xl relative z-10 border border-pink-200">
        {/* Image at the top */}
        <div className="w-full h-48 relative bg-gradient-to-r from-pink-300/40 to-purple-300/40">
          <img 
            src={phases[currentPhase].image} 
            alt={phases[currentPhase].imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
            {phases[currentPhase].icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 border-t border-pink-100">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">{phases[currentPhase].title}</h2>
          <p className="text-gray-700 text-center">{phases[currentPhase].content}</p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full max-w-md relative z-10">
        <button 
          onClick={goToPreviousPhase}
          disabled={currentPhase === 0}
          className={`flex items-center px-4 py-2 rounded-lg ${currentPhase === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-600'} text-white transition-all shadow-md`}
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Previous
        </button>
        
        <div className="flex space-x-1 items-center">
          {phases.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 w-2 rounded-full transition-all ${currentPhase === index ? 'bg-pink-500 scale-125' : 'bg-gray-300'}`} 
            />
          ))}
        </div>
        
        <button 
          onClick={goToNextPhase}
          disabled={currentPhase === phases.length - 1}
          className={`flex items-center px-4 py-2 rounded-lg ${currentPhase === phases.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600'} text-white transition-all shadow-md`}
        >
          Next
          <ChevronRight className="h-5 w-5 ml-1" />
        </button>
      </div>

      {/* Heart sprinkles overlay */}
      {showHeartSprinkles && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-heart-fall"
              style={{
                top: `-5%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            >
              <Heart 
                size={[12, 16, 20, 24][i % 4]} 
                className={`text-${['pink', 'red', 'rose', 'purple'][i % 4]}-${[300, 400, 500, 600][i % 4]}`}
                fill="currentColor"
              />
            </div>
          ))}
        </div>
      )}

      {/* Footer with love message */}
      <div className="mt-8 text-center relative z-10">
        <p className="text-gray-700 italic">❤️ Created with love, just for you ❤️</p>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes heart-fall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          50% { transform: translateY(50vh) rotate(180deg); opacity: 0.8; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-heart-fall {
          animation: heart-fall 5s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -15px) rotate(10deg); }
          66% { transform: translate(-5px, 10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}