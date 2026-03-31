import React from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
    {
        quote: "Yash was excellent. He immediately understood our complex, Mario-esque map concept and confirmed the static front-end scope perfectly. His communication was great throughout. He handled our incredibly large and varied media assets — videos, images, sprites — without issue, proactively compressing files and working through the tough technical challenges. Delivered a high-quality first version quickly. Professional, fast, and technically sound.",
        name: "stephen mchenry",
        tag: "Alaska Memorial · Client",
        href: "https://www.linkedin.com/in/stephen-mchenry-2446b0a3/",
        initial: "S",
    },
    {
        quote: "Working with Yash was seamless from start to finish. He understood exactly what our brand needed — something that felt premium without being cold. The site loads fast, looks stunning, and our customers have noticed.",
        name: "auri star jewels",
        tag: "E-Commerce · Custom Build",
        href: "https://auristarjewels.com",
        initial: "A",
    },
    {
        quote: "Yash built our entire web presence and understood the financial advisory space immediately. No hand-holding needed — he got the brief, asked the right questions, and delivered something that actually converts. Clean, fast, and credible.",
        name: "bluechariot investments",
        tag: "Finance · Web",
        href: "https://bluechariot.in",
        initial: "B",
    },
    {
        quote: "I had a very specific vision for my site and Yash was the first developer who actually listened. He picked up on every little detail, came back with ideas I had not even thought of, and the final result was better than what I imagined. Would work with him again without hesitation.",
        name: "pallavi",
        tag: "Personal Website · Client",
        href: "#",
        initial: "P",
    },
];

const ReviewCard = ({ review, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
        className="relative p-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300 break-inside-avoid mb-4"
    >
        <div className="absolute -top-6 -right-6 w-28 h-28 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative flex flex-col gap-4">
            <span className="font-heading text-5xl text-violet-400/15 leading-none select-none">"</span>
            <p className="text-sm text-white/60 leading-relaxed -mt-2">{review.quote}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-8 h-8 rounded-full bg-violet-500/15 border border-violet-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-violet-300">{review.initial}</span>
                </div>
                <div>
                    <a href={review.href} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-white/55 hover:text-white transition-colors"
                        style={{ fontVariant: "small-caps" }}>
                        {review.name}
                    </a>
                    <p className="text-[10px] text-white/25 mt-0.5">{review.tag}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

const Testimonial = () => (
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
                    <span className="text-xs text-violet-400 uppercase tracking-widest">What clients say</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">
                    Don't take my word for it.
                </h2>
            </motion.div>

            <div className="columns-1 md:columns-2 gap-4">
                {REVIEWS.map((r, i) => (
                    <ReviewCard key={i} review={r} index={i} />
                ))}
            </div>
        </div>
    </section>
);

export default Testimonial;
