import { useMemo, useState } from 'react';
import Header from './components/Header';
import HomeHero from './components/HomeHero';
import BookCatalog from './components/BookCatalog';
import MemberProfiles from './components/MemberProfiles';
import Footer from './components/Footer';

const presetBooks = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
  { title: 'Moby-Dick', author: 'Herman Melville' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'War and Peace', author: 'Leo Tolstoy' },
  { title: 'The Odyssey', author: 'Homer' },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
  { title: 'Brave New World', author: 'Aldous Huxley' },
];

const presetMembers = [
  { name: 'Alice Johnson', email: 'alice@example.com' },
  { name: 'Bob Smith', email: 'bob@example.com' },
  { name: 'Carol Nguyen', email: 'carol@example.com' },
  { name: 'David Lee', email: 'david@example.com' },
  { name: 'Eva Martinez', email: 'eva@example.com' },
  { name: 'Frank Wilson', email: 'frank@example.com' },
  { name: 'Grace Kim', email: 'grace@example.com' },
  { name: 'Henry Brown', email: 'henry@example.com' },
  { name: 'Isabella Rossi', email: 'isabella@example.com' },
  { name: 'Jacob Chen', email: 'jacob@example.com' },
];

function App() {
  const [view, setView] = useState('home'); // 'home' | 'books' | 'members'

  const books = useMemo(() => presetBooks, []);
  const members = useMemo(() => presetMembers, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 text-slate-800">
      {/* Decorative background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10">
        {view === 'home' && (
          <HomeHero onOpenBooks={() => setView('books')} onOpenMembers={() => setView('members')} />
        )}

        {view === 'books' && (
          <div className="mx-auto max-w-6xl px-4 pb-8">
            <BookCatalog initialBooks={books} onBack={() => setView('home')} />
          </div>
        )}

        {view === 'members' && (
          <div className="mx-auto max-w-6xl px-4 pb-8">
            <MemberProfiles initialMembers={members} onBack={() => setView('home')} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
