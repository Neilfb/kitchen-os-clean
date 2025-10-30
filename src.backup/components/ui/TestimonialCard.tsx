import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  avatar?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
}: TestimonialCardProps) {
  const initials = author ? author.trim().charAt(0).toUpperCase() : "?";

  return (
    <div className="bg-brand-navy rounded-2xl p-8 border border-white/10 text-white">
      <div className="text-emerald-300 mb-6">
        <Quote className="w-10 h-10" />
      </div>
      {quote && (
        <p className="text-xl text-white/90 mb-6 leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      )}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold overflow-hidden">
          {avatar ? (
            <Image
              src={avatar}
              alt={author ?? "Customer avatar"}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          ) : (
            initials
          )}
        </div>
        <div>
          {author && <p className="font-semibold">{author}</p>}
          {(role || company) && (
            <p className="text-white/70 text-sm">
              {[role, company].filter(Boolean).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
