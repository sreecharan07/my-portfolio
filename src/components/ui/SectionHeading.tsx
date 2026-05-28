/**
 * SectionHeading — Consistent section title with Space Grotesk typography
 * and optional gold accent on a highlighted word.
 */
interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({
  children,
  subtitle,
  className = "",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
          dark ? "text-dark-text" : "text-foreground"
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            dark ? "text-dark-muted" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
