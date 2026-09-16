import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SmoothScroll } from './components/common/SmoothScroll';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { MobileStickyActionBar } from './components/layout/MobileStickyActionBar';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen selection:bg-[#1d4ed8] selection:text-white relative">
          <Navbar />
          <main className="grow">
            <AppRoutes />
          </main>
          <Footer />
          <MobileStickyActionBar />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
