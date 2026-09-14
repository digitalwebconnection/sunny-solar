import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { navigationData } from '../../../data/navigationData';
import { Button } from '../../ui/Button';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animate in/out
  React.useEffect(() => {
    if (isOpen) {
      // Small delay to allow DOM to render before animating
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  // Keep mounted briefly for exit animation
  const [shouldRender, setShouldRender] = React.useState(false);
  React.useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const toggleSection = (title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title));
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white shadow-2xl z-50 flex flex-col overflow-y-auto transition-transform duration-300 ease-out ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f37021] to-[#ea580c] flex items-center justify-center text-white shadow-sm font-black text-lg">
              ☀️
            </div>
            <div>
              <span className="font-extrabold text-slate-900 tracking-tight block leading-tight">
                Sunny Solar
              </span>
              <span className="text-[10px] text-[#1d6327] font-bold uppercase tracking-wider block">
                Residential & Battery
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links with Accordion Submenus */}
        <div className="p-4 flex-1 divide-y divide-slate-100 space-y-1">
          {navigationData.map((section) => {
            const hasChildren = Boolean(section.children?.items?.length);
            const isExpanded = expandedSection === section.title;

            return (
              <div key={section.title} className="py-2">
                {hasChildren ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSection(section.title)}
                      className="w-full flex items-center justify-between py-3 min-h-[44px] text-left font-bold text-slate-800 hover:text-[#f37021] transition-colors text-base"
                    >
                      <span>{section.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? 'rotate-180 text-[#f37021]' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {isExpanded && section.children && (
                      <div className="pl-3 mt-1 space-y-0.5 border-l-2 border-[#f37021]">
                        <Link
                          to={section.href}
                          onClick={onClose}
                          className="block py-2.5 min-h-[44px] flex items-center text-xs font-bold text-[#f37021] hover:underline"
                        >
                          View {section.title} Overview →
                        </Link>
                        {section.children.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            onClick={onClose}
                            className="block py-2.5 min-h-[44px] flex items-center text-sm text-slate-600 hover:text-[#1d6327] font-medium"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={section.href}
                    onClick={onClose}
                    className="block py-3 min-h-[44px] flex items-center font-bold text-slate-800 hover:text-[#f37021] transition-colors text-base"
                  >
                    {section.title}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Quick Support and Legal Links */}
          <div className="pt-4 space-y-2 text-sm text-slate-500">
            <Link to="/about/trent" onClick={onClose} className="block py-2.5 min-h-[44px] flex items-center hover:text-[#f37021]">
              Meet Trent (Founder Bio)
            </Link>
            <Link to="/service-areas" onClick={onClose} className="block py-2.5 min-h-[44px] flex items-center hover:text-[#f37021]">
              Service Areas & Locations
            </Link>
            <Link to="/faq" onClick={onClose} className="block py-2.5 min-h-[44px] flex items-center hover:text-[#f37021]">
              Frequently Asked Questions
            </Link>
          </div>
        </div>

        {/* Drawer Footer with CTA */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
          <Button
            to="/get-started/free-assessment"
            onClick={onClose}
            variant="primary"
            size="md"
            fullWidth
            className="rounded-full bg-gradient-to-r from-[#ea580c] via-[#f37021] to-[#f59e0b] hover:from-[#c2410c] hover:to-[#ea580c] text-white border-0 shadow-lg shadow-orange-500/25"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Free Solar Assessment
          </Button>

          <div className="pt-2 text-xs text-slate-500 space-y-1.5">
            <a
              href="tel:1300786697"
              className="flex items-center gap-2 text-slate-700 font-semibold hover:text-[#f37021]"
            >
              <Phone className="w-3.5 h-3.5 text-[#f37021]" />
              1300 SUNNY (1300 786 697)
            </a>
            <a
              href="mailto:hello@sunnysolar.com.au"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800"
            >
              <Mail className="w-3.5 h-3.5 text-[#f37021]" />
              hello@sunnysolar.com.au
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#1d6327] font-medium pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
            <span>CEC Approved Solar Retailer #A4892</span>
          </div>
        </div>
      </div>
    </div>
  );
};
