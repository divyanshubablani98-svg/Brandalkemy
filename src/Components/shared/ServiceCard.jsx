import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCard({ service, index = 0, detailed = false }) {
  // Dynamically resolve icon from lucide-react
  const IconComponent = Icons[service.iconName] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-onyx-card border border-onyx-border/80 hover:border-amber/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover"
    >
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amethyst/10 via-transparent to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

      <div>
        {/* Top bar with icon and index */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-lg bg-onyx-light border border-amethyst/30 group-hover:border-amber/60 flex items-center justify-center text-amber transition-colors duration-300 group-hover:scale-105">
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="font-poppins font-bold text-xs text-neutral-500 tracking-wider">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white group-hover:text-amber transition-colors duration-300 mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-inter">
          {detailed ? service.fullDescription : service.shortDescription}
        </p>

        {/* Alchemy Formula Tag if detailed */}
        {detailed && service.alchemyFormula && (
          <div className="mb-6 p-3 rounded-lg bg-onyx-light/60 border border-amethyst/30 text-xs font-mono text-amber/90">
            <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px] font-sans">Transformation Formula:</span>
            {service.alchemyFormula}
          </div>
        )}

        {/* Deliverables Pills if detailed */}
        {detailed && service.deliverables && (
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2.5">Key Deliverables:</h4>
            <ul className="space-y-1.5">
              {service.deliverables.map((item, i) => (
                <li key={i} className="text-xs text-neutral-300 flex items-start gap-2">
                  <span className="text-amber mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA link */}
      <div className="pt-4 border-t border-onyx-border/60 flex items-center justify-between mt-auto">
        <Link
          to={`/services#${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-poppins font-semibold text-white group-hover:text-amber transition-colors duration-300"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4 text-amber transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
        {service.highlight && (
          <span className="text-[11px] text-neutral-400 font-medium px-2 py-0.5 rounded bg-onyx-light">
            {service.highlight}
          </span>
        )}
      </div>
    </motion.div>
  );
}
