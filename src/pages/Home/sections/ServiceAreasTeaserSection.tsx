import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sun, CheckCircle2, ShieldCheck, Zap, Users, Star, Sparkles } from 'lucide-react';
import { serviceAreasData } from '../../../data/serviceAreasData';
import { Button } from '../../../components/ui/Button';

export const ServiceAreasTeaserSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const flagshipHubs = serviceAreasData.slice(0, 2);
  const regionalCorridors = serviceAreasData.slice(2, 5);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-14 bg-linear-to-b from-white via-slate-50/70 to-white relative overflow-hidden border-t border-slate-200/70"
    >
      {/* Background Animated Atmosphere: Technical Dot-Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#18181b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Pulsing Ambient Brand Glow Orbs */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-[#1d6327]/8 rounded-full blur-3xl pointer-events-none animate-pulse duration-3000" />
      <div className="absolute bottom-12 -right-28 w-96 h-96 bg-[#f37021]/8 rounded-full blur-3xl pointer-events-none animate-pulse duration-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Local Authority Story & Interactive Guarantees */}
          <div 
            className={`lg:col-span-5 space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#18181b] tracking-tight font-serif leading-[1.15]">
              Proudly Powering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f37021] to-[#f59e0b] inline-block hover:scale-[1.01] transition-transform origin-left">
                South East Queensland
              </span>
            </h2>

            {/* Narrative */}
            <p className="text-base text-slate-700 leading-relaxed">
              We don’t run remote call centres from interstate. Trent Palmer and our in-house master electricians are based directly out of our Gold Coast and Brisbane facilities—ensuring rapid 5-day Energex approvals, marine-grade coastal installations, and genuine local accountability.
            </p>

            

            {/* Action Button with Light Shimmer Sheen */}
            <div className="pt-2">
              <Button
                to="/service-areas"
                variant="primary"
                size="md"
                className="group relative overflow-hidden rounded-xl shadow-lg shadow-orange-500/25 bg-gradient-to-r from-[#ea580c] via-[#f37021] to-[#f59e0b] hover:from-[#c2410c] hover:to-[#ea580c] text-white border-0 font-bold px-7 py-3.5 transition-all duration-300 hover:shadow-orange-500/40 hover:-translate-y-0.5"
                icon={
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                }
              >
                {/* Diagonal Light Shimmer Sweep on Hover */}
                <span className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out pointer-events-none" />
                <span>Explore All Suburbs & Local Rebates</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Balanced Regional Hub Grid with Rich Micro-Animations */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Row: 2 Major Flagship Metro Hubs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {flagshipHubs.map((area, idx) => {
                const isHovered = hoveredSlug === area.slug;

                return (
                  <Link
                    key={area.slug}
                    to={`/service-areas/${area.slug}`}
                    onMouseEnter={() => setHoveredSlug(area.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    style={{
                      transitionDelay: isVisible ? `${idx * 150}ms` : '0ms',
                    }}
                    className={`group relative bg-white rounded-lg p-5 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-2xl hover:shadow-orange-500/15 hover:-translate-y-1.5 ${
                      isHovered
                        ? 'border-[#f37021] ring-2 ring-[#f37021]/20'
                        : 'border-slate-300/80 hover:border-[#f37021]/60'
                    } ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {/* Glowing Backlight Aura */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-[#ea580c]/15 via-[#f59e0b]/10 to-[#1d6327]/15 rounded-xl opacity-0 group-hover:opacity-100 blur-xs transition-opacity duration-500 -z-10" />

                    {/* Subtle top active indicator bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ea580c] via-[#f37021] to-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Header Row: Title & Sun Hours Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-all duration-300 group-hover:scale-105 shadow-xs">
                            <MapPin className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors text-base truncate">
                              {area.name}
                            </h3>
                            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
                              </span>
                              <span>{area.installerCount.split(' ')[0]} Master Electricians</span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Rotating Sun Badge */}
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#ea580c] bg-orange-50/90 group-hover:bg-orange-100/80 px-2.5 py-1 rounded-full border border-orange-200/70 shrink-0 transition-colors shadow-2xs">
                          <Sun className="w-3.5 h-3.5 text-[#f37021] group-hover:rotate-90 group-hover:scale-110 transition-transform duration-500 ease-out" />
                          <span>{area.solarHoursPerDay}h sun</span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                        {area.description}
                      </p>

                      {/* Suburbs sample tags */}
                      <div className="text-[11px] text-slate-500 line-clamp-1 mb-1">
                        <span className="font-semibold text-slate-700">Key Suburbs: </span>
                        {area.suburbsServed.slice(0, 4).join(', ')}...
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-slate-500 font-medium">Est. Savings:</span>
                        <span className="font-bold text-[#1d6327] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">
                          {area.averageAnnualSolarSavings}
                        </span>
                      </div>
                      <span className="font-bold text-[#ea580c] group-hover:text-[#c2410c] inline-flex items-center gap-1 transition-colors">
                        <span>Explore Area</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Row: 3 Regional Corridors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {regionalCorridors.map((area, idx) => {
                const isHovered = hoveredSlug === area.slug;

                return (
                  <Link
                    key={area.slug}
                    to={`/service-areas/${area.slug}`}
                    onMouseEnter={() => setHoveredSlug(area.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    style={{
                      transitionDelay: isVisible ? `${(idx + 2) * 120}ms` : '0ms',
                    }}
                    className={`group relative bg-white rounded-xl p-4 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1.5 ${
                      isHovered
                        ? 'border-[#f37021] ring-2 ring-[#f37021]/20'
                        : 'border-slate-300/80 hover:border-[#f37021]/60'
                    } ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {/* Subtle top active indicator line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ea580c] to-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <MapPin className="w-3.5 h-3.5 text-[#ea580c] shrink-0 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-300" />
                          <h4 className="font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors text-sm truncate">
                            {area.name}
                          </h4>
                        </div>
                        <span className="text-[10px] font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60 shrink-0 inline-flex items-center gap-0.5">
                          <Sun className="w-2.5 h-2.5 text-[#f37021] group-hover:rotate-90 transition-transform duration-500" />
                          <span>{area.solarHoursPerDay}h</span>
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-2">
                        {area.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="font-bold text-[#1d6327] truncate">
                        {area.averageAnnualSolarSavings.split(' - ')[0]}/yr
                      </span>
                      <span className="font-bold text-[#ea580c] inline-flex items-center gap-0.5 group-hover:text-[#c2410c] transition-colors">
                        <span>View</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreasTeaserSection;

