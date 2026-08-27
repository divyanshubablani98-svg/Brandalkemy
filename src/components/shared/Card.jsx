import React from 'react';
import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  glow = false,
  variant = 'default', // 'default', 'amethyst', 'glass', 'outline'
  onClick,
  ...props
}) {
  const variantStyles = {
    default: 'bg-onyx-card border border-onyx-border/80 text-white',
    amethyst: 'bg-gradient-to-br from-amethyst/30 to-onyx-card border border-amethyst/30 text-white',
    glass: 'bg-onyx-card/80 backdrop-blur-md border border-white/10 text-white',
    outline: 'bg-transparent border border-onyx-border text-white hover:border-amethyst/40',
  };

  const hoverMotion = hover ? {
    whileHover: { y: -4, transition: { duration: 0.2, ease: "easeOut" } },
  } : {};

  return (
    <motion.div
      className={`rounded-xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden ${variantStyles[variant] || variantStyles.default} ${
        glow ? 'shadow-amethyst-glow' : 'hover:shadow-card-hover'
      } ${className}`}
      onClick={onClick}
      {...hoverMotion}
      {...props}
    >
      {children}
    </motion.div>
  );
}
