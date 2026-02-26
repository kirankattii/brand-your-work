"use client"
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const TOTAL_FRAMES = 59;

const Section4 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const loadImages = async () => {
            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new window.Image();
                img.src = `/section3/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === TOTAL_FRAMES) setImagesLoaded(true);
                };
            }
        };
        loadImages();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameTransform = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

    useMotionValueEvent(frameTransform, "change", (latest) => {
        setCurrentFrame(Math.round(latest));
    });

    const contentOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-black">

            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                <div className="absolute inset-0 z-0">
                    <img
                        src={`/section3/ezgif-frame-${currentFrame.toString().padStart(3, "0")}.jpg`}
                        alt={`Frame ${currentFrame}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                <motion.div
                    style={{ opacity: contentOpacity }}
                    className="absolute inset-0 z-20 pointer-events-none flex"
                >
                    <div className="absolute left-1/2 -translate-x-1/2 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 md:translate-x-0 w-[90%] md:w-auto flex flex-col items-center md:items-start pt-[10vh]">
                        <div className="max-w-sm md:max-w-md mb-6 md:mb-10 text-center md:text-left">
                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-5 drop-shadow-lg leading-tight">
                                Reactive<br />intelligence
                            </h2>
                            <p className="text-xs md:text-sm lg:text-base text-gray-200 font-light leading-relaxed drop-shadow-md">
                                Smart sense intuitively equips your home with<br />convenience and security
                            </p>
                        </div>

                        <div className="relative w-72 sm:w-80 md:w-90 lg:w-[350px] aspect-[2/2]">
                            <Image
                                src="/mobile-app1.png"
                                alt="Mobile App Interface"
                                fill
                                className="object-contain object-bottom md:object-left-bottom"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Section4;
