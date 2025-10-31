'use client';

import { useState } from 'react';

interface ProductLogoProps {
  fullLogoSrc: string;
  iconFallbackSrc: string;
  alt: string;
  className?: string;
}

export function ProductLogo({ fullLogoSrc, iconFallbackSrc, alt, className = 'h-16 md:h-20 w-auto' }: ProductLogoProps) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <img
      src={useFallback ? iconFallbackSrc : fullLogoSrc}
      alt={alt}
      className={useFallback ? 'w-16 h-16' : className}
      onError={() => setUseFallback(true)}
    />
  );
}
