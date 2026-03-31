import React from 'react';
import { motion } from 'framer-motion';

const STACK = [
    { name: 'Next.js',       icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
    { name: 'React',         icon: 'https://cdn.simpleicons.org/react/ffffff' },
    { name: 'TypeScript',    icon: 'https://cdn.simpleicons.org/typescript/ffffff' },
    { name: 'Tailwind CSS',  icon: 'https://cdn.simpleicons.org/tailwindcss/ffffff' },
    { name: 'Supabase',      icon: 'https://cdn.simpleicons.org/supabase/ffffff' },
    { name: 'PostgreSQL',    icon: 'https://cdn.simpleicons.org/postgresql/ffffff' },
    { name: 'Vercel',        icon: 'https://cdn.simpleicons.org/vercel/ffffff' },
    { name: 'Stripe',        icon: 'https://cdn.simpleicons.org/stripe/ffffff' },
    { name: 'Claude',        icon: 'https://cdn.simpleicons.org/anthropic/ffffff' },
    { name: 'Framer',        icon: 'https://cdn.simpleicons.org/framer/ffffff' },
    { name: 'Figma',         icon: 'https://cdn.simpleicons.org/figma/ffffff' },
    { name: 'Razorpay',      icon: 'https://cdn.simpleicons.org/razorpay/ffffff' },
    { name: 'Firebase',      icon: 'https://cdn.simpleicons.org/firebase/ffffff' },
    { name: 'Cloudflare',    icon: 'https://cdn.simpleicons.org/cloudflare/ffffff' },
    { name: 'Python',        icon: 'https://cdn.simpleicons.org/python/ffffff' },
];

// Duplicate for seamless loop
const ITEMS = [...STACK, ...STACK];

const TechStack: React.FC = () => (
    <section className="py-16 border-t border-white/5 overflow-hidden">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
        >
            <span className="text-xs text-white/25 uppercase tracking-widest">Built with</span>
        </motion.div>

        {/* Marquee wrapper */}
        <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    className="flex items-center gap-10 pr-10"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
                    style={{ width: 'max-content' }}
                >
                    {ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 hover:bg-white/[0.05] transition-all duration-200 flex-shrink-0"
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-4 h-4 opacity-60"
                                loading="lazy"
                            />
                            <span className="text-sm text-white/40 whitespace-nowrap">{item.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
);

export default TechStack;
