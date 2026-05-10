import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 10);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="relative">
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-primary/40" style={{ width: 80, height: 80 }} />
            <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-primary-foreground glow animate-pulse-glow">
              PM
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
