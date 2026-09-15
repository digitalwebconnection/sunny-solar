import React, { useState, useEffect, useRef } from 'react';
import { Star, ShieldCheck, Zap, Award } from 'lucide-react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Smooth easeOutCubic curve
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutProgress * target;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.2 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
      observer.disconnect();
    };
  }, [target, duration]);

  const formattedNumber = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef} className="tabular-nums inline-block">
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};

export const TrustBarSection: React.FC = () => {
  const stats = [
    {
      icon: Zap,
      target: 4200,
      suffix: '+',
      decimals: 0,
      label: 'Homes & Sites Powered',
      iconColor: 'text-[#ed5001] fill-[#ed5001]/15',
      iconBg: 'bg-orange-50/90 border-orange-200/70',
    },
    {
      icon: Award,
      target: 14,
      suffix: '+ Years',
      decimals: 0,
      label: 'Master Electrician Owned',
      iconColor: 'text-[#265e11]',
      iconBg: 'bg-emerald-50/90 border-emerald-200/70',
    },
    {
      icon: ShieldCheck,
      target: 25,
      suffix: ' Years',
      decimals: 0,
      label: 'Performance Guarantee',
      iconColor: 'text-[#ed5001]',
      iconBg: 'bg-orange-50/90 border-orange-200/70',
    },
    {
      icon: Star,
      target: 4.98,
      suffix: '★',
      decimals: 2,
      label: 'Google Customer Rating',
      iconColor: 'text-amber-500 fill-amber-400',
      iconBg: 'bg-amber-50/90 border-amber-200/70',
    },
  ];

  return (
    <section className="bg-white py-14 lg:py-16 relative overflow-hidden">
      {/* Subtle ambient light accents */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#265e11]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#ed5001]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Title & Description */}
        <div className="text-center max-w-6xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#18181b] tracking-tight leading-[1.15]">
            Real Numbers. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ed5001] via-[#f06e02] to-[#f4a304]">
              Proven Performance.
            </span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-900 leading-relaxed max-w-5xl mx-auto">
            Over a decade of in-house master electrician craftsmanship, zero subcontractors, and thousands of Queensland homes powering their future with confidence.
          </p>
        </div>

        {/* Stats Grid - Centered & Balanced */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x divide-slate-300/80">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="pt-6 sm:pt-0 sm:px-6 flex flex-col items-center text-center group cursor-default"
              >
                {/* Centered Modern Icon Squircle */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border flex items-center justify-center shrink-0 ${stat.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-xs mb-3.5 sm:mb-4`}
                >
                  <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                </div>

                {/* Animated Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181b] tracking-tight font-serif leading-none group-hover:text-[#ed5001] transition-colors mb-2 tabular-nums">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
