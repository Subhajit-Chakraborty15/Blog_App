
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-carNavy">
            <span className="text-carRed">Auto</span>Blog
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className={({isActive}) => 
            isActive ? "nav-link active" : "nav-link"
          }>
            Home
          </NavLink>
          <NavLink to="/category/sports" className={({isActive}) => 
            isActive ? "nav-link active" : "nav-link"
          }>
            Sports Cars
          </NavLink>
          <NavLink to="/category/luxury" className={({isActive}) => 
            isActive ? "nav-link active" : "nav-link"
          }>
            Luxury
          </NavLink>
          <NavLink to="/category/electric" className={({isActive}) => 
            isActive ? "nav-link active" : "nav-link"
          }>
            Electric
          </NavLink>
        </nav>
        
        <div className="flex items-center">
          <button className="btn btn-primary flex items-center">
            <Search size={18} className="mr-2" />
            <span className="hidden md:inline">Search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
