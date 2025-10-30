import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image?: string;
  name?: string;
  title?: string;
  description?: string;
  price?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function ProductCard({
  image,
  name,
  title,
  description,
  price,
  buttonText,
  buttonLink,
}: ProductCardProps) {
  const heading = title ?? name ?? "";

  return (
    <div className="group relative bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 overflow-hidden">
      <div className="relative z-10">
        {image && (
          <div className="mb-6 flex justify-center">
            <Image
              src={image}
              alt={heading || "Product image"}
              width={200}
              height={200}
              className="h-32 w-auto object-contain"
            />
          </div>
        )}

        {heading && (
          <h3 className="text-2xl font-bold text-brand-dark-text mb-4">
            {heading}
          </h3>
        )}
        {description && (
          <p className="text-slate-700 mb-4 leading-relaxed">{description}</p>
        )}
        {price && (
          <p className="text-brand-navy font-semibold text-lg mb-6">{price}</p>
        )}

        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}
