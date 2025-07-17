import { Instagram, Twitter, Facebook, Mail, Phone } from "lucide-react";

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
                className="h-8 w-8 mr-2"
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
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
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
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Campaign Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Goal: $50,000</li>
              <li>Duration: Jan 16 - Mar 16</li>
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
                hello@theupliftproject.org
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Uplift Project. All rights reserved.</p>
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
    </footer>
  );
}
