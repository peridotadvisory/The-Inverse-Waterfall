import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ReactNode } from 'react';

interface QuoteBlockProps {
  children: ReactNode;
  background?: string;
}

export function QuoteBlock({ children, background = '#F5F5F3' }: QuoteBlockProps) {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-40 px-8"
      style={{ background }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            color: background === '#0B0B0C' ? '#F5F5F3' : '#1C3D2B',
          }}
        >
          {children}
        </div>
      </motion.div>
    </section>
  );
}