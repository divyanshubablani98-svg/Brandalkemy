import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../shared/Container';
import SectionHeading from '../shared/SectionHeading';
import ProjectCard from '../shared/ProjectCard';
import Button from '../shared/Button';
import { workProjectsData } from '../../data/workProjects';

export default function WorkPreview() {
  // Top 3 featured case studies
  const previewProjects = workProjectsData.slice(0, 3);

  return (
    <section className="py-24 bg-onyx relative overflow-hidden border-t border-onyx-border">
      {/* Alchemy background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amethyst/15 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Featured Transformations"
          title="Work That Speaks for the Brand."
          subtitle="A preview of our strategic frameworks across high-growth verticals. Every engagement is custom-architected for maximum market impact."
        />

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA to Portfolio */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/work"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            className="shadow-amber-glow"
          >
            View Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
