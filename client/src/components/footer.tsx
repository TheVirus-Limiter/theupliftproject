import { Instagram, Mail, Phone, DollarSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://media.discordapp.net/attachments/1212245437080408124/1393443019533062284/NA4CIAACIAABBH0ARAAARAAAUsFIIgs5YfGQQAEQAAEIIigD4AACIAACFgq8H8AQzcq9q8tTAgAAAAASUVORK5CYII.png?ex=687a70b0&is=68791f30&hm=69800b08b2b36e86ca9c6fc90e7a8b0c805c71434a7fe6f74e79907dfd2e0395&=&format=webp&quality=lossless&width=523&height=523" 
                alt="The Uplift Project" 
                className="h-10 w-10 mr-2"
              />
              <span className="font-playfair font-semibold text-xl">The Uplift Project</span>
            </div>
            <p className="text-gray-400 mb-4">
              Launching Hope. Ending Blood Cancer.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/theupliftproject25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:rehanraj0911@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://pages.lls.org/svoy/stx/svoysa26/rrajlf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <DollarSign className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Impact</a></li>
              <li><a href="#updates" className="hover:text-white transition-colors">Updates</a></li>
              <li><a href="#facts" className="hover:text-white transition-colors">Facts</a></li>
              <li>
                <a 
                  href="https://www.instagram.com/p/DMdoluLSK0l/?img_index=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Campaign Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Goal: $50,000</li>
              <li>Duration: Jan 16, 2026 - Mar 7, 2026</li>
              <li>Student Visionaries Program</li>
              <li>Leukemia & Lymphoma Society</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Instagram className="w-4 h-4 mr-2" />
                @theupliftproject25
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                rehanraj0911@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                210 992 6174
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex justify-center">
              <img 
                src="https://media.discordapp.net/attachments/1212245437080408124/1395527978741530634/image-removebg-preview_1.png?ex=687ac635&is=687974b5&hm=afc4a527c42a8f4d04e52aa87419f53f3b18403c5884105ec72655a80b5c835e&=&format=webp&quality=lossless&width=1273&height=306" 
                alt="Student Visionaries of the Year" 
                className="h-24 w-auto"
              />
            </div>
            <div className="text-center text-gray-400">
              <p>&copy; 2025 The Uplift Project. All rights reserved.</p>
              <p className="mt-2">
                In partnership with the{" "}
                <a 
                  href="https://www.lls.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-uplift-red hover:text-red-300 transition-colors"
                >
                  Leukemia & Lymphoma Society
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
