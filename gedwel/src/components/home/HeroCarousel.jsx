import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
    {
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop", // Construction (Architecture)
        title: "Building Kenya's Future",
        subtitle: "Medical & Construction Excellence",
        description: "GEDWEL SOLUTION LIMITED delivers comprehensive infrastructure solutions and high-quality medical equipment supply across Kenya.",
        cta: "Get a Quote",
        link: "/contact"
    },
    {
        image: "https://images.unsplash.com/photo-1519494343832-84a88l707077?q=80&w=2000&auto=format&fit=crop", // Medical (Hospital)
        title: "Healthcare Solutions",
        subtitle: "Advanced Medical Equipment",
        description: "Equipping healthcare facilities with state-of-the-art diagnostic, surgical, and ICU equipment.",
        cta: "View Medical Services",
        link: "/services"
    },
    {
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop", // Construction (Road/Infrastructure)
        title: "Infrastructure Development",
        subtitle: "Roads, Water & Civil Works",
        description: "Delivering sustainable road construction, water works, and civil engineering projects.",
        cta: "View Projects",
        link: "/projects"
    }
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[80vh] w-full overflow-hidden">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>

                    {/* Content */}
                    <div className="container-custom relative z-10 h-full flex items-center">
                        <div className="max-w-3xl">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                            >
                                {slides[current].title}
                                <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-gedwel-light">
                                    {slides[current].subtitle}
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="text-xl mb-8 text-gray-200"
                            >
                                {slides[current].description}
                            </motion.p>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link to={slides[current].link} className="btn-primary bg-white text-gedwel-blue hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 text-center border-none">
                                    {slides[current].cta}
                                </Link>
                                <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white/10 text-center">
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
