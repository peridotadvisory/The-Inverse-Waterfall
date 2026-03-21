import { motion } from 'motion/react';
import { useInView } from './useInView';

export function ClosingStatement() {
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
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2
          className="mb-24"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: '#F5F5F3',
          }}
        >
          A Different Standard
        </h2>

        <div
          className="space-y-10"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: 300,
            lineHeight: 2,
            color: '#A8A8A8',
          }}
        >
          <p>
            Wealth planning is not about maximizing returns. It is about designing systems that do not fail when tested.
          </p>

          <p>
            The Inverse Waterfall separates capital by function, not risk. It does not predict market behavior. It anticipates human need.
          </p>

          <p>
            This is not optimization. This is architecture.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-32 pt-16 border-t border-stone-800"
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
          <div style={{ opacity: 0.5 }}>Enduring Value Framework</div>
        </motion.div>
      </motion.div>
    </section>
  );
}