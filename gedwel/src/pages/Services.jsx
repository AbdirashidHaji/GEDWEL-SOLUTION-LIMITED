import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: '🏥',
      title: 'Supply of Medical Equipment',
      description: 'Comprehensive medical equipment and supplies for healthcare facilities',
      features: [
        'Diagnostic equipment (ultrasound, X-ray, ECG machines)',
        'Hospital and clinical furniture',
        'Surgical and theatre equipment',
        'ICU and emergency care equipment',
        'Medical oxygen plants (PSA systems)',
        'PPE and medical consumables'
      ]
    },
    {
      icon: '🛣️',
      title: 'Road Construction & Maintenance',
      description: 'Complete road infrastructure solutions from design to maintenance',
      features: [
        'Road design, planning, and engineering',
        'Asphalt, concrete & murram roads',
        'Rehabilitation, upgrading & resurfacing',
        'Culverts & drainage systems',
        'Road markings, signage & safety features'
      ]
    },
    {
      icon: '💧',
      title: 'Water Works',
      description: 'Sustainable water solutions for communities and institutions',
      features: [
        'Borehole drilling & pump installation',
        'Water treatment & purification',
        'Water pipelines & storage tanks',
        'Irrigation & rural water supply systems',
        'Water quality testing & maintenance'
      ]
    },
    {
      icon: '🏗️',
      title: 'Civil Engineering Works',
      description: 'Structural and civil engineering solutions',
      features: [
        'Structural & reinforced concrete works',
        'Bridges & culverts construction',
        'Earthworks & excavation',
        'Drainage & sewerage systems',
        'Retaining walls & slope stabilization'
      ]
    },
    {
      icon: '🏢',
      title: 'Building & General Construction',
      description: 'End-to-end building construction and renovation services',
      features: [
        'Residential, commercial & institutional buildings',
        'Renovation & maintenance services',
        'Interior finishing & partitions',
        'Steel structures & roofing',
        'Electrical, mechanical & plumbing'
      ]
    }
  ];

  const additionalServices = [
    'Project Management & Consultancy',
    'Equipment Rental Services',
    'Maintenance & Repair Services',
    'Technical Training & Support',
    'Supply Chain Management'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gedwel-dark to-gedwel-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container-custom relative z-10 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Comprehensive construction and medical supply solutions delivered with excellence and innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Delivering integrated solutions that meet both construction and healthcare needs across Kenya
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Medical Equipment Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Medical Equipment Specialization</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Diagnostic Equipment',
                items: ['Ultrasound Machines', 'X-Ray Systems', 'ECG Machines', 'Laboratory Analyzers', 'Patient Monitors']
              },
              {
                category: 'Hospital Furniture',
                items: ['Hospital Beds', 'Examination Tables', 'Wheelchairs', 'Stretchers', 'Medical Cabinets']
              },
              {
                category: 'Surgical Equipment',
                items: ['Operating Tables', 'Surgical Lights', 'Anesthesia Machines', 'Sterilizers', 'Surgical Instruments']
              },
              {
                category: 'ICU Equipment',
                items: ['Ventilators', 'Infusion Pumps', 'Defibrillators', 'Patient Monitors', 'ICU Beds']
              },
              {
                category: 'Medical Gases',
                items: ['Oxygen Plants', 'Manifold Systems', 'Piping Networks', 'Oxygen Concentrators', 'Gas Cylinders']
              },
              {
                category: 'Consumables',
                items: ['PPE Kits', 'Disposables', 'Laboratory Supplies', 'First Aid Kits', 'Medical Textiles']
              }
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-gedwel-dark mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gedwel-blue rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Services Details */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Construction Services Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gedwel-dark mb-4">Building Construction</h3>
              <div className="space-y-4">
                {[
                  'Residential Buildings (Houses, Apartments)',
                  'Commercial Buildings (Offices, Malls)',
                  'Institutional Buildings (Schools, Hospitals)',
                  'Industrial Structures (Warehouses, Factories)',
                  'Interior Design & Finishing',
                  'Landscaping & External Works'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gedwel-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gedwel-dark mb-4">Infrastructure Development</h3>
              <div className="space-y-4">
                {[
                  'Road & Highway Construction',
                  'Bridge & Culvert Construction',
                  'Water Supply Systems',
                  'Drainage & Sewerage Systems',
                  'Electrical Infrastructure',
                  'Communication Networks'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gedwel-light rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Additional Services</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
                  <div className="w-12 h-12 bg-gedwel-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gedwel-dark">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-gedwel-blue to-gedwel-light rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a customized quote and professional consultation for your construction or medical supply needs.
            </p>
            <a
              href="/contact"
              className="btn-primary bg-white text-gedwel-blue hover:bg-gray-100 inline-block"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;