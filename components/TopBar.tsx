
import React from 'react';
// FIX: Import `AnimatePresence` from `framer-motion` to resolve 'Cannot find name' errors.
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Bell, Menu, ChevronDown } from 'lucide-react';

interface TopBarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  toggleSidebar: () => void;
}

const VHUULogo = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="url(#grad)" stroke="#A855F7" strokeWidth="4"/>
        <text x="50" y="65" fontFamily="Manrope, sans-serif" fontSize="50" fontWeight="bold" fill="white" textAnchor="middle">V</text>
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#6366F1', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: '#EC4899', stopOpacity:1}} />
            </linearGradient>
        </defs>
    </svg>
);

const VietnamFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 900 600">
        <rect width="900" height="600" fill="#da251d"/>
        <polygon points="450,75 482.5,195 615,195 515,270 547.5,390 450,315 352.5,390 385,270 285,195 417.5,195" fill="#ff0"/>
    </svg>
);


const TopBar: React.FC<TopBarProps> = ({ toggleDarkMode, isDarkMode, toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-40 h-[60px] md:h-[70px] flex items-center justify-between px-4 md:px-8 bg-white/30 dark:bg-slate-900/30 backdrop-blur-lg shadow-soft dark:shadow-soft-dark border-b border-white/20 dark:border-slate-800/50">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden p-2 -ml-2 text-slate-700 dark:text-slate-300">
            <Menu size={24} />
        </button>
        <div className="flex items-center gap-3">
            <VHUULogo />
            <span className="hidden sm:block font-bold text-lg text-slate-800 dark:text-white">TRƯỜNG ĐẠI HỌC VĂN HIẾN</span>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <div className="flex items-center gap-2 p-2 rounded-full cursor-pointer hover:bg-black/5 dark:hover:bg-white/10">
            <VietnamFlag />
            <span className="font-semibold text-sm">VI</span>
            <ChevronDown size={16} className="text-slate-500" />
        </div>

        <button className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
          <Bell size={20} />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <img src="https://picsum.photos/id/237/40/40" alt="User Avatar" className="w-10 h-10 rounded-full cursor-pointer border-2 border-purple-400" />

        <button
          onClick={toggleDarkMode}
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800"
          aria-label="Toggle dark mode"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isDarkMode ? 'moon' : 'sun'}
              initial={{ y: -20, opacity: 0, rotate: 90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              {isDarkMode ? <Moon size={20} className="text-yellow-300" /> : <Sun size={20} className="text-orange-500" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
};

export default TopBar;