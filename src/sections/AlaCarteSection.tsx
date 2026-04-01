import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { ALA_CARTE_ITEMS } from '../data';
import type { Region } from '../hooks/useRegion';
import { formatRegionPrice } from '../hooks/useRegion';

// Animated price counter
const AnimatedPrice: React.FC<{ value: number; region: Region }> = ({ value, region }) => {
    const [display, setDisplay] = useState(value);
    const mv = useMotionValue(value);
    const spring = useSpring(mv, { stiffness: 100, damping: 20, mass: 0.5 });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { mv.set(value); }, [value]);
    useEffect(() => {
        const unsub = spring.on('change', (v) => setDisplay(Math.round(v)));
        return unsub;
    }, [spring]);

    return (
        <span className="text-2xl font-bold text-white tabular-nums">
            {formatRegionPrice(display, region)}
        </span>
    );
};

interface Props { region: Region; }

const AlaCarteSection: React.FC<Props> = ({ region }) => {
    const [selected, setSelected] = useState<Set<string>>(new Set());

    const toggle = (id: string) => {
        const next = new Set(selected);
        next.has(id) ? next.delete(id) : next.add(id);
        setSelected(next);
    };

    const total = Array.from(selected).reduce<number>((sum, id) => {
        return sum + (ALA_CARTE_ITEMS.find(i => i.id === id)?.price ?? 0);
    }, 0);

    return (
        <section id="alacarte" className="py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-violet-400" />
                        <span className="text-xs text-violet-400 uppercase tracking-widest">I have a specific deliverable</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">Pick what you need.</h2>
                    <p className="text-white/50 text-sm mt-3">Select items below. Price updates instantly.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-lg overflow-hidden border border-white/10"
                >
                    <div>
                        {ALA_CARTE_ITEMS.map((item, i) => {
                            const on = selected.has(item.id);
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 + i * 0.05 }}
                                    onClick={() => toggle(item.id)}
                                    className={`flex items-center justify-between px-8 py-6 border-b border-white/5 last:border-0 cursor-pointer transition-all duration-200 ${on ? 'bg-violet-400/[0.04]' : 'hover:bg-white/[0.02]'}`}
                                >
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${on ? 'border-violet-400 bg-violet-400' : 'border-white/20'}`}>
                                            {on && <Check className="w-3 h-3 text-black" />}
                                        </div>
                                        <span className={`text-sm font-medium transition-colors ${on ? 'text-white' : 'text-white/70'}`}>
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] text-violet-400 uppercase tracking-widest mb-0.5">from</span>
                                        <span className="text-sm font-bold text-white">
                                            {formatRegionPrice(item.price, region)}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="bg-white/[0.03] px-8 py-6 border-t border-white/5">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Total Estimate</div>
                                <AnimatedPrice value={total} region={region} />
                            </div>
                            <a
                                href={total > 0
                                    ? `mailto:zhhsay@gmail.com?subject=${encodeURIComponent('Yo, I need a few things built')}&body=${encodeURIComponent('Hey Yash,\n\nI picked a few things from your hire page that I need done:\n\n' + Array.from(selected).map(id => '  - ' + ALA_CARTE_ITEMS.find(i => i.id === id)?.name).filter(Boolean).join('\n') + '\n\nEstimated total: ' + formatRegionPrice(total, region) + '\n\nLet me know when you are free to talk through the details.')}`
                                    : '#alacarte'
                                }
                                className={`px-8 py-3 text-sm font-semibold rounded-lg flex items-center gap-2 transition-all duration-200 ${total > 0 ? 'bg-violet-400 text-black hover:bg-violet-300' : 'bg-white/10 text-white/30 cursor-default'}`}
                            >
                                Get Started
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AlaCarteSection;

