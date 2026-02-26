"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-[#1c1c1c] text-white overflow-hidden font-sans">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-24">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 max-w-lg"
                    >
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 tracking-wide">
                            Elevate your <br />
                            living <br />
                            experience
                        </h2>
                        <p className="text-sm md:text-base text-gray-300 max-w-sm mt-4 leading-relaxed font-light">
                            Register for a exclusive smart home demo at our custom built studio apartment.
                        </p>
                    </motion.div>

                    {/* Right Column (Form) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-[500px]"
                    >
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full bg-[#2e2e2e] text-white px-4 py-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all font-light text-sm placeholder-gray-400"
                            />
                            <input
                                type="tel"
                                placeholder="Mobile"
                                className="w-full bg-[#2e2e2e] text-white px-4 py-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all font-light text-sm placeholder-gray-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-[#2e2e2e] text-white px-4 py-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all font-light text-sm placeholder-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Property type"
                                className="w-full bg-[#2e2e2e] text-white px-4 py-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all font-light text-sm placeholder-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Property size"
                                className="w-full bg-[#2e2e2e] text-white px-4 py-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all font-light text-sm placeholder-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Stage of construction"
                                className="w-full bg-[#2e2e2e] text-white px-4 py-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all font-light text-sm placeholder-gray-400"
                            />

                            <button
                                type="submit"
                                className="w-full mt-2 bg-[#9ecfc9] hover:bg-[#8abeb8] text-white font-medium py-4 rounded-sm transition-colors text-base"
                            >
                                Book your appointment
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-16">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative bg-[#1c1c1c] px-4 text-sm text-gray-400 font-light">or</div>
                </div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-12">
                        Get in touch with us
                    </h3>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-4 mb-3">
                                <FaPhoneAlt className="text-2xl" />
                                <span className="text-2xl md:text-3xl font-medium tracking-wide">+91 93929 05179</span>
                            </div>
                            <p className="text-sm text-gray-300 font-light">to speak to our smart home consultant</p>
                        </div>

                        <div className="hidden md:block w-px h-16 bg-gray-700"></div>

                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-4 mb-3">
                                <FaEnvelope className="text-3xl" />
                                <span className="text-2xl md:text-3xl font-medium tracking-wide">info@keus.in</span>
                            </div>
                            <p className="text-sm text-gray-300 font-light">write to our sales team with specific requests</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-[#151515] py-6 px-6 md:px-12">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs md:text-sm text-gray-400 font-light text-center md:text-left">
                        Copyright &copy; 2024 KEUS All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <FaInstagram className="text-lg" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <FaFacebookF className="text-sm" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <FaLinkedinIn className="text-sm" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <FaEnvelope className="text-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
