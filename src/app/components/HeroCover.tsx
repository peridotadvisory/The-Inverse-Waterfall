import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

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
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0B0B0C 0%, #1C3D2B 100%)',
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% ${50 + scrollY * 0.05}%, rgba(28, 61, 43, 0.3) 0%, transparent 70%)`,
        }}
      />

      {/* Upward flowing lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px opacity-20"
            style={{
              left: `${10 + i * 7}%`,
              height: '120vh',
              background: 'linear-gradient(to top, transparent, rgba(168, 168, 168, 0.3), transparent)',
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
            animate={{
              y: [0, -100, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="relative z-10 text-center px-8 max-w-5xl"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      >
        <motion.h1
          className="mb-12"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
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
          className="mb-24 mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontWeight: 300,
            letterSpacing: '0.01em',
            lineHeight: 1.6,
            color: '#A8A8A8',
            maxWidth: '46rem',
          }}
        >
          Capital Sequencing, Structural Resilience, and the Architecture of Usable Wealth
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 400,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#A8A8A8',
          }}
        >
          <div className="mb-2">Peridot Advisory</div>
          <div style={{ opacity: 0.6 }}>Enduring Value Framework Research Series</div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-stone-400 to-transparent"
        />
      </motion.div>
    </motion.div>
  );
}
