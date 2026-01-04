import { useState, useEffect } from 'react';

interface Logo {
  id: number;
  src: string;
  alt: string;
  link: string;
}

const logos: Logo[] = [
  {
    id: 1,
    src: "https://thevirus-limiter.github.io/filestorage/lhssa.png",
    alt: "LHSSA Logo",
    link: "https://www.lhssa.org/"
  },
  {
    id: 2,
    src: "https://thevirus-limiter.github.io/filestorage/llslogo.png",
    alt: "Leukemia & Lymphoma Society",
    link: "https://www.lls.org/"
  },
  {
    id: 3,
    src: "https://thevirus-limiter.github.io/filestorage/yourlogohere.png",
    alt: "Lumora Sleep",
    link: "https://uselumora.co"
  }
];

export default function SupportedBy() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Since we only have 3 logos, show all at once without rotation
    setCurrentIndex(0);
  }, []);

  const getVisibleLogos = () => {
    return logos; // Show all 3 logos
  };

  const handleLogoClick = (link: string) => {
    if (link.startsWith('https://theupliftproject.us/')) {
      // Internal link - navigate within the same tab
      window.location.href = link;
    } else {
      // External link - open in new tab
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold text-uplift-red mb-12">
            Supported By
          </h2>
          
          <div className="flex justify-center items-center space-x-8 md:space-x-16 lg:space-x-20">
            {getVisibleLogos().map((logo, index) => (
              <div
                key={`${logo.id}-${currentIndex}`}
                className="transition-all duration-700 ease-in-out transform opacity-100 translate-y-0 hover:scale-110 cursor-pointer"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
                onClick={() => handleLogoClick(logo.link)}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 filter drop-shadow-sm"
                />
              </div>
            ))}
          </div>
          {/* Supporting text */}
          <p className="mt-10 text-xs text-gray-500 text-center">
            Interested in adding your company here?{" "}
            <a
              href="https://theupliftproject.us/corporations"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600 transition-colors"
            >
              Learn more here
            </a>{" "}
            about partnering as a corporate supporter.
          </p>


        </div>
      </div>
    </section>
  );
}
