import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/layout/SEO';
import RevealOnScroll from '../components/common/RevealOnScroll';
import PageTransition from '../components/common/PageTransition';
import HeroCarousel from '../components/home/HeroCarousel';
import BackgroundOrbs from '../components/layout/BackgroundOrbs';

const Home = () => {
  const features = [
    {
      icon: '🏥',
      title: 'Medical Equipment Supply',
      description: 'High-quality medical devices and hospital furniture'
    },
    {
      icon: '🛣️',
      title: 'Road Construction',
      description: 'Design, construction, and maintenance of roads'
    },
    {
      icon: '💧',
      title: 'Water Works',
      description: 'Complete water supply and treatment solutions'
    },
    {
      icon: '🏗️',
      title: 'Building Construction',
      description: 'Residential, commercial, and institutional buildings'
    }
  ];

  const clients = [
    'Ministry of Health',
    'County Governments',
    'Private Hospitals',
    'NGOs',
    'Development Partners',
    'Corporate Clients'
  ];

  return (
    <PageTransition>
      {/* Background Decorations */}
      <BackgroundOrbs />

      <SEO
        title="Construction & Medical Supply"
        description="GEDWEL SOLUTION LIMITED - Leading construction and medical equipment supply company in Kenya. Specializing in infrastructure development and healthcare solutions."
        keywords="construction company Kenya, medical equipment supplier Nairobi, road construction, building contractors, hospital furniture, water works"
      />
      {/* Hero Section */}
      <HeroCarousel />

      {/* Company Summary */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="section-title">GEDWEL SOLUTION LIMITED</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                A multidisciplinary company specializing in the supply of high-quality medical equipment and the delivery of comprehensive infrastructure solutions. The company engages in construction, including building works, road construction, civil engineering, and water projects.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                With a strong focus on quality, safety, and innovation, we provide end-to-end services that meet national and international standards. Our experienced team ensures that every project—whether in healthcare supply, construction, or infrastructure development—is executed with professionalism, precision, and a commitment to long-term sustainability.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="section-title">Why Choose GEDWEL</h2>
          <p className="section-subtitle">
            We pride ourselves on delivering reliable, cost-effective, and client-centered solutions that support community development and institutional growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition duration-300 h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gedwel-dark dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title">Our Core Services</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gedwel-dark dark:text-white mb-4">Medical Equipment Supply</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gedwel-blue rounded-full"></div>
                  <span className="dark:text-gray-300">Diagnostic equipment & laboratory analyzers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gedwel-blue rounded-full"></div>
                  <span className="dark:text-gray-300">Hospital furniture & surgical equipment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gedwel-blue rounded-full"></div>
                  <span className="dark:text-gray-300">ICU equipment & medical oxygen plants</span>
                </li>
              </ul>
              <Link to="/services" className="inline-block mt-6 text-gedwel-blue dark:text-blue-400 hover:text-gedwel-light font-semibold">
                View All Medical Services →
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gedwel-dark dark:text-white mb-4">Construction Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gedwel-blue rounded-full"></div>
                  <span className="dark:text-gray-300">Road construction & maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gedwel-blue rounded-full"></div>
                  <span className="dark:text-gray-300">Water works & borehole drilling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gedwel-blue rounded-full"></div>
                  <span className="dark:text-gray-300">Building construction & civil works</span>
                </li>
              </ul>
              <Link to="/services" className="inline-block mt-6 text-gedwel-blue dark:text-blue-400 hover:text-gedwel-light font-semibold">
                View All Construction Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients/Partners */}
      <section className="section-padding dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="section-title">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                <div className="text-gray-400 mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;