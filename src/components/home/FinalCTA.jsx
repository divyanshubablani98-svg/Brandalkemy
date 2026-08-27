import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../shared/Container';
import Button from '../shared/Button';

export default function FinalCTA({
  title = "Your Next Chapter Starts Here.",
  subtitle = "Transform your brand into something people notice, remember, and choose. Partner with an agency engineered for exponential growth.",
  buttonText = "Start Your Transformation",
  badge = "Begin The Transmutation",
}) {
  return (
    <section className="py-24 bg-onyx relative overflow-hidden">
      <Container>
        {/* Banner Card with Amethyst to Onyx Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl bg-gradient-to-br from-amethyst via-amethyst-dark to-onyx border border-amethyst-light/40 p-8 sm:p-14 lg:p-20 text-center overflow-hidden shadow-2xl shadow-amethyst/20"
        >
          {/* Alchemy Geometric Background Elements */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
              <polygon points="400,20 780,380 20,380" fill="none" stroke="#FCCF07" strokeWidth="1.5" />
              <circle cx="400" cy="220" r="140" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-onyx/80 border border-amber/40 text-amber text-xs sm:text-sm font-poppins font-semibold uppercase tracking-wider mb-6 shadow-md backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber animate-spin" style={{ animationDuration: '8s' }} />
              <span>{badge}</span>
            </div>

            {/* Title */}
            <h2 className="font-poppins font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed mb-10 max-w-2xl font-inter">
              {subtitle}
            </p>

            {/* Big Amber CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button
                to="/contact"
                variant="primary"
                size="xl"
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-amber-glow font-extrabold text-lg py-5 px-10"
              >
                {buttonText}
              </Button>

              <Button
                to="/services"
                variant="secondary"
                size="xl"
                className="w-full sm:w-auto border-white/30 text-white hover:border-amber"
              >
                Explore All Services
              </Button>
            </div>

            {/* Brand Assurance Note */}
            <p className="mt-8 text-xs text-neutral-300 font-mono tracking-wide">
              "We transform brands through the art and science of digital growth."
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
