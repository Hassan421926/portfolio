import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code.',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful interfaces with attention to detail.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and smooth user experiences.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Passionate About Creating <span className="gradient-text">Digital Experiences</span>
          </h2>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 gap-12 items-center"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                <div className="text-center p-8">
                  <User className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-6xl font-bold gradient-text">1.5+</p>
                  <p className="text-gray-600 mt-2">Years of Learning</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full -z-10" />
          </motion.div> */}

            {/* <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl p-10 border overflow-hidden"
          style={{ background: 'linear-gradient(145deg,#111827,#080c14)', borderColor: 'rgba(99,179,237,0.12)' }}
        > */}

            

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building the Web, One Pixel at a Time
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm Hassan Muawia, a dedicated frontend developer with a passion for creating 
              intuitive and dynamic user interfaces. My journey in web development started with 
              a curiosity for how things work on the web, which quickly turned into a deep love 
              for crafting digital experiences.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I specialize in modern frontend technologies including React, Tailwind CSS, and 
              vanilla JavaScript. I believe in writing clean, maintainable code and creating 
              designs that not only look great but also provide exceptional user experiences.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group"
                >
                  <feature.icon className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-10 border overflow-hidden"
            style={{ background: 'linear-gradient(145deg,#111827,#080c14)', borderColor: 'rgba(99,179,237,0.12)' }}
          >
          <div className="absolute top-0 left-0 right-0 h-1"
            style={{ background: 'linear-gradient(90deg,#38bdf8,#3b82f6)' }} />
          <pre className="text-sm leading-8 font-mono" style={{ color: '#546e7a' }}>
            <span style={{ color: '#546e7a', fontStyle: 'italic' }}>{'// Hassan Muawia\n'}</span>
            <span style={{ color: '#c792ea' }}>const </span>
            <span style={{ color: '#38bdf8' }}>developer</span>
            <span style={{ color: '#94a3b8' }}>{' = {\n'}</span>
            <span style={{ color: '#82aaff' }}>{'  name'}</span>
            <span style={{ color: '#94a3b8' }}>{': '}</span>
            <span style={{ color: '#c3e88d' }}>{"'Hassan Muawia'"}</span>
            <span style={{ color: '#94a3b8' }}>{',\n'}</span>
            <span style={{ color: '#82aaff' }}>{'  role'}</span>
            <span style={{ color: '#94a3b8' }}>{': '}</span>
            <span style={{ color: '#c3e88d' }}>{"'Frontend Dev'"}</span>
            <span style={{ color: '#94a3b8' }}>{',\n'}</span>
            <span style={{ color: '#82aaff' }}>{'  stack'}</span>
            <span style={{ color: '#94a3b8' }}>{': ['}</span>
            <span style={{ color: '#c3e88d' }}>{"'React'"}</span>
            <span style={{ color: '#94a3b8' }}>{', '}</span>
            <span style={{ color: '#c3e88d' }}>{"'Tailwind'"}</span>
            <span style={{ color: '#94a3b8' }}>{']\n'}</span>
            <span style={{ color: '#82aaff' }}>{'  available'}</span>
            <span style={{ color: '#94a3b8' }}>{': '}</span>
            <span style={{ color: '#c792ea' }}>{'true\n'}</span>
            <span style={{ color: '#94a3b8' }}>{'}'}</span>
          </pre>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;