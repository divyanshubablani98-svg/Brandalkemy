import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Sparkles, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';
import FinalCTA from '../components/home/FinalCTA';
import { servicesData } from '../data/services';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full bg-onyx text-white">
      {/* 1. Services Header */}
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
            <span>Full-Spectrum Capabilities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-poppins font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            The Ingredients of{' '}
            <span className="bg-gradient-to-r from-amber via-white to-amber bg-clip-text text-transparent">
              Digital Growth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            Each of our ten core disciplines is designed as a catalyst in the brand alchemy reaction. Deployed individually or orchestrated together for exponential market velocity.
          </motion.p>
        </Container>
      </section>

      {/* 2. Detailed Service Cards Grid */}
      <section className="py-20 bg-onyx relative overflow-hidden">
        <Container>
          <div className="space-y-12">
            {servicesData.map((service, index) => {
              const IconComponent = Icons[service.iconName] || Sparkles;

              return (
                <motion.div
                  key={service.id}
                  id={service.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="group relative rounded-2xl bg-onyx-card border border-onyx-border/80 hover:border-amethyst/60 p-8 sm:p-12 transition-all duration-300 hover:shadow-card-hover"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Details (7 cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-onyx-light border border-amethyst/40 group-hover:border-amber/60 flex items-center justify-center text-amber transition-colors duration-300">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                            Service 0{index + 1}
                          </span>
                          <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl text-white group-hover:text-amber transition-colors">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-inter">
                        {service.fullDescription}
                      </p>

                      {/* Transmutation Formula */}
                      {service.alchemyFormula && (
                        <div className="p-4 rounded-xl bg-onyx-dark border border-amethyst/30 text-xs sm:text-sm font-mono text-amber/90">
                          <span className="text-neutral-400 block mb-1 text-[11px] font-sans font-semibold uppercase tracking-wider">
                            Alchemy Formula:
                          </span>
                          {service.alchemyFormula}
                        </div>
                      )}
                    </div>

                    {/* Right Deliverables & CTA (5 cols) */}
                    <div className="lg:col-span-5 bg-onyx-dark/80 p-6 sm:p-8 rounded-xl border border-onyx-border flex flex-col justify-between h-full space-y-6">
                      <div>
                        <h3 className="font-poppins font-bold text-xs uppercase tracking-wider text-amber mb-4 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-amber" />
                          <span>Core Deliverables & Outputs</span>
                        </h3>
                        <ul className="space-y-2.5">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-onyx-border">
                        <Button
                          to={`/contact?service=${encodeURIComponent(service.title)}`}
                          variant="primary"
                          size="md"
                          icon={ArrowRight}
                          className="w-full justify-center shadow-amber-glow"
                        >
                          Request {service.shortTitle}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Final CTA */}
      <FinalCTA
        badge="Full Growth Suite"
        title="Need a Bespoke Combination of Services?"
        subtitle="We build tailored growth architectures combining our services into a cohesive, high-impact marketing system."
        buttonText="Start Your Transformation"
      />
    </div>
  );
}