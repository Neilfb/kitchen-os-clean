'use client';

/**
 * IndustryCard Component
 *
 * Interactive flip card for industries - shows image on front, details on back
 * Flips on hover (desktop) or click (mobile)
 */

import { useState } from 'react';
import Image from 'next/image';
import { Hotel, Utensils, GraduationCap, Building2, Coffee, Home, Factory, ShoppingCart } from 'lucide-react';

interface IndustryCardProps {
  name: string;
  description: string;
  imageSrc: string;
  iconName: string;
  challenges: string[];
  solution: string;
}

const iconMap = {
  Utensils,
  Hotel,
  GraduationCap,
  Building2,
  Coffee,
  Home,
  Factory,
  ShoppingCart,
};

export default function IndustryCard({
  name,
  description,
  imageSrc,
  iconName,
  challenges,
  solution,
}: IndustryCardProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Utensils;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group relative h-[400px] cursor-pointer perspective-1000"
      onClick={handleClick}
    >
      {/* Card Container with 3D Flip */}
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of Card - Image */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-soft-lg">
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Front Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{name}</h3>
              </div>
              <p className="text-white/90 text-sm">{description}</p>
              <p className="text-white/70 text-xs mt-3">Click to learn more</p>
            </div>
          </div>
        </div>

        {/* Back of Card - Details */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-soft-lg bg-white">
          <div className="h-full p-6 overflow-y-auto scrollbar-thin">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-product-fss-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-product-fss-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">{name}</h3>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-bold text-brand-navy mb-2 uppercase tracking-wide">
                Common Challenges:
              </h4>
              <ul className="space-y-1.5">
                {challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-gray-700 pl-3 border-l-2 border-product-fss-green"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-brand-navy mb-2 uppercase tracking-wide">
                How Kitchen OS Helps:
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">{solution}</p>
            </div>

            <p className="text-gray-400 text-xs mt-4 text-center">
              Click to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
