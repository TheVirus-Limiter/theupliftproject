export interface SEOData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const updateSEO = (data: SEOData) => {
  document.title = data.title;
  updateMetaTag('name', 'description', data.description);
  updateMetaTag('property', 'og:title', data.title);
  updateMetaTag('property', 'og:description', data.description);
  updateMetaTag('property', 'og:image', data.image);
  updateMetaTag('property', 'og:url', data.url);
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
    description: "Student Visionaries fundraising $50,000 for blood cancer research and patient support through the Leukemia & Lymphoma Society.",
    image: "https://media.discordapp.net/attachments/1212245437080408124/1392909883292258544/raw.png?ex=687b232b&is=6879d1ab&hm=75563717ab5a4e3553fb7fc5e383221229ecb9bef7c4b7c89a16b730d221c9a8&=&format=webp&quality=lossless&width=930&height=930",
    url: "https://theupliftproject.us/"
  },
  corporations: {
    title: "Corporate Partnerships - The Uplift Project",
    description: "Partner with The Uplift Project. Exclusive sponsorship opportunities for corporations to make a meaningful impact in the fight against leukemia and lymphoma.",
    image: "https://media.discordapp.net/attachments/1212245437080408124/1392909883292258544/raw.png?ex=687b232b&is=6879d1ab&hm=75563717ab5a4e3553fb7fc5e383221229ecb9bef7c4b7c89a16b730d221c9a8&=&format=webp&quality=lossless&width=930&height=930",
    url: "https://theupliftproject.us/corporations"
  }
};
