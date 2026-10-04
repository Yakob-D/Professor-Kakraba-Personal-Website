import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { Icon } from "./Icon";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium whitespace-nowrap transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-md hover:shadow-glow hover:-translate-y-0.5 dark:text-brand-950",
  accent:
    "bg-accent-gradient text-brand-950 shadow-md hover:shadow-glow hover:-translate-y-0.5",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-brand-400 hover:text-brand-700 hover:-translate-y-0.5 hover:shadow-sm dark:hover:text-brand-200",
  ghost:
    "text-ink-soft hover:bg-surface-2 hover:text-ink",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.9375rem]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  /** Icon name rendered after the label. */
  icon?: string;
  /** Icon name rendered before the label. */
  leadingIcon?: string;
  /** Slide the trailing icon on hover. */
  animateIcon?: boolean;
};

function Inner({
  children,
  icon,
  leadingIcon,
  animateIcon,
  variant,
}: Pick<CommonProps, "children" | "icon" | "leadingIcon" | "animateIcon" | "variant">) {
  return (
    <>
      {/* Light sweep on hover, only for the filled variants. */}
      {(variant === "primary" || variant === "accent") && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full motion-reduce:hidden"
        />
      )}
      {leadingIcon && <Icon name={leadingIcon} />}
      <span className="relative">{children}</span>
      {icon && (
        <Icon
          name={icon}
          className={cn(
            animateIcon !== false &&
              "transition-transform duration-300 group-hover/btn:translate-x-0.5 motion-reduce:transition-none",
          )}
        />
      )}
    </>
  );
}

/** Renders an <a> via next/link when `href` is present, otherwise a <button>. */
export function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  leadingIcon,
  animateIcon,
  ...rest
}: CommonProps & {
  href?: string;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <Inner {...{ children, icon, leadingIcon, animateIcon, variant }} />
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer noopener"
          className={classes}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}

/** A quieter inline link with an animated arrow — used all over the site. */
export function ArrowLink({
  href,
  children,
  external,
  className,
  icon = "arrow-right",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  icon?: string;
}) {
  const isExternal = external || href.startsWith("http");
  const classes = cn(
    "group/link inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200",
    className,
  );
  const inner = (
    <>
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover/link:scale-x-100 motion-reduce:transition-none"
        />
      </span>
      <Icon
        name={isExternal ? "arrow-up-right" : icon}
        className="transition-transform duration-300 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
      />
    </>
  );

  return isExternal ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
