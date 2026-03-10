import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import {useLocation} from "react-router-dom"

export default function About() {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <main className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">
            Our Story
          </h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Redefining <br />
            <span className="text-gray-300 italic">Motion.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
            Founded at the intersection of high-performance athletics and minimalist street style. 
            We believe that looking good shouldn't be a compromise for moving well.
          </p>
        </div>
      </section>

      {/* Grid Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tight">The Philosophy</h3>
            <p className="text-gray-600 leading-loose">
              STORE was born out of a necessity for versatile gear. Our pieces are engineered for 
              the 5 AM workout and the 5 PM social hour. We use premium technical fabrics that 
              breathe, stretch, and endure—all while maintaining a clean, monochromatic silhouette.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="border-l-4 border-black pl-6 py-2">
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Performance First</h4>
              <p className="text-gray-500 text-sm">Every stitch is placed to optimize movement and durability in the harshest conditions.</p>
            </div>
            <div className="border-l-4 border-gray-200 pl-6 py-2">
              <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Sustainable Mindset</h4>
              <p className="text-gray-500 text-sm">We focus on timeless designs that last years, not seasons, reducing the footprint of fast fashion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Banner / Call to Action */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-8">
            Ready to elevate <br />your style?
          </h2>
          <a 
            href="/collections" 
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Shop Collection
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}