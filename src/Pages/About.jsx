import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Sparkles,
  Cpu,
  BarChart3,
  Target,
  Eye,
  CheckCircle2,
  Zap,
  Search,
  Flame
} from 'lucide-react';
import Container from '../components/shared/Container';
import SectionHeading from '../components/shared/SectionHeading';
import FinalCTA from '../components/home/FinalCTA';

export default function About() {
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      subtitle: 'Market & Identity Extraction',
      icon: Search,
      description: 'We audit your category landscape, customer psychographics, competitor vulnerabilities, and internal capabilities to find unexploited leverage points.',
      outputs: ['Competitor Moat Analysis', 'Customer Journey Telemetry', 'Brand Equity Diagnosis']
    },
    {
      step: '02',
      title: 'Strategize',
      subtitle: 'Positioning & Channel Map',
      icon: Compass,
      description: 'We engineer a definitive strategic framework: defining your unique category point of view, message hierarchy, unit economics, and multi-channel acquisition roadmap.',
      outputs: ['Category Point of View (POV)', 'Full-Funnel Media Architecture', 'CAC & LTV Financial Models']
    },
    {
      step: '03',
      title: 'Create',
      subtitle: 'Visual & Narrative Transmutation',
      icon: Flame,
      description: 'Our design and creative laboratory translates strategic clarity into magnetic visual systems, dynamic ad hooks, brand guidelines, and high-conversion landing assets.',
      outputs: ['Modular Design Systems', 'High-Velocity Ad Creatives', 'Conversion UX Blueprints']
    },
    {
      step: '04',
      title: 'Activate',
      subtitle: 'Precision Multi-Channel Launch',
      icon: Zap,
      description: 'We deploy campaigns across search, social, programmatic, email, and content ecosystems with flawless server-side event tracking and attribution pipelines.',
      outputs: ['Server-Side CAPI Integration', 'Multi-Tier Campaign Architecture', 'Dynamic Lifecycle Automation']
    },
    {
      step: '05',
      title: 'Optimize',
      subtitle: 'Continuous CRO & Split-Testing',
      icon: BarChart3,
      description: 'Through rigorous split testing, behavioral session recordings, and algorithmic bid management, we systematically eliminate funnel friction and maximize ROAS.',
      outputs: ['A/B/n Multi-Variant Testing', 'Heatmap Behavioral Diagnostics', 'Attribution & Signal Resolution']
    },
    {
      step: '06',
      title: 'Grow',
      subtitle: 'Compounding Enterprise Value',
      icon: Sparkles,
      description: 'We expand audience lifetime value, unlock incremental channels, and build lasting organic brand equity that elevates your overall company valuation.',
      outputs: ['Retention & LTV Expansion', 'Incremental Channel Scaling', 'Category Leadership Equity']
    }
  ];

  const philosophyPillars = [
    {
      icon: Compass,
      name: 'Strategy',
      role: 'The Foundation',
      text: 'Without positioning, marketing is merely noisy expense. We ground every action in sound economic theory and competitive differentiation.'
    },
    {
      icon: Flame,
      name: 'Creativity',
      role: 'The Spark',
      text: 'Human emotion drives human decision-making. We craft magnetic narratives and bold aesthetics that command undivided market attention.'
    },
    {
      icon: Cpu,
      name: 'Technology',
      role: 'The Multiplier',
      text: 'From AI generative pipelines to server-side infrastructure, modern marketing demands flawless technical craftsmanship.'
    },
    {
      icon: BarChart3,
      name: 'Data',
      role: 'The Compass',
      text: 'Telemetry replaces opinion. We measure real downstream conversion value to make objective, high-return capital allocations.'
    }
  ];

  return (
    <div className="w-full bg-onyx text-white">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-amethyst/30 via-onyx to-onyx border-b border-onyx-border">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amethyst/15 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-onyx-card border border-amethyst/50 text-amber text-xs font-poppins font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber" />
            <span>About BrandAlkemy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-poppins font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            The Art & Science of{' '}
            <span className="bg-gradient-to-r from-amber via-white to-amber bg-clip-text text-transparent">
              Brand Transformation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            We are a digital marketing agency built for ambitious leaders who refuse to accept average growth. We transform brands into market forces through strategic rigor and creative alchemy.
          </motion.p>
        </Container>
      </section>

      {/* 2. Who We Are & Why BrandAlkemy */}
      <section className="py-24 bg-onyx relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Who We Are Story */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-onyx-card border border-amber/30 text-amber text-xs font-poppins font-semibold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>
              <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                Architects of Market Momentum.
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-inter">
                BrandAlkemy was founded on a simple observation: the digital marketing landscape is split between creative agencies that produce beautiful work with no measurable ROI, and media buyers who burn budgets on uninspired ads with zero brand equity.
              </p>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-inter">
                We exist to unite these worlds. Our multidisciplinary collective of brand strategists, performance marketers, creative directors, data engineers, and growth hackers work as a cohesive unit to engineer compounding market dominance.
              </p>
            </motion.div>

            {/* Right Column: The Meaning of Brand + Alchemy */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-amethyst/30 via-onyx-card to-onyx border border-amethyst/40 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Sparkles className="w-32 h-32 text-amber" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold block mb-2">
                Brand + Alchemy Explained
              </span>
              <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white mb-4">
                What Is BrandAlkemy?
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-inter">
                <strong>Brand</strong> is your promise, your reputation, and the emotional connection your market holds with you.
                <br /><br />
                <strong>Alchemy</strong> is the ancient, mystical discipline of transmutation — taking ordinary, disparate elements and through precise reaction, turning them into gold.
                <br /><br />
                <strong>BrandAlkemy</strong> is the systematic transmutation of your raw market potential into an unforgettable, high-converting category leader.
              </p>

              <div className="p-4 rounded-xl bg-onyx border border-amber/30 text-amber text-xs font-mono">
                "We transform brands through the art and science of digital growth."
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. Our Philosophy: Strategy + Creativity + Technology + Data = Transformation */}
      <section className="py-24 bg-onyx-dark relative overflow-hidden border-y border-onyx-border">
        <Container>
          <SectionHeading
            badge="The Unified Equation"
            title="Our Philosophy"
            highlight="Strategy + Creativity + Technology + Data = Transformation"
            subtitle="True transformation happens at the intersection of these four essential elements. When perfectly balanced, they create an unstoppable growth catalyst."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {philosophyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="p-6 sm:p-8 rounded-xl bg-onyx-card border border-onyx-border hover:border-amber/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-card-hover"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-onyx-light border border-amethyst/30 group-hover:border-amber/60 flex items-center justify-center text-amber mb-6 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-amber font-semibold block mb-1">
                      {pillar.role}
                    </span>
                    <h3 className="font-poppins font-bold text-2xl text-white mb-3 group-hover:text-amber transition-colors">
                      {pillar.name}
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed font-inter">
                      {pillar.text}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-onyx-border/60 flex items-center justify-between text-xs text-neutral-400">
                    <span>Element 0{idx + 1}</span>
                    <span className="text-amber font-bold">+</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-24 bg-onyx relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-12 rounded-2xl bg-onyx-card border border-amethyst/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amethyst/30 border border-amethyst flex items-center justify-center text-amber mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold block mb-2">
                  Our Purpose
                </span>
                <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-inter">
                  To liberate ambitious brands from marketing mediocrity by engineering high-velocity, full-funnel digital systems that compound revenue, inspire audience devotion, and maximize enterprise valuation.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-onyx-border flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-amber" />
                <span>Committed to measurable business outcomes</span>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="p-8 sm:p-12 rounded-2xl bg-onyx-card border border-amethyst/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amethyst/30 border border-amethyst flex items-center justify-center text-amber mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold block mb-2">
                  Our Horizon
                </span>
                <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-inter">
                  To become the world's most trusted brand transmutation partner — setting the global benchmark for how modern enterprises combine psychological brand resonance with algorithmic performance dominance.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-onyx-border flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-amber" />
                <span>Pioneering the future of digital alchemy</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 5. Animated Horizontal Process Visual: Discover -> Strategize -> Create -> Activate -> Optimize -> Grow */}
      <section className="py-24 bg-onyx-dark relative overflow-hidden border-t border-onyx-border">
        <Container>
          <SectionHeading
            badge="The Methodology"
            title="The Six Stages of Transformation"
            subtitle="Our proprietary end-to-end framework that takes brands from ambiguous potential to market leadership."
          />

          {/* Process Timeline Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeProcess === idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveProcess(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-b from-amethyst/40 to-onyx-card border-amber shadow-amber-glow scale-105'
                      : 'bg-onyx-card/60 border-onyx-border/80 hover:border-amethyst hover:bg-onyx-card'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-amber font-bold">{step.step}</span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber' : 'text-neutral-400'}`} />
                  </div>
                  <span className={`font-poppins font-bold text-sm ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Process Detailed Panel */}
          <motion.div
            key={activeProcess}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-onyx-card via-amethyst/20 to-onyx-card border border-amethyst/50 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amethyst/40 border border-amber/30 text-amber text-xs font-mono">
                  <span>Phase {processSteps[activeProcess].step}</span>
                  <span>•</span>
                  <span>{processSteps[activeProcess].subtitle}</span>
                </div>
                <h3 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
                  {processSteps[activeProcess].title}
                </h3>
                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-inter">
                  {processSteps[activeProcess].description}
                </p>
              </div>

              <div className="lg:col-span-4 bg-onyx/80 p-6 rounded-xl border border-onyx-border space-y-3">
                <h4 className="font-poppins font-bold text-xs uppercase tracking-wider text-amber">
                  Key Strategic Deliverables:
                </h4>
                <ul className="space-y-2">
                  {processSteps[activeProcess].outputs.map((out, i) => (
                    <li key={i} className="text-xs sm:text-sm text-neutral-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 6. Final CTA */}
      <FinalCTA
        badge="Initiate Partnership"
        title="Ready to Transform Your Brand?"
        subtitle="Schedule an executive strategy session with our team to discover how BrandAlkemy can accelerate your digital growth."
        buttonText="Start Your Transformation"
      />
    </div>
  );
}