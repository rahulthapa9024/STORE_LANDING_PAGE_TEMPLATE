import { useNavigate } from "react-router-dom";

export default function VideoPlay() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden bg-black">
      
      {/* Background Video */}
      <video
        src={import.meta.env.VITE_THUMBNAIL_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-black tracking-tighter uppercase mb-4 leading-none">
            Push Your <span className="text-white px-2">Limits</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-sm mx-auto md:mx-0">
            Shop Now At STORE To Transform And Elevate Your Style.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/collections")}
              className="bg-white text-black hover:bg-black px-10 py-4 text-sm md:text-base font-bold rounded-full hover:text-white transition-all transform hover:scale-105 active:scale-95 uppercase"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 md:h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
