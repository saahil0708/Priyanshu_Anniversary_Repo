import React from 'react';
import { motion } from 'framer-motion';

const ResponsiveMasonryGrid = () => {
  const images = [
    { id: 1, src: 'https://source.unsplash.com/random/600x900?portrait', aspect: 'aspect-[2/3]' },
    { id: 2, src: 'https://source.unsplash.com/random/800x600?city', aspect: 'aspect-[4/3]' },
    { id: 3, src: 'https://source.unsplash.com/random/600x600?nature', aspect: 'aspect-square' },
    { id: 4, src: 'https://source.unsplash.com/random/1200x800?architecture', aspect: 'aspect-[3/2]' },
    { id: 5, src: 'https://source.unsplash.com/random/500x800?art', aspect: 'aspect-[5/8]' },
    { id: 6, src: 'https://source.unsplash.com/random/1000x600?technology', aspect: 'aspect-[5/3]' },
    { id: 7, src: 'https://source.unsplash.com/random/700x700?food', aspect: 'aspect-square' },
    { id: 8, src: 'https://source.unsplash.com/random/900x1200?travel', aspect: 'aspect-[3/4]' },
  ];

  return (
    <div className="min-h-screen font-[Poppins] bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Responsive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Masonry Grid</span>
        </h1>
        
        {/* Responsive Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((image) => (
            <motion.div
              key={image.id}
              className={`relative break-inside-avoid rounded-xl overflow-hidden shadow-lg group ${image.aspect}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Image Title</h3>
                  <p className="text-gray-200 text-sm sm:text-base">Description text here</p>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:bg-blue-500/20 group-hover:blur-md opacity-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMasonryGrid;