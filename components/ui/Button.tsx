import React from 'react';
import { motion } from 'framer-motion';

// FIX: Extend from motion.button's component props to resolve type conflicts
// with event handlers like onAnimationStart.
type ButtonProps = React.ComponentProps<typeof motion.button> & {
  variant?: 'primary' | 'green' | 'purple' | 'orange' | 'teal';
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const gradients = {
    primary: 'from-indigo-500 to-purple-500',
    green: 'from-green-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-amber-500',
    teal: 'from-teal-500 to-cyan-500',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`px-6 py-3 rounded-2xl font-bold text-white bg-gradient-to-r ${gradients[variant]} shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
    </motion.button>
  );
};

export default Button;
