import React from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  Sun,
  Award,
} from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import heroBg from '../../../assets/hero-installer.jpg';

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-14 bg-white relative overflow-hidden">
      {/* Subtle Ambient Glows - no extra containers/content */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#1d6327]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[480px] h-[480px] bg-[#f37021]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Information */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1d6327] bg-emerald-50/80 border border-emerald-200/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#f37021] animate-pulse" />
              <Sun className="w-3.5 h-3.5 text-[#f37021]" />
              <span>About Sunny Solar • Est. 2011</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-extrabold text-[#18181b] tracking-tight leading-[1.15]">
              We Don’t Just Sell Panels. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ea580c] via-[#f37021] to-[#f59e0b]">
                We Engineer 25-Year Peace of Mind.
              </span>
            </h2>

            {/* Narrative Story */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                In 2011, Master Electrician <strong className="text-slate-900 font-semibold">Trent Palmer</strong> founded Sunny Solar with a clear mission: eliminate aggressive telemarketing sales tactics and build premium solar systems that Australian families can rely on for decades.
              </p>
              <p>
                While hundreds of cut-rate solar outfits liquidated over the past decade—leaving thousands with orphaned, hazardous inverters—Sunny Solar has remained <strong className="text-slate-900 font-semibold">100% privately owned, debt-free</strong>, and steadfastly committed to in-house master craftsmanship.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                to="/about"
                variant="primary"
                size="md"
                className="rounded-lg   shadow-lg shadow-orange-500/20 bg-gradient-to-r from-[#ea580c] via-[#f37021] to-[#f59e0b] hover:from-[#c2410c] hover:to-[#ea580c] text-white border-0 font-bold px-6 py-3 transition-all duration-300 hover:shadow-orange-500/35 hover:-translate-y-0.5"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Us
              </Button>

              <a
                href="tel:1300786697"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-[#f37021] text-slate-800 hover:text-[#f37021] font-bold text-sm bg-white hover:bg-orange-50/30 transition-all duration-300 shadow-xs hover:shadow hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-100/70 flex items-center justify-center text-[#f37021]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Speak to Trent: <span className="text-[#ea580c]">1300 SUNNY</span></span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Modern Visual Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Offset Decorative Layered Backdrop */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-gradient-to-br  from-[#1d6327]/10 via-amber-500/20 to-[#f37021]/25 border border-slate-200/50 -z-10 hidden lg:block" />

            {/* Ambient Background Aura */}
            <div className="absolute -top-6 -left-6 w-84 h-84 bg-[#1d6327]/50 rounded-full blur-2xl -z-10 hidden lg:block" />

            {/* Main Image Frame */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-slate-900/10 border-2 border-white bg-slate-100 aspect-4/4 group">
              <img
                src={heroBg}
                alt="Sunny Solar Master Electrician Installing Solar & Battery"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Floating Verified Badge (Top Right) */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-full px-3.5 py-1.5 shadow-md flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1d6327]" />
                <span className="text-xs font-bold text-slate-800">
                  CEC Approved Retailer 
                </span>
              </div>

              {/* Compact Floating Trust Chip (Bottom Left) */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 shadow-xl flex items-center gap-3 max-w-67.5">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-[#ea580c] to-[#f37021] flex items-center justify-center text-white shrink-0 shadow-sm shadow-orange-500/25">
                  <Award className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 leading-tight truncate">Master Certified Installer</div>
                  <div className="text-[11px] text-slate-500 font-medium truncate mt-0.5">Trent Palmer </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
