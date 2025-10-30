import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type FeatureIcon = LucideIcon | string | undefined;

interface FeatureCardProps {
  icon?: FeatureIcon;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  children?: ReactNode;
}

export default function FeatureCard({
  icon,
  title,
  description,
  linkText,
  linkUrl,
  children,
}: FeatureCardProps) {
  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-subtle-bg text-brand-navy mb-6 overflow-hidden group-hover:scale-110 transition-transform">
          <Image
            src={icon}
            alt={title ?? "Feature icon"}
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      );
    }

    const IconComponent = icon;
    return (
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-subtle-bg text-brand-navy mb-6 group-hover:scale-110 transition-transform">
        <IconComponent className="w-7 h-7" />
      </div>
    );
  };

  return (
    <div className="group bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-gray-200">
      {renderIcon()}
      {title && (
        <h3 className="text-xl font-bold text-brand-dark-text mb-3">{title}</h3>
      )}
      {description && (
        <p className="text-slate-700 leading-relaxed">{description}</p>
      )}
      {children && <div className="mt-6">{children}</div>}
      {linkText && linkUrl && (
        <a
          href={linkUrl}
          className="mt-6 inline-flex items-center text-brand-navy font-semibold hover:underline"
        >
          {linkText}
        </a>
      )}
    </div>
  );
}
