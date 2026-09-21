import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Executive Committee', href: '/executive-committee' },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(17,33,61,0.12)] bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-14 w-28 overflow-hidden rounded-md">
            <Image src="/images/grace-logo.png" alt="GRACE logo" fill className="object-contain" priority />
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/80 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-brand-green">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-brand-blue/20 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Light
          </button>
          <button className="rounded-full bg-brand-blue px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-brand-blue-deep">
            Join Alumni
          </button>
        </div>
      </div>
    </header>
  );
}
