export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-brand-green">About</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">About GRACE</h1>
      </header>

      <div className="space-y-6 text-lg text-foreground/75">
        <p>
          GRACE is the alumni association for CSE graduates of Green University of Bangladesh. It exists to keep the community connected, cultivate opportunity, and celebrate the achievements of graduates who continue to shape the future of technology and society.
        </p>
        <p>
          The association brings together alumni across different batches, sectors, and geographies. It creates space for mentorship, collaboration, professional growth, and meaningful community engagement.
        </p>
        <p>
          Through stories, events, leadership, and professional networks, GRACE helps graduates remain connected to their academic roots while building forward-looking opportunities for the next generation.
        </p>
      </div>
    </main>
  );
}
