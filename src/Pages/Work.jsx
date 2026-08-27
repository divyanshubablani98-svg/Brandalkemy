import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Info } from 'lucide-react';
import Container from '../components/shared/Container';
import ProjectCard from '../components/shared/ProjectCard';
import FinalCTA from '../components/home/FinalCTA';
import { workProjectsData } from '../data/workProjects';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = ['All', 'Branding', 'Social Media', 'SEO', 'Performance', 'Creative'];

  const filteredProjects = activeFilter === 'All'
    ? workProjectsData
    : workProjectsData.filter((project) => project.category === activeFilter);

  return (
    <div className="w-full bg-onyx text-white">
      {/* 1. Header Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-amethyst/30 via-onyx to-onyx border-b border-onyx-border">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amethyst/20 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-onyx-card border border-amethyst/50 text-amber text-xs font-poppins font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber" />
            <span>Case Studies & Blueprints</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-poppins font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            From Strategy to{' '}
            <span className="bg-gradient-to-r from-amber via-white to-amber bg-clip-text text-transparent">
              Impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            Explore our strategic blueprints and execution architectures across varied sectors. Click any case study to inspect the challenge, strategy, execution, and outcomes.
          </motion.p>

          {/* Placeholder Transparency Notice */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-onyx-card/80 border border-white/10 text-xs text-neutral-400 max-w-2xl text-left"
          >
            <Info className="w-4 h-4 text-amber shrink-0" />
            <span>
              <strong>Transparency Note:</strong> Case studies below showcase our structured delivery frameworks with placeholder metadata. Real client engagements and private metrics remain protected under client NDAs.
            </span>
          </motion.div>
        </Container>
      </section>

      {/* 2. Filter Bar & Grid */}
      <section className="py-16 bg-onyx relative min-h-[600px]">
        <Container>
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full font-poppins font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-amber text-onyx shadow-amber-glow font-bold scale-105'
                      : 'bg-onyx-card text-neutral-300 border border-onyx-border hover:border-amethyst hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* 3. Final CTA */}
      <FinalCTA
        badge="Your Growth Engine"
        title="Ready to Build Your Own Success Story?"
        subtitle="Let's craft a bespoke growth architecture that accelerates your brand ahead of industry competitors."
        buttonText="Start Your Transformation"
      />
    </div>
  );
}
