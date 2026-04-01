import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, ArrowUpRight } from 'lucide-react';
import type { ServicePackage } from '../types';
import type { Region } from '../hooks/useRegion';
import { formatRegionPrice } from '../hooks/useRegion';

interface Props {
    pkg: ServicePackage;
    index: number;
    region: Region;
}

const PackageCard: React.FC<Props> = ({ pkg, index, region }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 }}
        className="glow-card flex flex-col h-full rounded-2xl border border-white/10 hover:border-violet-400/30 overflow-hidden relative bg-gradient-to-br from-violet-500/[0.07] via-transparent to-transparent"
    >
        <div className="glow-blob absolute top-1/4 left-1/4 w-40 h-40 bg-violet-500/25 rounded-full blur-3xl pointer-events-none opacity-40" />
        <div className="relative flex flex-col h-full">
            <div className="p-8 pb-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-6 gap-3">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white min-w-0">
                        {pkg.name}
                    </h3>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] rounded-full flex-shrink-0 whitespace-nowrap">
                        <Clock className="w-3 h-3 text-violet-400 flex-shrink-0" />
                        <span className="text-xs text-white/60">{pkg.timeline}</span>
                    </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-8 flex-1">{pkg.tagline}</p>
                <div className="mb-6">
                    <span className="text-shimmer text-sm font-semibold uppercase tracking-widest mb-2 block">Typically</span>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                            {formatRegionPrice(pkg.price, region)}
                        </span>
                        {pkg.priceMax && (
                            <>
                                <span className="text-white/25 text-xl font-light">—</span>
                                <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                                    {formatRegionPrice(pkg.priceMax, region)}
                                </span>
                            </>
                        )}
                    </div>
                </div>
                <a
                    href={`mailto:zhhsay@gmail.com?subject=${encodeURIComponent('Yo, lets talk about ' + pkg.name)}&body=${encodeURIComponent('Hey Yash,\n\nI came across your hire page and I am interested in ' + pkg.name + '.\n\nHere is a bit about what I need:\n[tell me what you are building]\n\nLet me know when you are free to chat.')}`}
                    className="w-full px-6 py-3.5 bg-violet-500 text-white text-sm font-semibold rounded-xl hover:bg-violet-400 transition-colors flex items-center justify-center gap-2"
                >
                    Start Project
                    <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>
            <div className="mx-8 h-px bg-white/[0.06]" />
            <div className="p-8 pt-6 flex-1">
                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-5">Scope can include</div>
                <div className="space-y-4">
                    {pkg.includes.map((item) => (
                        <div key={item.label} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <span className="text-sm text-white/80 font-medium">{item.label}</span>
                                <span className="text-sm text-white/40"> — {item.detail}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

export default PackageCard;
