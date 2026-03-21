import { motion } from 'motion/react';
import { useInView } from './useInView';

export function FullBleedVisual() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-48 px-8"
      style={{ background: '#0B0B0C' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Visual Container */}
        <div className="relative h-[700px] flex items-end justify-center">
          {/* Upward flowing lines - more prominent */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0"
              style={{
                left: `${8 + i * 4.5}%`,
                width: '2px',
                height: '100%',
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.2 } : {}}
              transition={{ delay: i * 0.05, duration: 0.8 }}
            >
              <motion.div
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(to top, rgba(28, 61, 43, 0.9), rgba(28, 61, 43, 0.3), transparent)',
                }}
                animate={{
                  y: [-30, -60, -30],
                }}
                transition={{
                  duration: 10 + i * 0.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}

          {/* Layer Labels - from bottom to top */}
          <div className="absolute inset-0 flex flex-col justify-between py-12 px-16">
            {/* Foundation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center"
              style={{ marginTop: 'auto' }}
            >
              <div
                className="h-px flex-grow mr-8"
                style={{ background: 'linear-gradient(to right, #1C3D2B, transparent)', maxWidth: '140px' }}
              />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1C3D2B' }}>
                Foundation
              </div>
            </motion.div>

            {/* Income / Stability */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center"
              style={{ marginBottom: '100px' }}
            >
              <div
                className="h-px flex-grow mr-8"
                style={{ background: 'linear-gradient(to right, rgba(168, 168, 168, 0.5), transparent)', maxWidth: '140px' }}
              />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(168, 168, 168, 0.8)' }}>
                Income / Stability
              </div>
            </motion.div>

            {/* Growth */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center"
              style={{ marginBottom: '100px' }}
            >
              <div
                className="h-px flex-grow mr-8"
                style={{ background: 'linear-gradient(to right, rgba(168, 168, 168, 0.5), transparent)', maxWidth: '140px' }}
              />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(168, 168, 168, 0.8)' }}>
                Growth
              </div>
            </motion.div>

            {/* Adaptive */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center"
              style={{ marginBottom: '100px' }}
            >
              <div
                className="h-px flex-grow mr-8"
                style={{ background: 'linear-gradient(to right, rgba(168, 168, 168, 0.5), transparent)', maxWidth: '140px' }}
              />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(168, 168, 168, 0.8)' }}>
                Adaptive
              </div>
            </motion.div>

            {/* Lifestyle - Top layer with glow - completely still */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex items-center relative"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at left, rgba(245, 245, 243, 0.15) 0%, transparent 70%)',
                  height: '80px',
                  top: '-30px',
                }}
              />
              <div
                className="h-px flex-grow mr-8 relative z-10"
                style={{ background: 'linear-gradient(to right, #F5F5F3, transparent)', maxWidth: '140px' }}
              />
              <div className="relative z-10" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F5F5F3' }}>
                Lifestyle
              </div>
            </motion.div>
          </div>
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-24 text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.375rem',
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#A8A8A8',
          }}
        >
          "Capital flows through the system.<br />Life is funded by what remains."
        </motion.div>
      </motion.div>
    </section>
  );
}