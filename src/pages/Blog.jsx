import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Search, BookOpen } from 'lucide-react';
import Container from '../components/shared/Container';
import BlogCard from '../components/shared/BlogCard';
import FinalCTA from '../components/home/FinalCTA';
import { blogPostsData, blogCategories } from '../data/blogPosts';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-onyx text-white">
      {/* 1. Header */}
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
            <span>Perspectives & Research</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-poppins font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Ideas That Move{' '}
            <span className="bg-gradient-to-r from-amber via-white to-amber bg-clip-text text-transparent">
              Brands Forward.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            In-depth analysis, growth frameworks, and tactical intelligence from our senior strategists on modern brand transformation.
          </motion.p>
        </Container>
      </section>

      {/* 2. Filters & Search */}
      <section className="py-12 bg-onyx border-b border-onyx-border/80">
        <Container>
          {/* Search bar & Category Chips */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, keywords..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-onyx-card border border-onyx-border focus:border-amber text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
              />
            </div>

            {/* Post Count Indicator */}
            <span className="text-xs font-mono text-neutral-400 hidden sm:block">
              Showing {filteredPosts.length} Articles
            </span>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {blogCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-poppins font-medium text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-amber text-onyx font-bold shadow-amber-glow scale-105'
                      : 'bg-onyx-card text-neutral-300 border border-onyx-border hover:border-amethyst hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Article Grid */}
      <section className="py-16 bg-onyx min-h-[500px]">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-onyx-card border border-onyx-border rounded-2xl p-8">
              <BookOpen className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-xl text-white mb-2">
                No matching articles found
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Try clearing your search query or choosing another category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="text-amber hover:underline text-sm font-semibold cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </Container>
      </section>

      {/* 4. Final CTA */}
      <FinalCTA
        badge="Direct Consultation"
        title="Want Custom Strategy Built for Your Brand?"
        subtitle="Apply the principles from our publications directly to your market. Connect with our senior directors today."
        buttonText="Start Your Transformation"
      />
    </div>
  );
}