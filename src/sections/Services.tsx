import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Building2 } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import { FOUNDER_PACKAGES, BUSINESS_PACKAGES } from '../data';
import type { Region } from '../hooks/useRegion';

interface Props { region: Region; }

const Services: React.FC<Props> = ({ region }) => (
    <>
        {/* I am a... */}
        <section className="py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-violet-400" />
                        <span className="text-xs text-violet-400 uppercase tracking-widest">Services</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">I am a...</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        {
                            icon: Rocket,
                            title: 'Founder',
                            description: 'Building a product or scaling an idea. I need speed and a robust technical output.',
                            tag: 'MVP · Core Architecture · Strategy',
                            link: '#founders',
                            accent: 'from-violet-500/10',
                        },
                        {
                            icon: Building2,
                            title: 'Business Owner',
                            description: 'I need a website that performs or digital tools from someone who gets business.',
                            tag: 'Web Dev · Automation · Analytics',
                            link: '#business',
                            accent: 'from-blue-500/10',
                        },
                    ].map((item, i) => (
                        <motion.a
                            href={item.link}
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative p-8 rounded-2xl border border-white/10 hover:border-violet-400/30 bg-gradient-to-br ${item.accent} via-transparent to-transparent transition-all duration-300 cursor-pointer overflow-hidden`}
                        >
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 group-hover:border-violet-400/30 transition-colors">
                                    <item.icon className="w-5 h-5 text-white/50 group-hover:text-violet-400 transition-colors" />
                                </div>
                                <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed mb-6">{item.description}</p>
                                <span className="text-xs text-violet-400/60">{item.tag}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>

        {/* Founder Packages */}
        <section id="founders" className="py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-violet-400" />
                        <span className="text-xs text-violet-400 uppercase tracking-widest">For Founders</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">
                        Build your MVP. Scale your vision.
                    </h2>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {FOUNDER_PACKAGES.map((pkg, i) => (
                        <PackageCard key={pkg.id} pkg={pkg} index={i} region={region} />
                    ))}
                </div>
            </div>
        </section>

        {/* Business Packages */}
        <section id="business" className="py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-violet-400" />
                        <span className="text-xs text-violet-400 uppercase tracking-widest">For Businesses</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">
                        Custom websites. Digital infrastructure.
                    </h2>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {BUSINESS_PACKAGES.map((pkg, i) => (
                        <PackageCard key={pkg.id} pkg={pkg} index={i} region={region} />
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default Services;

