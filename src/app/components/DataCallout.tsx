import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ReactNode } from 'react';

interface DataCalloutProps {
  label: string;
  children: ReactNode;
}

export function DataCallout({ label, children }: DataCalloutProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="my-16 p-10 border border-stone-300"
      style={{
        background: 'rgba(168, 168, 168, 0.05)',
      }}
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
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.95rem',
          fontWeight: 300,
          lineHeight: 1.7,
          color: '#0B0B0C',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
