export default function SectionCard({ title, icon, children }) {
  const Icon = icon;
  return (
    <section className="flex-1 rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md ring-1 ring-slate-900/5 p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        {Icon ? (
          <Icon className="h-5 w-5 text-slate-700" aria-hidden="true" />
        ) : null}
        <h2 className="text-lg sm:text-xl font-semibold text-slate-800">{title}</h2>
      </div>
      {children}
    </section>
  );
}
