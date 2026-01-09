import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/layout/SEO';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectCategories = ['All', 'Medical', 'Roads', 'Water', 'Buildings'];

  const projects = [
    {
      title: 'County Hospital Equipment Supply',
      category: 'Medical',
      description: 'Complete medical equipment supply for a 200-bed county referral hospital including ICU setup and surgical theaters.',
      imageUrl: ''
    },
    {
      title: 'Nairobi Highway Rehabilitation',
      category: 'Roads',
      description: 'Major road rehabilitation and resurfacing project covering 25km of busy urban highway with improved drainage.',
      imageUrl: ''
    },
    {
      title: 'Rural Water Supply Project',
      category: 'Water',
      description: 'Borehole drilling and water distribution system for remote communities serving over 5,000 residents.',
      imageUrl: ''
    },
    {
      title: 'Commercial Office Complex',
      category: 'Buildings',
      description: 'Construction of a 10-story commercial office building with modern amenities and sustainable features.',
      imageUrl: ''
    },
    {
      title: 'Medical Oxygen Plant Installation',
      category: 'Medical',
      description: 'Installation of PSA oxygen generation plant and piping network for regional hospital.',
      imageUrl: ''
    },
    {
      title: 'Urban Road Network Upgrade',
      category: 'Roads',
      description: 'Complete upgrade of urban road network including drainage, lighting, and pedestrian facilities.',
      imageUrl: ''
    },
    {
      title: 'Water Treatment Facility',
      category: 'Water',
      description: 'Construction of modern water treatment plant with capacity of 5 million liters per day.',
      imageUrl: ''
    },
    {
      title: 'Residential Housing Project',
      category: 'Buildings',
      description: 'Development of 50-unit affordable housing project with community amenities.',
      imageUrl: ''
    },
    {
      title: 'Laboratory Equipment Upgrade',
      category: 'Medical',
      description: 'Supply and installation of advanced laboratory equipment for research institution.',
      imageUrl: ''
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <SEO
        title="Our Projects"
        description="View our portfolio of successful projects in medical equipment supply, hospital construction, road works, and water infrastructure across Kenya."
        url="/projects"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gedwel-dark to-gedwel-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container-custom relative z-10 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Showcasing our commitment to excellence in construction and medical supply across Kenya.
          </p>
        </div>
      </section>

      {/* Project Filters */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${activeFilter === category
                  ? 'bg-gedwel-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold text-gedwel-blue">{filteredProjects.length}</span> projects
              {activeFilter !== 'All' && ` in ${activeFilter}`}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Statistics */}
      <section className="section-padding dark:bg-gray-800">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-gedwel-blue to-gedwel-light rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-gray-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-gray-200">Healthcare Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-gray-200">KM of Roads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10k+</div>
                <div className="text-gray-200">People Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title">Our Project Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Understanding client needs and project requirements'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning and resource allocation'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Professional implementation with quality control'
              },
              {
                step: '04',
                title: 'Handover',
                description: 'Project delivery and after-sales support'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gedwel-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gedwel-dark dark:text-white mb-2">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;