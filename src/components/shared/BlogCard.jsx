import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, ArrowRight, X } from 'lucide-react';
import Button from './Button';

export default function BlogCard({ post, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.06 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        className="group bg-onyx-card border border-onyx-border/80 hover:border-amethyst/50 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover"
      >
        <div>
          {/* Alchemy Graphic Header */}
          <div className="h-48 w-full bg-gradient-to-br from-amethyst/40 via-onyx-card to-onyx-dark p-5 relative flex flex-col justify-between overflow-hidden border-b border-onyx-border">
            {/* Geometric accents */}
            <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none translate-x-4 translate-y-4">
              <svg width="140" height="140" viewBox="0 0 100 100">
                <polygon points="50,10 90,90 10,90" fill="none" stroke="#FCCF07" strokeWidth="1.5" />
                <circle cx="50" cy="55" r="25" fill="none" stroke="#FFFFFF" strokeWidth="1" />
              </svg>
            </div>

            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-onyx/80 backdrop-blur-sm border border-amber/30 text-amber text-xs font-poppins font-semibold">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-400 font-inter">
                <Clock className="w-3.5 h-3.5 text-amber" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <div className="z-10">
              <span className="text-[11px] text-neutral-400 font-mono flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber" />
                <span>{post.publishDate}</span>
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            <h3 className="font-poppins font-bold text-lg sm:text-xl text-white group-hover:text-amber transition-colors duration-300 mb-3 leading-snug">
              {post.title}
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4 font-inter line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            {post.tags && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded bg-onyx-light text-neutral-400 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Link */}
        <div className="p-6 pt-0 mt-auto">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full pt-4 border-t border-onyx-border/60 flex items-center justify-between text-sm font-poppins font-semibold text-white group-hover:text-amber transition-colors duration-300 cursor-pointer"
          >
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 text-amber transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </div>
      </motion.article>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-onyx border border-amethyst/50 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 text-white"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-onyx-light border border-onyx-border text-neutral-300 hover:text-amber hover:border-amber flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Meta */}
              <div className="mb-6 pr-12">
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mb-3">
                  <span className="px-3 py-1 rounded-full bg-amethyst/40 border border-amethyst text-amber font-poppins font-semibold">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.publishDate}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-white leading-tight mb-4">
                  {post.title}
                </h1>

                <div className="flex items-center gap-3 py-3 border-y border-onyx-border text-xs text-neutral-300">
                  <div className="w-8 h-8 rounded-full bg-amethyst flex items-center justify-center text-amber font-bold text-xs">
                    BA
                  </div>
                  <div>
                    <span className="font-semibold text-white block">{post.author.name}</span>
                    <span className="text-neutral-400">{post.author.role}</span>
                  </div>
                </div>
              </div>

              {/* Excerpt Lead */}
              <p className="text-lg text-amber-light/90 font-medium leading-relaxed mb-8 bg-onyx-light/60 p-4 rounded-xl border-l-4 border-amber">
                {post.excerpt}
              </p>

              {/* Content Sections with Semantic Heading Structure for SEO */}
              <div className="space-y-6 text-neutral-200 text-base leading-relaxed mb-8">
                {post.content ? (
                  post.content.map((sec, i) => (
                    <section key={i} className="space-y-3">
                      <h2 className="text-xl sm:text-2xl font-poppins font-bold text-white pt-2 text-glow-amethyst">
                        {sec.heading}
                      </h2>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-neutral-300 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </section>
                  ))
                ) : (
                  <p>{post.excerpt}</p>
                )}
              </div>

              {/* Article Footer CTA */}
              <div className="pt-6 border-t border-onyx-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">
                  Published by BrandAlkemy Research & Strategy
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
