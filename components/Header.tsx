"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const navLinks = [
    { name: "Smart App", href: "#" },
    { name: "Interfaces", href: "#" },
    { name: "Hub", href: "#" },
    { name: "Lighting", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Downloads", href: "#" },
];

const Header = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 100) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#3a3635]/50 backdrop-blur-md text-white shadow-sm font-sans"
        >
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 h-12 md:h-14 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="font-serif text-2xl md:text-3xl tracking-widest font-light">
                        KEUS
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            className="text-sm xl:text-base font-light hover:text-gray-300 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <button
                    className="lg:hidden p-2 text-xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <motion.div
                initial="closed"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 },
                }}
                className="overflow-hidden bg-[#2e2a29] lg:hidden"
            >
                <nav className="flex flex-col px-6 py-4 gap-4">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            className="text-lg font-light hover:text-gray-300 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </motion.div>
        </motion.header>
    );
};

export default Header;
