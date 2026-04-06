'use client';

import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  scrollTo?: string;
}

export function GlowButton({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  scrollTo,
  children,
  className,
  onClick,
  ...props
}: GlowButtonProps) {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 relative group cursor-pointer';

  const variantStyles = {
    primary:
      'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 active:scale-95',
    secondary:
      'bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/50 active:scale-95',
    outline:
      'border border-primary text-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/30 active:scale-95',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (scrollTo) {
      e.preventDefault();
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClick?.(e);
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}
