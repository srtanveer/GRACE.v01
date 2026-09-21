const posts = [
  {
    slug: 'from-gub-cse-to-product-engineering',
    title: 'From GUB CSE to Product Engineering',
    category: 'Alumni Stories',
    excerpt: 'A graduate reflects on how hands-on learning, mentorship, and persistence led to a meaningful product career.',
  },
  {
    slug: 'how-grace-helped-me-build-my-network',
    title: 'How GRACE Helped Me Build My Network',
    category: 'Community',
    excerpt: 'A personal account of why community is a major advantage in early career growth and long-term professional development.',
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 lg:px-10">
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-brand-green">Blog</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">Stories, career insights & GRACE updates</h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-[26px] border border-[rgba(17,33,61,0.08)] bg-white p-6">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-green">{post.category}</div>
            <h2 className="mt-4 text-2xl font-black tracking-[-0.05em] text-brand-blue">{post.title}</h2>
            <p className="mt-4 text-foreground/75">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
