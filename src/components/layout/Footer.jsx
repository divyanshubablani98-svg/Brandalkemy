import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Linkedin, Twitter, Instagram, Github } from '../shared/SocialIcons';
import logoImg from '../../assets/logo.png';
import Container from '../shared/Container';
import Button from '../shared/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { label: 'Search Engine Optimization', path: '/services#seo' },
    { label: 'Performance Marketing', path: '/services#performance-marketing' },
    { label: 'Social Media Marketing', path: '/services#social-media' },
    { label: 'Google & Meta Ads', path: '/services#google-meta-ads' },
    { label: 'Content Marketing', path: '/services#content-marketing' },
    { label: 'Branding & Creative', path: '/services#branding-creative' },
    { label: 'Lead Generation', path: '/services#lead-generation' },
    { label: 'Email Marketing', path: '/services#email-marketing' },
    { label: 'Analytics & CRO', path: '/services#analytics-cro' },
    { label: 'AI Marketing', path: '/services#ai-marketing' },
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/work' },
    { label: 'Blog & Insights', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-onyx border-t border-onyx-border relative overflow-hidden text-white font-sans pt-16 pb-12">
      {/* Background radial alchemy glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amethyst/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-onyx-border/80">
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="BrandAlkemy Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="font-poppins font-extrabold text-2xl text-white tracking-tight block">
                  Brand<span className="text-amber">Alkemy</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  The Art of Brand Transformation
                </span>
              </div>
            </Link>

            <p className="text-neutral-300 text-sm leading-relaxed max-w-sm">
              We transform brands through the art and science of digital growth. Turning raw market potential into exponential enterprise momentum.
            </p>

            <div className="p-4 rounded-xl bg-onyx-card border border-amethyst/30 space-y-2">
              <span className="text-xs font-poppins font-semibold text-amber uppercase tracking-wider block">
                Brand + Alchemy Formula:
              </span>
              <p className="text-xs text-neutral-300 font-mono">
                Strategy + Creativity + Technology + Data = Transformation
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-onyx-light border border-onyx-border flex items-center justify-center text-neutral-300 hover:text-amber hover:border-amber transition-colors"
                aria-label="BrandAlkemy on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-onyx-light border border-onyx-border flex items-center justify-center text-neutral-300 hover:text-amber hover:border-amber transition-colors"
                aria-label="BrandAlkemy on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-onyx-light border border-onyx-border flex items-center justify-center text-neutral-300 hover:text-amber hover:border-amber transition-colors"
                aria-label="BrandAlkemy on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-onyx-light border border-onyx-border flex items-center justify-center text-neutral-300 hover:text-amber hover:border-amber transition-colors"
                aria-label="BrandAlkemy on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-poppins font-bold text-sm tracking-wider uppercase text-amber">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-300 hover:text-amber transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amethyst group-hover:bg-amber transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-poppins font-bold text-sm tracking-wider uppercase text-amber">
              Our Capabilities
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {servicesList.map((svc, i) => (
                <li key={i}>
                  <Link
                    to={svc.path}
                    className="text-xs text-neutral-300 hover:text-amber transition-colors duration-200 block truncate"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Transformation (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-poppins font-bold text-sm tracking-wider uppercase text-amber">
              Initiate Contact
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div>
                  <span className="block text-neutral-400 font-mono">Inquiries & Briefs:</span>
                  <a href="mailto:brandalkemy@gmail.com" className="text-white hover:text-amber transition-colors">
                    brandalkemy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div>
                  <span className="block text-neutral-400 font-mono">Direct Strategy Line:</span>
                  <a href="tel:+919079251096" className="text-white hover:text-amber transition-colors">
                    +91 9079251096
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div>
                  <span className="block text-neutral-400 font-mono">Visit Us:</span>
                  <span className="text-white leading-relaxed block">
                    1/234 Housing Board Colony, Backside of Community Hall, Pratap Nagar, Udaipur, 313001
                  </span>
                </div>
              </div>
            </div>

            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="w-full justify-center shadow-amber-glow"
            >
              Start Your Transformation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} BrandAlkemy Agency. All rights reserved. The Art of Brand Transformation.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-amber transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-amber transition-colors">
              Terms of Engagement
            </Link>
            <Link to="/contact" className="hover:text-amber transition-colors">
              Security & Attribution
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
