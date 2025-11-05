
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-3xl shadow-soft dark:shadow-soft-dark border border-white/30 dark:border-slate-700/50 p-6 md:p-8 ${className}`}
    >
      {title && <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">{title}</h2>}
      {children}
    </motion.div>
  );
};

export default Card;
