import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SmoothScroll } from './components/common/SmoothScroll';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen selection:bg-amber-400 selection:text-slate-950 font-sans">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
