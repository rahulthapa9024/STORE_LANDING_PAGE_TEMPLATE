import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import ProductPage from "./pages/SingleProduct";
import Layout from "./Layout";
import Collections from "./pages/Collections";
import MensCollections from "./pages/MensCollections";
import About from "./pages/About";
import ShimmerSpinner from "./components/ShimmerEffect";
import WoMensCollections from "./pages/WomensPage";

// Helper component to reset scroll position on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoad) {
    return <ShimmerSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <ScrollToTop/>
      <NavBar />
      
      {/* flex-grow ensures the footer stays at the bottom 
          even on pages with very little content 
      */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/men" element={<MensCollections />} />
          <Route path="/women" element={<WoMensCollections />} />
          <Route path="/about" element={<About />} />
          {/* Fallback route for 404s - redirects back to home or a layout */}
          <Route path="*" element={<Layout />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}