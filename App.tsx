
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import type { Page } from './types';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark for this aesthetic
  const [activePage, setActivePage] = useState<Page>('Thông tin cá nhân');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const pageVariants = {
    initial: {
      opacity: 0,
      x: -30,
      scale: 0.98,
      filter: 'blur(5px)',
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
    out: {
      opacity: 0,
      x: 30,
      scale: 0.98,
      filter: 'blur(5px)',
    },
  };

  // FIX: Add 'as const' to ensure the 'ease' property is inferred as a literal type,
  // resolving the TypeScript error with Framer Motion's Transition type.
  const pageTransition = {
    duration: 0.8,
    ease: 'easeInOut',
  } as const;

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-900 dark:to-black text-slate-200 transition-colors duration-500 animated-bg`}>
      <div className="flex">
        <Sidebar activePage={activePage} setActivePage={setActivePage} isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col transition-all duration-300 md:ml-[250px]">
          <TopBar 
            toggleDarkMode={toggleDarkMode} 
            isDarkMode={isDarkMode} 
            toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
          />
          <main className="flex-grow p-4 md:p-8">
             <AnimatePresence mode="wait">
                <motion.div
                    key={activePage}
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    transition={pageTransition}
                >
                    <MainContent activePage={activePage} />
                </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;