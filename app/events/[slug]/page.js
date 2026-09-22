import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { events } from '../data';

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
      <div className="mb-6">
        <Link href="/events" className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
          ← Back to events
        </Link>
      </div>

      <article className="overflow-hidden rounded-[30px] border border-[rgba(17,33,61,0.08)] bg-white shadow-[0_18px_40px_rgba(17,33,61,0.05)]">
        <div className="relative h-[26rem] w-full overflow-hidden">
          <Image src={event.coverImage} alt={event.title} fill className="object-cover" />
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green">{event.type}</div>
          <h1 className="text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">{event.title}</h1>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-foreground/70">
            <span>{event.date}</span>
            {event.time && <><span>•</span><span>{event.time}</span></>}
            {event.day && <><span>•</span><span>{event.day}</span></>}
            <span>•</span>
            <span>{event.venue}</span>
          </div>

          <div className="mt-6 rounded-[18px] border border-[rgba(17,33,61,0.08)] bg-[#f7f8f5] p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green">Organizer</div>
            <div className="mt-2 text-base font-medium text-foreground/80">{event.organizer}</div>
          </div>

          <p className="mt-6 text-lg text-foreground/75">{event.description}</p>

          <div className="mt-8">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green">Highlights</div>
            <ul className="mt-4 space-y-3 text-base text-foreground/75">
              {event.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {event.gallery.length > 1 && (
            <div className="mt-10">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-green">Gallery</div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {event.gallery.map((photo) => (
                  <div key={photo} className="relative h-72 overflow-hidden rounded-[20px] border border-[rgba(17,33,61,0.08)] bg-[#f4f5f2]">
                    <Image src={photo} alt={`${event.title} gallery`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
