import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import heroBg from '@/assets/inverse-waterfall-bg.svg';

export function HeroCover() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex items-start justify-start overflow-hidden"
      style={{
        background: '#0B0B0C',
        paddingTop: '30vh',
        paddingLeft: 'clamp(2rem, 8vw, 8rem)',
        paddingRight: 'clamp(2rem, 8vw, 8rem)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.92,
        }}
      />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="relative z-10 max-w-6xl"
      >
        <motion.h1
          className="mb-8"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.8rem, 9.5vw, 8.8rem)',
            fontWeight: 400,
            letterSpacing: '-0.035em',
            lineHeight: 0.92,
            color: '#F5F5F3',
          }}
        >
          THE INVERSE
          <br />
          WATERFALL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            fontWeight: 300,
            letterSpacing: '0.01em',
            lineHeight: 1.6,
            color: '#A8A8A8',
            maxWidth: '48rem',
          }}
        >
          Capital Sequencing, Structural Resilience, and the Architecture of Usable Wealth
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mb-32"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '0.01em',
            lineHeight: 1.6,
            color: '#A8A8A8',
            opacity: 0.68,
          }}
        >
          An inverse waterfall of capital
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#A8A8A8',
          }}
        >
          <div className="mb-2">Peridot Advisory</div>
          <div style={{ opacity: 0.5 }}>Enduring Value Framework Research Series</div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-px h-20 bg-gradient-to-b from-transparent via-stone-500 to-transparent opacity-40"
        />
      </motion.div>
    </motion.div>
  );
}
