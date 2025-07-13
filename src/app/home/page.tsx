import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Construction Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Construction Site" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Small Heading */}
            <h3 className="text-lg font-medium text-blue-600 uppercase tracking-wide mb-2">
              Explore the Features
            </h3>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Full Project Management
            </h1>

            {/* Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Streamline your construction projects with our comprehensive management solution. 
              From initial planning to final completion, we provide the tools and expertise 
              needed to deliver projects on time and within budget. Our platform integrates 
              scheduling, resource allocation, and real-time progress tracking to ensure 
              seamless project execution.
            </p>

            {/* Button */}
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Read More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="mt-24 py-16 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Clients</h2>
            <p className="text-xl text-gray-200">Trusted by leading brands worldwide</p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Top Row - 4 Images */}
            <div className="group relative">
              <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Client 1" 
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 2" 
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 3" 
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 4" 
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row - 4 Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Client 5" 
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 6" 
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="Client 7" 
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Client 8" 
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Achievement Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievement</h2>
            <p className="text-xl text-gray-600">Milestones that define our success</p>
          </div>

          {/* Achievement Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Achievement 1 */}
            <div className="group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-6xl font-black text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">34</div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Projects</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">Design</h3>
                </div>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-6xl font-black text-blue-600 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">156</div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Projects</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">Construction</h3>
                </div>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-6xl font-black text-blue-600 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">89</div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Projects</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">Renovation</h3>
                </div>
              </div>
            </div>

            {/* Achievement 4 */}
            <div className="group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-6xl font-black text-blue-600 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">245</div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Projects</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">Management</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 