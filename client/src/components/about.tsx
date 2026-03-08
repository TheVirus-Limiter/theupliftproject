import { Users, Instagram } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-white to-red-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50/30 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">Who Were We?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-uplift-red to-transparent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Uplift Project was a dedicated fundraising initiative by passionate students
            committed to making a difference in the fight against blood cancer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-red-200 via-red-100 to-red-300 rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="relative p-1 rounded-xl bg-gradient-to-br from-red-200 via-white to-red-200">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Students working together" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </div>
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As Student Visionaries of the Year, we raised funds and awareness
              for{" "}
              <a
                href="https://bloodcancerunited.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 underline hover:text-gray-700"
              >
                Blood Cancer United
              </a> (formerly the Leukemia and Lymphoma Society).
              Our fundraising campaign ran from
              <strong> January 16, 2026 to March 7, 2026</strong>, during which we raised
              a total of <strong>$15,931</strong>.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We raised funds through gala events, corporate donations, individual
              donations, and various community initiatives. Every contribution helped
              support those affected by blood cancer.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-uplift-red to-red-800 text-white p-3 rounded-full shadow-md shadow-red-200">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Student Visionaries of the Year</p>
                <p className="text-gray-600">Blood Cancer United</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="relative p-0.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 group transition-all duration-300">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
                <button 
                  onClick={() => window.open("https://www.instagram.com/p/DMdoluLSK0l/?img_index=1", "_blank")}
                  className="relative bg-white text-gray-700 px-6 py-3 rounded-full text-base font-semibold flex items-center shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-5 h-5 mr-3 rounded-sm bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-4 h-4 text-white group-hover:drop-shadow-sm transition-all duration-300" />
                  </div>
                  <span className="relative z-10 group-hover:text-gray-800 transition-all duration-300">Meet Our Team</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex justify-center">
                <div className="relative group/logo">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-100/0 via-red-100/40 to-red-100/0 rounded-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="https://thevirus-limiter.github.io/filestorage/llslogo.png" 
                    alt="Blood Cancer United" 
                    className="relative h-16 w-auto opacity-80 group-hover/logo:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
