import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy } from 'lucide-react';

const CTASection: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('zhhsay@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-28 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glow-card relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent p-12 md:p-16"
                >
                    <div className="glow-blob absolute top-1/3 left-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl pointer-events-none opacity-50" />

                    <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full mb-6">
                                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                                <span className="text-xs text-violet-300 font-medium">2 spots open this month</span>
                            </div>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                Ready to build<br />something real?
                            </h2>
                            <p className="text-white/50 leading-relaxed">
                                No pitch decks. No fluff. Tell me what you're building — I'll tell you if I can help within 24 hours.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 min-w-[220px]">
                            <a
                                href="mailto:zhhsay@gmail.com?subject=Yo%2C%20let%27s%20talk&body=Hey%20Yash%2C%0A%0AI%20came%20across%20your%20hire%20page%20and%20wanted%20to%20reach%20out.%0A%0AHere%27s%20what%20I%20need%3A%0A%5Btell%20me%20what%20you%27re%20building%5D%0A%0ALet%20me%20know%20when%20you%27re%20free."
                                className="px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                Start a Project
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                            <button
                                onClick={copyEmail}
                                className="px-8 py-4 border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                <Copy className="w-4 h-4" />
                                {copied ? 'Copied!' : 'Copy Email'}
                            </button>
                            <div className="flex items-center justify-center gap-4 pt-1 text-xs text-white/25">
                                <span>Response &lt;24hrs</span>
                                <span>·</span>
                                <span>IST timezone</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;

