import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Mail, Phone } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import Button from '../shared/Button';

export default function MobileMenu({ isOpen, onClose, navLinks }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-onyx/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
        >
          {/* Top Bar with Logo & Close */}
          <div className="flex items-center justify-between pb-6 border-b border-onyx-border">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="BrandAlkemy Logo Mark"
                className="h-9 w-auto object-contain"
              />
              <span className="font-poppins font-bold text-xl text-white tracking-tight">
                Brand<span className="text-amber">Alkemy</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-onyx-light border border-onyx-border text-neutral-300 hover:text-amber flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 space-y-4">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
              >
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-center justify-between text-2xl font-poppins font-bold tracking-tight py-2 transition-colors duration-200 ${
                      isActive ? 'text-amber pl-2 border-l-2 border-amber' : 'text-white hover:text-amber'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-5 h-5 text-amber opacity-0 group-hover:opacity-100 transition-opacity" />
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Bottom Actions & Contact */}
          <div className="pt-6 border-t border-onyx-border space-y-5">
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber" />
                <a href="mailto:brandalkemy@gmail.com" className="hover:text-amber transition-colors">
                  brandalkemy@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber" />
                <a href="tel:+919079251096" className="hover:text-amber transition-colors">
                  +91 9079251096
                </a>
              </div>
            </div>

            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-amber-glow"
              onClick={onClose}
            >
              Start Your Transformation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
