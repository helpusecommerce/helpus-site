// src/components/AutoCarousel.jsx
import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function AutoCarousel({
  // slides: [{ src, alt, title, caption, href, logo, isVideo, poster }]
  slides = [],
  interval = 3500,             // ms
  aspect = 'aspect-[21/9]',    // ex.: 'aspect-[16/9]' ou remova e use h-72
  showArrows = true,
  showDots = true,
  onSlideChange,               // opcional: callback(index)
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const isHovering = useRef(false);
  const isPageVisible = useRef(true);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // refs de vídeo para controlar play/pause por slide
  const videoRefs = useRef([]);

  // touch swipe
  const startX = useRef(0);
  const deltaX = useRef(0);

  const go = (dir) => {
    if (!slides.length) return;
    setIndex((prev) => {
      const next = (prev + dir + slides.length) % slides.length;
      onSlideChange?.(next);
      return next;
    });
  };

  // autoplay com pausa no hover/aba oculta e respeitando reduced motion
  useEffect(() => {
    if (prefersReducedMotion.current) return; // não roda autoplay
    const tick = () => {
      if (!isHovering.current && isPageVisible.current && slides.length > 1) {
        setIndex((i) => {
          const next = (i + 1) % slides.length;
          onSlideChange?.(next);
          return next;
        });
      }
      timerRef.current = setTimeout(tick, interval);
    };
    timerRef.current = setTimeout(tick, interval);
    return () => clearTimeout(timerRef.current);
  }, [interval, slides.length, onSlideChange]);

  // pausa autoplay quando a aba fica oculta
  useEffect(() => {
    const onVis = () => {
      isPageVisible.current = document.visibilityState === 'visible';
      if (!isPageVisible.current && timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // teclado ← → (escopo no próprio carrossel)
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(+1);
    }
  };

  // Tocar somente o vídeo do slide atual
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      try {
        if (i === index) {
          const playPromise = v.play?.();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(() => {});
          }
        } else {
          v.pause?.();
          v.currentTime = 0;
        }
      } catch {}
    });
  }, [index]);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };
  const onTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50; // px
    if (deltaX.current > threshold) go(-1);
    if (deltaX.current < -threshold) go(1);
    startX.current = 0;
    deltaX.current = 0;
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow"
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Exemplos de sites criados"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* faixa */}
      <div
        className={`flex transition-transform duration-700 ease-in-out ${aspect}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((s, i) => (
          <div key={i} className="w-full shrink-0 relative bg-black">
            <a
              href={s.href || '#'}
              target={s.href ? '_blank' : undefined}
              rel={s.href ? 'noopener noreferrer' : undefined}
              className="block w-full h-full"
              aria-label={s.title || s.alt || `slide ${i + 1}`}
            >
              {/* mídia principal: vídeo ou imagem */}
              {s.isVideo ? (
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={s.src}
                  poster={s.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={s.src}
                  alt={s.alt || s.title || `slide ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}

              {/* gradiente para contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

              {/* logo opcional */}
              {s.logo && (
                <img
                  src={s.logo}
                  alt={`${s.title || s.alt || 'logo'} logo`}
                  className="absolute top-3 left-3 w-14 h-14 object-contain bg-white/90 rounded-xl p-1 shadow"
                  loading="lazy"
                />
              )}

              {/* legenda */}
              {(s.title || s.caption) && (
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 text-white" aria-live="polite">
                  {s.title && <div className="text-xl sm:text-2xl font-bold">{s.title}</div>}
                  {s.caption && <div className="opacity-90 text-sm sm:text-base">{s.caption}</div>}
                </div>
              )}
            </a>
          </div>
        ))}
      </div>

      {/* setas */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo"
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow"
          >
            <FaChevronRight />
          </button>
        </>
      )}

      {/* bolinhas */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para o slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
