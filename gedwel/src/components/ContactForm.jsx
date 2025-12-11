import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const services = [
    'Medical Equipment Supply',
    'Road Construction',
    'Water Works',
    'Civil Engineering',
    'Building Construction',
    'General Inquiry',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
      <h3 className="text-2xl font-bold text-gedwel-dark mb-6">Send us a Message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gedwel-blue focus:border-transparent outline-none transition duration-300"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gedwel-blue focus:border-transparent outline-none transition duration-300"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gedwel-blue focus:border-transparent outline-none transition duration-300"
            placeholder="+254 700 000000"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="company">
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gedwel-blue focus:border-transparent outline-none transition duration-300"
            placeholder="Your company name"
          />
        </div>

        {/* Service Selection */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2" htmlFor="service">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gedwel-blue focus:border-transparent outline-none transition duration-300"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gedwel-blue focus:border-transparent outline-none transition duration-300 resize-none"
            placeholder="Tell us about your project requirements..."
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="btn-primary w-full py-3 text-lg"
          >
            Send Message
          </button>
          <p className="text-gray-500 text-sm mt-3 text-center">
            We'll respond to your inquiry within 24 hours.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;