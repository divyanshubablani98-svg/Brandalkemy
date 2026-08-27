import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Lightbulb,
  BarChart2,
  Zap,
  Target,
  Cpu,
  MessageSquare,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';

export default function WhyBrandAlkemy() {
  const differentiators = [
    {
      icon: Compass,
      title: 'Strategy-First Approach',
      description: 'We never run tactics in a vacuum. Every ad, campaign, and pixel is rooted in deep positioning and market intelligence.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Thinking',
      description: 'Audacious, memorable design systems and storytelling that disrupt boring category norms and capture cultural attention.',
    },
    {
      icon: BarChart2,
      title: 'Data-Driven Marketing',
      description: 'No guessing or vanity metrics. We build server-side telemetry and single-source-of-truth attribution models.',
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      description: 'Disciplined customer acquisition science engineered to maximize Return on Ad Spend (ROAS) and lower blended CAC.',
    },
    {
      icon: Target,
      title: 'Conversion Optimization',
      description: 'Continuous split-testing, behavioral heatmapping, and UX refinement to double funnel throughput.',
    },
    {
      icon: Cpu,
      title: 'AI-Powered Solutions',
      description: 'Leveraging generative asset synthesis and predictive machine learning models for 10x marketing velocity.',
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Direct executive access, live performance dashboards, and honest advisory. No agency fluff or hidden fees.',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Growth',
      description: 'We construct durable brand equity and customer retention engines that compound enterprise valuation year over year.',
    },
  ];

  return (
    <section className="py-24 bg-onyx-dark relative overflow-hidden border-t border-onyx-border">
      {/* Ambient gradient */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amethyst/15 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <SectionHeading
          badge="The BrandAlkemy Edge"
          title="We Don't Just Market Brands. We Build Momentum."
          subtitle="Most agencies focus on either brand aesthetics or raw media buying. We bridge the gap, merging creative alchemy with rigorous performance engineering."
        />

        {/* 8 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-xl bg-onyx-card border border-onyx-border/80 hover:border-amethyst/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-card-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-onyx-light border border-amethyst/30 group-hover:border-amber/60 flex items-center justify-center text-amber mb-5 transition-colors duration-300">
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-white group-hover:text-amber transition-colors duration-300 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed font-inter">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-onyx-border/50 flex items-center gap-2 text-xs text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber" />
                  <span>Standard of Excellence</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
