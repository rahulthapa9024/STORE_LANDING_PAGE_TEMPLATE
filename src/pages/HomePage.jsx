import { products } from "../data/allProducts";
import { useNavigate,useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  // Helper for Currency Formatting
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
    const {pathname} = useLocation()
  // Navigation Logic
  const goToProduct = (id) => {
    navigate(`/productpage/${id}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);


  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white">
      {/* Sticky Navigation / Header */}
      <header className="top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="px-4 md:px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">
               TRENDING PRODUCTS
            </h1>
            <p className="text-gray-400 mt-2 uppercase text-[9px] md:text-[10px] tracking-[0.3em] font-bold">
              Engineered for the modern athlete
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Product Grid */}
        <div  className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-10 md:gap-y-16">
          {products.map((p, index) => (
            <article 
              key={p.id || index} 
              onClick={()=>goToProduct(p.id)}
              className="group relative flex flex-col w-full cursor-pointer"
            >
              {/* Image Wrapper */}
              <div className="aspect-[4/5] bg-[#f6f6f6] overflow-hidden relative">
             

                <img
                  src={p.imageURL[0]}
                  alt={p.title}
 
                  className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Quick Look (Desktop Only) */}
                <div className="absolute inset-x-0 bottom-0 p-2 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-gradient-to-t from-black/20 to-transparent hidden md:block">
                  <div onClick={()=>goToProduct(p.id)} className="bg-black hover:bg-white hover:text-black text-white py-2 md:py-3 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Quick Look
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-3 md:mt-6 flex flex-col flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1 mb-1">
                  <h2 className="text-sm md:text-lg font-bold uppercase tracking-tight group-hover:underline decoration-1 underline-offset-4 line-clamp-1">
                    {p.title}
                  </h2>
                  <span className="text-sm md:text-lg font-medium">
                    {formatPrice(p.price)}
                  </span>
                </div>

                <p className="text-gray-500 text-[11px] md:text-sm font-medium mb-3 line-clamp-2">
                  {p.description}
                </p>

                {/* Sizes and Colors */}
                <div className="mt-auto">
                <div className="flex justify-between items-center flex-wrap gap-1 mb-4">
                <div className="flex flex-wrap gap-1">
                  {p.sizes.map((s, i) => (
                    <span
                      key={i}
                      className="text-[8px] md:text-[10px] font-bold border border-gray-200 px-1.5 py-0.5 text-gray-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Right Side: Category */}
                <div className="flex flex-wrap gap-1">
                  {p.category.map((s, i) => (
                    <span
                      key={i}
                      className="text-[8px] md:text-[10px] font-bold border border-gray-200 px-1.5 py-0.5 text-gray-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

                  {/* Footer (Colors & Buy Button) */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex -space-x-1.5">
                        {p.color.map((c, i) => (
                            <div
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-gray-400 ring-1 ring-gray-200"
                            style={{ backgroundColor: c.toLowerCase().replace(/\s/g, "") }}
                            title={c}
                            />
                        ))}
                        </div>
                        <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {p.color.length} {p.color.length === 1 ? "Color" : "Colors"}
                        </span>
                    </div>

                    {/* BUY NOW BUTTON */}
                    <a
                     href={p.BuyURL} target="_blank"
                      className="w-full bg-black hover:text-black hover:bg-white text-center text-white py-3 md:py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300  active:scale-[0.98] shadow-lg shadow-black/5"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}