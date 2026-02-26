"use client"
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const TOTAL_FRAMES = 169;

const Section5 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Preload all 169 images for smoother playback
    useEffect(() => {
        let loadedCount = 0;
        const loadImages = async () => {
            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new window.Image();
                img.src = `/section4/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === TOTAL_FRAMES) setImagesLoaded(true);
                };
            }
        };
        loadImages();
    }, []);

    // A very long scroll container to allow enough time for 169 frames and 4 features
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress (0 to 1) to frame number (1 to 169)
    const frameTransform = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

    useMotionValueEvent(frameTransform, "change", (latest) => {
        setCurrentFrame(Math.round(latest));
    });

    // Initial Title: Fades out quickly at the start
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    // Segmenting the scroll progress into 4 roughly equal phases (after the initial title fade out):
    // Phase 1: 0.1 to 0.3    (Feature 1: Smart Console)
    // Phase 2: 0.3 to 0.5    (Feature 2: Scene Wizard)
    // Phase 3: 0.5 to 0.75   (Feature 3: Smart Voice)
    // Phase 4: 0.75 to 1     (Feature 4: Smart App)

    // Feature 1
    const f1Opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);
    const f1Y = useTransform(scrollYProgress, [0.1, 0.15], [50, 0]);

    // Feature 2
    const f2Opacity = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
    const f2Y = useTransform(scrollYProgress, [0.3, 0.35], [50, 0]);

    // Feature 3
    const f3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
    const f3Y = useTransform(scrollYProgress, [0.5, 0.55], [50, 0]);

    // Feature 4: Does not close/fade out at the end
    const f4Opacity = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);
    const f4Y = useTransform(scrollYProgress, [0.75, 0.8], [50, 0]);


    return (
        // 1200vh ensures a very long scroll so the 169 frames aren't rushed
        <div ref={containerRef} className="relative h-[1200vh] w-full bg-black">

            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* --- Background Image Sequence from /section4 --- */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={`/section4/ezgif-frame-${currentFrame.toString().padStart(3, "0")}.jpg`}
                        alt={`Frame ${currentFrame}`}
                        className="w-full h-full object-cover"
                    />

                </div>

                {/* --- Initial Center Title --- */}
                <motion.div
                    style={{ opacity: initialTextOpacity }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
                >
                    <span className="text-sm md:text-base tracking-widest uppercase text-gray-300 font-light mb-4">
                        A HOME THAT RESPONDS
                    </span>
                    <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white drop-shadow-lg text-center">
                        Intuitive interfaces
                    </h2>
                </motion.div>


                {/* --- Feature Callouts Container --- */}
                <div className="absolute inset-0 z-20 pointer-events-none px-6 md:px-16 lg:px-24 flex items-center">

                    {/* Feature 1: Smart Console */}
                    <motion.div
                        style={{ opacity: f1Opacity, y: f1Y }}
                        className="absolute flex flex-col pt-10"
                    >
                        <div className="max-w-sm md:max-w-md mb-8">
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-4 drop-shadow-lg leading-tight">
                                Smart Console
                            </h2>
                            <p className="text-xs md:text-sm lg:text-base text-gray-200 font-light leading-relaxed drop-shadow-md">
                                the only switch system your home needs
                            </p>
                        </div>
                        <div className="relative w-64 md:w-80 lg:w-[400px] aspect-[16/9]">
                            <Image
                                src="/smart-console.png"
                                alt="Smart Console"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </motion.div>

                    {/* Feature 2: Scene Wizard */}
                    <motion.div
                        style={{ opacity: f2Opacity, y: f2Y }}
                        className="absolute flex flex-col pt-10"
                    >
                        <div className="max-w-sm md:max-w-md mb-8">
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-4 drop-shadow-lg leading-tight">
                                Scene Wizard
                            </h2>
                            <p className="text-xs md:text-sm lg:text-base text-gray-200 font-light leading-relaxed drop-shadow-md">
                                an exquisite portable room controller
                            </p>
                        </div>
                        <div className="relative w-48 md:w-64 lg:w-[280px] aspect-[2/2]">
                            <Image
                                src="/scene-wizard.png"
                                alt="Scene Wizard"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </motion.div>

                    {/* Feature 3: Smart Voice */}
                    <motion.div
                        style={{ opacity: f3Opacity, y: f3Y }}
                        className="absolute flex flex-col pt-10"
                    >
                        <div className="max-w-sm md:max-w-md mb-8">
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-4 drop-shadow-lg leading-tight">
                                Smart Voice
                            </h2>
                            <p className="text-xs md:text-sm lg:text-base text-gray-200 font-light leading-relaxed drop-shadow-md">
                                with Alexa and Google Home
                            </p>
                        </div>
                        <div className="relative w-64 md:w-80 lg:w-[320px] aspect-[2/1]">
                            <Image
                                src="/voice-assist.png"
                                alt="Smart Voice Assistant"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </motion.div>

                    {/* Feature 4: Smart App */}
                    <motion.div
                        style={{ opacity: f4Opacity, y: f4Y }}
                        className="absolute flex flex-col pt-10"
                    >
                        <div className="max-w-sm md:max-w-md mb-8">
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-4 drop-shadow-lg leading-tight">
                                Smart App
                            </h2>
                            <p className="text-xs md:text-sm lg:text-base text-gray-200 font-light leading-relaxed drop-shadow-md">
                                control your home from anywhere
                            </p>
                        </div>
                        <div className="relative w-80 md:w-120 lg:w-[480px] aspect-[2/2]">
                            <Image
                                src="/smart-app.png"
                                alt="Smart App Interface"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default Section5;
