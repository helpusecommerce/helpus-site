// src/components/AutoCarousel.jsx
import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function AutoCarousel({
  slides = [],           // [{src, alt, title, href}]
  interval = 3500,       // ms
  aspect = 'aspect-[16/9]', // controle do tamanho
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const isHovering = useRef(false);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  };

  useEffect(() => {
    // autoplay com pausa no hover
    const tick = () => {
      if (!isHovering.current) setIndex((i) => (i + 1) % slides.length);
      timerRef.current = setTimeout(tick, interval);
    };
    timerRef.current = setTimeout(tick, interval);
    return () => clearTimeout(timerRef.current);
  }, [interval, slides.length]);

  // teclado ← →
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(+1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl shadow`}
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Exemplos de sites criados"
    >
      {/* faixa */}
      <div
        className={`flex transition-transform duration-700 ease-in-out ${aspect}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="w-full shrink-0 relative bg-white">
            {/* imagem */}
            <a
              href={s.href || '#'}
              target={s.href ? '_blank' : undefined}
              rel={s.href ? 'noopener noreferrer' : undefined}
              className="block w-full h-full"
              aria-label={s.title || s.alt}
            >
              <img
                src={s.src}
                alt={s.alt || s.title || `slide ${i + 1}`}
                className="w-full h-full object-contain bg-white"
                loading="lazy"
              />
            </a>

            {/* legenda opcional */}
            {(s.title || s.caption) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm sm:text-base px-4 py-2">
                <div className="font-semibold">{s.title}</div>
                {s.caption && <div className="opacity-90">{s.caption}</div>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* setas */}
      <button
        onClick={() => go(-1)}
        aria-label="Anterior"
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => go(+1)}
        aria-label="Próximo"
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow"
      >
        <FaChevronRight />
      </button>

      {/* bolinhas */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para o slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition 
              ${i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
}
