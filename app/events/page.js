const events = [
  {
    slug: 'grace-alumni-meetup-2027',
    title: 'GRACE Alumni Meetup 2027',
    date: '12 February 2027',
    venue: 'Green University Auditorium',
    type: 'Networking',
    description: 'A community meetup designed to reconnect alumni, students, and professionals in a collaborative environment.',
  },
  {
    slug: 'career-bootcamp-industry-readiness',
    title: 'Career Bootcamp: Industry Readiness',
    date: '08 March 2027',
    venue: 'Innovation Hub',
    type: 'Career',
    description: 'Practical guidance on career preparation, interviews, and transition from campus to industry.',
  },
];

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Events</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">Community events</h1>
      </header>

      <div className="space-y-5">
        {events.map((event) => (
          <article key={event.slug} className="rounded-[26px] border border-[rgba(17,33,61,0.08)] bg-white p-6">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-brand-green">{event.type}</div>
            <h2 className="text-2xl font-black tracking-[-0.05em] text-brand-blue">{event.title}</h2>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-foreground/70">
              <span>{event.date}</span>
              <span>•</span>
              <span>{event.venue}</span>
            </div>
            <p className="mt-4 max-w-3xl text-foreground/75">{event.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
