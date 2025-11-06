import { useState } from 'react';
import { BookOpen, Trash2, ArrowLeft } from 'lucide-react';
import SectionCard from './SectionCard';

export default function BookCatalog({ initialBooks = [], onBack }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState(
    initialBooks.map((b) => ({ id: crypto.randomUUID(), ...b }))
  );

  const addBook = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    setBooks((prev) => [
      { id: crypto.randomUUID(), title: title.trim(), author: author.trim() },
      ...prev,
    ]);
    setTitle('');
    setAuthor('');
  };

  const removeBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const openDetails = (b) => {
    alert(`${b.title} — ${b.author}`);
  };

  return (
    <SectionCard title="📚 Book Catalog" icon={BookOpen}>
      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      </div>

      <form onSubmit={addBook} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="Book Title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="Author"
        />
        <button
          type="submit"
          className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          Add Book
        </button>
      </form>

      <div className="mt-5 grid gap-3">
        {books.length === 0 ? (
          <p className="text-sm text-slate-500">No books added yet.</p>
        ) : (
          books.map((b) => (
            <article
              key={b.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <button
                onClick={() => openDetails(b)}
                className="text-left"
                title="View details"
              >
                <h3 className="text-sm font-semibold text-slate-800">{b.title}</h3>
                <p className="text-xs text-slate-500">{b.author}</p>
              </button>
              <button
                onClick={() => removeBook(b.id)}
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                aria-label={`Delete ${b.title}`}
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
