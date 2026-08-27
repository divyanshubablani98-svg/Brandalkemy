import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center', // 'center', 'left', 'right'
  className = '',
  titleClassName = '',
  light = false,
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align] || alignClasses.center} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-onyx-card border border-amethyst/40 text-amber text-xs md:text-sm font-medium tracking-wide uppercase mb-4 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse"></span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className={`font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] ${
          light ? 'text-onyx' : 'text-white'
        } ${titleClassName}`}
      >
        {title}
        {highlight && (
          <span className="block mt-1 bg-gradient-to-r from-amber via-amber-light to-amber bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className={`mt-4 sm:mt-5 text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
            light ? 'text-onyx-light/80' : 'text-neutral-300'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
