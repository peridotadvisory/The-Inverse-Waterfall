import { motion } from 'motion/react';
import { useInView } from './useInView';

export function SplitVisual() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-32 px-8"
      style={{ background: '#F5F5F3' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative h-[500px] overflow-hidden">
          {/* Top half - Calm Life */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-0 left-0 right-0 h-1/2 flex items-center justify-center"
            style={{
              background: 'linear-gradient(180deg, rgba(245, 245, 243, 1) 0%, rgba(232, 228, 220, 1) 100%)',
            }}
          >
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#0B0B0C',
                opacity: 0.4,
              }}
            >
              Life Layer — Unchanged
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
            {/* Flowing lines */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${i * 5}%`,
                  width: '1px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent, rgba(168, 168, 168, 0.2), transparent)',
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}

            <div
              className="relative z-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#A8A8A8',
              }}
            >
              System Layer — Absorbing Movement
            </div>
          </motion.div>

          {/* Divider line */}
          <div
            className="absolute left-0 right-0 h-px"
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#0B0B0C',
            }}
          />
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
            color: '#0B0B0C',
          }}
        >
          "The system absorbs movement.<br />Life remains unchanged."
        </motion.div>
      </motion.div>
    </section>
  );
}
