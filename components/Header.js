'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    ['/', 'Home'],
    ['/amenities', 'Amenities'],
    ['/gallery', 'Gallery'],
    ['/area', 'Area'],
    ['/lifestyle', 'Lifestyle'],
    ['/contact', 'Contact'],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-lime-900/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={64} height={64} className="rounded-full" />
        </Link>

        <nav className="hidden md:flex gap-8 uppercase tracking-[0.2em] text-sm">
          {navItems.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-lime-300 transition">
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/inquire" className="hidden md:block px-5 py-3 border border-lime-700 hover:bg-lime-900/40">
          Inquire Now
        </Link>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 py-4 bg-slate-950 space-y-4">
          {navItems.map(([href, label]) => (
            <Link key={href} href={href} className="block" onClick={() => setMobileOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
