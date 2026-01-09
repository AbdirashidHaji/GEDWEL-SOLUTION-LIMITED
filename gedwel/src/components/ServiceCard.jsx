import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl dark:shadow-gray-900/50"
    >
      <div className="p-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-gedwel-blue rounded-lg flex items-center justify-center mb-6 mx-auto">
          <span className="text-3xl text-white">{icon}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gedwel-dark dark:text-white mb-4 text-center">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-gedwel-light mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Effect Border */}
      <div className="h-1 bg-gradient-to-r from-gedwel-blue to-gedwel-light transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
    </motion.div>
  );
};

export default ServiceCard;