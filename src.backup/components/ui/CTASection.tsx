import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  primaryCTA?: string;
  primaryLink?: string;
  secondaryCTA?: string;
  secondaryLink?: string;
  backgroundColor?: string;
}

export default function CTASection({
  headline,
  title,
  description,
  buttonText,
  buttonLink,
  primaryCTA,
  primaryLink,
  secondaryCTA,
  secondaryLink,
  backgroundColor = "#091C35",
}: CTASectionProps) {
  const heading = headline ?? title ?? "";
  const primaryLabel = primaryCTA ?? buttonText;
  const primaryHref = primaryLink ?? buttonLink;

  return (
    <section
      className="py-24"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {heading}
          </h2>
          {description && (
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryLabel && primaryHref && (
              <Link
                href={primaryHref}
                className="group inline-flex items-center justify-center bg-white text-brand-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px] focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {secondaryCTA && secondaryLink && (
              <Link
                href={secondaryLink}
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-navy transition-all duration-300 min-h-[56px] focus:outline-none focus:ring-4 focus:ring-white/50"
              >
                {secondaryCTA}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
