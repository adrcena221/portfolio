import { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { ProjectImageSlideshow } from "./ProjectImageSlideshow";

interface Project {
  title: string;
  description: string;
  images: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [cardWidth, setCardWidth] = useState(0);
  const [displayProjects, setDisplayProjects] = useState<Project[]>([
    ...projects,
    ...projects,
    ...projects,
  ]);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Measure card width
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 24); // gap-6
    }
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || cardWidth === 0) return;

    el.scrollLeft = projects.length * cardWidth;
  }, [cardWidth, projects.length]);

  // Drag handlers (fixed)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;

    setIsDragging(true);
    el.classList.add("select-none");

    const rect = el.getBoundingClientRect();
    setStartX(e.clientX - rect.left);
    setStartScrollLeft(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!isDragging || !el) return;

    e.preventDefault();

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - startX) * 1.3; // drag speed
    el.scrollLeft = startScrollLeft - walk;
  };

  const stopDragging = () => {
    const el = carouselRef.current;
    if (el) el.classList.remove("select-none");
    setIsDragging(false);
  };

  // Infinite scroll logic + indicator
  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container || cardWidth === 0) return;

    const scrollPos = container.scrollLeft;
    const totalWidth = container.scrollWidth;

    // Prepend if near left
    if (scrollPos < cardWidth * 2) {
      setDisplayProjects((prev) => [...projects, ...prev]);
      container.scrollLeft = scrollPos + projects.length * cardWidth;
    }

    // Append if near right
    if (scrollPos > totalWidth - container.clientWidth - cardWidth * 2) {
      setDisplayProjects((prev) => [...prev, ...projects]);
    }

    const index = Math.round(scrollPos / cardWidth) % projects.length;
    setActiveIndex((index + projects.length) % projects.length);
  };

  // Arrow scroll
  const scroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el || cardWidth === 0) return;

    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const goToIndex = (i: number) => {
  const el = carouselRef.current;
  if (!el || cardWidth === 0) return;

  // Always target the "middle" copy (2nd set) to keep infinite behavior stable
  const target = projects.length + i;

  el.scrollTo({
    left: target * cardWidth,
    behavior: "smooth",
  });

  setActiveIndex(i);
  };

  
  return (
    <div className="w-full flex flex-col pt-20 relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#112240] hover:bg-[#1d3557] transition">
        <FaChevronLeft size={20} className="text-white" />
      </button>

      {/* Carousel */}
      <div className="px-4 md:px-20 py-8">
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
          className="flex overflow-x-scroll gap-6 py-8 snap-x snap-center scroll-smooth cursor-grab active:cursor-grabbing scrollbar-hide"
        >
        {displayProjects.map((project, index) => (
          <div
            ref={index === 0 ? cardRef : null}
            key={`${project.title}-${index}`}
            className="group min-w-75 md:min-w-100 lg:min-w-125 snap-center bg-slate-900 p-6 rounded-2xl shadow-lg border border-gray-600 transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:border-cyan-400"
          >
            <div className="mb-4">
              <ProjectImageSlideshow images={project.images} alt={project.title} intervalMs={2500} />
            </div>

            <h3 className="lg:text-2xl md:text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 lg:text-md md:text-sm">
              {project.description}
            </p>
          </div>
        ))}
        </div>

        {/* Indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`w-3 h-3 cursor-pointer rounded-full transition-all ${
                i === activeIndex ? "bg-cyan-400 scale-125" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#112240] hover:bg-[#1d3557] transition"
      >
        <FaChevronRight size={20} className="text-white" />
      </button>
    </div>
  );
};
