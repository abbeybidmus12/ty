"use client";
import React from "react";

function MainComponent() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row font-sans bg-blue-50 text-[#00264d]">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#00264d]">Diasporan</h1>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <i className="fas fa-user-circle text-blue-500 mr-2 text-xl"></i>
            <span className="text-[#00264d] font-semibold">John Doe</span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#00264d]"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Left Sidebar */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-white h-screen p-4 shadow-lg`}
      >
        <h1 className="text-2xl font-bold mb-4 text-[#00264d] hidden md:block">
          Diasporan
        </h1>
        <ul className="space-y-3">
          <li className="flex items-center text-black font-semibold">
            <i className="fas fa-rss mr-3 text-blue-500"></i> Community Feed
          </li>
          <li className="flex items-center text-black hover:text-blue-600 transition-colors">
            <i className="fas fa-briefcase mr-3 text-blue-500"></i> Employment
            Support
          </li>
          <li className="flex items-center text-black hover:text-blue-600 transition-colors">
            <i className="fas fa-hospital mr-3 text-blue-500"></i> Healthcare
            System
          </li>
          <li className="flex items-center text-black hover:text-blue-600 transition-colors">
            <i className="fas fa-passport mr-3 text-blue-500"></i> Immigration
            Policies
          </li>
          <li className="flex items-center text-black hover:text-blue-600 transition-colors">
            <i className="fas fa-comments mr-3 text-blue-500"></i> Community
            Forum
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-[#00264d] mb-4 md:mb-0">
            Welcome back, John!
          </h2>
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Search Diasporan..."
              className="border border-blue-300 rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
            />
            <div className="hidden md:flex items-center">
              <i className="fas fa-user-circle text-blue-500 mr-2 text-xl"></i>
              <span className="text-[#00264d] font-semibold">John Doe</span>
            </div>
          </div>
        </div>
        <div className="mb-6 flex flex-wrap justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mr-2 mb-2 hover:bg-blue-700 transition-colors">
            Community Feed
          </button>
          <button className="text-[#00264d] px-6 py-2 rounded-lg mr-2 mb-2 hover:bg-blue-100 transition-colors">
            Resources
          </button>
          <button className="text-[#00264d] px-6 py-2 rounded-lg mr-2 mb-2 hover:bg-blue-100 transition-colors">
            Events
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-white py-4 px-6 rounded-lg shadow-lg border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
              <div>
                <h3 className="font-bold text-lg text-black">Sarah Johnson</h3>
                <p className="text-sm text-blue-400">2 hours ago</p>
              </div>
            </div>
            <p className="mb-4 text-black">
              Just had a great experience setting up my bank account with Monzo!
              Their app is super user-friendly and the process was smooth. If
              anyone needs tips on banking in the UK, feel free to ask!
            </p>
            <div className="flex space-x-4">
              <button className="text-black hover:text-blue-800 transition-colors">
                <i className="fas fa-thumbs-up mr-2"></i>Like
              </button>
              <button className="text-black hover:text-blue-800 transition-colors">
                <i className="fas fa-comment mr-2"></i>Comment
              </button>
            </div>
          </div>
          <div className="bg-white py-4 px-6 rounded-lg shadow-lg border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-200 rounded-full mr-4"></div>
              <div>
                <h3 className="font-bold text-lg text-black">Michael Chen</h3>
                <p className="text-sm text-blue-400">4 hours ago</p>
              </div>
            </div>
            <p className="mb-4 text-black">
              I'm organizing a meetup for new arrivals in London next weekend.
              We'll be discussing job hunting strategies and networking. Anyone
              interested in joining?
            </p>
            <div className="flex space-x-4">
              <button className="text-black hover:text-blue-800 transition-colors">
                <i className="fas fa-thumbs-up mr-2"></i>Like
              </button>
              <button className="text-black hover:text-blue-800 transition-colors">
                <i className="fas fa-comment mr-2"></i>Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-64 bg-white p-4 shadow-lg flex flex-col justify-start items-start">
        <div className="mb-6 w-full">
          <h3 className="font-bold mb-2 text-lg text-[#00264d]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-[#00264d] hover:text-blue-800 transition-colors flex items-center"
              >
                <i className="fas fa-briefcase mr-2 w-5 text-center"></i>
                <span>Find a Job</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#00264d] hover:text-blue-800 transition-colors flex items-center"
              >
                <i className="fas fa-home mr-2 w-5 text-center"></i>
                <span>Housing Resources</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#00264d] hover:text-blue-800 transition-colors flex items-center"
              >
                <i className="fas fa-gavel mr-2 w-5 text-center"></i>
                <span>Legal Advice</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="font-bold mb-3 text-lg text-[#00264d]">
            Trending Topics
          </h3>
          <p className="text-[#00264d] mb-1">#UKJobMarket</p>
          <p className="text-[#00264d]">#LanguageLearning</p>
        </div>
        <div>
          <h3 className="font-bold mb-3 text-lg text-[#00264d]">
            Community Stats
          </h3>
          <p className="mb-1">
            <span className="font-semibold">Members:</span> 5,234
          </p>
          <p>
            <span className="font-semibold">Active discussions:</span> 42
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;