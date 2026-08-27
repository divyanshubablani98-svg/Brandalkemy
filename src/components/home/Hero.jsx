import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Compass } from 'lucide-react';
import Container from '../shared/Container';
import Button from '../shared/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-onyx pt-12 pb-20">
      {/* Background Alchemy Gradient & Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-amethyst/25 via-onyx to-onyx pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] bg-amethyst/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Interactive/Animated Geometric Alchemy Canvas Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Alchemy Triangle Geometry */}
          <motion.polygon
            points="720,180 960,600 480,600"
            stroke="#FCCF07"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "720px 460px" }}
          />
          <motion.polygon
            points="720,680 920,320 520,320"
            stroke="#4F0F5D"
            strokeWidth="1.5"
            fill="none"
            initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "720px 460px" }}
          />
          {/* Orbital rings */}
          <circle cx="720" cy="460" r="280" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="6 6" />
          <circle cx="720" cy="460" r="380" stroke="#FCCF07" strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>
      </div>

      <Container className="relative z-10 text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-onyx-card/90 border border-amethyst/50 text-amber text-xs sm:text-sm font-poppins font-semibold tracking-wider uppercase mb-8 shadow-lg shadow-black/40 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-amber animate-spin" style={{ animationDuration: '6s' }} />
          <span>The Art of Brand Transformation</span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="font-poppins font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white max-w-5xl mx-auto leading-[1.08]"
        >
          Transform Your Brand.{' '}
          <span className="block mt-2 bg-gradient-to-r from-amber via-white to-amber bg-clip-text text-transparent">
            Accelerate Your Growth.
          </span>
        </motion.h1>

        {/* Supporting Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto font-inter font-normal leading-relaxed"
        >
          We fuse deep brand strategy, disruptive creativity, advanced technology, and ruthless performance marketing to turn market challengers into dominant category leaders.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            className="w-full sm:w-auto shadow-amber-glow"
          >
            Start Your Transformation
          </Button>

          <Button
            to="/work"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Our Work
          </Button>
        </motion.div>

        {/* Bottom Trust Indicators / Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="mt-16 sm:mt-20 pt-10 border-t border-onyx-border/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left"
        >
          <div className="flex items-start gap-3 p-3 rounded-lg bg-onyx-card/40 border border-white/5">
            <div className="p-2 rounded bg-amethyst/30 text-amber mt-0.5">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-poppins font-bold text-sm text-white">Strategy-First</span>
              <span className="text-xs text-neutral-400">Positioning & Moats</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-onyx-card/40 border border-white/5">
            <div className="p-2 rounded bg-amethyst/30 text-amber mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-poppins font-bold text-sm text-white">Creative Fire</span>
              <span className="text-xs text-neutral-400">Iconic Brand Identities</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-onyx-card/40 border border-white/5">
            <div className="p-2 rounded bg-amethyst/30 text-amber mt-0.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-poppins font-bold text-sm text-white">Performance</span>
              <span className="text-xs text-neutral-400">Scalable Paid Media</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-onyx-card/40 border border-white/5">
            <div className="p-2 rounded bg-amethyst/30 text-amber mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-poppins font-bold text-sm text-white">Data Rigor</span>
              <span className="text-xs text-neutral-400">Predictive Attribution</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
