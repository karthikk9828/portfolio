import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
    return (
        <section id={id} className="py-8">
            <div className="max-w-[980px] mx-auto px-4 sm:px-6">
                <motion.h2
                    className="text-4xl font-semibold mb-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {title}
                </motion.h2>
                {children}
            </div>
        </section>
    );
};

export default Section; 