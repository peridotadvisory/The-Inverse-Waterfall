import { motion } from 'motion/react';
import { useInView } from './useInView';

export function LaminarTurbulent() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-32 px-8"
      style={{ background: '#0B0B0C' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16">
          {/* Turbulent - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div
              className="mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#A8A8A8',
              }}
            >
              Turbulent Flow
            </div>
            <div className="relative h-[400px] bg-gradient-to-b from-stone-900 to-black p-8 flex items-center justify-center">
              {/* Chaotic intersecting lines */}
              <svg width="100%" height="100%" className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M ${Math.random() * 100} ${Math.random() * 100} 
                        Q ${Math.random() * 300} ${Math.random() * 300} 
                        ${Math.random() * 100 + 200} ${Math.random() * 300 + 50}`}
                    stroke="#A8A8A8"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{
                      duration: 2,
                      delay: i * 0.05,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
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
              className="mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#1C3D2B',
              }}
            >
              Laminar Flow
            </div>
            <div className="relative h-[400px] bg-gradient-to-b from-emerald-950 to-black p-8 flex items-center justify-center overflow-hidden">
              {/* Smooth parallel lines */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 right-0 h-px"
                  style={{
                    top: `${15 + i * 7}%`,
                    background: 'linear-gradient(to right, transparent, rgba(28, 61, 43, 0.8), transparent)',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.08,
                    ease: 'easeInOut',
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    style={{
                      background: 'linear-gradient(to right, transparent, rgba(28, 61, 43, 0.4), transparent)',
                    }}
                    animate={{
                      x: ['0%', '100%'],
                    }}
                    transition={{
                      duration: 4 + i * 0.3,
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
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.25rem',
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
