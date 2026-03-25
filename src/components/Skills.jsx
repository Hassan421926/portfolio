import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 95, color: 'bg-orange-500', icon: '🔶' },
  { name: 'CSS3', level: 90, color: 'bg-blue-500', icon: '🔷' },
  { name: 'JavaScript', level: 85, color: 'bg-yellow-500', icon: '⚡' },
  { name: 'React', level: 80, color: 'bg-cyan-500', icon: '⚛️' },
  { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500', icon: '🌊' },
  { name: 'Bootstrap', level: 85, color: 'bg-purple-500', icon: '🅱️' },
];

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{skill.icon}</span>
        <span className="font-semibold text-gray-800">{skill.name}</span>
      </div>
      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
    </div>
    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        className={`h-full ${skill.color} rounded-full relative`}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse" />
      </motion.div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="glass-card p-6 rounded-2xl text-center cursor-pointer group"
                >
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{skill.level}% Proficiency</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;