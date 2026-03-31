import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ORDER_STEPS } from '../data';

const Process: React.FC = () => (
    <section id="process" className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[2px] bg-violet-400" />
                    <span className="text-xs text-violet-400 uppercase tracking-widest">The Process</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">How we work together.</h2>
                <p className="text-white/40 text-sm mt-2">Clear scope. Transparent pricing. No ghosting, no surprises.</p>
            </motion.div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">

                {ORDER_STEPS.map((step, i) => (
                    <motion.div
                        key={step.status}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                        className="glow-card relative p-7 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/[0.05] via-transparent to-transparent overflow-hidden group hover:border-violet-400/30 transition-all duration-300 z-10"
                    >
                        <div className="glow-blob absolute top-1/3 left-1/3 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl pointer-events-none opacity-30" />

                        <div className="relative">
                            {/* Step number */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="font-heading text-4xl font-bold text-white/10 select-none">
                                    0{i + 1}
                                </span>
                                <span className={`text-xs px-3 py-1 rounded-full border font-medium ${
                                    i === 0 ? 'border-white/10 text-white/40 bg-white/[0.03]' :
                                    i === 1 ? 'border-yellow-400/20 text-yellow-400/70 bg-yellow-400/[0.04]' :
                                    'border-violet-400/20 text-violet-400/70 bg-violet-400/[0.04]'
                                }`}>
                                    {step.time}
                                </span>
                            </div>

                            <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm text-white/50 leading-relaxed">
                                {step.description}
                            </p>
                        </div>

                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-1"
            >
                <p className="text-sm text-white/30">
                    Milestone-based payments · You approve before we move forward · You own everything at the end.
                </p>
                <a
                    href="mailto:zhhsay@gmail.com?subject=Yo%2C%20let%27s%20talk&body=Hey%20Yash%2C%0A%0AI%20came%20across%20your%20hire%20page%20and%20wanted%20to%20reach%20out.%0A%0AHere%27s%20what%20I%20need%3A%0A%5Btell%20me%20what%20you%27re%20building%5D%0A%0ALet%20me%20know%20when%20you%27re%20free."
                    className="flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors whitespace-nowrap"
                >
                    Start the process <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </motion.div>
        </div>
    </section>
);

export default Process;

