import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'emerald' | 'navy' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'amber',
  size = 'md',
  icon,
  className = '',
}) => {
  const base = 'inline-flex items-center gap-1.5 font-semibold rounded-full tracking-wide uppercase transition-colors';

  const sizes = {
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
  };

  const variants = {
    amber: 'bg-amber-100 text-amber-900 border border-amber-300/60',
    emerald: 'bg-emerald-100 text-emerald-900 border border-emerald-300/60',
    navy: 'bg-slate-900 text-amber-300 border border-slate-700',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    outline: 'bg-transparent text-slate-700 border border-slate-300',
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
