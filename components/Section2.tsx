"use client"
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 87;

const Section2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const loadImages = async () => {
            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image();
                img.src = `/section2/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
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

    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    const feature1Opacity = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);
    const feature1Y = useTransform(scrollYProgress, [0.8, 0.85], [20, 0]);

    const feature2Opacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
    const feature2Y = useTransform(scrollYProgress, [0.85, 0.9], [20, 0]);

    const feature3Opacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
    const feature3Y = useTransform(scrollYProgress, [0.9, 0.95], [20, 0]);

    const feature4Opacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
    const feature4Y = useTransform(scrollYProgress, [0.95, 1], [20, 0]);


    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-black">

            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                <div className="absolute inset-0 z-0">
                    <img
                        src={`/section2/ezgif-frame-${currentFrame.toString().padStart(3, "0")}.jpg`}
                        alt={`Frame ${currentFrame}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                <motion.div
                    style={{ opacity: initialTextOpacity }}
                    className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center pointer-events-none mt-[-10vh]"
                >
                    <span className="text-sm md:text-base tracking-widest uppercase text-gray-300 font-light mb-4">
                        A Home That Perceives
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg">
                        Ambience control
                    </h2>
                    <p className="max-w-3xl text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed drop-shadow-md">
                        when light, climate, media and blinds, converge at a single click to create that perfect ambience every time.
                    </p>
                </motion.div>

                <div className="absolute bottom-16 md:bottom-24 w-full px-8 md:px-16 z-20 pointer-events-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 max-w-7xl mx-auto">

                        <motion.div style={{ opacity: feature1Opacity, y: feature1Y }}>
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 drop-shadow-md pb-2 border-b border-gray-500/50">
                                Curtain control
                            </h3>
                            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                                integrate blinds into your scenes and experience the magic of ambience unfold
                            </p>
                        </motion.div>

                        <motion.div style={{ opacity: feature2Opacity, y: feature2Y }}>
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 drop-shadow-md pb-2 border-b border-gray-500/50">
                                Lighting control
                            </h3>
                            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                                when smart tech makes your light design, transform your space with a single tap
                            </p>
                        </motion.div>

                        <motion.div style={{ opacity: feature3Opacity, y: feature3Y }}>
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 drop-shadow-md pb-2 border-b border-gray-500/50">
                                Climate control
                            </h3>
                            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                                assign the right temperature for every mood to elevate your living experience
                            </p>
                        </motion.div>

                        <motion.div style={{ opacity: feature4Opacity, y: feature4Y }}>
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 drop-shadow-md pb-2 border-b border-gray-500/50">
                                Media control
                            </h3>
                            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                                enhance the potential of your scene by integrating music and media into the ambience.
                            </p>
                        </motion.div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section2;
