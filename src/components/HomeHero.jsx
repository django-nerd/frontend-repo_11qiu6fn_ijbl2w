import { BookOpen, Users } from 'lucide-react';

export default function HomeHero({ onOpenBooks, onOpenMembers }) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 pb-10">
      <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <button
          onClick={onOpenBooks}
          className="group flex flex-col items-start rounded-2xl bg-white/70 p-6 text-left shadow-md ring-1 ring-slate-900/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600 ring-1 ring-blue-100">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-semibold text-slate-800">📚 Book Catalog</h2>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Browse and manage books. Add new titles, edit details, and keep your library organized.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700 group-hover:gap-3">
            Open Catalog
            <span aria-hidden>→</span>
          </span>
        </button>

        <button
          onClick={onOpenMembers}
          className="group flex flex-col items-start rounded-2xl bg-white/70 p-6 text-left shadow-md ring-1 ring-slate-900/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600 ring-1 ring-emerald-100">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-semibold text-slate-800">👤 Member Profiles</h2>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            View and manage members. Add new profiles and keep contact info up-to-date.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-700 group-hover:gap-3">
            Open Members
            <span aria-hidden>→</span>
          </span>
        </button>
      </div>
    </section>
  );
}
