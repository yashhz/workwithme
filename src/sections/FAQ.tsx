import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQS = [
    {
        q: "How is this different from hiring an agency?",
        a: "You talk to me. Not an account manager who talks to a PM who talks to a dev. I write the code, I make the decisions, and I actually care about the outcome. Agencies bill you for the layers. I don't have layers."
    },
    {
        q: "What if I don't know exactly what I need?",
        a: "That's honestly most people. Just tell me what problem you're trying to solve or what you're trying to achieve — I'll help figure out what needs to be built. That's part of what I do."
    },
    {
        q: "How do payments work?",
        a: "Milestone-based. You pay in parts as we hit agreed checkpoints — not upfront in full, not after everything's done. You see progress before you pay for the next phase. No surprises."
    },
    {
        q: "What if the scope changes mid-build?",
        a: "Small changes are normal and I won't nickel-and-dime you for them. If something significantly bigger comes up, I'll flag it early, tell you what it'll cost, and you decide. No surprise invoices ever."
    },
    {
        q: "What tech do you use?",
        a: "Mostly React, Next.js, TypeScript, Supabase, PostgreSQL. Stripe or Razorpay for payments. Vercel for hosting. I pick what makes sense for the project — not whatever's trending on Twitter."
    },
    {
        q: "Do you do ongoing support after launch?",
        a: "Every project comes with 30 days of bug fixes after launch. After that, I offer monthly retainers if you want someone on call. We can talk about what makes sense for you."
    },
    {
        q: "What's your refund policy?",
        a: "If I can't deliver what we agreed on, you don't pay for it. Simple. The milestone structure means you're never locked into paying for something you haven't seen and approved."
    },
];

const FAQItem: React.FC<{ item: { q: string; a: string }; index: number }> = ({ item, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="border-b border-white/[0.06] last:border-0"
        >
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center justify-between px-8 py-5 text-left hover:bg-white/[0.02] transition-colors group"
            >
                <span className={`text-sm font-medium pr-6 transition-colors duration-200 ${open ? 'text-white' : 'text-white/70 group-hover:text-white/90'}`}>
                    {item.q}
                </span>
                <motion.div
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="flex-shrink-0"
                >
                    <Plus className={`w-4 h-4 transition-colors duration-200 ${open ? 'text-violet-400' : 'text-white/25'}`} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <motion.p
                            initial={{ y: -8 }}
                            animate={{ y: 0 }}
                            exit={{ y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="px-8 pb-6 text-sm text-white/45 leading-relaxed"
                        >
                            {item.a}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ: React.FC = () => (
    <section id="faq" className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[2px] bg-violet-400" />
                    <span className="text-xs text-violet-400 uppercase tracking-widest">FAQ</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">Straight answers.</h2>
            </motion.div>

            <div className="border border-white/10 rounded-2xl overflow-hidden">
                {FAQS.map((item, i) => (
                    <FAQItem key={i} item={item} index={i} />
                ))}
            </div>
        </div>
    </section>
);

export default FAQ;
