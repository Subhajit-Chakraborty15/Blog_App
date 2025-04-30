
import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
}

const BlogCard = ({ id, title, excerpt, imageUrl, date, author, category }: BlogCardProps) => {
  return (
    <div className="car-card animate-fade-in h-full">
      <Link to={`/post/${id}`}>
        <div className="h-48 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
          <div className="absolute top-3 right-3 bg-carRed text-white text-xs px-2 py-1 rounded-md">
            {category}
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-carNavy hover:text-carRed transition-colors">
          <Link to={`/post/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            {author}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
