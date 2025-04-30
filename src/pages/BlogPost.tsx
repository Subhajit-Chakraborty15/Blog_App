
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Calendar, User, Tag } from 'lucide-react';

// Sample blog post data
const blogPosts = {
  "1": {
    id: 1,
    title: "2025 Ferrari F8 Tributo Review: The Epitome of Italian Supercar Excellence",
    content: `
      <p class="text-lg mb-4">The Ferrari F8 Tributo represents the pinnacle of Italian automotive engineering, combining breathtaking performance with stunning design in a package that's both thrilling and surprisingly usable.</p>
      
      <p class="mb-4">From the moment you approach the F8 Tributo, it's clear this is something special. The aggressive aerodynamic styling isn't just for show—every scoop, vent, and contour serves a purpose, helping the car slice through the air while keeping it planted at high speeds.</p>
      
      <h3 class="text-xl font-bold text-carNavy mt-8 mb-3">Performance That Defines Supercars</h3>
      
      <p class="mb-4">The heart of the F8 Tributo is its award-winning 3.9-liter twin-turbocharged V8, producing a staggering 710 horsepower and 568 lb-ft of torque. This masterpiece of an engine propels the car from 0-60 mph in just 2.9 seconds, with a top speed of 211 mph.</p>
      
      <p class="mb-4">What numbers can't convey is how this performance is delivered. The engine responds instantly to throttle inputs, with minimal turbo lag and a linear power delivery that makes the car feel predictable even as the speedometer climbs rapidly. The seven-speed dual-clutch transmission is equally impressive, executing shifts with lightning speed whether in automatic mode or when using the paddle shifters.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" alt="Ferrari F8 Tributo Engine" class="rounded-lg w-full h-auto" />
        <p class="text-sm text-gray-500 mt-2 text-center">The F8 Tributo's twin-turbocharged V8 is a marvel of engineering</p>
      </div>
      
      <h3 class="text-xl font-bold text-carNavy mt-8 mb-3">Handling That Inspires Confidence</h3>
      
      <p class="mb-4">Where the F8 Tributo truly shines is in the corners. The steering is precise and communicative, allowing you to place the car exactly where you want it. Ferrari's Side Slip Control 6.1 system works invisibly in the background, helping to keep the car on your chosen line while still allowing for playful moments when desired.</p>
      
      <p class="mb-4">Despite its supercar status, the F8 Tributo is remarkably comfortable on longer drives. The adaptive suspension does an admirable job of soaking up road imperfections in its softer settings, while still providing the necessary firmness for spirited driving when called upon.</p>
      
      <h3 class="text-xl font-bold text-carNavy mt-8 mb-3">Interior: Driver-Focused Luxury</h3>
      
      <p class="mb-4">Inside, the F8 Tributo perfectly balances luxury with a focus on driving. The cabin wraps around the driver, with all major controls within easy reach. The steering wheel, though busy with buttons including the manettino drive mode selector, becomes intuitive after familiarization.</p>
      
      <p class="mb-4">Materials throughout the cabin are exceptional, with fine leather, carbon fiber, and aluminum creating an atmosphere of sporting luxury. The optional carbon fiber racing seats in our test car provided excellent support during spirited driving while remaining comfortable enough for longer journeys.</p>
      
      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" alt="Ferrari F8 Tributo Road Test" class="rounded-lg w-full h-auto" />
        <p class="text-sm text-gray-500 mt-2 text-center">On mountain roads, the F8 Tributo demonstrates its exceptional chassis balance</p>
      </div>
      
      <h3 class="text-xl font-bold text-carNavy mt-8 mb-3">Conclusion: A Worthy Flagship</h3>
      
      <p class="mb-4">The Ferrari F8 Tributo doesn't just meet expectations—it exceeds them. It represents the culmination of decades of Ferrari engineering excellence, delivering performance that would have seemed impossible just a few years ago while remaining approachable enough that drivers can actually exploit its capabilities.</p>
      
      <p class="mb-4">With a starting price of $276,550, the F8 Tributo is certainly an exclusive proposition. But for those fortunate enough to experience it, few cars on the road today can deliver the same combination of performance, driver engagement, and emotional appeal. The F8 Tributo isn't just a great Ferrari—it's a high-water mark for the modern supercar.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    date: "April 28, 2025",
    author: "Michael Ferrari",
    category: "Sports",
    tags: ["Ferrari", "Supercar", "Review", "Italian Cars"]
  },
  "2": {
    id: 2,
    title: "The Future of Electric: Testing the Lucid Air's 500-Mile Range",
    content: `<p class="text-lg mb-4">The Lucid Air represents a new chapter in luxury electric vehicles, with groundbreaking range and performance that challenges the established players in the premium EV market.</p><p class="mb-4">Our 500-mile test drive across varying terrain and weather conditions put this remarkable vehicle to the ultimate test.</p>`,
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    date: "April 25, 2025",
    author: "Elena Volt",
    category: "Electric",
    tags: ["Lucid", "Electric", "Luxury", "Range Test"]
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;
  
  if (!post) {
    return (
      <div>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-carNavy mb-4">Post Not Found</h2>
          <p className="text-gray-600">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-carNavy mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-y-2">
              <div className="flex items-center mr-6">
                <Calendar size={18} className="mr-2 text-carRed" />
                {post.date}
              </div>
              <div className="flex items-center mr-6">
                <User size={18} className="mr-2 text-carRed" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Tag size={18} className="mr-2 text-carRed" />
                {post.category}
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg animate-fade-in">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
          
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none animate-fade-in" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-medium text-carNavy mb-3">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-carRed hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
      
      <footer className="bg-carNavy text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">
                <span className="text-carRed">Auto</span>Blog
              </h2>
              <p className="text-gray-300 text-sm mt-1">
                Your premier destination for automotive content
              </p>
            </div>
            
            <div className="flex gap-8">
              <div>
                <h4 className="font-medium mb-2 text-carRed">Categories</h4>
                <ul className="text-sm text-gray-300">
                  <li className="mb-1">Sports Cars</li>
                  <li className="mb-1">Luxury</li>
                  <li className="mb-1">Electric</li>
                  <li className="mb-1">SUVs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 text-carRed">Links</h4>
                <ul className="text-sm text-gray-300">
                  <li className="mb-1">About</li>
                  <li className="mb-1">Contact</li>
                  <li className="mb-1">Privacy</li>
                  <li className="mb-1">Terms</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>© 2025 AutoBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
