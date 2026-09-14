import React from 'react';
import { ArrowRight, Wrench, ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react';
import { Breadcrumbs } from '../../../../components/layout/Breadcrumbs';
import { Badge } from '../../../../components/ui/Badge';
import { Button } from '../../../../components/ui/Button';

export const SolarInstallationHeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white pt-4 pb-14 border-b border-slate-200/60">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-26">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
          

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
              Flawless Residential{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Solar Installation
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              A solar system is only as reliable as the hands that install it. Our certified Master Electricians follow uncompromising safety protocols to guarantee zero water ingress, laser-straight panel alignment, and superior electrical protection.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                to="/get-started/free-assessment"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Book In-Home Assessment
              </Button>
              <Button
                to="/about"
                variant="outline"
                size="lg"
                icon={<Users className="w-4 h-4" />}
              >
                Meet Our Installers
              </Button>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07_QzVpkw812LEZoCtPB5PHMlmpARNfNhgjPp_6DIuhteqn7hIav41Epz&s=10"
                alt="Electrician installing solar panels"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Uncompromising Trade Standards</div>
                <div className="text-sm font-bold mt-0.5">Torque-Tested Clamping & Concealed Conduit Routing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
