import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Layers, Target } from 'lucide-react';

const WhyMe: React.FC = () => (
    <>
        {/* Banker Logic */}
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
                        <span className="text-xs text-violet-400 uppercase tracking-widest">The Banker Logic</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white max-w-2xl">
                        Why hire a Finance guy to write your code?
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Target, title: 'I Treat It Like an Asset', description: 'Every decision is made with your business goals in mind. Your project has ROI expectations, and I build accordingly.', metric: 'ROI-focused', highlight: true },
                        { icon: Layers, title: 'I Understand Constraints', description: 'You have a budget and a burn rate. You get exactly what moves the needle — nothing more, nothing less.', metric: 'No bloat', highlight: false },
                        { icon: Zap, title: 'I Speak Business', description: "Tell me your business goal, I'll translate it into code. In finance, deadlines are law — I bring that same rigor.", metric: 'Deadline-driven', highlight: false },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group p-8 bg-white/[0.02] border rounded-lg transition-all duration-300 ${item.highlight ? 'border-violet-400/30' : 'border-white/10 hover:border-white/20'}`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`p-3 rounded-lg ${item.highlight ? 'bg-violet-400/10' : 'bg-white/5'}`}>
                                    <item.icon className={`w-5 h-5 ${item.highlight ? 'text-violet-400' : 'text-white/60'}`} />
                                </div>
                                <span className="text-xs text-violet-400">{item.metric}</span>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-white mb-3">{item.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Comparison Grid */}
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
                        <span className="text-xs text-violet-400 uppercase tracking-widest">Compare</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">Why founders choose me.</h2>
                </motion.div>

                {/* Desktop */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="hidden md:block">
                    <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-0 mb-0">
                        <div className="p-5" />
                        {['Speed', 'End-to-End', 'Business Context', 'Cost Efficiency'].map(h => (
                            <div key={h} className="p-5 text-center">
                                <span className="text-xs text-white/50 uppercase tracking-wider">{h}</span>
                            </div>
                        ))}
                    </div>
                    {[
                        { label: 'Me', highlight: true, cells: [{ icon: 'check', text: 'Shipping in days, not months' }, { icon: 'check', text: 'Code + business strategy under one roof' }, { icon: 'check', text: 'IB background — I think in P&L, not just pixels' }, { icon: 'check', text: 'No overhead. You pay for the work.' }] },
                        { label: 'Agencies', highlight: false, cells: [{ icon: 'x', text: 'Long timelines, rigid scopes' }, { icon: 'warn', text: 'Design/dev only, no strategy' }, { icon: 'x', text: "Follow the brief, don't question it" }, { icon: 'x', text: 'Expensive retainers + overhead' }] },
                        { label: 'Freelancers', highlight: false, cells: [{ icon: 'warn', text: 'Inconsistent delivery' }, { icon: 'x', text: 'Limited to single functions' }, { icon: 'x', text: "Understands the ticket, not the business" }, { icon: 'check', text: 'Cheap short-term, costly long-term' }] },
                        { label: 'In-house', highlight: false, cells: [{ icon: 'x', text: 'Slow hiring and onboarding' }, { icon: 'check', text: 'Deep involvement' }, { icon: 'warn', text: 'Bandwidth limits early on' }, { icon: 'x', text: 'High burn, inflexible costs' }] },
                    ].map((row, ri) => (
                        <motion.div
                            key={row.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: ri * 0.08 }}
                            className={`grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-0 border-t border-white/[0.06] ${row.highlight ? 'bg-violet-400/[0.03] border border-violet-400/20 rounded-lg' : 'hover:bg-white/[0.015]'}`}
                        >
                            <div className="p-5 flex items-center">
                                <span className={`font-heading text-base font-semibold ${row.highlight ? 'text-white' : 'text-white/50'}`}>{row.label}</span>
                                {row.highlight && <span className="ml-3 px-2 py-0.5 bg-violet-400 rounded-full text-[10px] text-black font-bold uppercase">Best</span>}
                            </div>
                            {row.cells.map((cell, ci) => (
                                <div key={ci} className="p-5 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                        {cell.icon === 'check' && <div className={`w-6 h-6 rounded-full flex items-center justify-center ${row.highlight ? 'bg-violet-400/20' : 'bg-violet-400/10'}`}><Check className="w-3.5 h-3.5 text-violet-400" /></div>}
                                        {cell.icon === 'warn' && <div className="w-6 h-6 rounded-full bg-yellow-400/10 flex items-center justify-center"><span className="text-yellow-400 text-xs font-bold">!</span></div>}
                                        {cell.icon === 'x' && <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center"><span className="text-white/30 text-xs font-bold">&times;</span></div>}
                                        <span className={`text-xs leading-relaxed ${row.highlight ? 'text-white/70' : 'text-white/35'}`}>{cell.text}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile */}
                <div className="md:hidden space-y-3">
                    {[
                        { label: 'Me', highlight: true, items: [{ cat: 'Speed', icon: 'check', text: 'Shipping in days, not months' }, { cat: 'End-to-End', icon: 'check', text: 'Code + strategy under one roof' }, { cat: 'Business Context', icon: 'check', text: 'IB background — I think in P&L' }, { cat: 'Cost', icon: 'check', text: 'No overhead. You pay for the work.' }] },
                        { label: 'Agencies', highlight: false, items: [{ cat: 'Speed', icon: 'x', text: 'Long timelines, rigid scopes' }, { cat: 'End-to-End', icon: 'warn', text: 'Design/dev only' }, { cat: 'Business Context', icon: 'x', text: 'Follow the brief blindly' }, { cat: 'Cost', icon: 'x', text: 'Expensive retainers' }] },
                        { label: 'Freelancers', highlight: false, items: [{ cat: 'Speed', icon: 'warn', text: 'Inconsistent delivery' }, { cat: 'End-to-End', icon: 'x', text: 'Single function only' }, { cat: 'Business Context', icon: 'x', text: 'Ticket-level understanding' }, { cat: 'Cost', icon: 'check', text: 'Cheap upfront' }] },
                        { label: 'In-house', highlight: false, items: [{ cat: 'Speed', icon: 'x', text: 'Slow hiring' }, { cat: 'End-to-End', icon: 'check', text: 'Deep involvement' }, { cat: 'Business Context', icon: 'warn', text: 'Bandwidth limited' }, { cat: 'Cost', icon: 'x', text: 'High burn' }] },
                    ].map((card, ci) => (
                        <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1 }}
                            className={`rounded-lg border overflow-hidden ${card.highlight ? 'border-violet-400/30 bg-violet-400/[0.03]' : 'border-white/10 bg-white/[0.02]'}`}>
                            <div className={`px-5 py-3 border-b flex items-center justify-between ${card.highlight ? 'border-violet-400/20 bg-violet-400/[0.05]' : 'border-white/5 bg-white/[0.03]'}`}>
                                <span className={`font-heading text-base font-semibold ${card.highlight ? 'text-white' : 'text-white/50'}`}>{card.label}</span>
                                {card.highlight && <span className="px-2 py-0.5 bg-violet-400 rounded-full text-[10px] text-black font-bold uppercase">Best</span>}
                            </div>
                            <div className="divide-y divide-white/[0.05]">
                                {card.items.map(item => (
                                    <div key={item.cat} className="px-5 py-3 flex items-center gap-3">
                                        {item.icon === 'check' && <div className="w-5 h-5 rounded-full bg-violet-400/15 flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3 text-violet-400" /></div>}
                                        {item.icon === 'warn' && <div className="w-5 h-5 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0"><span className="text-yellow-400 text-[10px] font-bold">!</span></div>}
                                        {item.icon === 'x' && <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0"><span className="text-white/30 text-[10px] font-bold">&times;</span></div>}
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[10px] text-white/30 uppercase tracking-widest">{item.cat}</div>
                                            <div className={`text-xs ${card.highlight ? 'text-white/70' : 'text-white/40'}`}>{item.text}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default WhyMe;

