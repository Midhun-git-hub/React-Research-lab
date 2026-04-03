import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; //eslint-disable-line no-unused-vars
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Collection", href: "#collection" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: { duration: 0.3 },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
            },
        },
    };

    const mobileItemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 },
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "border border-zinc-800 bg-black/70 backdrop-blur-md"
                    : "bg-transparent"
                    }`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo */}
                        <motion.div
                            className="flex items-center space-x-3"
                            variants={itemVariants}
                        >
                            <a href="#" className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="h-10 w-10">
                                        <DotLottieReact
                                            src="https://lottie.host/68c9e5a8-ead1-4f73-a6af-209d1b0e29ea/7e8kmO4KVp.lottie"
                                            loop
                                            autoplay
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-white text-lg font-bold">
                                        React Lab
                                    </span>
                                    <span className="text-zinc-400 text-xs -mt-1">
                                        experimental playground
                                    </span>
                                </div>
                            </a>
                        </motion.div>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center space-x-2">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <a
                                        href={item.href}
                                        className="relative px-4 py-2 text-sm text-zinc-300 hover:text-white"
                                    >
                                        {hoveredItem === item.name && (
                                            <motion.div
                                                className="absolute inset-0 bg-zinc-800 rounded-lg"
                                                layoutId="hover"
                                                transition={{ type: "spring", stiffness: 300 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.name}</span>
                                    </a>
                                </div>
                            ))}
                        </nav>

                        {/* Right side */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <button className="p-2 hover:bg-zinc-800 rounded-lg">
                                <Search className="h-5 w-5 text-zinc-400" />
                            </button>

                            <a href="#" className="text-sm text-zinc-300 hover:text-white">
                                Sign In
                            </a>

                            <a className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                                Get Started
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>

                        {/* Mobile Button */}
                        <button
                            className="lg:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 text-white" />
                            ) : (
                                <Menu className="h-6 w-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed top-16 right-4 bg-black border border-zinc-800 rounded-xl p-6 w-72 z-50"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-zinc-300 hover:text-white"
                                variants={mobileItemVariants}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;