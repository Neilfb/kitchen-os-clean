import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  title: string;
  thumbnail?: string;
  accentColor?: string;
}

export default function VideoPlaceholder({
  title,
  thumbnail,
  accentColor = 'product-food-safe',
}: VideoPlaceholderProps) {
  return (
    <div className="relative group cursor-pointer rounded-2xl overflow-hidden bg-brand-charcoal-light">
      <div className="aspect-video bg-gradient-to-br from-brand-charcoal to-brand-black flex items-center justify-center">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center p-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${accentColor}/20 text-${accentColor} mb-4 group-hover:scale-110 transition-transform`}>
              <Play className="w-10 h-10" />
            </div>
            <p className="text-gray-400 text-lg">{title}</p>
          </div>
        )}
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
        <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-${accentColor} text-white group-hover:scale-110 transition-transform shadow-2xl`}>
          <Play className="w-10 h-10 ml-1" />
        </div>
      </div>
    </div>
  );
}
