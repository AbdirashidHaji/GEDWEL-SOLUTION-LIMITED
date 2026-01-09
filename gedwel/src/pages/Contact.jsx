import ContactForm from '../components/ContactForm';
import SEO from '../components/layout/SEO';

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8 text-gedwel-blue" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: 'Phone',
      details: ['+254 700 000000', '+254 711 000000'],
      action: 'tel:+254700000000'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gedwel-blue" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: 'Email',
      details: ['info@gedwelsolution.co.ke', 'sales@gedwelsolution.co.ke'],
      action: 'mailto:info@gedwelsolution.co.ke'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gedwel-blue" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Office Address',
      details: ['Nairobi, Kenya', 'View on Google Maps'],
      action: 'https://maps.google.com'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gedwel-blue" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      action: null
    }
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with GEDWEL SOLUTION LIMITED for quotes, inquiries, and consultations. Call, email or visit us in Nairobi."
        url="/contact"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gedwel-dark to-gedwel-blue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container-custom relative z-10 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Get in touch with our team for construction and medical supply solutions across Kenya.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gedwel-dark dark:text-white mb-8">Get in Touch</h2>

              <div className="space-y-8">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gedwel-dark dark:text-white mb-2">{method.title}</h3>
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 dark:text-gray-300">
                          {method.action && idx === 0 ? (
                            <a
                              href={method.action}
                              className="hover:text-gedwel-blue dark:hover:text-blue-400 transition duration-300"
                              target={method.title === 'Office Address' ? '_blank' : '_self'}
                              rel="noopener noreferrer"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-12">
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title">Our Location</h2>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="h-[400px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gedwel-blue mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-gedwel-dark dark:text-white mb-2">GEDWEL SOLUTION LIMITED</h3>
                <p className="text-gray-600 dark:text-gray-300">Nairobi, Kenya</p>
                <p className="text-gray-500 dark:text-gray-400 mt-4">Google Maps Integration Available</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-gedwel-blue hover:text-gedwel-light dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What areas in Kenya do you serve?',
                answer: 'We serve clients across all counties in Kenya, with major operations in Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. We can deploy teams to any location nationwide.'
              },
              {
                question: 'How long does a typical construction project take?',
                answer: 'Project timelines vary based on scope and complexity. A small residential building may take 3-6 months, while large infrastructure projects can take 12-24 months. We provide detailed timelines during the consultation phase.'
              },
              {
                question: 'Do you offer after-sales support for medical equipment?',
                answer: 'Yes, we provide comprehensive after-sales support including installation, training, maintenance, and technical support for all medical equipment supplied.'
              },
              {
                question: 'What certifications do you hold?',
                answer: 'We are registered with the National Construction Authority (NCA), Kenya Medical Supplies Authority (KEMSA), and comply with ISO standards for quality and safety.'
              },
              {
                question: 'Can you handle both construction and medical supply for a hospital project?',
                answer: 'Absolutely! As a multidisciplinary company, we specialize in integrated solutions. We can handle hospital construction, medical equipment supply, and installation as a complete package.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gedwel-dark dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;