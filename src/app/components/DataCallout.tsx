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
      className="my-20 py-12 px-0"
      style={{
        borderLeft: '1px solid rgba(28, 61, 43, 0.3)',
        paddingLeft: '3rem',
      }}
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
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          fontWeight: 300,
          lineHeight: 1.9,
          color: '#0B0B0C',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}