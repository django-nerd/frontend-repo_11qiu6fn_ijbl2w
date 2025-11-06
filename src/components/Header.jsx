import { Home, BookOpen, Users, Mail } from 'lucide-react';

function NavLink({ icon: Icon, label }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-lg transition-colors"
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

export default function Header() {
  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-6">
        <h1 className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Library Management System
        </h1>
        <nav className="mt-6 flex items-center justify-center gap-1 sm:gap-2 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 rounded-xl p-2 shadow-sm ring-1 ring-slate-900/5">
          <NavLink icon={Home} label="Home" />
          <NavLink icon={BookOpen} label="Books" />
          <NavLink icon={Users} label="Members" />
          <NavLink icon={Mail} label="Contact" />
        </nav>
      </div>
    </header>
  );
}
