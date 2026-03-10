import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/allProducts";
import { useState, useEffect } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Find product
  const product = products.find((p) => String(p.id) === id);
  
  // State for the currently displayed image
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset image and loading state when ID changes
    if (product) {
      setSelectedImage(product.imageURL[0]);
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-medium text-gray-600">Product not found</p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest"
        >
          Go Home
        </button>
      </div>
    );
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  // Shimmer Component
  const Shimmer = () => (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="w-full lg:w-[60%] flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-20 h-24 md:w-24 md:h-32 bg-gray-200" />
            ))}
          </div>
          <div className="flex-1 aspect-[4/5] bg-gray-200" />
        </div>
        <div className="w-full lg:w-[40%] space-y-8">
          <div className="h-12 bg-gray-200 w-3/4" />
          <div className="h-8 bg-gray-200 w-1/4" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 w-full" />
            <div className="h-4 bg-gray-200 w-full" />
          </div>
          <div className="h-12 bg-gray-200 w-full" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen text-black">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-pulse {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(to right, #f6f6f6 8%, #eeeeee 18%, #f6f6f6 33%);
          background-size: 1000px 100%;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Sticky Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
          </button>
          {!isLoading && (
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 truncate max-w-[150px] md:max-w-none">
              {product.title}
            </span>
          )}
        </div>
      </header>

      {isLoading ? (
        <Shimmer />
      ) : (
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* LEFT: IMAGE SECTION */}
            <div className="w-full lg:w-[60%] flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-visible no-scrollbar pb-2 md:pb-0">
                {product.imageURL.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`relative flex-shrink-0 w-20 h-24 md:w-24 md:h-32 bg-[#f6f6f6] border-2 transition-all duration-300 ${
                      selectedImage === img ? "border-black" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} thumbnail ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Frame */}
              <div className="flex-1 aspect-[4/5] bg-[#f6f6f6] overflow-hidden rounded-sm relative group">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                  key={selectedImage} // Key helps trigger re-animation if needed
                />
              </div>
            </div>

            {/* RIGHT: DETAILS SECTION */}
            <div className="w-full lg:w-[40%]">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
                      {product.title}
                    </h1>
                  </div>
                  <p className="text-2xl font-light text-gray-900">
                    {formatPrice(product.price)}
                  </p>
                </div>

                <div className="h-[1px] bg-gray-100 w-full" />

                <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Description</p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
                    {product.description}
                    </p>
                </div>

                {/* Sizes Selection */}
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Available Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button 
                        key={s} 
                        className="min-w-[60px] flex items-center justify-center bg-white text-black h-12 px-4 text-xs font-bold border border-gray-200 hover:border-black transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors Selection */}
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Colors</p>
                  <div className="flex flex-wrap gap-4">
                    {product.color.map((c) => (
                      <div className="flex flex-col items-center gap-2" key={c}>
                        <div
                          className="w-10 h-10 rounded-full border border-gray-200 cursor-pointer hover:scale-110 transition-transform shadow-sm"
                          style={{ backgroundColor: c.toLowerCase().replace(/\s/g, "") }}
                          title={c}
                        />
                        <span className="text-[10px] uppercase text-gray-400">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => window.open(product.BuyURL, "_blank")}
                    className="w-full bg-black text-white border py-5 text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all active:scale-[0.98] hover:border-black flex items-center justify-center gap-3"
                  >
                    BUY NOW — {formatPrice(product.price)}
                  </button>
                  <p className="text-[10px] text-center mt-4 text-gray-400 uppercase tracking-widest">
                    Free shipping on orders over ₹2,999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      <div className="h-10 md:h-20" />
    </div>
  );
}