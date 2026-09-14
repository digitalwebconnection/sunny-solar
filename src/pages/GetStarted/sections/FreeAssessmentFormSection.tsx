import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Check,
  Lock,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const FreeAssessmentFormSection: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [consultType, setConsultType] = useState<'satellite' | 'onsite' | 'phone'>('satellite');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    service: 'New Solar Installation',
    message: '',
  });

  const [authorizedConsent, setAuthorizedConsent] = useState<boolean>(false);
  const [isHumanVerified, setIsHumanVerified] = useState<boolean>(false);
  const [isVerifyingHuman, setIsVerifyingHuman] = useState<boolean>(false);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    suburb?: string;
    consent?: string;
    captcha?: string;
  }>({});

  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    suburb?: boolean;
    consent?: boolean;
    captcha?: boolean;
  }>({});

  // Validation functions
  const validateName = (val: string): string => {
    if (!val.trim()) return 'Full name is required.';
    if (val.trim().length < 2) return 'Name must be at least 2 characters.';
    return '';
  };

  const validateEmail = (val: string): string => {
    if (!val.trim()) return 'Email address is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val.trim())) return 'Please enter a valid email address (e.g. name@example.com.au).';
    return '';
  };

  const validatePhone = (val: string): string => {
    if (!val.trim()) return 'Phone number is required.';
    const digits = val.replace(/\D/g, '');
    if (digits.length < 8 || digits.length > 12) {
      return 'Please enter a valid Australian phone number (e.g. 0400 123 456).';
    }
    return '';
  };

  const validateSuburb = (val: string): string => {
    if (!val.trim()) return 'Property suburb or postcode is required.';
    if (val.trim().length < 3) return 'Please enter a valid suburb and postcode (e.g. Maroochydore 4558).';
    return '';
  };

  const validateConsent = (val: boolean): string => {
    if (!val) return 'Please confirm you are authorized to request an assessment for this property.';
    return '';
  };

  const validateCaptcha = (val: boolean): string => {
    if (!val) return 'Please complete the anti-bot verification.';
    return '';
  };

  // Change handler with live re-validation for touched fields
  const handleFieldChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field as keyof typeof touched]) {
      let err = '';
      if (field === 'name') err = validateName(value);
      if (field === 'email') err = validateEmail(value);
      if (field === 'phone') err = validatePhone(value);
      if (field === 'suburb') err = validateSuburb(value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  // Blur handler
  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    let err = '';
    if (field === 'name') err = validateName(formData.name);
    if (field === 'email') err = validateEmail(formData.email);
    if (field === 'phone') err = validatePhone(formData.phone);
    if (field === 'suburb') err = validateSuburb(formData.suburb);
    if (field === 'consent') err = validateConsent(authorizedConsent);
    if (field === 'captcha') err = validateCaptcha(isHumanVerified);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  // Human / Anti-bot verification simulator
  const handleVerifyHuman = () => {
    if (isHumanVerified || isVerifyingHuman) return;
    setIsVerifyingHuman(true);
    setTimeout(() => {
      setIsVerifyingHuman(false);
      setIsHumanVerified(true);
      setTouched((prev) => ({ ...prev, captcha: true }));
      setErrors((prev) => ({ ...prev, captcha: '' }));
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      suburb: true,
      consent: true,
      captcha: true,
    });

    const nameErr = validateName(formData.name);
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const suburbErr = validateSuburb(formData.suburb);
    const consentErr = validateConsent(authorizedConsent);
    const captchaErr = validateCaptcha(isHumanVerified);

    const newErrors = {
      name: nameErr,
      email: emailErr,
      phone: phoneErr,
      suburb: suburbErr,
      consent: consentErr,
      captcha: captchaErr,
    };

    setErrors(newErrors);

    if (nameErr || emailErr || phoneErr || suburbErr || consentErr || captchaErr) {
      return;
    }

    setIsSubmitting(true);

    // Simulate authenticated submission & generation of security reference code
    setTimeout(() => {
      const randomCode = Math.floor(100000 + Math.random() * 900000);
      setReferenceId(`QLD-${randomCode}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 850);
  };

  return (
    <section className="py-12 lg:py-10 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-950 mb-2">
                Speak Directly With Our Local Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-900 mb-6">
                Have a question before requesting an assessment? Our in-house technical team is here to help.
              </p>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-300/80 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-500">Direct Phone</div>
                    <a
                      href="tel:1300786697"
                      className="text-lg font-bold text-slate-950 hover:text-amber-700 transition-colors"
                    >
                      1300 SUNNY (786 697)
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Mon – Fri: 7:00 AM – 5:00 PM AEST
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-300/80 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-500">Email Inquiries</div>
                    <a
                      href="mailto:hello@sunnysolar.com.au"
                      className="text-base font-semibold text-slate-950 hover:text-amber-700 transition-colors"
                    >
                      hello@sunnysolar.com.au
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Replies within 2 to 4 business hours
                    </div>
                  </div>
                </div>

                {/* Office / Coverage */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-300/80 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-500">Headquarters & Depots</div>
                    <div className="text-sm font-semibold text-slate-950">
                      Brisbane & Gold Coast, Queensland
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Daily service runs throughout all SEQ suburbs
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Integrity Note */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Data Security Guarantee</span>
              </div>
              <p className="leading-relaxed text-[11px] text-slate-500">
                Your contact details are encrypted and sent directly to our licensed Master Electricians. Zero third-party data broker sharing, zero persistent telemarketing.
              </p>
            </div>
          </div>

          {/* Right Column: Authenticated & Validated Form */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-slate-200/80">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-100 text-emerald-800 mb-2">
                    VERIFIED ASSESSMENT ID: {referenceId}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-slate-950">
                    Assessment Request Authenticated!
                  </h3>
                </div>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your property details for <strong className="text-slate-900">{formData.suburb}</strong> have been verified and assigned to our Brisbane engineering desk.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 max-w-md mx-auto text-left text-xs text-slate-700 space-y-1.5 border border-slate-200/80">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Email:</span>
                    <span className="font-semibold">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Phone:</span>
                    <span className="font-semibold">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Requested Service:</span>
                    <span className="font-semibold">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Method:</span>
                    <span className="font-semibold uppercase font-mono">{consultType}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setIsHumanVerified(false);
                      setAuthorizedConsent(false);
                      setErrors({});
                      setTouched({});
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        suburb: '',
                        service: 'New Solar Installation',
                        message: '',
                      });
                    }}
                    variant="outline"
                    size="md"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Consultation Preference Toggle */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Assessment Type:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setConsultType('satellite')}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                        consultType === 'satellite'
                          ? 'bg-amber-50 border-amber-500 text-amber-900 shadow-xs ring-1 ring-amber-400/40'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      📡 3D Satellite Audit
                    </button>
                    <button
                      type="button"
                      onClick={() => setConsultType('onsite')}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                        consultType === 'onsite'
                          ? 'bg-amber-50 border-amber-500 text-amber-900 shadow-xs ring-1 ring-amber-400/40'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      🏠 In-Home Site Visit
                    </button>
                    <button
                      type="button"
                      onClick={() => setConsultType('phone')}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                        consultType === 'phone'
                          ? 'bg-amber-50 border-amber-500 text-amber-900 shadow-xs ring-1 ring-amber-400/40'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      📞 Phone Consultation
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. David Morrison"
                      value={formData.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors pr-10 ${
                        touched.name && errors.name
                          ? 'border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400 focus:border-red-400'
                          : touched.name && !errors.name && formData.name
                          ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-400 bg-white'
                          : 'border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white'
                      }`}
                    />
                    {touched.name && !errors.name && formData.name && (
                      <Check className="w-4 h-4 text-emerald-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    )}
                  </div>
                  {touched.name && errors.name && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="david@example.com.au"
                        value={formData.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors pr-10 ${
                          touched.email && errors.email
                            ? 'border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400 focus:border-red-400'
                            : touched.email && !errors.email && formData.email
                            ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-400 bg-white'
                            : 'border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white'
                        }`}
                      />
                      {touched.email && !errors.email && formData.email && (
                        <Check className="w-4 h-4 text-emerald-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      )}
                    </div>
                    {touched.email && errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="0400 123 456"
                        value={formData.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors pr-10 ${
                          touched.phone && errors.phone
                            ? 'border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400 focus:border-red-400'
                            : touched.phone && !errors.phone && formData.phone
                            ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-400 bg-white'
                            : 'border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white'
                        }`}
                      />
                      {touched.phone && !errors.phone && formData.phone && (
                        <Check className="w-4 h-4 text-emerald-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      )}
                    </div>
                    {touched.phone && errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Suburb & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Property Suburb / Postcode *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Maroochydore 4558"
                        value={formData.suburb}
                        onChange={(e) => handleFieldChange('suburb', e.target.value)}
                        onBlur={() => handleBlur('suburb')}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors pr-10 ${
                          touched.suburb && errors.suburb
                            ? 'border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400 focus:border-red-400'
                            : touched.suburb && !errors.suburb && formData.suburb
                            ? 'border-emerald-400 focus:ring-2 focus:ring-emerald-400 bg-white'
                            : 'border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white'
                        }`}
                      />
                      {touched.suburb && !errors.suburb && formData.suburb && (
                        <Check className="w-4 h-4 text-emerald-600 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      )}
                    </div>
                    {touched.suburb && errors.suburb && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.suburb}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      System of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleFieldChange('service', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                    >
                      <option>New Solar Installation (6.6kW - 13.2kW)</option>
                      <option>Solar + Battery Storage Bundle</option>
                      <option>Add Battery to Existing Solar</option>
                      <option>Solar System Repair / Health Check</option>
                      <option>General Question / Other</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Notes or Specific Requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Recent quarterly electricity bill size, roof type (tin/tile), or preferred battery brand..."
                    value={formData.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>

                {/* Anti-Bot / Human Verification Authentication Check */}
                <div
                  className={`p-3 rounded-xl border transition-all ${
                    isHumanVerified
                      ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950'
                      : touched.captcha && errors.captcha
                      ? 'bg-red-50/50 border-red-300'
                      : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleVerifyHuman}
                      className="flex items-center gap-3 cursor-pointer text-left focus:outline-none"
                    >
                      <div
                        className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all ${
                          isVerifyingHuman
                            ? 'border-amber-500 bg-amber-50'
                            : isHumanVerified
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-slate-300 bg-white hover:border-slate-400'
                        }`}
                      >
                        {isVerifyingHuman && <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600" />}
                        {isHumanVerified && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium text-slate-800">
                        {isVerifyingHuman
                          ? 'Authenticating security token...'
                          : isHumanVerified
                          ? 'Security check passed: Verified human request'
                          : 'Click to verify: I am not a robot'}
                      </span>
                    </button>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                      <Lock className="w-3 h-3 text-slate-400" />
                      <span>256-BIT SSL</span>
                    </div>
                  </div>
                  {touched.captcha && errors.captcha && (
                    <p className="text-[11px] text-red-600 mt-2 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.captcha}</span>
                    </p>
                  )}
                </div>

                {/* Property Owner Authorization Checkbox */}
                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={authorizedConsent}
                      onChange={(e) => {
                        setAuthorizedConsent(e.target.checked);
                        if (touched.consent) {
                          setErrors((prev) => ({
                            ...prev,
                            consent: validateConsent(e.target.checked),
                          }));
                        }
                      }}
                      onBlur={() => handleBlur('consent')}
                      className="mt-0.5 w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                    />
                    <span className="text-xs text-slate-600 leading-tight">
                      I confirm I am the property owner or authorized decision-maker for this address.
                    </span>
                  </label>
                  {touched.consent && errors.consent && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.consent}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button with Loading State */}
                <div className="pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )
                    }
                  >
                    {isSubmitting ? 'Authenticating & Submitting...' : 'Request Free Assessment'}
                  </Button>
                </div>

                <div className="text-center text-[11px] text-slate-400">
                  Protected by Sunny Solar lead authentication. Zero third-party marketing.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAssessmentFormSection;
