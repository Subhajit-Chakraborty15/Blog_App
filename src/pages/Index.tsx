
import React from 'react';
import Header from '../components/Header';
import FeaturedPost from '../components/FeaturedPost';
import BlogList from '../components/BlogList';

// Featured post data
const featuredPost = {
  id: 1,
  title: "2025 Ferrari F8 Tributo Review: The Epitome of Italian Supercar Excellence",
  excerpt: "Ferrari's latest masterpiece combines breathtaking performance with artistic design. With 710 horsepower and a top speed of 211 mph, this mid-engine marvel represents the pinnacle of automotive engineering.",
  imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
  date: "April 28, 2025",
  author: "Michael Ferrari",
  category: "Sports"
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <FeaturedPost {...featuredPost} />
        </section>
        
        <section className="mb-16">
          <h2 className="section-title">Latest Articles</h2>
          <BlogList />
        </section>
        
        <section className="mb-16">
          <div className="bg-gradient-to-r from-carNavy to-blue-800 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6 max-w-2xl mx-auto text-gray-200">
              Get the latest automotive news, reviews, and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-900 flex-grow"
              />
              <button className="btn bg-carRed hover:bg-red-700 text-white py-3">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-carNavy text-white py-8">
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

export default Index;
