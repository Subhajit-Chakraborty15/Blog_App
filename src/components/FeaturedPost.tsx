
import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedPostProps {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
}

const FeaturedPost = ({ id, title, excerpt, imageUrl, date, author, category }: FeaturedPostProps) => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl animate-fade-in">
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 featured-gradient"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
        <div className="mb-4">
          <span className="bg-carRed px-3 py-1 text-sm font-medium rounded-md">
            {category}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <Link to={`/post/${id}`} className="hover:underline">{title}</Link>
        </h2>
        
        <p className="text-gray-200 text-lg mb-6 max-w-3xl">
          {excerpt}
        </p>
        
        <div className="flex items-center text-gray-300">
          <div className="flex items-center mr-6">
            <Calendar size={16} className="mr-2" />
            {date}
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-2" />
            {author}
          </div>
        </div>
        
        <Link to={`/post/${id}`} className="mt-6 inline-block btn btn-primary">
          Read Full Article
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
