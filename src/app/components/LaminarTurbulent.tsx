import { motion } from 'motion/react';
import { useInView } from './useInView';

export function LaminarTurbulent() {
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
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-20">
          {/* Turbulent - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div
              className="mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#A8A8A8',
              }}
            >
              Turbulent Flow
            </div>
            <div className="relative h-[450px] flex items-center justify-center overflow-hidden" style={{ background: 'rgba(28, 61, 43, 0.1)' }}>
              {/* Simplified chaotic intersecting lines */}
              <svg width="100%" height="100%" className="absolute inset-0" viewBox="0 0 300 450">
                {[...Array(18)].map((_, i) => {
                  const startX = Math.random() * 300;
                  const startY = Math.random() * 450;
                  const endX = Math.random() * 300;
                  const endY = Math.random() * 450;
                  const midX = Math.random() * 300;
                  const midY = Math.random() * 450;
                  
                  return (
                    <motion.path
                      key={i}
                      d={`M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`}
                      stroke="#A8A8A8"
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.25"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.25 } : {}}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.04,
                        ease: 'easeInOut',
                      }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Laminar - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div
              className="mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Laminar Flow
            </div>
            <div className="relative h-[450px] flex items-center justify-center overflow-hidden" style={{ background: 'rgba(28, 61, 43, 0.2)' }}>
              {/* Clean parallel lines */}
              {[...Array(14)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 right-0 h-px"
                  style={{
                    top: `${12 + i * 6.5}%`,
                    background: 'linear-gradient(to right, transparent, rgba(28, 61, 43, 0.6), transparent)',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.06,
                    ease: 'easeInOut',
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    style={{
                      background: 'linear-gradient(to right, transparent, rgba(28, 61, 43, 0.3), transparent)',
                    }}
                    animate={{
                      x: ['0%', '100%'],
                    }}
                    transition={{
                      duration: 5 + i * 0.3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
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
          "When structure is aligned, capital no longer collides with itself."
        </motion.div>
      </motion.div>
    </section>
  );
}