import React from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
    {
        quote: "Yash was excellent. He quickly understood our complex Mario-style map concept and aligned perfectly on the static front-end scope from the start. His communication was clear throughout the project. He handled large and varied media assets, including videos, images, and sprites, without any issues, proactively optimizing files and working through technical challenges. He delivered a high-quality first version quickly and maintained a professional approach throughout.",
        name: "stephen mchenry",
        tag: "Alaska Memorial · Client",
        href: "https://www.linkedin.com/in/stephen-mchenry-2446b0a3/",
        initial: "S",
    },
    {
        quote: "We needed something for our website which Shopify wasn't able to give and it was getting expensive also. I explained everything to Yash and he understood it properly. He built a custom solution with an admin panel based on what we needed and also handled the design according to our business. It actually saved us money instead of paying Shopify every month and he delivered everything fast. Done properly.",
        name: "jainam mehta",
        tag: "Promoter, Auri Star Jewels",
        href: "https://www.auristarjewels.com",
        initial: "J",
    },
    {
        quote: "Yash did a great job. Not just design or development, he handled everything end to end. I just told him I need a website, he got on a call and properly understood our business. He kept asking the right questions about how we work, not random things like colors or fonts. When he showed the first draft I was honestly surprised, it was better than I expected. Even the copy was written by him and the way he explained our business was something even we couldn't do properly. Would definitely recommend.",
        name: "deep parikh",
        tag: "Founder, Bluechariot Investments",
        href: "https://www.linkedin.com/in/cadeepparikh/",
        initial: "D",
    },
    {
        quote: "I had a very specific vision for my site and Yash was the first developer who actually listened. He picked up on every little detail, came back with ideas I hadn't even thought of, and the final result was better than what I imagined. Would work with him again without hesitation.",
        name: "pallavi",
        tag: "Personal Website · Client",
        href: "#",
        initial: "P",
    },
];

const ReviewCard: React.FC<{ review: typeof REVIEWS[0]; index: number }> = ({ review, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
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
                    <a
                        href={review.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/55 hover:text-white transition-colors"
                        style={{ fontVariant: 'small-caps' }}
                    >
                        {review.name}
                    </a>
                    <p className="text-[10px] text-white/25 mt-0.5">{review.tag}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

const Testimonial: React.FC = () => (
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

            {/* Masonry — CSS columns */}
            <div className="columns-1 md:columns-2 gap-4">
                {REVIEWS.map((r, i) => (
                    <ReviewCard key={i} review={r} index={i} />
                ))}
            </div>
        </div>
    </section>
);

export default Testimonial;
