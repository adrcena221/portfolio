import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Props = {
    images: string[];
    alt: string;
    intervalMs?: number;
};

export const ProjectImageSlideshow: React.FC<Props> = ({
    images,
    alt,
    intervalMs = 3000,
}) => {
    const [idx, setIdx] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const timerRef = useRef<number | null>(null);

    const clampIdx = (n: number) => {
        const len = images.length;
        return ((n % len) + len) % len;
    };

    const go = (i: number) => setIdx(clampIdx(i));
    const next = () => setIdx((p) => clampIdx(p + 1));
    const prev = () => setIdx((p) => clampIdx(p - 1));

    // autoplay (paused on hover)
    useEffect(() => {
        if (images.length <= 1) return;
        if (isHovering) return;

        timerRef.current = window.setInterval(() => {
        setIdx((p) => clampIdx(p + 1));
        }, intervalMs);

        return () => {
        if (timerRef.current) window.clearInterval(timerRef.current);
        timerRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images.length, intervalMs, isHovering]);

    // prefetch next image (reduces flicker)
    useEffect(() => {
        if (images.length <= 1) return;
        const nextIdx = clampIdx(idx + 1);
        const img = new Image();
        img.src = images[nextIdx];
    }, [idx, images]);

    if (!images || images.length === 0) {
        return (
        <div className="relative w-full overflow-hidden rounded-xl aspect-video bg-slate-800" />
        );
    }

    useEffect(() => {
        if (images.length <= 1) return;
        const nextIdx = (idx + 1) % images.length;
        const img = new Image();
        img.src = images[nextIdx];
    }, [idx, images]);
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl aspect-video bg-slate-800"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
        <div className="relative w-full overflow-hidden rounded-xl aspect-video bg-slate-800">
        {images.map((src, i) => (
            <img
            key={src + i}
            src={src}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover object-center
                        transition-opacity duration-700 ease-out
                        ${i === idx ? "opacity-100" : "opacity-0"}`}
            draggable={false}
            loading={i === idx ? "eager" : "lazy"}
            decoding="async"
            />
        ))}

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
        </div>
      {/* Arrows (only on hover, only if multiple images) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
          />
        </>
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2
                       p-2 rounded-full
                       bg-black/40 hover:bg-black/55
                       border border-white/10
                       text-white
                       opacity-0 hover:opacity-100
                       transition-all duration-300"
          >
            <FaChevronLeft size={14} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2
                       p-2 rounded-full
                       bg-black/40 hover:bg-black/55
                       border border-white/10
                       text-white
                       opacity-0 hover:opacity-100
                       transition-all duration-300"
          >
            <FaChevronRight size={14} />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300
                ${i === idx ? "w-6 bg-cyan-400" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
