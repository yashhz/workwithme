import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => (
    <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-0 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/[0.06]"
    >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16">
            <a href="#" className="flex items-center">
                <img src="/hz logo.png" alt="zhhsay" className="h-7 w-auto object-contain" />
            </a>

            <div className="hidden md:flex items-center gap-1">
                {[
                    { label: 'Work', href: '#proof-of-work' },
                    { label: 'Services', href: '#founders' },
                    { label: 'Process', href: '#process' },
                ].map(link => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="mailto:zhhsay@gmail.com?subject=Yo%2C%20let%27s%20talk&body=Hey%20Yash%2C%0A%0AI%20came%20across%20your%20hire%20page%20and%20wanted%20to%20reach%20out.%0A%0AHere%27s%20what%20I%20need%3A%0A%5Btell%20me%20what%20you%27re%20building%5D%0A%0ALet%20me%20know%20when%20you%27re%20free."
                    className="ml-3 px-5 py-2 bg-violet-500 text-white text-sm font-semibold rounded-lg hover:bg-violet-400 transition-colors flex items-center gap-1.5"
                >
                    Let's Talk
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </div>

            <a
                href="mailto:zhhsay@gmail.com?subject=Yo%2C%20let%27s%20talk&body=Hey%20Yash%2C%0A%0AI%20came%20across%20your%20hire%20page%20and%20wanted%20to%20reach%20out.%0A%0AHere%27s%20what%20I%20need%3A%0A%5Btell%20me%20what%20you%27re%20building%5D%0A%0ALet%20me%20know%20when%20you%27re%20free."
                className="md:hidden px-5 py-2 bg-violet-500 text-white text-sm font-semibold rounded-lg hover:bg-violet-400 transition-colors flex items-center gap-1.5"
            >
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
        </div>
    </motion.nav>
);

export default Navbar;

