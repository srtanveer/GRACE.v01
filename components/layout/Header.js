'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Executive Committee', href: '/executive-committee' },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  // { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(17,33,61,0.12)] bg-background/75 backdrop-blur-xl">
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
          <Link href="/join-alumni" className="hidden rounded-full bg-brand-blue px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-brand-blue-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 active:scale-95 sm:block">
            Join Alumni
          </Link>
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/20 bg-white text-brand-blue transition hover:border-brand-green hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 active:scale-95 lg:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[rgba(17,33,61,0.1)] bg-background px-6 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition hover:bg-brand-green/10 hover:text-brand-green"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/join-alumni" onClick={() => setIsMenuOpen(false)} className="mt-3 rounded-xl bg-brand-blue px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-brand-blue-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 active:scale-[0.98]">
              Join Alumni
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
