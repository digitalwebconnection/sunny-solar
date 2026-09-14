import React from 'react';
import heroBg from '../../../assets/herovideo.mp4';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Full-bleed Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
     
          className="w-full h-full object-cover object-center"
        >
          <source
            src={heroBg}
            type="video/mp4"
          />
         
        </video>

        {/* Ambient Dark Overlay for Navbar Contrast */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}

        {/* Bottom smooth gradient fade into the page background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white via-slate-50/40 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;
