import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0C0F1B] to-[#18202e] border-b border-[#666668]/20 sticky top-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center hover:opacity-80 transition-opacity group">
            <div className="space-y-0.5 sm:space-y-1">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#257093] transition-colors">
                SRMIST CGPA Calculator
              </h1>
              <p className="block text-[10px] sm:text-xs bg-gradient-to-r from-[#257093] via-[#18a0d8] to-[#257093] bg-clip-text text-transparent font-semibold tracking-wide uppercase italic">
                -SRM INSIDER Community
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center">
            <a
              href="https://elibrary.srminsider.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#257093] to-[#18a0d8] text-white px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg font-medium hover:shadow-lg hover:shadow-[#257093]/20 transition-all mr-3 lg:mr-6 flex items-center"
            >
              E-Library
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-[#666668]/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 mt-2 border-t border-[#666668]/20 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <a
                href="https://elibrary.srminsider.live/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#257093] to-[#18a0d8] text-white px-4 py-3 rounded-lg font-medium text-center hover:shadow-lg hover:shadow-[#257093]/20 transition-all flex items-center justify-center"
              >
                E-Library
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
