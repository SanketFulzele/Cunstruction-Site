"use client";

import React, { useState, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Function to check if dropdown should open to the left
  const shouldOpenLeft = (menuName: string) => {
    const menuElement = menuRefs.current[menuName];
    if (!menuElement) return false;
    
    const rect = menuElement.getBoundingClientRect();
    const dropdownWidth = 192; // w-48 = 12rem = 192px
    const screenWidth = window.innerWidth;
    
    // If the dropdown would overflow the right side, open to the left
    return rect.left + dropdownWidth > screenWidth;
  };

  const menuItems = [
    {
      name: "Home",
      subItems: ["Dashboard", "Landing Page", "About Us", "Contact"]
    },
    {
      name: "Pages",
      subItems: ["Services", "Team", "Pricing", "FAQ", "404 Page"]
    },
    {
      name: "Portfolio",
      subItems: ["Grid Layout", "Masonry", "Single Project", "Gallery"]
    },
    {
      name: "Blog",
      subItems: ["Blog Grid", "Blog Single", "Blog Sidebar", "Author Page"]
    },
    {
      name: "Shop",
      subItems: ["Product Grid", "Product Single", "Cart", "Checkout"]
    },
    {
      name: "Elements",
      subItems: ["Buttons", "Forms", "Cards", "Icons", "Typography"]
    }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Company Logo/Name */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">Wilmër</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                ref={(el) => {
                  menuRefs.current[item.name] = el;
                }}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2">
                  {item.name}
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div 
                    className={`absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 ${
                      shouldOpenLeft(item.name) 
                        ? 'right-0' 
                        : 'left-0'
                    }`}
                  >
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium flex justify-between items-center"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Submenu */}
                  {activeDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 