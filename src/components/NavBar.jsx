import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
  ];

  return (
    <nav className="sticky top-0 z-20 bg-white border-b border-gray-100">
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu button (Left) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 -ml-2 text-black hover:text-gray-500 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Logo (Left on Desktop, Center on Mobile) */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-black tracking-tighter flex items-center">
              <span className="text-black italic">STO</span>
              <span className="text-gray-400 italic">RE</span>
            </a>
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group py-2 text-sm font-bold uppercase tracking-widest text-black/70 hover:text-black transition-colors"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Section (Desktop Only) */}
          <div className="hidden md:flex items-center justify-end">
            <a href="/about" className="text-xs font-bold uppercase tracking-[0.2em] text-black  border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-all">
              About
            </a>
          </div>

          {/* Mobile Placeholder (To keep logo centered on mobile) */}
          <div className="w-10 md:hidden" />
        </div>
      </div>

      {/* --- MOBILE SIDEBAR --- */}
      {/* Overlay Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar Panel */}
      <div className={`fixed top-0 left-0 w-[85%] max-w-[320px] h-full bg-white z-[60] shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <span className="text-xs font-black tracking-[0.3em] text-gray-400 uppercase">Navigation</span>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 px-8 py-10 space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-2xl font-black uppercase tracking-tighter text-black hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-8 border-t border-gray-100">
                <a 
                  href="/about" 
                  className="text-sm font-bold uppercase tracking-widest text-gray-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                    About Us
                </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}