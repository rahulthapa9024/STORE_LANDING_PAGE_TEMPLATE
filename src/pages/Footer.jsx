import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Branding & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">
     STORE
            </h2>
            <p className="text-gray-400 uppercase text-[10px] tracking-[0.2em] font-bold mb-8">
              Premium athletic wear for the modern athlete
            </p>
            
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                Main Navigation
              </h3>
              <ul className="grid grid-cols-2 sm:flex sm:flex-row gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-tight">
                <li>
                  <Link to="/" className="hover:italic transition-all hover:text-black block py-1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/men" className="hover:italic transition-all hover:text-black block py-1">
                    Men
                  </Link>
                </li>
                <li>
                  <Link to="/collections" className="hover:italic transition-all hover:text-black block py-1">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:italic transition-all hover:text-black block py-1">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Centered Branding */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col items-center justify-center text-center gap-1">
            <span className="text-2xl font-black uppercase tracking-tighter italic leading-none">
             STORE
            </span>
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">
              © 2026 All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}