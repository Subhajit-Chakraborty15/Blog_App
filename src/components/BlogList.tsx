
import React from 'react';
import BlogCard from './BlogCard';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "2025 Ferrari F8 Tributo Review: The Epitome of Italian Supercar Excellence",
    excerpt: "Ferrari's latest masterpiece combines breathtaking performance with artistic design. In this review, we take the F8 Tributo through mountain roads to test its limits.",
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    date: "April 28, 2025",
    author: "Michael Ferrari",
    category: "Sports"
  },
  {
    id: 2,
    title: "The Future of Electric: Testing the Lucid Air's 500-Mile Range",
    excerpt: "We put the Lucid Air's impressive range claims to the test with a cross-country journey. Can this luxury EV really go the distance?",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    date: "April 25, 2025",
    author: "Elena Volt",
    category: "Electric"
  },
  {
    id: 3,
    title: "Rolls-Royce Spectre: The First All-Electric Ultra-Luxury Masterpiece",
    excerpt: "Rolls-Royce enters the electric era with a whisper-quiet yet commanding presence. We experience first-hand what makes the Spectre special.",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    date: "April 20, 2025",
    author: "Jonathan Luxe",
    category: "Luxury"
  },
  {
    id: 4,
    title: "Off-Road Monsters: New Land Rover Defender vs. Jeep Wrangler Rubicon",
    excerpt: "Two iconic off-roaders face off in the toughest terrain. Which one earns the crown as the ultimate adventure vehicle?",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    date: "April 15, 2025",
    author: "Sarah Wheeler",
    category: "SUV"
  },
  {
    id: 5,
    title: "BMW i7 vs Mercedes EQS: Battle of the Electric Luxury Flagships",
    excerpt: "Germany's automotive giants bring their electric A-game. We compare these two titans to see which deserves your executive parking spot.",
    imageUrl: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    date: "April 10, 2025",
    author: "Thomas Motor",
    category: "Luxury"
  },
  {
    id: 6,
    title: "The Art of Restoration: Bringing a Classic 1967 Mustang Back to Life",
    excerpt: "Follow our six-month journey restoring a barn-find Mustang to its former glory, with all the challenges and triumphs along the way.",
    imageUrl: "https://images.unsplash.com/photo-1584345604476-8ec5f82d718c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    date: "April 5, 2025",
    author: "Robert Classic",
    category: "Classic"
  }
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map(post => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default BlogList;
