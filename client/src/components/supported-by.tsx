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
    src: "https://media.discordapp.net/attachments/1212245437080408124/1395802004986531983/5096bfd1-9d9c-4785-bf71-75bc530e7a96.png?ex=687bc56a&is=687a73ea&hm=14f8ee42b6e3eccd6d7ea2d8778902bba919cf540fabebaee7595215de437f9c&=&format=webp&quality=lossless&width=595&height=595",
    alt: "LHSSA Logo",
    link: "https://www.lhssa.org/"
  },
  {
    id: 2,
    src: "https://media.discordapp.net/attachments/1212245437080408124/1395802321816129607/LLS_logo_for_digital_2_1.png?ex=687bc5b6&is=687a7436&hm=15c4c5e1c9984469b0a401a0b4bbde0f09179f0bbdfda3f2ba7c6242acd5ae6b&=&format=webp&quality=lossless&width=1295&height=423",
    alt: "Leukemia & Lymphoma Society",
    link: "https://www.lls.org/"
  },
  {
    id: 3,
    src: "https://via.placeholder.com/200x100/831919/FFFFFF?text=Partner+3",
    alt: "Partner 3",
    link: "#"
  },
  {
    id: 4,
    src: "https://via.placeholder.com/200x100/831919/FFFFFF?text=Partner+4",
    alt: "Partner 4", 
    link: "#"
  },
  {
    id: 5,
    src: "https://via.placeholder.com/200x100/831919/FFFFFF?text=Partner+5",
    alt: "Partner 5",
    link: "#"
  },
  {
    id: 6,
    src: "https://via.placeholder.com/200x100/831919/FFFFFF?text=Partner+6",
    alt: "Partner 6",
    link: "#"
  }
];

export default function SupportedBy() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % logos.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleLogos = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(logos[(currentIndex + i) % logos.length]);
    }
    return visible;
  };

  const handleLogoClick = (link: string) => {
    if (link !== "#") {
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

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(logos.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / 3) === index
                    ? 'bg-uplift-red'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}