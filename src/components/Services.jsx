import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, Code2, Smartphone, Sparkles, Rocket } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Responsive Web Design',
    description: 'Creating beautiful, mobile-first websites that look perfect on all devices. Pixel-perfect implementation with modern CSS techniques.',
    features: ['Mobile-First Approach', 'Cross-Browser Compatible', 'Pixel Perfect Design'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building fast, interactive web applications using React and modern JavaScript. Clean code architecture and best practices.',
    features: ['React Applications', 'Modern JavaScript', 'Performance Optimized'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Monitor,
    title: 'UI Implementation',
    description: 'Transforming designs into functional, responsive interfaces. Attention to detail in animations, transitions, and interactions.',
    features: ['Figma to Code', 'Smooth Animations', 'Interactive Elements'],
    color: 'from-orange-500 to-red-500',
  },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -10 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
    
    <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full`} />
      
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
            <Sparkles className="w-4 h-4 text-blue-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Specialized frontend services to help bring your digital vision to life
            with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Ready to start your project?</p>
              <p className="text-sm text-gray-600">Let's build something amazing together</p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;