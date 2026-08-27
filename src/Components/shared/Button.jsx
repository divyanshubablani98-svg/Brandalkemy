import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'ghost', 'amethyst'
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-poppins font-semibold transition-all duration-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-onyx disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm md:text-base px-6 py-3 gap-2",
    lg: "text-base md:text-lg px-8 py-4 gap-2.5",
    xl: "text-lg md:text-xl px-10 py-5 gap-3",
  };

  const variantStyles = {
    primary: "bg-amber text-onyx hover:bg-amber-hover hover:shadow-amber-glow shadow-md hover:-translate-y-0.5 active:translate-y-0 font-bold",
    secondary: "bg-transparent text-white border border-white/20 hover:border-amber hover:text-amber hover:bg-amber/5 hover:-translate-y-0.5 active:translate-y-0",
    ghost: "bg-transparent text-white/80 hover:text-amber hover:bg-white/5",
    amethyst: "bg-amethyst text-white border border-amethyst-light/40 hover:bg-amethyst-light hover:shadow-amethyst-glow hover:-translate-y-0.5 active:translate-y-0",
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-x-0.5 ${variant === 'primary' ? 'text-onyx' : 'text-amber'}`} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 ${variant === 'primary' ? 'text-onyx' : 'text-amber'}`} />
      )}
    </>
  );

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...props}
    >
      {content}
    </button>
  );
}
