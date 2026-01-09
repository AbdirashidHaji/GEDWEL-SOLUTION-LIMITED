const ProjectCard = ({ title, category, description }) => {
  const categoryColors = {
    'Medical': 'bg-blue-100 text-blue-800',
    'Roads': 'bg-green-100 text-green-800',
    'Water': 'bg-cyan-100 text-cyan-800',
    'Buildings': 'bg-orange-100 text-orange-800',
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in">
      {/* Image */}
      <div className="h-48 overflow-hidden bg-gray-200">
        <div className="w-full h-full bg-gradient-to-br from-gedwel-blue/20 to-gedwel-light/20 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gedwel-blue mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="text-gedwel-blue font-medium">Project Preview</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${categoryColors[category] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
          {category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gedwel-dark dark:text-white mb-3 group-hover:text-gedwel-blue dark:group-hover:text-blue-400 transition duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        {/* View Details Button */}
        <button className="text-gedwel-blue dark:text-blue-400 hover:text-gedwel-light dark:hover:text-blue-300 font-medium flex items-center space-x-2 transition duration-300 group">
          <span>View Details</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;