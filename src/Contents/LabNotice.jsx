import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; //eslint-disable-line

const LabNotice = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem("lab_notice_seen");
        if (!seen) {
            setOpen(true); //eslint-disable-line
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem("lab_notice_seen", "true"); // enable once-only
        setOpen(false);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.85, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-zinc-900 border border-white/10 rounded-2xl p-4 sm:p-6 w-full max-w-[92%] sm:max-w-sm text-center shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
                    >
                        {/* Title */}
                        <h2 className="text-base sm:text-lg font-semibold text-white mb-2">
                            Welcome to the React Lab
                        </h2>

                        {/* Main text */}
                        <p className="text-xs sm:text-sm text-zinc-400 mb-3 leading-relaxed">
                            A mix of borrowed patterns, rebuilt components, and custom tweaks.
                            This space is experimental — things may evolve or feel inconsistent.
                        </p>

                        {/* Disclaimer */}
                        <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                            Some visuals are used for inspiration and experimentation.
                            All rights belong to their respective owners — no ownership is claimed.
                        </p>

                        {/* Button */}
                        <button
                            onClick={handleClose}
                            className="
                mt-4
                w-full sm:w-auto
                px-4 py-2.5
                rounded-lg
                bg-white text-black text-sm font-medium
                hover:bg-zinc-200
                transition
              "
                        >
                            Got it
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LabNotice;