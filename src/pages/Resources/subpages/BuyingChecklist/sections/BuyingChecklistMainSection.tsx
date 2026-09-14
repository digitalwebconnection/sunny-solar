import React, { useState } from 'react';
import { 
  CheckSquare, 
  Check, 
  Download, 
  ShieldCheck, 
  Mail, 
  User, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  Clock
} from 'lucide-react';
import { Button } from '../../../../../components/ui/Button';

interface CheckItem {
  id: string;
  category: string;
  title: string;
  description: string;
}

const CHECKLIST_ITEMS: CheckItem[] = [
  {
    id: 'c1',
    category: 'Contract & Pricing',
    title: 'Is the quote fully fixed with zero variation clauses?',
    description: 'Ensure switchboard upgrades, double-storey surcharges, and steep roof pitch fees are explicitly included in writing.',
  },
  {
    id: 'c2',
    category: 'Contract & Pricing',
    title: 'Are STC federal government rebates itemized up-front?',
    description: 'Verify the exact point-of-sale discount deducted from your invoice ($2,500–$3,200 depending on system kW).',
  },
  {
    id: 'c3',
    category: 'Contract & Pricing',
    title: 'Is there a full refund clause if grid export approval is denied?',
    description: 'DNSPs (Energex/Ergon) must approve your inverter capacity before installation begins.',
  },
  {
    id: 'c4',
    category: 'Installer Credentials',
    title: 'Does the company use in-house master electricians?',
    description: 'Avoid retailers who auction your installation contract off to cut-rate third-party sub-contractor crews.',
  },
  {
    id: 'c5',
    category: 'Installer Credentials',
    title: 'Is the installer CEC Accredited (Clean Energy Council)?',
    description: 'Ask for the electrician’s personal CEC accreditation number and verify it on the official national registry.',
  },
  {
    id: 'c6',
    category: 'Hardware & Design',
    title: 'Are solar panels genuine Tier-1 BloombergNEF modules?',
    description: 'Confirm N-Type TOPCon or heterojunction technology with positive power tolerance (+0 to +5W).',
  },
  {
    id: 'c7',
    category: 'Hardware & Design',
    title: 'Is the inverter brand proven with an Australian support office?',
    description: 'Look for established Tier-1 manufacturers (Sungrow, Fronius, Enphase, SolarEdge) with local tech support.',
  },
  {
    id: 'c8',
    category: 'Hardware & Design',
    title: 'Does the system layout account for shading and orientation?',
    description: 'Split East/West roof layouts often deliver superior self-consumption compared to pure North arrays.',
  },
  {
    id: 'c9',
    category: 'Warranty & Support',
    title: 'Is there an independent 10-year workmanship guarantee?',
    description: 'Distinguish between hardware manufacturer warranties (panels) and the retailer’s own labor guarantee for roof leaks.',
  },
  {
    id: 'c10',
    category: 'Warranty & Support',
    title: 'Who covers warranty labor if the installer ceases trading?',
    description: 'Ensure hardware warranties are supported directly in Australia by the manufacturer, not an overseas trading entity.',
  },
];

export const BuyingChecklistMainSection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    c1: true,
    c4: true,
    c6: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postcode: '',
  });

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;
  const progressPercent = Math.round((checkedCount / totalCount) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="p-4 sm:p-8">
        
        {/* Simple & Premium Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1.5">
              <CheckSquare className="w-4 h-4" />
              <span>Independent Homeowner Library • 2025 Edition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 tracking-tight">
              15 Critical Questions to Vet Any Solar Quote
            </h2>
            <p className="text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
              Engineered by master electricians to give you an unfair advantage. Review key inspection items below or download the complete 6-page printable guide with word-for-word scripts to ask salespeople.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-2xs self-start lg:self-auto shrink-0">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Printable 6-Page PDF</span>
              <span className="text-[11px] text-slate-500 font-medium">Free instant download</span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Interactive Questions (Left) + Minimal Premium Download (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Interactive Checklist */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Progress Bar */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Interactive Vetting Progress
                </span>
                <span className="text-sm font-semibold text-slate-600">
                  {checkedCount} of {totalCount} critical criteria verified
                </span>
              </div>
              <div className="w-full sm:w-48 bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-500 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              {CHECKLIST_ITEMS.map((item, index) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`cursor-pointer rounded-lg border p-4 sm:p-5 transition-all duration-200 flex items-start gap-3.5 select-none ${
                      isChecked 
                        ? 'bg-amber-50/40 border-amber-300/90 shadow-2xs' 
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-2xs'
                    }`}
                  >
                    {/* Checkbox Icon */}
                    <div 
                      className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center shrink-0 border transition-all ${
                        isChecked 
                          ? 'bg-amber-500 border-amber-500 text-white' 
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">#{index + 1}</span>
                      </div>
                      <h4 className={`text-sm sm:text-base font-serif font-bold ${isChecked ? 'text-slate-900' : 'text-slate-800'}`}>
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-lg bg-slate-100/80 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                <strong>Master Electrician Guarantee:</strong> Never sign a contract on the spot. Legitimate Australian installers give you 7–14 days to review engineering drawings and DNSP connection offers.
              </span>
            </div>

          </div>

          {/* Right: Sleek Download Card */}
          <div className="lg:col-span-5 bg-white rounded-lg border border-slate-300 p-6 sm:p-8 shadow-lg lg:sticky lg:top-24">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Checklist On Its Way!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  We've sent the complete 6-page printable PDF to <span className="font-semibold text-slate-800">{formData.email}</span>.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-600 font-bold hover:underline cursor-pointer"
                  >
                    Send to a different email
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Free Instant Download</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 mt-2.5">
                    Get the Printable 6-Page PDF
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Includes word-for-word scripts to ask salespeople, contract review red flags, and our quote comparison worksheet.
                  </p>
                </div>

                <div className="pt-2 space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="david@example.com.au"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Suburb / Postcode</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Southport 4215"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Download className="w-4 h-4" />}
                    className="shadow-md hover:shadow-lg transition-all"
                  >
                    Download Free Checklist (PDF)
                  </Button>
                </div>

                <div className="pt-2 text-center text-[11px] text-slate-400 space-y-1">
                  <p>Instant PDF access • 100% Free • No unsolicited calls</p>
                </div>
              </form>
            )}
          </div>

      </div>

      </div>
    </section>
  );
};

export default BuyingChecklistMainSection;
