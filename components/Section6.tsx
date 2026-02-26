"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Section6 = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const item1Opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
    const item1Y = useTransform(scrollYProgress, [0, 0.15], [50, 0]);

    const item2Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
    const item2Y = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);

    const item3Opacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
    const item3Y = useTransform(scrollYProgress, [0.4, 0.55], [50, 0]);

    const item4Opacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
    const item4Y = useTransform(scrollYProgress, [0.6, 0.75], [50, 0]);


    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-[#cdc8be]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-4 md:px-12 lg:px-24">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 w-full max-w-[1600px] mx-auto items-end lg:items-center justify-items-center">

                    <motion.div
                        style={{ opacity: item1Opacity, y: item1Y }}
                        className="flex flex-col items-center text-center w-full"
                    >
                        <h3 className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-2 md:mb-4 lg:mb-8 max-w-[120px] sm:max-w-[200px] leading-tight text-[#4a4a4a]">
                            Smart Console
                        </h3>
                        <div className="relative w-full max-w-[160px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[320px] aspect-[2/2] lg:aspect-[16/10] mb-2 md:mb-4 lg:mb-8">
                            <Image
                                src="/smart-console.png"
                                alt="Smart Console"
                                fill
                                className="object-contain drop-shadow-xl lg:drop-shadow-2xl"
                            />
                        </div>
                        <a href="#" className="text-[10px] sm:text-xs md:text-sm font-medium hover:opacity-70 transition-opacity text-[#4a4a4a]">
                            Learn More &gt;
                        </a>
                    </motion.div>

                    <motion.div
                        style={{ opacity: item2Opacity, y: item2Y }}
                        className="flex flex-col items-center text-center w-full"
                    >
                        <h3 className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-2 md:mb-4 lg:mb-8 max-w-[120px] sm:max-w-[200px] leading-tight text-[#4a4a4a]">
                            Smart App
                        </h3>
                        <div className="relative w-full max-w-[120px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[220px] aspect-[2/2] lg:aspect-[1/2] mb-2 md:mb-4 lg:mb-8">
                            <Image
                                src="/smart-app2.png"
                                alt="Smart App"
                                fill
                                className="object-contain drop-shadow-xl lg:drop-shadow-2xl"
                            />
                        </div>
                        <div className="h-[15px] sm:h-[18px] md:h-[20px] invisible">Learn</div>
                    </motion.div>

                    <motion.div
                        style={{ opacity: item3Opacity, y: item3Y }}
                        className="flex flex-col items-center text-center w-full"
                    >
                        <h3 className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-2 md:mb-4 lg:mb-8 max-w-[120px] sm:max-w-[200px] leading-tight text-[#4a4a4a]">
                            Scene Wizard
                        </h3>
                        <div className="relative w-full max-w-[110px] sm:max-w-[140px] md:max-w-[150px] lg:max-w-[180px] aspect-[2/2] lg:aspect-[1/2] mb-2 md:mb-4 lg:mb-8">
                            <Image
                                src="/wizard_gray.png"
                                alt="Scene Wizard"
                                fill
                                className="object-contain drop-shadow-xl lg:drop-shadow-2xl"
                            />
                        </div>
                        <a href="#" className="text-[10px] sm:text-xs md:text-sm font-medium hover:opacity-70 transition-opacity text-[#4a4a4a]">
                            Learn More &gt;
                        </a>
                    </motion.div>

                    <motion.div
                        style={{ opacity: item4Opacity, y: item4Y }}
                        className="flex flex-col items-center text-center w-full"
                    >
                        <h3 className="font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-2 md:mb-4 lg:mb-8 max-w-[120px] sm:max-w-[200px] leading-tight text-[#4a4a4a]">
                            Voice Control
                        </h3>
                        <div className="relative w-full max-w-[110px] sm:max-w-[140px] md:max-w-[140px] lg:max-w-[150px] aspect-square mb-2 md:mb-4 lg:mb-8 mt-4 lg:mt-0">
                            <Image
                                src="/voice-assist.png"
                                alt="Voice Control"
                                fill
                                className="object-contain"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] lg:-translate-y-1/2 w-max max-w-[140%] mt-6 sm:mt-8 md:mt-12 lg:mt-8 bg-[#6bc4e8] text-white text-[9px] sm:text-[10px] lg:text-xs py-1 px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4 rounded-full after:content-[''] after:absolute after:bottom-0 after:right-0 after:-mb-1 sm:after:-mb-1.5 md:after:-mb-2 after:-mr-1 sm:after:-mr-1.5 md:after:-mr-2 after:w-2 sm:after:w-3 md:after:w-4 after:h-2 sm:after:h-3 md:after:h-4 after:bg-[#6bc4e8] after:rotate-45 -z-10 shadow-md lg:shadow-lg font-medium whitespace-nowrap">
                                Hey Google!
                            </div>
                        </div>
                        <div className="h-[15px] sm:h-[18px] md:h-[20px] invisible">Learn</div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Section6;
