import SEO from '../components/layout/SEO';

const About = () => {
  const coreValues = [
    {
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to delivering superior quality in every project',
      icon: '⭐'
    },
    {
      title: 'Safety First',
      description: 'Prioritizing safety protocols for all our projects and personnel',
      icon: '🛡️'
    },
    {
      title: 'Client Focus',
      description: 'Building lasting relationships through exceptional customer service',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Embracing modern techniques and technologies for better solutions',
      icon: '💡'
    },
    {
      title: 'Sustainability',
      description: 'Implementing eco-friendly practices for long-term impact',
      icon: '🌱'
    },
    {
      title: 'Integrity',
      description: 'Maintaining transparency and ethical standards in all operations',
      icon: '⚖️'
    }
  ];

  const commitments = [
    {
      title: 'Quality Assurance',
      description: 'All projects undergo rigorous quality control checks at every stage'
    },
    {
      title: 'Safety Compliance',
      description: 'Adherence to OSHA and other international safety standards'
    },
    {
      title: 'Skilled Workforce',
      description: 'Certified professionals with extensive industry experience'
    },
    {
      title: 'Modern Equipment',
      description: 'State-of-the-art machinery and technology for optimal results'
    }
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about GEDWEL SOLUTION LIMITED, a multidisciplinary company dealing in construction, civil engineering, and medical equipment supply in Kenya."
        url="/about"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gedwel-dark to-gedwel-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container-custom relative z-10 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">About GEDWEL SOLUTION LIMITED</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Building Kenya's infrastructure while strengthening its healthcare system through excellence in construction and medical supply.
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="section-padding dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Company Background</h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                <strong>GEDWEL SOLUTION LIMITED</strong> is a multidisciplinary company that specializes in the supply of high-quality medical equipment and the delivery of comprehensive infrastructure solutions. The company engages in construction, including building works, road construction, civil engineering, and water projects.
              </p>
              <p>
                With a strong focus on quality, safety, and innovation, GEDWEL SOLUTION LIMITED provides end-to-end services that meet national and international standards. Our experienced team ensures that every project—whether in healthcare supply, construction, or infrastructure development—is executed with professionalism, precision, and a commitment to long-term sustainability.
              </p>
              <p className="bg-blue-50 dark:bg-gray-700 dark:text-gray-200 p-6 rounded-xl border-l-4 border-gedwel-blue">
                We pride ourselves on delivering reliable, cost-effective, and client-centered solutions that support community development and institutional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gedwel-blue rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gedwel-dark dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                To deliver exceptional construction and medical supply solutions that enhance community development, promote healthcare access, and contribute to Kenya's sustainable growth through innovation, quality, and client-focused service.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gedwel-light rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl text-white">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gedwel-dark dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                To be Kenya's leading integrated solutions provider, recognized for excellence in both infrastructure development and healthcare support systems, driving positive impact across communities and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide every decision and action at GEDWEL SOLUTION LIMITED
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 dark:border-gray-600">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gedwel-dark dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Safety Commitment */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title">Commitment to Quality & Safety</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gedwel-dark dark:text-white">Quality Assurance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                At GEDWEL SOLUTION LIMITED, quality is embedded in every aspect of our operations. We implement stringent quality control measures that exceed industry standards, ensuring durability, reliability, and excellence in all our projects.
              </p>
              <ul className="space-y-3">
                {commitments.slice(0, 2).map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gedwel-dark dark:text-gray-200">{item.title}:</strong>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gedwel-dark dark:text-white">Safety Standards</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Safety is our top priority. We maintain comprehensive safety protocols, regular training programs, and continuous monitoring to ensure a safe working environment for our team and stakeholders.
              </p>
              <ul className="space-y-3">
                {commitments.slice(2).map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gedwel-dark dark:text-gray-200">{item.title}:</strong>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="section-padding dark:bg-gray-800">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-gedwel-blue to-gedwel-light rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Sustainability Focus</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Environmental Stewardship</h3>
                <p>Implementing eco-friendly construction practices and sustainable resource management to minimize environmental impact.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
                <p>Creating infrastructure that serves communities for generations while supporting local economic growth and development.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Long-term Value</h3>
                <p>Building durable, maintainable infrastructure that provides lasting benefits and reduces long-term costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;