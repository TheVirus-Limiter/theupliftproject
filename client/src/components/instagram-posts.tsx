import { Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function InstagramPosts() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "Launching Hope. Ending Blood Cancer. 🩸❤️ Our goal? $50,000. Every penny goes to those struggling with blood cancer and in need. #TheUpliftProject #BloodCancer #Hope",
      likes: "124 likes",
      date: "2 days ago"
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "Who are we? We are a Leukemia & Lymphoma Society Student Visionaries of the Year fundraiser seeking to raise thousands to support those struggling with blood cancer. 🎗️",
      likes: "89 likes",
      date: "5 days ago"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "Our fundraising window is from January 16 to March 16. We will be raising funds through gala events, corporate donations, individual donations, and more. 📅",
      likes: "156 likes",
      date: "1 week ago"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">Follow Our Journey</h2>
          <p className="text-lg text-gray-600 mb-4">Stay connected with our latest updates and behind-the-scenes moments</p>
          <a 
            href="https://instagram.com/theupliftproject25" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-uplift-red hover:text-red-800 font-semibold"
          >
            <Instagram className="w-5 h-5 inline mr-2" />
            @theupliftproject25
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="bg-uplift-light rounded-xl overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt="Instagram Post" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.likes}</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
