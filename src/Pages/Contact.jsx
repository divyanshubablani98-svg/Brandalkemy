import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Linkedin, Twitter, Instagram } from '../components/shared/SocialIcons';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';
import { servicesData } from '../data/services';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    serviceRequired: prefilledService || '',
    budgetRange: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  const budgetOptions = [
    'Select estimated monthly budget',
    '$5,000 - $10,000 / month',
    '$10,000 - $25,000 / month',
    '$25,000 - $50,000 / month',
    '$50,000+ / month',
    'Custom Project / Enterprise Scope',
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.serviceRequired || formData.serviceRequired === '') {
      newErrors.serviceRequired = 'Please select a primary service';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least a brief summary of your project (min 10 chars)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Wire backend API / Webhook endpoint (e.g. POST to /api/contact or CRM webhook)
    console.log('BrandAlkemy Form Submission Payload:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-onyx text-white">
      {/* 1. Header Section */}
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
            <span>Initiate Transformation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-poppins font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Let's Create Something{' '}
            <span className="bg-gradient-to-r from-amber via-white to-amber bg-clip-text text-transparent">
              Worth Remembering.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto font-inter leading-relaxed"
          >
            Share your brand, your challenge, and your growth goals. Our partners will analyze your ecosystem and present a concrete transformation roadmap.
          </motion.p>
        </Container>
      </section>

      {/* 2. Main Two-Column Form & Contact Details Section */}
      <section className="py-20 bg-onyx relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 bg-onyx-card border border-onyx-border rounded-2xl p-6 sm:p-10 shadow-xl"
            >
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-amber/20 border border-amber text-amber flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
                    Transmission Received.
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our senior strategy partners have received your brief and will review your brand details within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          website: '',
                          serviceRequired: '',
                          budgetRange: '',
                          message: '',
                        });
                      }}
                      className="text-amber hover:underline text-sm font-poppins font-semibold cursor-pointer"
                    >
                      Submit Another Inquiry &rarr;
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="border-b border-onyx-border pb-4 mb-6">
                    <h3 className="font-poppins font-bold text-2xl text-white">
                      Brand Discovery Intake
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Fill out the details below to initialize our strategy audit.
                    </p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Full Name <span className="text-amber">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jordan Vance"
                        className={`w-full px-4 py-3 rounded-lg bg-onyx-dark border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber transition-colors ${
                          errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-onyx-border focus:border-amber'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Company Name <span className="text-amber">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Nexus Innovations"
                        className={`w-full px-4 py-3 rounded-lg bg-onyx-dark border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber transition-colors ${
                          errors.company ? 'border-red-500 ring-1 ring-red-500' : 'border-onyx-border focus:border-amber'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Work Email <span className="text-amber">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jordan@company.com"
                        className={`w-full px-4 py-3 rounded-lg bg-onyx-dark border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber transition-colors ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-onyx-border focus:border-amber'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-onyx-dark border border-onyx-border focus:border-amber text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Company Website / Domain
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourbrand.com"
                      className="w-full px-4 py-3 rounded-lg bg-onyx-dark border border-onyx-border focus:border-amber text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                    />
                  </div>

                  {/* Service Required Dropdown & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Service Required <span className="text-amber">*</span>
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-onyx-dark border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber transition-colors ${
                          errors.serviceRequired ? 'border-red-500 ring-1 ring-red-500' : 'border-onyx-border focus:border-amber'
                        }`}
                      >
                        <option value="">Select primary service</option>
                        {servicesData.map((svc) => (
                          <option key={svc.id} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                        <option value="Full Omnichannel Growth Retainer">Full Omnichannel Growth Retainer</option>
                      </select>
                      {errors.serviceRequired && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.serviceRequired}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Estimated Budget Range
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-onyx-dark border border-onyx-border focus:border-amber text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber transition-colors"
                      >
                        {budgetOptions.map((opt, i) => (
                          <option key={i} value={i === 0 ? '' : opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Your Brand Challenge & Goals <span className="text-amber">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current bottlenecks, target revenue benchmarks, and what transformation you want to achieve..."
                      className={`w-full px-4 py-3 rounded-lg bg-onyx-dark border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber transition-colors ${
                        errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-onyx-border focus:border-amber'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={isSubmitting ? null : Send}
                    className="w-full justify-center shadow-amber-glow font-bold"
                  >
                    {isSubmitting ? 'Transmuting Transmission...' : 'Start the Conversation'}
                  </Button>

                  <p className="text-[11px] text-neutral-400 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber" />
                    <span>Your information is protected under mutual non-disclosure standard.</span>
                  </p>
                </form>
              )}
            </motion.div>

            {/* Right Column: Contact Details & Direct Advisory (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Direct Info Card */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-amethyst/30 via-onyx-card to-onyx border border-amethyst/40 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold block">
                  INITIATE CONTACT
                </span>
                <h3 className="font-poppins font-extrabold text-2xl text-white">
                  Headquarters & Studio
                </h3>

                <div className="space-y-4 text-sm text-neutral-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-onyx border border-amber/30 text-amber flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-mono">Inquiries & Briefs:</span>
                      <a href="mailto:brandalkemy@gmail.com" className="text-white hover:text-amber font-semibold transition-colors">
                        brandalkemy@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-onyx border border-amber/30 text-amber flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-mono">Direct Strategy Line:</span>
                      <a href="tel:+919079251096" className="text-white hover:text-amber font-semibold transition-colors">
                        +91 9079251096
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-onyx border border-amber/30 text-amber flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-mono">Visit Us:</span>
                      <span className="text-white font-medium block leading-relaxed">
                        1/234 Housing Board Colony, In front of Community Hall, Pratap Nagar, Udaipur
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-onyx border border-amber/30 text-amber flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block font-mono">Response Velocity:</span>
                      <span className="text-amber font-semibold">
                        Guaranteed within 24 business hours
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="pt-4 border-t border-onyx-border/80">
                  <span className="text-xs font-poppins font-semibold uppercase tracking-wider text-neutral-400 block mb-3">
                    Connect With Our Principals:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-lg bg-onyx border border-onyx-border flex items-center justify-center text-neutral-300 hover:text-amber hover:border-amber transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-lg bg-onyx border border-onyx-border flex items-center justify-center text-neutral-300 hover:text-amber hover:border-amber transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-lg bg-onyx border border-onyx-border flex items-center justify-center text-neutral-300 hover:text-amber hover:border-amber transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* What Happens Next Guarantee */}
              <div className="p-6 rounded-xl bg-onyx-card border border-onyx-border space-y-3">
                <h4 className="font-poppins font-bold text-sm text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber" />
                  <span>The Intake Protocol:</span>
                </h4>
                <ol className="space-y-2 text-xs text-neutral-300 list-decimal list-inside leading-relaxed font-inter">
                  <li><strong>Diagnostic Audit:</strong> We analyze your current funnel telemetry & category ranking.</li>
                  <li><strong>Executive Briefing:</strong> A 30-minute private strategy walkthrough.</li>
                  <li><strong>Custom Blueprint:</strong> Delivered within 5 business days with clear deliverables & milestones.</li>
                </ol>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}