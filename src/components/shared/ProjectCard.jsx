import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Layers, Target, CheckCircle2, Award, Zap } from 'lucide-react';
import Button from './Button';

export default function ProjectCard({ project, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.08 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer bg-onyx-card border border-onyx-border/80 hover:border-amethyst/60 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-card-hover"
      >
        {/* Geometric Alchemy Visual Thumbnail Header */}
        <div className={`relative h-56 sm:h-64 w-full bg-gradient-to-br ${project.accentColor || 'from-amethyst to-onyx'} p-6 flex flex-col justify-between overflow-hidden`}>
          {/* Abstract geometric alchemy background overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 50,0 100,100" fill="none" stroke="#FCCF07" strokeWidth="0.75" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2,2" />
              <polygon points="50,15 85,85 15,85" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Top badges */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-onyx/80 backdrop-blur-sm border border-amber/30 text-amber text-xs font-poppins font-semibold">
              {project.categoryLabel}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/10 text-white/90 uppercase tracking-wider backdrop-blur-sm">
              Placeholder Case Study
            </span>
          </div>

          {/* Center Title in thumbnail */}
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-widest text-amber/90 font-medium block mb-1 font-inter">
              {project.industry}
            </span>
            <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white leading-tight group-hover:text-amber transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Quick hover trigger indicator */}
          <div className="relative z-10 flex items-center justify-between text-xs text-white/80 pt-2 border-t border-white/10">
            <span>{project.client}</span>
            <div className="w-8 h-8 rounded-full bg-onyx/80 border border-white/20 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-onyx group-hover:border-amber transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-5 font-inter">
              {project.summary}
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.services.map((svc, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-md bg-onyx-light text-neutral-300 border border-onyx-border"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-onyx-border/60 flex items-center justify-between text-xs">
            <span className="text-amber font-semibold font-poppins flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>{project.statBadge}</span>
            </span>
            <span className="text-neutral-400 group-hover:text-white font-medium transition-colors duration-200">
              View Case Blueprint &rarr;
            </span>
          </div>
        </div>
      </motion.div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-onyx border border-amethyst/50 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-onyx-light border border-onyx-border text-neutral-300 hover:text-amber hover:border-amber flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-8 pr-12">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-amethyst/40 border border-amethyst text-amber text-xs font-poppins font-semibold">
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {project.industry} • {project.client}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Four Pillars Breakdown */}
              <div className="space-y-6 mb-8">
                {/* 1. Challenge */}
                <div className="bg-onyx-card border border-onyx-border/80 rounded-xl p-5">
                  <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-amber mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-amber" />
                    <span>The Challenge</span>
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* 2. Strategy */}
                <div className="bg-onyx-card border border-onyx-border/80 rounded-xl p-5">
                  <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-amber mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber" />
                    <span>The Alchemy Strategy</span>
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {project.strategy}
                  </p>
                </div>

                {/* 3. Execution */}
                <div className="bg-onyx-card border border-onyx-border/80 rounded-xl p-5">
                  <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-amber mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber" />
                    <span>Execution & Systems</span>
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                    {project.execution}
                  </p>
                  {project.deliverablesList && (
                    <div className="mt-3 pt-3 border-t border-onyx-border">
                      <span className="text-xs text-neutral-400 font-semibold uppercase block mb-2">Delivered Assets & Architecture:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.deliverablesList.map((item, i) => (
                          <li key={i} className="text-xs text-neutral-300 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 4. Results */}
                <div className="bg-gradient-to-br from-amethyst/30 to-onyx-card border border-amethyst/50 rounded-xl p-5">
                  <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-amber mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber" />
                    <span>Outcome & Strategic Impact</span>
                  </h4>
                  <p className="text-white text-sm leading-relaxed font-medium">
                    {project.results}
                  </p>
                  <p className="text-[11px] text-neutral-400 italic mt-2">
                    Note: Structured placeholder project representation. Detailed enterprise metrics and private client identities are kept confidential under NDA.
                  </p>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-onyx-border">
                <span className="text-xs text-neutral-400 text-center sm:text-left">
                  Ready to architect a tailored transformation for your brand?
                </span>
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  onClick={() => setIsOpen(false)}
                >
                  Start Your Transformation
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
