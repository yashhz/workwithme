import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const INTENTS = [
    {
        label: "I have an idea and need someone to build it.",
        sub: "MVP · Full-stack product · From zero to shipped.",
        href: '#founders',
        tag: 'For Founders',
    },
    {
        label: "My website is embarrassing. I need a real one.",
        sub: "Custom site · Fast · Looks like you mean business.",
        href: '#business',
        tag: 'For Businesses',
    },
    {
        label: "I want to automate the stuff eating my time.",
        sub: "Workflows · Dashboards · BI · Back-office ops.",
        href: '#business',
        tag: 'For Businesses',
    },
    {
        label: "I need AI actually doing something in my product.",
        sub: "Agents · RAG pipelines · Not just a ChatGPT wrapper.",
        href: '#founders',
        tag: 'For Founders',
    },
    {
        label: "I have one specific thing. Just get it done.",
        sub: "Pick exactly what you need. No package required.",
        href: '#alacarte',
        tag: 'À la carte',
    },
    {
        label: "I got burned before. I need someone reliable.",
        sub: "Milestone payments · You see progress · No ghosting.",
        href: '#process',
        tag: 'How I work',
    },
];

const Hero: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto">

                {/* Top */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        <span className="text-xs text-white/40">Open for projects · Surat, IN</span>
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-4">
                        What are you<br />
                        <span className="text-white/30">trying to build?</span>
                    </h1>
                    <p className="text-base text-white/45 max-w-lg">
                        Pick what fits. I'll handle the rest.
                    </p>
                </motion.div>

                {/* Intent cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-14"
                >
                    {INTENTS.map((intent, i) => (
                        <motion.a
                            key={i}
                            href={intent.href}
                            onHoverStart={() => setHovered(i)}
                            onHoverEnd={() => setHovered(null)}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 + i * 0.07 }}
                            whileHover={{ y: -2 }}
                            className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                                hovered === i
                                    ? 'border-violet-400/50 bg-violet-500/[0.08]'
                                    : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20'
                            }`}
                        >
                            {/* Glow on hover */}
                            <motion.div
                                animate={{ opacity: hovered === i ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute -top-6 -right-6 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl pointer-events-none"
                            />

                            <div className="relative">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <p className="text-sm font-semibold text-white/85 leading-snug group-hover:text-white transition-colors">
                                        {intent.label}
                                    </p>
                                    <ArrowUpRight className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-all duration-300 ${hovered === i ? 'text-violet-400 translate-x-0.5 -translate-y-0.5' : 'text-white/20'}`} />
                                </div>
                                <p className="text-xs text-white/35 leading-relaxed mb-4">{intent.sub}</p>
                                <span className="inline-block px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] text-white/40 uppercase tracking-wider">
                                    {intent.tag}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/[0.07]"
                >
                    <div className="flex gap-8">
                        {[
                            { value: '12+', label: 'Projects shipped' },
                            { value: '<24h', label: 'Response time' },
                            { value: 'IN · EU · US', label: 'Clients' },
                        ].map((s, i) => (
                            <div key={i}>
                                <p className="font-heading text-xl font-bold text-white">{s.value}</p>
                                <p className="text-xs text-white/30 mt-0.5">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <a
                        href="mailto:zhhsay@gmail.com?subject=Yo%2C%20let%27s%20talk&body=Hey%20Yash%2C%0A%0AI%20came%20across%20your%20hire%20page%20and%20wanted%20to%20reach%20out.%0A%0AHere%27s%20what%20I%20need%3A%0A%5Btell%20me%20what%20you%27re%20building%5D%0A%0ALet%20me%20know%20when%20you%27re%20free."
                        className="flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-xl transition-colors self-start sm:self-auto"
                    >
                        Not sure? Just reach out
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

