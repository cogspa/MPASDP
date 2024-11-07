import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface GalleryProps {
  projects: Project[];
}

const Gallery: React.FC<GalleryProps> = ({ projects }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">MPA SDP Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;