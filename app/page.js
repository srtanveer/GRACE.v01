import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CalendarDays, MapPin, Sparkles, Users, BriefcaseBusiness, GraduationCap } from 'lucide-react';

const alumniHighlights = [
  {
    name: 'Nusrat Jahan',
    role: 'Senior Product Engineer',
    org: 'Pathao',
    studentId: '22190200123',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mahmud Hasan',
    role: 'Lead Software Developer',
    org: 'Brain Station 23',
    studentId: '20190203456',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Rabeya Sultana',
    role: 'Data Scientist',
    org: 'Airtel Digital',
    studentId: '20180201987',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mohammad Tareq Hosain',
    role: 'Senior Data Engineer',
    org: 'NEXT Ventures',
    studentId: '151002017',
    image: '/images/alumni/151002017.jpg',
  },
];

const stats = [
  { label: 'Active alumni', value: '2500+' },
  { label: 'Batches represented', value: '12+' },
  { label: 'Events hosted', value: '40+' },
  { label: 'Career sectors', value: '18' },
];

const upcomingEvents = [
  {
    title: 'GRACE Alumni Meetup 2027',
    date: '12 February 2027',
    venue: 'Green University Auditorium',
    type: 'Networking',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Career Bootcamp: Industry Readiness',
    date: '08 March 2027',
    venue: 'Innovation Hub',
    type: 'Career',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Research & Innovation Forum',
    date: '27 April 2027',
    venue: 'Main Campus',
    type: 'Academic',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  },
];

const stories = [
  {
    title: 'From GUB CSE to Product Engineering',
    category: 'Alumni Stories',
    excerpt: 'One graduate’s journey from campus projects to leading product work in a fast-growing tech company.',
  },
  {
    title: 'How GRACE Helped Me Build My Network',
    category: 'Community',
    excerpt: 'A reflection on mentorship, collaboration, and how alumni relationships shaped early career momentum.',
  },
  {
    title: 'Career Lessons After Graduation',
    category: 'Career',
    excerpt: 'Practical advice for transitioning from university life into the software industry with confidence.',
  },
];

const leadership = [
  { name: 'Md. Showaib Rahman Tanveer', role: 'Assistant General Secretary', committee: '2026–2028' },
  { name: 'Ayesha Rahman', role: 'Executive Member', committee: '2026–2028' },
  { name: 'Rafid Hossain', role: 'Executive Member', committee: '2026–2028' },
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">
              <Sparkles size={14} /> Alumni network
            </div>
            <h1 className="max-w-xl text-5xl text-brand-blue sm:text-6xl lg:text-[5.4rem]">
              Unite.<br />Ignite.<br />Accelerate.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/75">
              GRACE brings together Green University CSE alumni to celebrate achievement, strengthen community, and create opportunity through shared experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/alumni" className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-deep">
                Explore alumni <ArrowRight size={16} />
              </Link>
              <Link href="/events" className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:border-brand-green/50 hover:text-brand-green">
                Upcoming events
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[36px] bg-gradient-to-br from-brand-green/10 via-transparent to-brand-blue/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-[rgba(17,33,61,0.12)] bg-white p-5 shadow-[0_30px_70px_rgba(17,33,61,0.08)]">
              <div className="rounded-[22px] border border-[rgba(17,33,61,0.08)] bg-[linear-gradient(135deg,#f4f9f8,#eef1f7)] p-4">
                <div className="mb-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue/70">
                  <span>Featured alumni</span>
                  <span>2027</span>
                </div>
                <div className="relative h-[27rem] overflow-hidden rounded-[18px] bg-brand-blue">
                  <Image
                    src="/images/alumni/151002017.jpg"
                    alt="Featured alumni portrait"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d236d]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">Senior Data Engineer</div>
                    <h2 className="mt-2 text-3xl text-white">Mohammad Tareq Hosain</h2>
                    <div className="mt-1 text-sm text-white/80">NEXT Ventures</div>
                    <Link href="/alumni/151002017" className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-white underline decoration-white/50 underline-offset-4">
                      View full profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(17,33,61,0.08)] bg-[#f1f4ef]">
        <div className="section-shell grid gap-5 py-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[20px] border border-[rgba(17,33,61,0.08)] bg-white px-5 py-6">
              <div className="text-3xl font-black tracking-[-0.06em] text-brand-blue">{stat.value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-foreground/65">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Community</div>
            <h2 className="mt-3 text-4xl text-brand-blue md:text-5xl">Featured alumni</h2>
          </div>
          <Link href="/alumni" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
            View directory <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {alumniHighlights.map((alumnus) => (
            <article key={alumnus.studentId} className="premium-card overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(17,33,61,0.08)]">
              <div className="relative h-80">
                <Image src={alumnus.image} alt={alumnus.name} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-green">
                  <Users size={14} /> {alumnus.studentId}
                </div>
                <h3 className="text-3xl text-brand-blue">{alumnus.name}</h3>
                <div className="mt-2 text-sm font-medium text-brand-green">{alumnus.role}</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-foreground/75">
                  <BriefcaseBusiness size={14} /> {alumnus.org}
                </div>
                <Link href={`/alumni/${alumnus.studentId}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
                  View profile <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0d236d] text-white">
        <div className="section-shell grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow !text-brand-gold">Programs</div>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">A network built for growth.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: GraduationCap, title: 'Mentorship', text: 'Connect students and graduates through career guidance and shared experience.' },
              { icon: CalendarDays, title: 'Events', text: 'Bring together alumni, students, and professionals around meaningful opportunities.' },
              { icon: MapPin, title: 'Community', text: 'Build lasting relationships across batches, sectors, and geographies.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 p-2">
                  <Icon size={18} />
                </div>
                <h3 className="text-2xl text-white">{title}</h3>
                <p className="mt-3 text-sm text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Upcoming</div>
            <h2 className="mt-3 text-4xl text-brand-blue md:text-5xl">Events & gatherings</h2>
          </div>
          <Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
            All events <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-5">
          {upcomingEvents.map((event) => (
            <div key={event.title} className="premium-card flex flex-col justify-between gap-5 p-5 md:flex-row md:items-center md:p-6">
              <div className="relative h-28 w-full overflow-hidden rounded-[18px] md:w-52">
                <Image src={event.image} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-brand-green">{event.type}</div>
                <h3 className="text-3xl text-brand-blue">{event.title}</h3>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-foreground/70 md:justify-end">
                <span>{event.date}</span>
                <span>•</span>
                <span>{event.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10">
          <div className="eyebrow">Stories</div>
          <h2 className="mt-3 text-4xl text-brand-blue md:text-5xl">Career journeys & community stories</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="premium-card p-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-green">{story.category}</div>
              <h3 className="mt-4 text-3xl text-brand-blue">{story.title}</h3>
              <p className="mt-4 text-foreground/75">{story.excerpt}</p>
              <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
                Read story <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f2efe8]">
        <div className="section-shell py-20">
          <div className="mb-10">
            <div className="eyebrow">Leadership</div>
            <h2 className="mt-3 text-4xl text-brand-blue md:text-5xl">Executive committee</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="premium-card p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-lg font-black text-brand-green">
                  {person.name.split(' ').map((part) => part[0]).slice(0,2).join('')}
                </div>
                <h3 className="text-2xl text-brand-blue">{person.name}</h3>
                <div className="mt-2 text-sm font-medium text-brand-green">{person.role}</div>
                <div className="mt-4 text-sm text-foreground/70">{person.committee}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="rounded-[28px] border border-[rgba(17,33,61,0.08)] bg-brand-blue p-8 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="eyebrow !text-brand-gold">Join the network</div>
              <h2 className="mt-3 max-w-xl text-4xl text-white md:text-5xl">Reconnect, contribute, and keep the GRACE community moving forward.</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
              Contact GRACE <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
