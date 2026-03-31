import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About: React.FC = () => (
    <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-14"
            >
                <div className="w-8 h-[2px] bg-violet-400" />
                <span className="text-xs text-violet-400 uppercase tracking-widest">Who you're working with</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-12 items-start">

                {/* Left — copy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        Hi, I'm Yash.
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                        I understand businesses — not just how to build for them, but how they think. When you bring me an idea, I don't just take the brief and vanish. I ask questions, push back when something doesn't make sense, ideate with you, and obsess over the details you care about. Your nit-picks are my to-do list. My job is to take what's in your head and make it real — and I take that seriously. The only thing I take lightly is the occasional deadline panic.{' '}
                        <span className="text-white/30 italic">(We'll get through it.)</span>
                    </p>

                    <a
                        href="mailto:zhhsay@gmail.com?subject=Let's%20Talk"
                        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-xl transition-colors"
                    >
                        Work with me
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </motion.div>

                {/* Right — quick facts card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover="hover"
                    className="glow-card relative rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent overflow-hidden"
                >
                    {/* Orbiting glow blob */}
                    <div className="glow-blob absolute top-1/3 left-1/3 w-36 h-36 bg-violet-500/25 rounded-full blur-3xl pointer-events-none opacity-40" />
                    <div className="relative">
                        <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                            <span className="text-xs text-white/40">Yash Lahoti · Surat, IN</span>
                        </div>
                    {[
                        { k: 'Response time',   v: '< 24 hours' },
                        { k: 'Clients',         v: 'IN · EU · US' },
                        { k: 'Projects shipped', v: '12+ and counting' },
                        { k: 'Works best with', v: 'Founders & small teams' },
                        { k: 'Availability',    v: 'Open to new projects' },
                    ].map((row, i) => (
                        <motion.div
                            key={row.k}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 + i * 0.06 }}
                            className="flex items-center justify-between px-6 py-4 border-b border-white/[0.04] last:border-0"
                        >
                            <span className="text-sm text-white/40">{row.k}</span>
                            <span className="text-sm text-white font-medium">{row.v}</span>
                        </motion.div>
                    ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default About;

