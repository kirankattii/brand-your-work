import Image from "next/image";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-screen min-h-[600px] flex flex-col justify-between items-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Smart Home Exterior"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>

        {/* Main Content (Title and Subtitle) */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full px-4 mt-16 md:mt-24">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[110px] leading-[1.1] mb-6 drop-shadow-lg flex flex-col items-center justify-center">
            <span>Smart is the</span>
            <span>new home</span>
          </h1>
          <p className="text-lg md:text-2xl lg:text-[28px] font-light tracking-wide max-w-4xl drop-shadow-md pb-12">
            premium smarthome systems designed for distinctive spaces
          </p>
        </div>

        {/* Footer Description */}
        <div className="relative z-10 w-full px-4 pb-12 md:pb-16 max-w-4xl mx-auto">
          <p className="text-sm md:text-base lg:text-[17px] font-light text-gray-200/90 leading-relaxed px-4">
            A home is a gorgeous story waiting to unfold. Every inch of it, every little space, that casual
            <br className="hidden md:block" /> corner has an ability to express an experience.
          </p>
        </div>
      </div>

      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </main>
  );
}
