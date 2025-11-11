import { Metadata } from 'next';
import Link from 'next/link';
import { Mic, Play, Headphones, Calendar, Users, MessageCircle, ExternalLink } from 'lucide-react';

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

const episodes = [
  {
    id: 1,
    title: 'From Chaos to Compliance: How Sarah Mitchell Transformed The Grove Hotel',
    guest: 'Sarah Mitchell',
    role: 'General Manager, The Grove Hotel',
    duration: '42 min',
    date: '2024-10-28',
    description: 'Sarah shares how she reduced food waste by 40% and saved £15,000 in the first year using Kitchen OS. Learn her strategies for staff training, waste tracking, and compliance management.',
    topics: ['Waste Reduction', 'HACCP Compliance', 'Staff Training'],
    spotifyUrl: 'https://open.spotify.com/episode/example1',
    thumbnail: '/podcast/episode-1.jpg',
  },
  {
    id: 2,
    title: 'The Economics of Food Safety: ROI on Digital HACCP Systems',
    guest: 'Dr. James Chen',
    role: 'Food Safety Consultant & Former FSA Inspector',
    duration: '38 min',
    date: '2024-10-21',
    description: 'Dr. Chen reveals what inspectors actually look for during visits and explains the hidden costs of paper-based HACCP. Plus: how digital systems can save 12+ hours weekly.',
    topics: ['HACCP', 'Food Safety', 'ROI Analysis'],
    spotifyUrl: 'https://open.spotify.com/episode/example2',
    thumbnail: '/podcast/episode-2.jpg',
  },
  {
    id: 3,
    title: 'Allergen Management in 2024: QR Codes, AI, and Customer Trust',
    guest: 'Emma Thompson',
    role: 'Head Chef, Noma alumna',
    duration: '35 min',
    date: '2024-10-14',
    description: 'Emma discusses modern allergen management, the shift from printed menus to QR codes, and how transparency builds customer loyalty. Real stories from fine dining kitchens.',
    topics: ['Allergen Management', 'Customer Experience', 'Technology'],
    spotifyUrl: 'https://open.spotify.com/episode/example3',
    thumbnail: '/podcast/episode-3.jpg',
  },
  {
    id: 4,
    title: 'Multi-Site Operations: Scaling Kitchen Standards Across 15 Locations',
    guest: 'Marcus Williams',
    role: 'Operations Director, Bistro Group',
    duration: '45 min',
    date: '2024-10-07',
    description: 'Managing consistency across multiple sites is the ultimate challenge. Marcus reveals his playbook for standardizing HACCP, training, and compliance across a growing restaurant group.',
    topics: ['Multi-Site Management', 'Scaling', 'Consistency'],
    spotifyUrl: 'https://open.spotify.com/episode/example4',
    thumbnail: '/podcast/episode-4.jpg',
  },
  {
    id: 5,
    title: 'The £2.5M Question: How Data-Driven Kitchens Outperform Competitors',
    guest: 'Rachel Park',
    role: 'Restaurant Finance Analyst',
    duration: '40 min',
    date: '2024-09-30',
    description: 'Rachel breaks down the numbers: where restaurants lose money (waste, labor, compliance fines) and how smart technology creates measurable ROI. Data-backed strategies for profitability.',
    topics: ['Financial Analysis', 'Profitability', 'Data Analytics'],
    spotifyUrl: 'https://open.spotify.com/episode/example5',
    thumbnail: '/podcast/episode-5.jpg',
  },
];

const upcomingGuests = [
  {
    name: 'Tom Kerridge',
    role: 'Michelin Star Chef & Restaurant Owner',
    topic: 'Running Profitable Pubs in a Challenging Market',
    date: 'November 2024',
  },
  {
    name: 'Lisa Chen',
    role: 'Sustainability Director, Wagamama',
    topic: 'Enterprise-Level Waste Reduction Strategies',
    date: 'November 2024',
  },
  {
    name: 'David Silva',
    role: 'Head of Food Safety, Deliveroo',
    topic: 'Digital Compliance for Delivery-First Restaurants',
    date: 'December 2024',
  },
];

export default function PodcastPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-purple-100 text-sm font-semibold mb-6 border border-white/20">
                <Mic className="w-4 h-4" />
                New episodes every Monday
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Kitchen OS Podcast
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Real conversations with chefs, operators, and hospitality leaders about running profitable, compliant, and sustainable kitchens.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://open.spotify.com/show/kitchen-os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Listen on Spotify
                </a>
                <a
                  href="https://podcasts.apple.com/podcast/kitchen-os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/20 inline-flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zM12 5.455c-1.806 0-3.273 1.467-3.273 3.272 0 1.806 1.467 3.273 3.273 3.273s3.273-1.467 3.273-3.273c0-1.805-1.467-3.272-3.273-3.272zm0 1.636c.903 0 1.636.733 1.636 1.636S12.903 10.364 12 10.364c-.903 0-1.636-.733-1.636-1.637 0-.903.733-1.636 1.636-1.636zm0 4.364c-2.168 0-3.927 1.759-3.927 3.927v5.345h1.636v-5.345c0-1.265 1.026-2.291 2.291-2.291s2.291 1.026 2.291 2.291v5.345h1.636v-5.345c0-2.168-1.759-3.927-3.927-3.927z"/>
                  </svg>
                  Apple Podcasts
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-200 mb-1">Latest Episode</div>
                    <div className="font-bold text-xl">Episode {episodes[0].id}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  {episodes[0].title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-purple-200 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(episodes[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {episodes[0].duration}
                  </div>
                </div>
                <a
                  href={episodes[0].spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 w-full justify-center"
                >
                  <Play className="w-5 h-5" />
                  Listen Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Episodes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">12K+</div>
              <div className="text-gray-600">Listeners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">40 min</div>
              <div className="text-gray-600">Avg Duration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Episodes</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Headphones className="w-4 h-4" />
            <span>New episode every Monday</span>
          </div>
        </div>

        <div className="space-y-6">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-3xl font-bold text-purple-600">#{episode.id}</div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                        {episode.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold">{episode.guest}</span>
                        <span className="text-gray-400">•</span>
                        <span>{episode.role}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {episode.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-wrap gap-2">
                        {episode.topics.map((topic) => (
                          <span
                            key={topic}
                            className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(episode.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {episode.duration}
                      </div>
                      <a
                        href={episode.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Listen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Guests */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600 text-lg">
              Upcoming conversations with industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingGuests.map((guest, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-purple-300 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{guest.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{guest.role}</p>
                <p className="text-sm text-purple-700 font-semibold mb-2">{guest.topic}</p>
                <div className="text-xs text-gray-500">{guest.date}</div>
              </div>
            ))}
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
              href="https://open.spotify.com/show/kitchen-os"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Spotify
            </a>
            <a
              href="https://podcasts.apple.com/podcast/kitchen-os"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold transition-all border border-white/20 inline-flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Apple Podcasts
            </a>
            <a
              href="https://www.youtube.com/@kitchenos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold transition-all border border-white/20 inline-flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              YouTube
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
