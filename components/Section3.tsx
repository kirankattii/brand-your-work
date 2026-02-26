"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Section3 = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Background transition: light-off to light-on (extended scroll)
    const bgOpacityOff = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const bgOpacityOn = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // First Text Block: "A HOME THAT SENSES / Intelligent spaces"
    const text1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 1, 0]);
    const text1Y = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

    // Second Content Block (Text + Mobile Image): "Proactive response"
    const content2Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

    // Clock Image
    const clockOpacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]);
    const clockScale = useTransform(scrollYProgress, [0.7, 0.8], [0.8, 1]);


    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* --- Background Images --- */}
                <motion.div style={{ opacity: bgOpacityOff }} className="absolute inset-0 z-0">
                    <Image
                        src="/light-off.jpg"
                        alt="Room lights off"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <motion.div style={{ opacity: bgOpacityOn }} className="absolute inset-0 z-0">
                    <Image
                        src="/light-on.jpg"
                        alt="Room lights on"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Overlay to ensure text readability */}
                {/* <div className="absolute inset-0 bg-black/40 z-1 pointer-events-none" /> */}

                {/* --- First Text Block --- */}
                <motion.div
                    style={{ opacity: text1Opacity, y: text1Y }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
                >
                    <span className="text-sm md:text-base tracking-widest uppercase text-gray-300 font-light mb-4">
                        A HOME THAT SENSES
                    </span>
                    <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white mb-6 drop-shadow-lg">
                        Intelligent spaces
                    </h2>
                    <p className="max-w-4xl text-lg md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed drop-shadow-md text-center">
                        experience the sheer convenience of smart living through automated routines and sensory intelligence
                    </p>
                </motion.div>

                {/* --- Second Content Block (Grouped Text & Mobile Image) --- */}
                <motion.div
                    style={{ opacity: content2Opacity }}
                    className="absolute inset-0 z-20 pointer-events-none flex"
                >
                    {/* Left Side: Fixed text and mobile image */}
                    <div className="absolute left-1/2 -translate-x-1/2 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 md:translate-x-0 w-[90%] md:w-auto flex flex-col items-center md:items-start pt-[15vh]">
                        {/* Text */}
                        <div className="max-w-xs md:max-w-md mb-4 md:mb-6 text-center md:text-left">
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-2 md:mb-4 drop-shadow-lg leading-tight">
                                Proactive<br />response
                            </h2>
                            <p className="text-[10px] md:text-xs lg:text-sm text-gray-200 font-light leading-relaxed drop-shadow-md">
                                smart routines that understand your daily needs<br />and takes care of them for you
                            </p>
                        </div>

                        {/* Mobile Image positioned directly under the text */}
                        <div className="relative w-64 sm:w-72 md:w-48 lg:w-[220px] aspect-[1/2]">
                            <Image
                                src="/mobile-app1.png"
                                alt="Mobile App Interface"
                                fill
                                className="object-contain object-bottom md:object-left-bottom"
                            />
                        </div>
                    </div>

                    {/* Right/Center Side: Clock */}
                    <motion.div
                        style={{ opacity: clockOpacity, scale: clockScale }}
                        className="absolute left-1/2 bottom-8 md:bottom-24 -translate-x-1/2 flex flex-col items-center"
                    >
                        <div className="relative w-20 h-20 md:w-28 md:h-28 mb-3">
                            <Image
                                src="/clock-end.png"
                                alt="Clock Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-white text-base md:text-lg font-light tracking-wide">
                            set time
                        </span>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default Section3;

