import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/40 backdrop-blur-xl' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="max-w-[980px] mx-auto px-4 sm:px-6 py-4">
                <ul className="flex justify-center space-x-8">
                    {['Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                        <motion.li key={item}>
                            <button
                                onClick={() => {
                                    document.getElementById(item.toLowerCase())?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }}
                                className="text-[rgb(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity px-2 py-1"
                            >
                                {item}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
};

export default Navigation; 