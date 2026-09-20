export function TimelineRow({
  title,
  company,
  year,
}: {
  title: string;
  company: string;
  year: string;
}) {
  return (
    <div className="border-t border-white/10 py-5">
      <p className="font-medium text-white">{title}</p>
      <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-muted">Company</p>
          <p className="text-white">→ {company}</p>
        </div>
        <div>
          <p className="text-muted">Year</p>
          <p className="text-white">→ {year}</p>
        </div>
      </div>
    </div>
  );
}
