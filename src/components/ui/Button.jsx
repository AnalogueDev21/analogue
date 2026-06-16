export default function Button({
  children,
  className = "",
  size = "md",
  variant = "primary",
  ...props
}) {
  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5 text-base",
    lg: "h-14 px-6 text-base",
  };

  const variants = {
    primary:
      "bg-analogue-blue text-white shadow-soft hover:bg-blue-600 active:bg-blue-700",
    secondary:
      "border border-analogue-line bg-white text-analogue-ink hover:bg-zinc-50 active:bg-zinc-100",
    ghost: "text-analogue-muted hover:bg-white/70 active:bg-white",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
