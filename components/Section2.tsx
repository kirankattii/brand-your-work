"use client"
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 87;

const Section2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Preload images for smoother playback
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

    // Map scroll progress (0 to 1) to frame number (1 to 87)
    const frameTransform = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

    useMotionValueEvent(frameTransform, "change", (latest) => {
        setCurrentFrame(Math.round(latest));
    });

    // Calculate opacities for different elements based on scroll progress

    // Initial text fades out quickly (e.g., between 0% and 15% scroll)
    const initialTextOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    // Final features fade in one by one at the end (e.g., between 80% and 100% scroll)
    const feature1Opacity = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);
    const feature1Y = useTransform(scrollYProgress, [0.8, 0.85], [20, 0]);

    const feature2Opacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
    const feature2Y = useTransform(scrollYProgress, [0.85, 0.9], [20, 0]);

    const feature3Opacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
    const feature3Y = useTransform(scrollYProgress, [0.9, 0.95], [20, 0]);

    const feature4Opacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
    const feature4Y = useTransform(scrollYProgress, [0.95, 1], [20, 0]);


    return (
        // The container height determines how long the scroll takes. 
        // 300vh means the user has to scroll 3 times the screen height to complete the animation.
        <div ref={containerRef} className="relative h-[400vh] w-full bg-black">

            {/* Sticky container holds the visuals in place while the user scrolls through the h-[400vh] */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Background Image Sequence */}
                {/* We use a regular img tag instead of next/image here because we update the src 
            rapidly via state on scroll, and next/image optimization overhead might cause lag */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={`/section2/ezgif-frame-${currentFrame.toString().padStart(3, "0")}.jpg`}
                        alt={`Frame ${currentFrame}`}
                        className="w-full h-full object-cover"
                    />
                    {/* Subtle gradient overlay to ensure text is readable */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" /> */}
                </div>

                {/* --- Initial Text Overlay --- */}
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

                {/* --- Final Features Layout --- */}
                <div className="absolute bottom-16 md:bottom-24 w-full px-8 md:px-16 z-20 pointer-events-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 max-w-7xl mx-auto">

                        {/* Feature 1 */}
                        <motion.div style={{ opacity: feature1Opacity, y: feature1Y }}>
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 drop-shadow-md pb-2 border-b border-gray-500/50">
                                Curtain control
                            </h3>
                            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                                integrate blinds into your scenes and experience the magic of ambience unfold
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div style={{ opacity: feature2Opacity, y: feature2Y }}>
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 drop-shadow-md pb-2 border-b border-gray-500/50">
                                Lighting control
                            </h3>
                            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                                when smart tech makes your light design, transform your space with a single tap
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div style={{ opacity: feature3Opacity, y: feature3Y }}>
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 drop-shadow-md pb-2 border-b border-gray-500/50">
                                Climate control
                            </h3>
                            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
                                assign the right temperature for every mood to elevate your living experience
                            </p>
                        </motion.div>

                        {/* Feature 4 */}
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
