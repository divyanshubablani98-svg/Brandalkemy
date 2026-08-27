import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Palette, Rocket, TrendingUp, Sparkles } from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

export default function Introduction() {
  const [activeStep, setActiveStep] = useState(2); // default to CREATIVE

  const alchemySteps = [
    {
      id: 'idea',
      label: 'IDEA',
      subtitle: 'Raw Market Potential',
      icon: Lightbulb,
      description: 'Every profound transformation begins with an unrefined spark: understanding core customer desire, market voids, and latent brand truth.',
    },
    {
      id: 'strategy',
      label: 'STRATEGY',
      subtitle: 'Architectural Blueprint',
      icon: Compass,
      description: 'Distilling raw intent into defensible positioning, customer journeys, channel architectures, and economic moats.',
    },
    {
      id: 'creative',
      label: 'CREATIVE',
      subtitle: 'Resonant Expression',
      icon: Palette,
      description: 'Synthesizing strategy into magnetic visual design systems, provocative storytelling, and unforgettable brand moments.',
    },
    {
      id: 'performance',
      label: 'PERFORMANCE',
      subtitle: 'Precision Engine',
      icon: Rocket,
      description: 'Activating full-funnel media distribution, ruthless testing loops, algorithmic optimization, and conversion science.',
    },
    {
      id: 'growth',
      label: 'GROWTH',
      subtitle: 'Enterprise Momentum',
      icon: TrendingUp,
      description: 'Compounding brand equity and recurring revenue that turns one-time purchasers into generational market advocates.',
    },
  ];

  return (
    <section className="py-24 bg-onyx relative overflow-hidden border-t border-onyx-border">
      {/* Background Subtle Amethyst Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amethyst/10 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <SectionHeading
          badge="The Transmutation Process"
          title="Where Brands Meet Alchemy."
          subtitle="In ancient alchemy, the quest was to turn base metals into gold. At BrandAlkemy, we turn raw ideas into strategic clarity, strategies into unforgettable experiences, and experiences into compounding enterprise growth."
        />

        {/* Horizontal Process Flow / Alchemy Nodes */}
        <div className="mt-14 max-w-5xl mx-auto">
          {/* Node Track Header */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-10 left-8 right-8 h-[2px] bg-gradient-to-r from-amethyst via-amber to-amethyst opacity-40 z-0" />

            {alchemySteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 cursor-pointer p-5 rounded-xl border transition-all duration-300 flex flex-col items-center text-center ${
                    isActive
                      ? 'bg-gradient-to-b from-amethyst/40 to-onyx-card border-amber shadow-amber-glow scale-105'
                      : 'bg-onyx-card/80 border-onyx-border/80 hover:border-amethyst hover:bg-onyx-card'
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive
                        ? 'bg-amber text-onyx shadow-md'
                        : 'bg-onyx-light text-neutral-300 group-hover:text-amber'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Label */}
                  <span className={`font-poppins font-extrabold text-sm sm:text-base tracking-wider ${isActive ? 'text-amber' : 'text-white'}`}>
                    {step.label}
                  </span>

                  <span className="text-[11px] font-mono text-neutral-400 mt-1 uppercase tracking-tight">
                    {step.subtitle}
                  </span>

                  {/* Step Number Indicator */}
                  <span className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-onyx border border-white/10 text-neutral-400">
                    Step 0{idx + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Detailed Showcase Panel */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-onyx-card via-amethyst/20 to-onyx-card border border-amethyst/40 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber text-onyx shrink-0 hidden sm:flex">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold">
                    Stage 0{activeStep + 1} • {alchemySteps[activeStep].subtitle}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-poppins font-bold text-white mb-2">
                  The {alchemySteps[activeStep].label} Phase
                </h4>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {alchemySteps[activeStep].description}
                </p>
              </div>
            </div>

            {/* Step Navigation Dots */}
            <div className="flex items-center gap-2 shrink-0">
              {alchemySteps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStep === i ? 'bg-amber w-8' : 'bg-onyx-light hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
