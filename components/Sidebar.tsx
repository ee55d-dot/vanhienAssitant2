
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SIDEBAR_ITEMS } from '../constants';
import type { Page } from '../types';
import { X } from 'lucide-react';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isOpen, setIsOpen }) => {
  const handleNavigation = (page: Page) => {
    setActivePage(page);
    if(window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  const NavContent = () => (
     <div className="flex flex-col h-full bg-white/30 dark:bg-slate-900/50 backdrop-blur-xl border-r border-white/20 dark:border-slate-800/50 shadow-2xl">
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">VHUU Portal</h1>
          <button onClick={() => setIsOpen(false)} className="md:hidden p-1 -mr-2">
            <X size={24}/>
          </button>
        </div>
        <nav className="flex-1 px-4">
          <ul>
            {SIDEBAR_ITEMS.map((item) => (
              <li key={item.name} className="my-1">
                <motion.a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleNavigation(item.name); }}
                  className={`relative flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all duration-300 ${
                    activePage === item.name
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activePage === item.name && (
                    <motion.div
                      layoutId="active-nav-item"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/30"
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-4">
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </div>
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 mt-auto">
            <div className="p-4 text-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20">
                <p className="text-sm font-semibold">Nâng cấp tài khoản</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Mở khóa tất cả tính năng AI và hơn thế nữa.</p>
                <button className="mt-3 w-full text-sm font-bold text-white py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-opacity">Nâng cấp</button>
            </div>
        </div>
      </div>
  );

  return (
    <>
      <div className="hidden md:block fixed left-0 top-0 h-full w-[250px] z-50">
        <NavContent/>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
             />
            <motion.aside
              className="md:hidden fixed left-0 top-0 h-full w-[250px] z-50"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
