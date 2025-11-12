import { Metadata } from 'next';
import Link from 'next/link';
import { Mic, MessageCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen OS Podcast - Industry Insights & Expert Conversations',
  description: 'Listen to the Kitchen OS Podcast featuring interviews with chefs, restaurant operators, and hospitality leaders. Practical advice on kitchen management, food safety, waste reduction, and profitability.',
  keywords: 'kitchen podcast, restaurant podcast, chef interviews, hospitality podcast, food safety podcast, restaurant management',
  openGraph: {
    title: 'Kitchen OS Podcast - Industry Insights & Expert Conversations',
    description: 'Interviews with chefs, restaurant operators, and hospitality leaders. Practical advice on kitchen management, compliance, and profitability.',
    type: 'website',
  },
};

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-purple-100 text-sm font-semibold mb-6 border border-white/20">
              <Mic className="w-4 h-4" />
              Available on Spotify
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Kitchen OS Podcast
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Real conversations with chefs, operators, and hospitality leaders about running profitable, compliant, and sustainable kitchens.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://open.spotify.com/show/3HylxoqT4QsxTHQeknK9cA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Spotify Player */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Listen Now on Spotify</h2>
            <p className="text-gray-600 text-lg">
              Browse all episodes and listen directly from your browser
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/show/3HylxoqT4QsxTHQeknK9cA?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Kitchen OS Podcast on Spotify"
            />
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Never Miss an Episode</h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe on your favourite podcast platform and get notified when new episodes drop every Monday.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://open.spotify.com/show/3HylxoqT4QsxTHQeknK9cA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Spotify
            </a>
          </div>
        </div>
      </div>

      {/* CTA to Products */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 border-t border-green-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-green-50 text-lg mb-8">
            Hear the stories, then experience the results. Start your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://tidycal.com/foodsafesystem/30-minute-video-call-with-kitchen-os-founder-neil-bradley"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg inline-flex items-center gap-2"
            >
              Book a Demo
            </a>
            <Link
              href="/pricing"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all border-2 border-green-400"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
