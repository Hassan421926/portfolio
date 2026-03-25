import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Modern Landing Page',
        description: 'A responsive business landing page with modern design, smooth animations, and mobile-first approach. Features hero section, features grid, testimonials, and CTA.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
        demoLink: '#',
        githubLink: '#',
        featured: true,
    },
    {
        title: 'Admin Dashboard UI',
        description: 'Comprehensive admin dashboard with sidebar navigation, statistics cards, data tables, charts integration, and dark mode support. Fully responsive layout.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        tech: ['React', 'Tailwind CSS', 'Recharts', 'Lucide React'],
        demoLink: '#',
        githubLink: '#',
        featured: true,
    },
    {
        title: 'Todo App (React)',
        description: 'Feature-rich todo application with add, delete, edit, and mark complete functionality. Uses localStorage for data persistence and includes filtering options.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
        tech: ['React', 'CSS3', 'localStorage', 'Hooks'],
        demoLink: '#',
        githubLink: '#',
        featured: false,
    },
    {
        title: 'News Web App',
        description: 'Real-time news aggregator using NewsAPI. Features category filtering, search functionality, responsive grid layout, and article bookmarking.',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
        tech: ['React', 'API Integration', 'CSS3', 'Async/Await'],
        demoLink: '#',
        githubLink: '#',
        featured: false,
    },
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${project.featured ? 'md:col-span-2' : ''
            }`}
    >
        <div className="relative h-64 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
                <div className="flex gap-3">
                    <a
                        href={project.demoLink}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                    </a>
                    <a
                        href={project.githubLink}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        Code
                    </a>
                </div>
            </motion.div>
        </div>

        <div className="p-6">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>

            <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        A collection of my recent work showcasing my skills in frontend development,
                        UI design, and modern web technologies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;