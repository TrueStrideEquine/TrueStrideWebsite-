export function MediaPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`home-media-placeholder ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <span className="home-media-placeholder__label">{label}</span>
    </div>
  );
}
