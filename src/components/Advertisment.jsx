import React from "react";

export default function Advertisment() {
  return (
    <div className="bg-black text-white py-3 border-y border-white/10 overflow-hidden whitespace-nowrap">
      {/* Container for the scrolling animation */}
      <div className="flex animate-marquee items-center space-x-8 md:space-x-12">
        {[1, 2, 3].map((i) => ( // Repeat items to fill the gap
          <div key={i} className="flex space-x-8 md:space-x-12 text-xs md:text-sm font-medium tracking-[0.2em] uppercase italic">
       
            <span className="text-zinc-500">•</span>
            <span>Lowers</span>
            <span className="text-zinc-500">•</span>
            <span>T-Shirts</span>
            <span className="text-zinc-500">•</span>
            <span>Sandos</span>
            <span className="text-zinc-500">•</span>
            <span>Hoodies</span>
            <span className="text-zinc-500">•</span>
            <span>Shorts</span>
            <span className="text-zinc-500">•</span>
            <span className="mr-8">and More</span>
          </div>
        ))}
      </div>

      {/* Add this to your index.css or Tailwind config */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}