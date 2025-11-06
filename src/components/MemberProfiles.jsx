import { useState } from 'react';
import { User, Trash2, ArrowLeft } from 'lucide-react';
import SectionCard from './SectionCard';

export default function MemberProfiles({ initialMembers = [], onBack }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState(
    initialMembers.map((m) => ({ id: crypto.randomUUID(), ...m }))
  );

  const addMember = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setMembers((prev) => [
      { id: crypto.randomUUID(), name: name.trim(), email: email.trim() },
      ...prev,
    ]);
    setName('');
    setEmail('');
  };

  const removeMember = (id) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const openDetails = (m) => {
    alert(`${m.name} — ${m.email}`);
  };

  return (
    <SectionCard title="👤 Member Profiles" icon={User}>
      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      </div>

      <form onSubmit={addMember} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Member Name"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          aria-label="Member Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          aria-label="Email Address"
        />
        <button
          type="submit"
          className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-emerald-700 active:bg-emerald-800 transition-colors"
        >
          Add Member
        </button>
      </form>

      <div className="mt-5 grid gap-3">
        {members.length === 0 ? (
          <p className="text-sm text-slate-500">No members added yet.</p>
        ) : (
          members.map((m) => (
            <article
              key={m.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <button
                onClick={() => openDetails(m)}
                className="text-left"
                title="View details"
              >
                <h3 className="text-sm font-semibold text-slate-800">{m.name}</h3>
                <p className="text-xs text-slate-500">{m.email}</p>
              </button>
              <button
                onClick={() => removeMember(m.id)}
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                aria-label={`Delete ${m.name}`}
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </article>
          ))
        )}
      </div>
    </SectionCard>
  );
}
