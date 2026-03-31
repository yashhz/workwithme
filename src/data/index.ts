import type { ProofOfWorkItem, ServicePackage, AlaCarteItem, OrderStep } from '../types';

export const PROOF_OF_WORK: ProofOfWorkItem[] = [
    {
        id: 'alaska-memorial',
        number: '01',
        title: 'Alaska Memorial',
        oneLiner: 'A Mario-style interactive vacation memorial for a family trip to Alaska.',
        tags: ['Creative', 'Game UI', 'Custom Build'],
        description: 'A family wanted something more than a photo album. They wanted to relive it. So I built a fully interactive experience — Mario-style loading screen, character selection screen, then a hand-drawn explorable map of every real location they visited. Click a pin and a song from that day starts playing while photos and videos from that exact place come to life on screen. Zero templates. Zero off-the-shelf components. Every pixel was a decision.',
        what: [
            'Custom game-style loading + character select screen',
            'Interactive SVG map with clickable location pins',
            'Per-location media galleries with audio sync',
            'Mobile-responsive with touch gesture support',
        ],
        stack: ['React', 'Framer Motion', 'Custom SVG', 'Howler.js', 'Vercel'],
        outcome: "Delivered in 10 days. Client called it the best gift they've ever received.",
        buttonText: 'Private — Shown with Permission',
        buttonLink: '#',
        mediaType: 'video',
        mediaUrl: '',
    },
    {
        id: 'portfolio-insight',
        number: '02',
        title: 'Portfolio Insight Engine',
        oneLiner: 'X-ray vision for fund portfolios. See what you actually own.',
        tags: ['Fintech', 'Europe', 'Data Architecture'],
        description: "Most investors have no idea what they actually own. They hold 4 funds and think they're diversified — but three of them are 30% Nvidia. This tool was built for a European private wealth client to solve exactly that. It ingests fund holdings, deduplicates across positions, and surfaces the real underlying exposure. Institutional-grade look-through analysis, built for a private client who was tired of paying Bloomberg terminal prices.",
        what: [
            'Fund look-through engine — aggregates holdings across multiple funds',
            'Deduplication logic to surface true underlying asset exposure',
            'Sector and geography concentration heatmaps',
            'CSV/Excel export for client reporting',
            'Blurred demo mode for sensitive data presentation',
        ],
        stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts', 'Supabase'],
        outcome: 'Client now runs monthly portfolio reviews using this tool instead of manual Excel models.',
        note: 'ⓘ Confidential — sensitive data blurred. Shown with client permission.',
        buttonText: 'Private — NDA',
        buttonLink: '#',
        mediaType: 'image',
        mediaUrl: '',
    },
    {
        id: 'toonhwa',
        number: '03',
        title: 'Toonhwa',
        oneLiner: 'A complex media ecosystem for Manhwa and Webtoons.',
        tags: ['Media', 'Backend', 'AI Integration'],
        description: "Toonhwa started as a community and grew into a full media platform with 25,000+ members before the infrastructure could keep up. I came in to rebuild the backend from scratch — scalable content delivery, AI-assisted tagging and recommendations, and a reader experience that doesn't fall apart under load. The kind of project where the technical decisions you make on day one determine whether you're still standing at 100,000 users.",
        what: [
            'Full platform rebuild — frontend reader + backend CMS',
            'AI-powered content tagging and recommendation engine',
            'Scalable media delivery pipeline for high-volume chapters',
            'User auth, reading history, bookmarks, and notifications',
            'Admin dashboard for content management and analytics',
        ],
        stack: ['Next.js', 'Supabase', 'OpenAI API', 'Cloudflare R2', 'Vercel'],
        outcome: 'Platform handles 25,000+ active members with sub-second chapter load times.',
        buttonText: 'View Live Site ↗',
        buttonLink: 'https://toonhwa.vercel.app',
    },
    {
        id: 'auri-star',
        number: '04',
        title: 'Auri Star Jewels',
        oneLiner: 'Digital aesthetics for a luxury jewelry house.',
        tags: ['Luxury', 'E-Commerce', 'Custom Backend'],
        description: 'Luxury products deserve a luxury digital experience. Auri Star was running on a bloated Shopify theme that loaded in 4+ seconds and looked like every other jewelry store online. I stripped it back to zero and rebuilt a custom storefront — one that loads fast, feels premium, and converts. The design language matches the price point: restrained, precise, and confident.',
        what: [
            'Full custom storefront — no Shopify templates',
            'Product catalog with variant selection and zoom',
            'Custom checkout flow with Razorpay integration',
            'Sub-second load times via aggressive image optimization',
            'Mobile-first design with luxury editorial feel',
        ],
        stack: ['Next.js', 'Razorpay', 'Sanity CMS', 'Cloudinary', 'Vercel'],
        outcome: 'Page load dropped from 4.2s to 0.8s. Bounce rate fell 34% in the first month.',
        buttonText: 'View Live Site ↗',
        buttonLink: 'https://auristarjewels.com',
    },
    {
        id: 'bluechariot',
        number: '05',
        title: 'Bluechariot Investments',
        oneLiner: 'A clean, high-trust digital presence for a financial advisory firm.',
        tags: ['Finance', 'Web', 'Consulting'],
        description: "When you're a financial advisory firm helping founders raise from VCs and institutions, your website is your first pitch. It has to signal credibility before a single word is read. I built Bluechariot's digital presence from the ground up — structured to speak the language of institutional investors, designed to convert founder inquiries, and fast enough to not embarrass anyone in a board meeting.",
        what: [
            'Full brand identity and design system',
            'Conversion-optimized landing pages for each service line',
            'Founder intake form with CRM integration',
            'SEO architecture targeting high-intent founder search terms',
            'Analytics and conversion tracking setup',
        ],
        stack: ['Next.js', 'Framer Motion', 'Airtable CRM', 'Vercel'],
        outcome: 'Site ranks on page 1 for target keywords. Inbound inquiry volume up 3x post-launch.',
        note: 'ⓘ Related Party Transaction: Promoter-owned entity. DYOR.',
        buttonText: 'View Live Site ↗',
        buttonLink: 'https://bluechariot.in',
    },
];

export const FOUNDER_PACKAGES: ServicePackage[] = [
    {
        id: 'mvp',
        name: 'MVP Development',
        tagline: 'From idea to deployed product. Built to ship, not to demo.',
        price: 120000,
        timeline: '3-4 Weeks',
        includes: [
            { label: 'Core Architecture', detail: 'Next.js + Supabase/PostgreSQL' },
            { label: 'Authentication', detail: 'Google/Email/Magic Link + User Profiles' },
            { label: 'Payments', detail: 'Stripe/Razorpay + Webhook handling' },
            { label: 'The Build', detail: 'Frontend UI + Backend Logic + Database Design' },
            { label: 'Admin', detail: 'Dashboard to manage users & content' },
            { label: 'Handover', detail: 'Source Code + Deployment + 2 Weeks Bug Fixes' },
        ],
    },
    {
        id: 'ai-agents',
        name: 'AI Agentic Architecture',
        tagline: 'Beyond the wrapper. Build autonomous systems that handle cognitive labor while you sleep.',
        price: 180000,
        timeline: '4-5 Weeks',
        includes: [
            { label: 'Agentic Logic', detail: 'Autonomous ReAct/CoT reasoning loops' },
            { label: 'Cognitive Memory', detail: 'Vector DB + RAG Pipeline for context' },
            { label: 'Tool Integration', detail: 'Agents that use APIs, Browse, and Email' },
            { label: 'Automation Ops', detail: 'Multi-step workflows + Human-in-the-loop' },
            { label: 'Observability', detail: 'LLM cost tracking + Performance dashboard' },
            { label: 'Scalability', detail: 'Queue management for high volume' },
        ],
    },
];

export const BUSINESS_PACKAGES: ServicePackage[] = [
    {
        id: 'webdev',
        name: 'Web Development',
        tagline: 'High-performance websites and web applications. Custom-built, not templated.',
        price: 55000,
        timeline: '3 Weeks',
        includes: [
            { label: 'Design', detail: 'Custom Design System + Mobile-First UI' },
            { label: 'Development', detail: 'React/Next.js + CMS Integration' },
            { label: 'E-Commerce', detail: 'Cart, Checkout, Payment, Inventory (if needed)' },
            { label: 'SEO', detail: 'On-page optimization + Schema markup' },
            { label: 'Performance', detail: '<1s Load Times + Core Web Vitals' },
            { label: 'Analytics', detail: 'GA4 + Conversion Tracking' },
        ],
    },
    {
        id: 'automation-bi',
        name: 'Enterprise Automation & BI',
        tagline: 'Banker-grade reporting and legacy-killing automation. Turn raw data into Alpha.',
        price: 110000,
        timeline: '3-4 Weeks',
        includes: [
            { label: 'Single Source of Truth', detail: 'Unified Data Lake for all SaaS tools' },
            { label: 'Finance Engine', detail: 'Real-time P&L, Burn Rate, and Unit Economics' },
            { label: 'Back-Office Ops', detail: 'Automated Invoicing and Lead Routing' },
            { label: 'Data Pipeline', detail: 'Stripe, Shopify, and CRM synchronization' },
            { label: 'BI Dashboard', detail: 'Institutional visualizations and forecasting' },
            { label: 'Operational Audit', detail: 'Patching technical leaks in your stack' },
        ],
    },
];

export const ALA_CARTE_ITEMS: AlaCarteItem[] = [
    { id: 'financial-model', name: 'Financial Model', price: 15000 },
    { id: 'pitch-deck', name: 'Pitch Deck', price: 16000 },
    { id: 'landing', name: 'Landing Page', price: 20000 },
    { id: 'webapp', name: 'Web Application', price: 25000, isStarting: true },
    { id: 'dashboard', name: 'Admin Dashboard', price: 13000, isStarting: true },
    { id: 'uiux', name: 'UI/UX Redesign', price: 12000, isStarting: true },
    { id: 'feature', name: 'Custom Feature / Integration', price: 10000, isStarting: true },
];

export const ORDER_STEPS: OrderStep[] = [
    {
        status: 'PLACED',
        title: 'The Scope',
        time: 'Day 1',
        description: 'You tell me what you need. I tell you if I can do it, how much it costs, and exactly when it will be done.',
        detail: 'Clear scope, transparent pricing',
    },
    {
        status: 'EXECUTING',
        title: 'The Sprint',
        time: 'Week 1-4',
        description: 'I go async. You get a private link to watch the build in real-time. No mystery, no waiting for a "big reveal."',
        detail: 'Progress every 48 hours',
    },
    {
        status: 'FILLED',
        title: 'The Handover',
        time: 'Launch Day',
        description: 'I deploy to your domain. You get a video guide on how to use it. You own the code, the IP, and the asset.',
        detail: '30-day support included',
    },
];





