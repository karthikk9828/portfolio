import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import { content } from '../data/content';

export default function Home() {
    return (
        <>
            <div className="glass-background" />
            <div className="min-h-screen bg-[rgba(0,0,0,0.4)]">
                <Navigation />

                <motion.div
                    className="max-w-[980px] mx-auto px-4 sm:px-6 pt-32 pb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8 md:mb-16">
                        <motion.div
                            className="relative w-40 h-40 md:w-80 md:h-80 shrink-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(var(--accent),0.2)] to-transparent rounded-3xl" />
                            <div className="absolute inset-0 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[2px]" />
                            <Image
                                src="/profile.jpg"
                                alt="Karthik K"
                                width={320}
                                height={320}
                                className="relative object-cover rounded-3xl shadow-lg"
                                priority
                            />
                            <div className="absolute inset-0 ring-1 ring-[rgba(var(--foreground),0.1)] rounded-3xl" />
                        </motion.div>

                        <div className="flex-1 mt-4 md:mt-0">
                            <motion.h1
                                className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-center md:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            >
                                Karthik K
                            </motion.h1>

                            <motion.p
                                className="body-text text-[rgb(var(--muted))] text-center md:text-left leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            >
                                Dedicated mobile app developer with 4+ years of experience in designing, developing, and maintaining high-quality native and cross-platform mobile applications. Proven ability to align technical skills with company goals to create robust and scalable products. Seeking to apply my expertise in mobile app development to contribute to innovative projects and drive the company's success in the mobile space.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>

                <Section id="skills" title="Skills">
                    <motion.div
                        className="apple-card p-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{
                            duration: 1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {content.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="bg-[rgba(var(--foreground),0.05)] px-4 py-3 rounded-2xl flex items-center justify-center text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1],
                                        delay: index * 0.05
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: 'rgba(var(--accent), 0.1)',
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <span className="body-text">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Section>

                <Section id="experience" title="Experience">
                    <div className="space-y-12">
                        {content.experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="apple-card p-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: index * 0.1
                                }}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="title-text mb-2">{exp.company}</h3>
                                        <p className="body-text text-[rgb(var(--accent))] mb-1">{exp.role}</p>
                                        <p className="text-[rgb(var(--muted))]">{exp.period}</p>
                                    </div>
                                    <span className="text-[rgb(var(--muted))]">{exp.location}</span>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {exp.achievements.map((achievement, i) => (
                                        <motion.li
                                            key={i}
                                            className="body-text flex items-start gap-3"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                ease: [0.16, 1, 0.3, 1],
                                                delay: index * 0.1 + i * 0.05
                                            }}
                                        >
                                            <span className="text-[rgb(var(--accent))] mt-1.5">•</span>
                                            <span>{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-sm px-4 py-1.5 rounded-full bg-[rgba(var(--foreground),0.05)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                <Section id="projects" title="Projects">
                    <div className="apple-grid">
                        {content.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="apple-card p-8"
                                whileHover={{ scale: 1.01 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <h3 className="title-text mb-3">{project.title}</h3>
                                <p className="body-text mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-sm px-4 py-1.5 rounded-full bg-[rgba(var(--foreground),0.05)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.appStoreLink && (
                                    <a
                                        href={project.appStoreLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="apple-button inline-flex items-center"
                                    >
                                        View on GitHub
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </Section>

                <Section id="certifications" title="Certifications">
                    <div className="apple-grid">
                        {content.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="apple-card p-8"
                                whileHover={{ scale: 1.01 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <h3 className="title-text mb-2">{cert.name}</h3>
                                <p className="body-text text-[rgb(var(--accent))]">{cert.issuer}</p>
                                <p className="text-[rgb(var(--muted))] mt-1 mb-4">{cert.date}</p>
                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="apple-button inline-flex items-center"
                                    >
                                        View Credential
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </Section>

                <Section id="contact" title="Contact">
                    <div className="apple-grid">
                        <motion.a
                            href={`https://${content.contact.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="apple-card p-6 group cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="title-text mb-2">LinkedIn</h3>
                            <p className="body-text text-[rgb(var(--accent))]">{content.contact.linkedin}</p>
                        </motion.a>

                        <motion.div
                            className="apple-card p-6 group"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="title-text mb-2">Location</h3>
                            <p className="body-text text-[rgb(var(--accent))]">{content.contact.location}</p>
                        </motion.div>
                    </div>
                </Section>
            </div>
        </>
    );
} 