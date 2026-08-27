import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';
import ServiceCard from '../shared/ServiceCard';
import Button from '../shared/Button';
import { servicesData } from '../../data/services';

export default function ServicesPreview() {
  // 8 preview services as specified in brief
  const previewServices = servicesData.slice(0, 8);

  return (
    <section className="py-24 bg-onyx-dark relative overflow-hidden border-t border-onyx-border">
      {/* Subtle Alchemy Ambient Light */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-amethyst/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Integrated Capabilities"
          title="Everything Your Brand Needs to Grow."
          subtitle="We eliminate fragmented marketing silos by orchestrating every growth channel through a single, unified transmutation framework."
        />

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {previewServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom "View All Services" Action */}
        <div className="mt-14 text-center">
          <Button
            to="/services"
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            className="border-amethyst/50 hover:border-amber"
          >
            View All 10 Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
