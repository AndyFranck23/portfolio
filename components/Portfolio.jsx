"use client"
// pages/index.js
// import Head from 'next/head'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Portfolio() {
    const projects = [
        {
            title: "Application E-commerce",
            description: "Plateforme e-commerce full-stack avec panier et paiement",
            tech: ["Next.js", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Réseau Social",
            description: "Réseau social avec authentification et chat en temps réel",
            tech: ["React", "Firebase", "Tailwind"],
            link: "#"
        }
    ]

    const skills = [
        "JavaScript", "React", "Next.js", "Node.js", "Python", "MongoDB", "Git", "Docker"
    ]

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navigation */}
            <nav className="fixed w-full bg-white shadow-sm z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">John Doe</h1>
                    <div className="flex space-x-6">
                        <Link href="#home" className="hover:text-blue-600">Accueil</Link>
                        <Link href="#projects" className="hover:text-blue-600">Projets</Link>
                        <Link href="#contact" className="hover:text-blue-600">Contact</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl font-bold mb-6">Développeur Full-Stack</h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Passionné par la création d'applications web modernes et performantes
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700">
                                <FaFileDownload className="mr-2" /> CV
                            </a>
                            <a href="#" className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900">
                                <FaGithub className="mr-2" /> GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Compétences */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projets */}
            <section id="projects" className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Projets Récents</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-xl shadow-lg"
                            >
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} className="text-blue-600 hover:underline">
                                    Voir le projet →
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
                    <div className="max-w-xl mx-auto">
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                ></textarea>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="#" className="hover:text-blue-400">
                            <FaGithub size={24} />
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                    <p>© 2024 Andy Franck. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    )
}