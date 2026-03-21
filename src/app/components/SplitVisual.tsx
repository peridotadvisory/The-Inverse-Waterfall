import { motion } from 'motion/react';
import { useInView } from './useInView';

export function SplitVisual() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-48 px-8"
      style={{ background: '#F5F5F3' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative h-[600px] overflow-hidden">
          {/* Top half - Calm Life */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-0 left-0 right-0 h-1/2 flex items-center justify-center"
            style={{
              background: 'linear-gradient(180deg, rgba(245, 245, 243, 1) 0%, rgba(235, 230, 220, 1) 100%)',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 250, 240, 0.5) 0%, transparent 70%)',
              }}
            />
            <div
              className="relative z-10 opacity-30"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#0B0B0C',
              }}
            >
              Life Layer
            </div>
          </motion.div>

          {/* Bottom half - Dynamic System */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 h-1/2 flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #1C3D2B 0%, #0B0B0C 100%)',
            }}
          >
            {/* Flowing lines - contained energy */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${i * 4}%`,
                  width: '1.5px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent, rgba(168, 168, 168, 0.15), transparent)',
                }}
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 4 + i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}

            <div
              className="relative z-10 opacity-50"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#A8A8A8',
              }}
            >
              System Layer
            </div>
          </motion.div>

          {/* Divider line */}
          <div
            className="absolute left-0 right-0 h-px"
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#0B0B0C',
              zIndex: 10,
            }}
          />

          {/* Overlay text - EMOTIONAL PEAK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 20 }}
          >
            <div
              className="text-center px-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                fontWeight: 400,
                lineHeight: 1.4,
                color: '#0B0B0C',
                textShadow: '0 2px 20px rgba(245, 245, 243, 0.8), 0 0 40px rgba(245, 245, 243, 0.5)',
              }}
            >
              Your life isn't exposed to the system.
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-24 text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.375rem',
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#0B0B0C',
          }}
        >
          "The system absorbs movement.<br />Life remains unchanged."
        </motion.div>
      </motion.div>
    </section>
  );
}