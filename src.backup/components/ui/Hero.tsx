import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  headline?: string;
  title?: string;
  subheadline?: string;
  subtitle?: string;
  primaryCTA?: string;
  buttonText?: string;
  primaryLink?: string;
  buttonLink?: string;
  primaryCTAAction?: () => void;
  secondaryCTA?: string;
  secondaryLink?: string;
  secondaryCTAAction?: () => void;
  backgroundGradient?: string;
  gradient?: boolean;
  image?: string;
  children?: ReactNode;
}

export default function Hero({
  headline,
  title,
  subheadline,
  subtitle,
  primaryCTA,
  buttonText,
  primaryLink,
  buttonLink,
  primaryCTAAction,
  secondaryCTA,
  secondaryLink,
  secondaryCTAAction,
  backgroundGradient = "from-brand-navy to-brand-navy",
  gradient = true,
  image,
  children,
}: HeroProps) {
  const primaryContent = (
    <>
      <span>{primaryCTA ?? buttonText}</span>
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </>
  );

  const secondaryContent = secondaryCTA;
  const heroHeadline = headline ?? title ?? "";
  const heroSubheadline = subheadline ?? subtitle ?? "";
  const primaryHref = primaryLink ?? buttonLink;
  const sectionClass = gradient
    ? `relative bg-gradient-to-br ${backgroundGradient} py-24 md:py-36`
    : "relative bg-brand-navy py-24 md:py-36";

  return (
    <section className={sectionClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            {heroHeadline}
          </h1>
          {heroSubheadline && (
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              {heroSubheadline}
            </p>
          )}
          {image && (
            <div className="mb-8 flex justify-center">
              <img
                src={image}
                alt={heroHeadline || "Hero illustration"}
                className="max-h-64 w-auto rounded-xl shadow-lg"
              />
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {(primaryCTA ?? buttonText) &&
              (primaryHref ? (
                <Link
                  href={primaryHref}
                  className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-brand-navy shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  {primaryContent}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={primaryCTAAction}
                  className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-brand-navy shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  {primaryContent}
                </button>
              ))}
            {secondaryContent && (
              secondaryLink ? (
                <Link
                  href={secondaryLink}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-brand-navy focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  {secondaryContent}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={secondaryCTAAction}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-brand-navy focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  {secondaryContent}
                </button>
              )
            )}
          </div>
          {children && <div className="mt-16">{children}</div>}
        </div>
      </div>
    </section>
  );
}
