import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className }: Props) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
