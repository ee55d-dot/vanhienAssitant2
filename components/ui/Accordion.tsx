
import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionContextProps {
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an Accordion provider');
  }
  return context;
};

export const Accordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className="space-y-4">{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  trigger: React.ReactNode;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, value, trigger, className = '' }) => {
  const { openItem, setOpenItem } = useAccordion();
  const isOpen = openItem === value;

  return (
    <div className={`border-b border-white/20 dark:border-slate-700/50 overflow-hidden ${className}`}>
      <button
        onClick={() => setOpenItem(isOpen ? null : value)}
        className="flex justify-between items-center w-full py-5 text-left font-semibold text-lg"
      >
        {trigger}
        <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-8 text-slate-600 dark:text-slate-300">
                {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
