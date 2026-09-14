import React from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  Layers,
  BatteryCharging,
  Clock,
  ArrowRight,
  Calculator,
  Sparkles,
} from 'lucide-react';

interface CalculatorRow {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  highlight: string;
  timeEstimate: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder: string;
}

const calculatorRows: CalculatorRow[] = [
  {
    id: 'solar-savings',
    slug: 'solar-savings',
    number: '01',
    title: 'Solar Savings Calculator',
    description:
      'Calculate your quarterly and 10-year electricity bill reductions based on current utility spend.',
    badge: 'Most Popular',
    highlight: '~78% Bill Reduction',
    timeEstimate: '60 seconds',
    icon: DollarSign,
    iconColor: 'text-[#f37021]',
    iconBg: 'bg-orange-50 border-orange-200/70',
    badgeBg: 'bg-orange-50',
    badgeColor: 'text-[#ea580c]',
    badgeBorder: 'border-orange-200/70',
  },
  {
    id: 'system-size',
    slug: 'system-size',
    number: '02',
    title: 'System Size Calculator',
    description:
      'Determine the ideal solar array capacity (6.6kW to 15kW+) tailored for your roof geometry, pool, and EV.',
    badge: 'Smart Sizing',
    highlight: 'Tailored kW Fit',
    timeEstimate: '90 seconds',
    icon: Layers,
    iconColor: 'text-[#1d6327]',
    iconBg: 'bg-emerald-50 border-emerald-200/70',
    badgeBg: 'bg-emerald-50',
    badgeColor: 'text-[#1d6327]',
    badgeBorder: 'border-emerald-200/70',
  },
  {
    id: 'battery-savings',
    slug: 'battery-savings',
    number: '03',
    title: 'Battery Savings & Backup Feasibility',
    description:
      'Model nighttime peak-tariff avoidance and whole-home storm blackout protection with Tesla or Sungrow.',
    badge: 'High Value',
    highlight: 'Peak Tariff Defense',
    timeEstimate: '90 seconds',
    icon: BatteryCharging,
    iconColor: 'text-[#ea580c]',
    iconBg: 'bg-orange-50 border-orange-200/70',
    badgeBg: 'bg-orange-50',
    badgeColor: 'text-[#ea580c]',
    badgeBorder: 'border-orange-200/70',
  },
  {
    id: 'payback',
    slug: 'payback',
    number: '04',
    title: 'Payback & Break-Even ROI Calculator',
    description:
      'Determine your exact break-even timeline, internal rate of return, and government STC rebate values.',
    badge: 'Financial Model',
    highlight: '3.2 – 4.5 Year Payback',
    timeEstimate: '2 minutes',
    icon: Clock,
    iconColor: 'text-[#1d6327]',
    iconBg: 'bg-emerald-50 border-emerald-200/70',
    badgeBg: 'bg-emerald-50',
    badgeColor: 'text-[#1d6327]',
    badgeBorder: 'border-emerald-200/70',
  },
];

export const CalculatorsTeaserSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-14 bg-white relative overflow-hidden border-t border-slate-200/70">
      {/* Subtle ambient light accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#1d6327]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#f37021]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight font-serif leading-[1.15]">
            Know Your Numbers Before <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f37021] to-[#f59e0b]">
              Speaking to Anyone
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-900 leading-relaxed max-w-4xl mx-auto">
            Select a specialized calculation engine below to see your potential quarterly savings, ideal system size, and battery payback in under 60 seconds—without high-pressure sales calls.
          </p>
        </div>

        {/* Seamless Interactive Horizontal List (NO CARDS) */}
        <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
          {calculatorRows.map((row) => {
            const Icon = row.icon;
            return (
              <Link
                key={row.id}
                to={`/calculators/${row.slug}`}
                className="group py-5 sm:py-6 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 hover:bg-orange-50/30 transition-all duration-300 rounded-xl"
              >
                {/* Left: Number + Icon + Title + Description */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0 flex-1">
                  {/* Number Watermark */}
                  <span className="text-sm font-mono font-bold text-slate-300 group-hover:text-[#ea580c] transition-colors shrink-0 pt-1 sm:pt-0">
                    {row.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${row.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-xs`}
                  >
                    <Icon className={`w-6 h-6 ${row.iconColor}`} />
                  </div>

                  {/* Title & Description */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug">
                        {row.title}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold border ${row.badgeBg} ${row.badgeColor} ${row.badgeBorder}`}
                      >
                        {row.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl line-clamp-1 sm:line-clamp-none">
                      {row.description}
                    </p>
                  </div>
                </div>

                {/* Right: Key Benefit + Time + Arrow Action */}
                <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 shrink-0 pl-10 sm:pl-0 pt-2 sm:pt-0 border-t md:border-t-0 border-slate-100">
                  <div className="hidden lg:block text-right">
                    <div className="text-xs font-bold text-slate-800">{row.highlight}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">⏱️ {row.timeEstimate}</div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white group-hover:bg-gradient-to-r group-hover:from-[#ea580c] group-hover:to-[#f37021] text-slate-800 group-hover:text-white border border-slate-200 group-hover:border-transparent font-bold text-xs sm:text-sm shadow-xs transition-all duration-300 group-hover:shadow-md">
                    <span>Launch</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#ea580c] via-[#f37021] to-[#f59e0b] hover:from-[#c2410c] hover:to-[#ea580c] text-white font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Explore All 8 Specialized Calculators</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CalculatorsTeaserSection;
