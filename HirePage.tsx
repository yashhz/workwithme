import React from 'react';
import { motion, useSpring, useScroll } from 'framer-motion';
import { useRegion } from './src/hooks/useRegion';

import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import Hero from './src/sections/Hero';
import TechStack from './src/sections/TechStack';
import Services from './src/sections/Services';
import ProofOfWork from './src/sections/ProofOfWork';
import About from './src/sections/About';
import Testimonial from './src/sections/Testimonial';
import AlaCarteSection from './src/sections/AlaCarteSection';
import Process from './src/sections/Process';
import FAQ from './src/sections/FAQ';
import CTASection from './src/sections/CTASection';

interface HirePageProps {
    onBack: () => void;
}

const HirePage: React.FC<HirePageProps> = () => {
    const region = useRegion();
    const { scrollYProgress } = useScroll();
    const progressScaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div className="min-h-screen bg-[#0D0D0D] text-white">
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-violet-400 origin-left z-[60]"
                style={{ scaleX: progressScaleX }}
            />

            <Navbar />
            <Hero />
            <TechStack />
            <Services region={region} />
            <ProofOfWork />
            <About />
            <Testimonial />
            <AlaCarteSection region={region} />
            <Process />
            <FAQ />
            <CTASection />
            <Footer />
        </div>
    );
};

export default HirePage;
