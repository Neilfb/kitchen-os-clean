'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface HeroVideoProps {
  src: string;
  poster: string;
  alt?: string;
  className?: string;
  showControls?: boolean;
}

/**
 * HeroVideo Component
 *
 * Accessible video component for hero sections with:
 * - Respects prefers-reduced-motion
 * - Mobile fallback (shows poster only)
 * - Optional pause/play controls
 * - Muted autoplay (best practice)
 * - Seamless loop
 */
export function HeroVideo({
  src,
  poster,
  alt = 'Background video',
  className = 'w-full h-full object-cover',
  showControls = false
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPaused(true);
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    // Pause video if user prefers reduced motion or on mobile
    if ((prefersReducedMotion || isMobile) && videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  }, [prefersReducedMotion, isMobile]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  // On mobile, just show the poster image
  if (isMobile) {
    return (
      <img
        src={poster}
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <div className="relative w-full h-full group">
      <video
        ref={videoRef}
        poster={poster}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        className={className}
        aria-label={alt}
      >
        <source src={src} type="video/mp4" />
        {/* Fallback for browsers without video support */}
        <img src={poster} alt={alt} className={className} />
      </video>

      {/* Optional play/pause control */}
      {showControls && (
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm"
          aria-label={isPaused ? 'Play video' : 'Pause video'}
        >
          {isPaused ? (
            <Play className="w-5 h-5" />
          ) : (
            <Pause className="w-5 h-5" />
          )}
        </button>
      )}

      {/* Accessibility: noscript fallback */}
      <noscript>
        <img src={poster} alt={alt} className={className} />
      </noscript>
    </div>
  );
}
