export interface SEOData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const updateSEO = (data: SEOData) => {
  // Update page title
  document.title = data.title;
  
  // Update meta description
  updateMetaTag('name', 'description', data.description);
  
  // Update Open Graph tags
  updateMetaTag('property', 'og:title', data.title);
  updateMetaTag('property', 'og:description', data.description);
  updateMetaTag('property', 'og:image', data.image);
  updateMetaTag('property', 'og:url', data.url);
  
  // Update Twitter tags
  updateMetaTag('property', 'twitter:title', data.title);
  updateMetaTag('property', 'twitter:description', data.description);
  updateMetaTag('property', 'twitter:image', data.image);
  updateMetaTag('property', 'twitter:url', data.url);
};

const updateMetaTag = (attribute: string, name: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.content = content;
    document.head.appendChild(element);
  }
};

export const seoData = {
  home: {
    title: "The Uplift Project - Launching Hope, Ending Blood Cancer",
    description: "Student Visionaries fundraising $50,000 for blood cancer research and patient support through the Leukemia & Lymphoma Society. Campaign in honor of Miguel Roman.",
    image: "https://theupliftproject.us/og-image.png",
    url: "https://theupliftproject.us/"
  },
  corporations: {
    title: "Corporate Partnerships - The Uplift Project",
    description: "Partner with The Uplift Project to support blood cancer research. Exclusive sponsorship opportunities for corporations to make a meaningful impact in the fight against leukemia and lymphoma.",
    image: "https://theupliftproject.us/og-image-corporations.png",
    url: "https://theupliftproject.us/corporations"
  }
};