import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { ExpCard } from "./ExpCard";
import { ReactIconHover } from "./ReactIconHover";
import cvFile from "../assets/files/Adrian-Miguel-R.-Cena-FlowCV-Resume-20260215-1.pdf";
import Orb from "./Orb";
import "../index.css";

export const HeroSection = () => {
  const titles = ["Software Developer.", "Web Developer.", "Full Stack Developer."];
  const extraSeconds = 3;

  const [index, setIndex] = useState(0);
  const currentText = titles[index];
  const typingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    el.style.setProperty("--ch", currentText.length.toString());
    const animationDuration = currentText.length * 0.15 + extraSeconds;

    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = `
      typing ${animationDuration}s steps(${currentText.length}) forwards,
      blink 0.5s step-end infinite alternate
    `;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, animationDuration * 1000);

    return () => clearTimeout(timer);
  }, [currentText, extraSeconds, titles.length]);

  const typingStyle = { "--ch": currentText.length } as React.CSSProperties & { "--ch": number };

  return (
    <div>
      <section className="min-h-screen flex flex-col md:flex-row md:justify-between items-center pt-24 md:pt-0 px-4 sm:px-6 md:px-16 lg:px-32 text-white gap-10 md:gap-0">
        {/* Left side */}
        <div className="flex flex-col space-y-6 w-full min-w-0 text-center md:text-left">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 lg:gap-4 xl:gap-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-7xl font-bold leading-snug max-w-full md:max-w-lg">
              Hi! I am a
            </h1>

            <h1
              ref={typingRef}
              className="typing-text text-xl md:text-2xl lg:text-3xl xl:text-7xl font-bold leading-snug max-w-full overflow-hidden whitespace-nowrap"
              style={typingStyle}
            >
              {currentText}
            </h1>
        </div>

          <div className="flex items-center justify-center md:justify-start leading-tight md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <p className="text-gray-400 lg:text-md xl:text-2xl">
              I design and build creative, user-focused software and web experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start pt-4">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transform hover:-translate-y-1 text-white text-xl font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-full shadow-md transition duration-300 inline-flex items-center justify-center"
            >
              Hire Me
            </a>
            <a
              href={cvFile}
              download="Adrian-Cena-CV.pdf"
              className="relative inline-flex items-center justify-center
                        text-white text-lg md:text-xl font-semibold
                        px-6 md:px-8 py-3 md:py-3.5
                        rounded-full
                        border border-gray-600
                        bg-transparent
                        transition-all duration-300 ease-out
                        hover:bg-gray-800
                        hover:border-cyan-400
                        hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
                        hover:-translate-y-1
                        active:scale-95"
            >
              Download CV
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-5 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0 sm:space-x-4 md:space-x-4 lg:space-x-6 xl:space-x-8 pt-2 text-gray-400">
            <ReactIconHover icons={<FaGithub />} href="https://github.com/adrcena221" />
            <ReactIconHover icons={<FaLinkedin />} href="https://www.linkedin.com/in/adrian-cena/" />
            <ReactIconHover icons={<BiLogoGmail />} copyText="adrcena123@gmail.com"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex w-full md:w-1/4 justify-center md:justify-end">
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none h-80 md:h-105 lg:h-130 xl:h-150">
            <Orb hoverIntensity={0.5} rotateOnHover={true} hue={2} forceHoverState={false} />
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className="w-screen px-4 md:px-2 lg:px-16 xl:px-26 flex flex-col md:flex-row gap-6 justify-between sm:-mt-160 md:-mt-32 lg:-mt-42 xl:-mt-52">
        <ExpCard number="12" title="Projects" subtitle="Completed" />
        <ExpCard number="5" title="Years of Building" subtitle="Scalable Systems" />
        <ExpCard number="19" title="Technologies" subtitle="Used" />
        <ExpCard number="50" title="Project" subtitle="Commits" />
      </section>
    </div>
  );
};
