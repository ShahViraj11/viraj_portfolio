'use client';
import { Projects } from '@/components/sections/projects';
// import Navbar from '@/components/navbar';
import { HeroSection } from '@/components/sections/hero';
import { CLI } from '@/components/command-line';
import { Contact } from '@/components/sections/contact';
import { Certifications } from '@/components/sections/certifications';
import { ReactLenis } from 'lenis/react';
import { Certification } from '@/components/certification';

export default function Home() {
  return (
    <ReactLenis root>
      <main className='bg-[--background]'>
        <CLI />
        <HeroSection />
        <Projects />
        <Certifications/>
        <Contact />
      </main>
    </ReactLenis>
  );
}
