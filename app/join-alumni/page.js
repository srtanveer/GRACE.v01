import Link from 'next/link';
import { ArrowLeft, ArrowRight, Users } from 'lucide-react';

export default function JoinAlumniPage() {
  return (
    <main className="section-shell flex min-h-[calc(100vh-180px)] items-center justify-center py-16">
      <section className="w-full max-w-2xl rounded-[28px] border border-[rgba(17,33,61,0.08)] bg-white p-8 text-center shadow-[0_18px_50px_rgba(17,33,61,0.06)] md:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
          <Users size={30} />
        </div>
        <div className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">Coming soon</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-brand-blue md:text-5xl">Alumni User Management</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/70 !text-center">
          We are developing the alumni registration and user management experience. It will be available soon so you can join GRACE and manage your alumni profile.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-5 py-3 text-sm font-semibold text-brand-blue transition hover:border-brand-green hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 active:scale-[0.98]">
            <ArrowLeft size={16} /> Back home
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 active:scale-[0.98]">
            Contact GRACE <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
