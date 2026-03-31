import React from 'react';

const Footer: React.FC = () => (
    <footer className="px-6 md:px-16 py-8 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <img src="/hz logo.png" alt="zhhsay" className="h-6 w-auto object-contain opacity-60" />
            <span className="text-xs text-white/20">© {new Date().getFullYear()} Yash Lahoti</span>
        </div>
    </footer>
);

export default Footer;
