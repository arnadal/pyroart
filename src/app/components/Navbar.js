"use client";

import { useRouter } from 'next/navigation';
import { useTheme } from '../contexts/Theme';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{ zIndex: 1000 }}>
      <div id="brand">
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            loading="eager"
            src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
            fill
            alt="Logo"
            style={{ objectFit: "contain" }}
            onClick={() => router.push("/")}
          />
        </div>
      </div>
      <div id="links">
        <Link href="/">Overview</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </div>
      <div id="icons" style={{ height: 24 }}>
        <div onClick={toggleTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shadow"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M13 12h5" /><path d="M13 15h4" /><path d="M13 18h1" /><path d="M13 9h4" /><path d="M13 6h1" /></svg>
        </div>
      </div>
    </nav>
  );
}
