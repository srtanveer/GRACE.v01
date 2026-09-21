import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(17,33,61,0.08)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.9fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-20 overflow-hidden rounded-md">
              <Image src="/images/grace-logo.png" alt="GRACE logo" fill className="object-contain" />
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-foreground/70">
            A community of CSE alumni building meaningful connections, career momentum, and lasting impact.
          </p>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/70">
            <li><Link href="/alumni">Alumni</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">About</div>
          <ul className="mt-4 space-y-2 text-sm text-foreground/70">
            <li><Link href="/about">About GRACE</Link></li>
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green">Connect</div>
          <div className="mt-4 space-y-2 text-sm text-foreground/70">
            <p>grace@green.edu.bd</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
