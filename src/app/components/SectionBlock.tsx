import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ReactNode } from 'react';

interface SectionBlockProps {
  title: string;
  children: ReactNode;
  background?: string;
}

export function SectionBlock({ title, children, background = '#F5F5F3' }: SectionBlockProps) {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-48 px-8"
      style={{ background }}
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
            color: background === '#0B0B0C' ? '#F5F5F3' : '#0B0B0C',
          }}
        >
          {title}
        </h2>

        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: 300,
            lineHeight: 2,
            color: background === '#0B0B0C' ? '#F5F5F3' : '#0B0B0C',
          }}
        >
          {children}
        </div>
      </motion.div>
    </section>
  );
}