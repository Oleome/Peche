import './home.scss'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/ilot.webp',
  '/error_404.jpg',
  // Ajoutez ici vos URLs d'images
];

export function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;
      const index = Math.min(
        images.length - 1,
        Math.floor(scrollFraction * images.length)
      );
      setImageIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '200vh', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[imageIndex]}
          src={images[imageIndex]}
          alt="Dynamic"
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 1] }} // Opacité passe de 0 à 0.5 puis à 1
          exit={{ opacity: [1, 0.5, 0] }}    // Opacité passe de 1 à 0.5 puis à 0
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        />
      </AnimatePresence>
    </div>
  );
}
