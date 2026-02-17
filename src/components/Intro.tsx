import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const words = ["CODE.", "CONNECT.", "CREATE."];

export default function Intro({ onComplete }: IntroProps) {
  const [index, setIndex] = useState(0);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (hasCompletedRef.current) return;

    if (index < words.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1200);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      hasCompletedRef.current = true;
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {index < words.length && (
          <motion.h1
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-9xl font-bold font-['Bangers'] tracking-wider text-gray-400 dark:text-slate-200"
          >
            {words[index]}
          </motion.h1>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
