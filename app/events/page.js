import Link from 'next/link';
import Image from 'next/image';
import { sortedEvents } from './data';

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Events</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">Community events</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sortedEvents.map((event) => (
          <Link key={event.slug} href={`/events/${event.slug}`} className="group overflow-hidden rounded-[26px] border border-[rgba(17,33,61,0.08)] bg-white shadow-[0_12px_32px_rgba(17,33,61,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,33,61,0.08)]">
            <div className="relative h-64 overflow-hidden">
              <Image src={event.coverImage} alt={event.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green">{event.type}</div>
              <h2 className="text-2xl font-black tracking-[-0.05em] text-brand-blue">{event.title}</h2>
              <div className="mt-3 text-sm text-foreground/70">{event.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
