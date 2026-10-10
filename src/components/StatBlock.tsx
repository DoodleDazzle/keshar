export function StatBlock({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="min-w-[180px] px-8 py-4 text-center">
      <p className="font-display text-4xl text-white md:text-5xl">{value}</p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}
