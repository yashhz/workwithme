import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Check } from 'lucide-react';
import { PROOF_OF_WORK } from '../data';

const FUNDS = [
    { name: 'Global Equity Fund', alloc: 34, holdings: 47, top: 'NVDA · MSFT · AAPL' },
    { name: 'Tech Growth ETF',    alloc: 28, holdings: 31, top: 'NVDA · META · GOOGL' },
    { name: 'EM Opportunities',   alloc: 22, holdings: 58, top: 'TSM · RELIANCE · BABA' },
    { name: 'Dividend Core',      alloc: 16, holdings: 24, top: 'JNJ · KO · PG' },
];

const PortfolioMockup: React.FC = () => (
    <div className="w-full h-full bg-[#0a0a0f] p-6 flex flex-col gap-4 select-none">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-1">
            <div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Portfolio Look-Through</div>
                <div className="text-sm font-semibold text-white/80">4 funds · 160 underlying positions</div>
            </div>
            <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-400/20 text-[10px] text-violet-300">Deduplicated</div>
                <div className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] text-white/30">Export CSV</div>
            </div>
        </div>

        {/* Allocation bar */}
        <div className="flex h-2 rounded-full overflow-hidden gap-px">
            {FUNDS.map((f, i) => (
                <div key={i} style={{ width: `${f.alloc}%` }}
                    className={`h-full ${['bg-violet-500','bg-blue-500','bg-emerald-500','bg-amber-500'][i]} opacity-70`} />
            ))}
        </div>

        {/* Fund rows */}
        <div className="flex flex-col gap-2 flex-1">
            {FUNDS.map((f, i) => (
                <div key={i} className="flex items-center gap-4 px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${['bg-violet-500','bg-blue-500','bg-emerald-500','bg-amber-500'][i]}`} />
                    <div className="flex-1 min-w-0">
                        <div className="text-xs text-white/70 font-medium truncate">{f.name}</div>
                        <div className="text-[10px] text-white/25 mt-0.5">{f.top}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                        <div className="text-xs text-white/60 font-semibold">{f.alloc}%</div>
                        <div className="text-[10px] text-white/25">{f.holdings} holdings</div>
                    </div>
                    <div className="w-16 h-1.5 rounded-full bg-white/[0.06] overflow-hidden flex-shrink-0">
                        <div style={{ width: `${f.alloc}%` }}
                            className={`h-full rounded-full ${['bg-violet-500','bg-blue-500','bg-emerald-500','bg-amber-500'][i]} opacity-60`} />
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom note */}
        <div className="text-[10px] text-white/20 text-center">
            Confidential · Data blurred · Shown with client permission
        </div>
    </div>
);

const ProofOfWork: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section id="proof-of-work" className="py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[2px] bg-violet-400" />
                        <span className="text-xs text-violet-400 uppercase tracking-widest">Execution</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">Proof of Work.</h2>
                    <p className="text-white/50 text-sm mt-3 max-w-2xl leading-relaxed">
                        I don't write code that demos well. I build things that run businesses. Whether it's a full-scale media ecosystem or automated financial tooling — click any project to see the execution.
                    </p>
                </motion.div>

                <div className="divide-y divide-white/10 border-t border-white/10">
                    {PROOF_OF_WORK.map((item) => (
                        <div key={item.id} className="group">
                            <button
                                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                                className={`w-full text-left py-6 px-4 hover:bg-white/[0.02] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${openId === item.id ? 'bg-white/[0.02]' : ''}`}
                            >
                                <div className="flex items-center gap-4 min-w-[300px]">
                                    <span className="text-xs text-white/30 tracking-tighter">[{item.number}]</span>
                                    <h3 className={`font-heading text-lg font-semibold transition-colors ${openId === item.id ? 'text-violet-400' : 'text-white group-hover:text-violet-400'}`}>
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-white/40 line-clamp-1">{item.oneLiner}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 bg-white/[0.05] border border-white/5 rounded text-[10px] text-white/40 uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-300 ${openId === item.id ? 'rotate-180 text-violet-400' : ''}`} />
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-4 pb-12 pt-4">
                                            <div className="mb-10 rounded-lg overflow-hidden bg-white/[0.03] border border-white/10">
                                                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                                    <div className="absolute inset-0">
                                                {item.mediaUrl ? (
                                                    item.mediaType === 'video'
                                                        ? <video src={item.mediaUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                                        : <img src={item.mediaUrl} alt={item.title} className="w-full h-full object-cover" />
                                                ) : item.id === 'portfolio-insight' ? (
                                                    <PortfolioMockup />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/[0.01] to-white/[0.05]">
                                                        <div className="flex flex-col items-center gap-3">
                                                            <div className="w-12 h-[1px] bg-white/10" />
                                                            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Execution Preview</span>
                                                            <div className="w-12 h-[1px] bg-white/10" />
                                                        </div>
                                                    </div>
                                                )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10">
                                                <div>
                                                    <p className="text-base text-white/70 leading-relaxed mb-8">{item.description}</p>
                                                    <div className="mb-8">
                                                        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-4">What was built</div>
                                                        <ul className="space-y-2.5">
                                                            {item.what.map((w, i) => (
                                                                <li key={i} className="flex items-start gap-3">
                                                                    <span className="mt-2 w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                                                                    <span className="text-sm text-white/60 leading-relaxed">{w}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {item.note && (
                                                        <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded">
                                                            <span className="text-sm text-white/40 leading-relaxed italic">{item.note}</span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex flex-col gap-6">
                                                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-lg">
                                                        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Stack</div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {item.stack.map(s => (
                                                                <span key={s} className="px-2.5 py-1 bg-white/[0.05] border border-white/10 rounded text-xs text-white/60">{s}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="p-5 bg-violet-400/[0.04] border border-violet-400/10 rounded-lg">
                                                        <div className="text-[10px] text-violet-400/60 uppercase tracking-widest mb-2">Outcome</div>
                                                        <p className="text-sm text-white/70 leading-relaxed">{item.outcome}</p>
                                                    </div>
                                                    {item.buttonLink === '#' ? (
                                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/30 cursor-default">
                                                            {item.buttonText}
                                                        </span>
                                                    ) : (
                                                        <a
                                                            href={item.buttonLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-5 py-3 border border-violet-400/30 text-violet-400 hover:bg-violet-400/5 text-sm font-semibold rounded-lg transition-colors"
                                                        >
                                                            {item.buttonText}
                                                            <ArrowUpRight className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProofOfWork;

