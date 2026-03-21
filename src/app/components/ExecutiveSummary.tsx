import { motion } from 'motion/react';
import { useInView } from './useInView';

export function ExecutiveSummary() {
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
        className="max-w-3xl mx-auto"
      >
        <h2
          className="mb-20"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: '#0B0B0C',
          }}
        >
          Executive Summary
        </h2>

        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: 300,
            lineHeight: 2,
            color: '#0B0B0C',
          }}
        >
          <p className="mb-10">
            Traditional financial planning asks families to construct portfolios based on risk tolerance, time horizon, and expected returns. This approach treats wealth as a single entity to be optimized, balanced, and monitored.
          </p>

          <p className="mb-10">
            But wealth is not a portfolio. It is a system designed to fund life—predictably, resiliently, and without interruption.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="my-20 py-2 pl-0"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: '#1C3D2B',
            }}
          >
            "Capital flows through the system. Life is funded by what remains."
          </motion.div>

          <p className="mb-10">
            The Inverse Waterfall is a structural framework that reorients capital flow. Rather than drawing income from the top of a portfolio and hoping it lasts, this model builds from the bottom up—layering capital by purpose, movement, and structural role.
          </p>

          <p className="mb-10">
            The result is not optimization. It is insulation. The system absorbs volatility, so life does not.
          </p>

          <p>
            This paper introduces the design principles, flow mechanics, and behavioral resilience of a capital architecture built to separate what moves from what must remain still.
          </p>
        </div>
      </motion.div>
    </section>
  );
}