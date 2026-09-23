'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Executive Committee', href: '/executive-committee' },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pb-4 pt-5 md:px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center justify-between rounded-[30px] border border-white/40 bg-white/20 px-3 py-2.5 shadow-[0_12px_28px_rgba(17,33,61,0.05)] backdrop-blur-xl">
          <Link href="/" className="flex shrink-0 items-center gap-3 pl-1" aria-label="GRACE home">
            <div className="relative h-11 w-20 overflow-hidden rounded-xl">
              <Image src="/images/grace-logo.png" alt="GRACE logo" fill className="object-contain" priority />
            </div>
          </Link>

          <nav className="hidden items-center justify-center gap-1 rounded-full px-2 py-1.5 text-[15px] font-semibold text-[#0f1f2d] lg:flex">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-2.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-[#f9fbfa]/80 text-[#0d1b2a] shadow-[0_8px_18px_rgba(17,33,61,0.08)]'
                      : 'text-[#16293d] hover:bg-white/25 hover:text-[#0d1b2a]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/join-alumni"
              className="hidden rounded-full bg-brand-blue px-5 py-2.5 text-sm font-extrabold tracking-[-0.02em] text-white shadow-[0_10px_18px_rgba(18,45,143,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-deep hover:shadow-[0_14px_24px_rgba(18,45,143,0.3)] active:translate-y-0 sm:inline-flex"
            >
              Join Alumni
            </Link>

            <button
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/15 text-[#11213d] shadow-sm transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 active:scale-95 lg:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-3 rounded-[24px] border border-white/40 bg-white/15 p-3 shadow-[0_12px_28px_rgba(17,33,61,0.05)] backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive ? 'bg-[#f9fbfa]/80 text-[#0d1b2a]' : 'text-[#16293d] hover:bg-white/25 hover:text-[#0d1b2a]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/join-alumni"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-xl bg-brand-blue px-4 py-3 text-left text-sm font-extrabold text-white shadow-[0_10px_18px_rgba(18,45,143,0.25)]"
              >
                Join Alumni
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
