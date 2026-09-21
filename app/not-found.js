import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-brand-green">404</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.07em] text-brand-blue">Page not found</h1>
        <p className="mt-4 text-lg text-foreground/70">
          The profile or page you are looking for may not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
