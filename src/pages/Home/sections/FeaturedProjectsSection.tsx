import React from 'react';
import {
  Building2,
  Clock,
  ShieldCheck,
  Sparkles,
  FileCheck2,
  UserCheck,
  Zap,
  CheckCircle2,
} from 'lucide-react';

interface BuilderReason {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlight: string;
  bgImage: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder: string;
}

const builderReasons: BuilderReason[] = [
  {
    id: '01',
    badge: 'Zero Trade Clashes',
    title: 'Guaranteed Schedule Sync',
    description:
      'We coordinate directly with your site supervisor. Pre-wire rough-ins are executed cleanly during framing, and roof work is sequenced smoothly to eliminate construction roadblocks.',
    highlight: '100% On-Time Site Handover',
    bgImage: '/images/builder/builder-schedule-sync.png',
    icon: Clock,
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-[#ed5001]',
    badgeBg: 'bg-orange-50',
    badgeColor: 'text-[#ed5001]',
    badgeBorder: 'border-orange-200/60',
  },
  {
    id: '02',
    badge: 'Licensed Master Trades',
    title: 'Zero Subcontractors (Subbies)',
    description:
      'Never risk your builder reputation on rushed third-party contractors. Trent Palmer and our in-house master electricians handle every cable, inverter mount, and isolator to the highest standard.',
    highlight: 'QBCC Licensed • CEC Retailer #A4892',
    bgImage: '/images/builder/builder-master-trades.jpg',
    icon: ShieldCheck,
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-[#265e11]',
    badgeBg: 'bg-emerald-50',
    badgeColor: 'text-[#265e11]',
    badgeBorder: 'border-emerald-200/60',
  },
  {
    id: '03',
    badge: 'Design Integrity',
    title: 'Concealed Conduits & Flush Racking',
    description:
      'No unsightly external surface conduits ruining your architectural elevation. We route DC cabling through internal wall cavities and install premium all-black tier-1 panels with sleek flush mounting.',
    highlight: 'Preserves Facade Street Appeal',
    bgImage: '/images/builder/builder-design-integrity.jpg',
    icon: Sparkles,
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-[#f4a304]',
    badgeBg: 'bg-amber-50',
    badgeColor: 'text-[#ed5001]',
    badgeBorder: 'border-amber-200/60',
  },
  {
    id: '04',
    badge: 'Certifier Ready',
    title: 'Rapid Form 15 & Form 16 Sign-Off',
    description:
      'Certificates of Electrical Safety and Form 15 / Form 16 design and inspection certificates are issued within 24 hours of fit-off—enabling fast, uninhibited private certifier approvals.',
    highlight: 'AS/NZS 3000 & 5033 Certified',
    bgImage: '/images/builder/builder-certifier-ready.jpg',
    icon: FileCheck2,
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-[#265e11]',
    badgeBg: 'bg-emerald-50',
    badgeColor: 'text-[#265e11]',
    badgeBorder: 'border-emerald-200/60',
  },
  {
    id: '05',
    badge: 'Zero Callbacks',
    title: 'Turnkey Homeowner Orientation',
    description:
      'At practical completion, we walk the new homeowner through their smart monitoring app and system operation. We take full ownership of warranty queries so you never field post-handover solar questions.',
    highlight: '25-Year Direct Workmanship Warranty',
    bgImage: '/images/builder/builder-zero-callbacks.jpg',
    icon: UserCheck,
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-[#ed5001]',
    badgeBg: 'bg-orange-50',
    badgeColor: 'text-[#ed5001]',
    badgeBorder: 'border-orange-200/60',
  },
  {
    id: '06',
    badge: 'NCC 2022 Compliant',
    title: 'NatHERS 7-Star Energy Assistance',
    description:
      'We provide custom solar sizing and PV generation modeling during your drafting stage, helping your plans easily meet NCC 2022 energy efficiency and Whole-of-Home 7-star compliance targets.',
    highlight: 'Drafting & Plan Takeoff Support',
    bgImage: '/images/builder/builder-ncc-compliant.jpg',
    icon: Zap,
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-[#f59e0b]',
    badgeBg: 'bg-amber-50',
    badgeColor: 'text-[#b45309]',
    badgeBorder: 'border-amber-200/60',
  },
];

export const FeaturedProjectsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-14 bg-linear-to-b from-white via-slate-50/60 to-white relative overflow-hidden border-t border-slate-200/70">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-125 h-125 bg-[#ed5001]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-125 h-125 bg-[#265e11]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight font-serif leading-[1.15]">
            Why Queensland Builders Choose <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304]">
              Sunny Solar
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-900 leading-relaxed max-w-5xl mx-auto">
            From frame-stage pre-wire to final Form 16 sign-off, we partner with custom builders, architects, and developers to deliver flawless solar without trade bottlenecks.
          </p>
        </div>

        {/* 6 Core Pillars Grid with Dynamic Card Hover Background Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {builderReasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.id}
                className="bg-white rounded-xl p-4 border border-slate-300/80 hover:border-[#ed5001]/60 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-slate-950/20 hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden group flex flex-col justify-between cursor-default min-h-75"
              >
                {/* Hover Background Image with Dark Scrim Overlay */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 active:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <img
                    src={reason.bgImage}
                    alt={reason.title}
                    className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Dark gradient overlay ensures crystal-clear readability on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/65 via-slate-950/45 to-slate-950/35 " />
                  {/* Subtle solar glow at corner */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ed5001]/25 rounded-full blur-xl" />
                </div>

                {/* Top Badge & Number */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border transition-all duration-300 ${reason.badgeBg} ${reason.badgeColor} ${reason.badgeBorder} group-hover:bg-white/15 group-hover:text-white group-hover:border-white/20`}
                    >
                      {reason.badge}
                    </span>
                    <span className="text-sm font-mono font-bold text-slate-300 group-hover:text-white/40 transition-colors duration-300">
                      {reason.id}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl ${reason.iconBg} ${reason.iconColor} group-hover:bg-white/15 group-hover:text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 shadow-xs`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-white leading-snug transition-colors duration-300 pt-1">
                      {reason.title}
                    </h3>
                  </div>

                  {/* Narrative Body */}
                  <p className="text-sm text-slate-600 group-hover:text-slate-200/95 leading-relaxed mt-2.5 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Highlight Key */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 group-hover:border-white/15 flex items-center gap-2 text-xs font-semibold text-slate-800 group-hover:text-slate-100 transition-colors duration-300">
                  <CheckCircle2 className="w-4 h-4 text-[#265e11] group-hover:text-[#265e11] shrink-0 transition-colors duration-300" />
                  <span>{reason.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
