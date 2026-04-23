type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  size?: "sm" | "default" | "lg"
  children: React.ReactNode
}

function Button({
  className = "",
  size = "default",
  children,
  ...props
}: ButtonProps) {

  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-cor-primaria bg-cor-primaria text-cor-primaria-texto hover:bg-cor-primaria/90 shadow-lg shadow-cor-primaria/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}

export default Button