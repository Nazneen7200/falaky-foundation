import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import AboutFalakiMoulavi from './pages/AboutFalakiMoulavi';
import PoemsGallery from './pages/PoemsGallery';
import VisionMission from './pages/VisionMission';

// Helper component to scroll window to top on route change & update page title
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title dynamically based on route
    if (pathname === '/') {
      document.title = 'Falaky Foundation | Honouring a Scholarly Legacy';
    } else if (pathname === '/about' || pathname === '/about-falaki-moulavi') {
      document.title = 'About Falaky Moulavi | Falaky Foundation';
    } else if (pathname === '/gallery' || pathname === '/poems-gallery') {
      document.title = 'Gallery | Falaky Foundation';
    } else if (pathname === '/vision' || pathname === '/vision-mission') {
      document.title = 'Vision | Falaky Foundation';
    } else {
      document.title = 'Falaky Foundation | Arabic Language Excellence';
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutFalakiMoulavi />} />
              <Route path="/about-falaki-moulavi" element={<Navigate to="/about" replace />} />
              <Route path="/gallery" element={<PoemsGallery />} />
              <Route path="/poems-gallery" element={<Navigate to="/gallery" replace />} />
              <Route path="/vision" element={<VisionMission />} />
              <Route path="/vision-mission" element={<Navigate to="/vision" replace />} />
              {/* Catch-all redirect to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
