import React from 'react';

export const FreeAssessmentHeroSection: React.FC = () => {
  return (
    <section className="bg-linear-to-b from-amber-500/10 via-amber-500/5 to-white pt-24 pb-14 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            Get Your Free Solar Assessment{' '} <br />
            <span className="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              & Engineering Quote
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-900 leading-relaxed">
            Honest energy advice, high-resolution 3D roof analysis, and guaranteed fixed pricing. Speak directly with licensed solar electricians with zero sales pressure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeAssessmentHeroSection;
