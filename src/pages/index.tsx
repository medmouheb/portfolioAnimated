import { Cursor } from "@/components/_shared";
import { Navbar } from "@/components/layout";
import {
  Hero,
  Parallax,
  Services,
  Portfolio,
  Contact,
} from "@/components/home";

import dynamic from 'next/dynamic';
const MyComponent1 = dynamic(() => import('../components/layout/Navbar').then((mod)=>mod.Navbar), {
  ssr: false
});
const MyComponent2 = dynamic(() => import('../components/home/Parallax').then((mod)=>mod.Parallax), {
  ssr: false
});
const MyComponent3 = dynamic(() => import('../components/home/Hero').then((mod)=>mod.Hero), {
  ssr: false
});
const MyComponent4 = dynamic(() => import('../components/home/Services').then((mod)=>mod.Services), {
  ssr: false
});
const MyComponent5 = dynamic(() => import('../components/home/portfolio/Portfolio').then((mod)=>mod.Portfolio), {
  ssr: false
});
const MyComponent6 = dynamic(() => import('../components/home/Contact').then((mod)=>mod.Contact), {
  ssr: false
});

const HomePage = () => {
  return (
    <main className="text-gray-600">
      <Cursor />
      <section
        id="home"
        className="w-full h-screen overflow-hidden snap-center bg-hero-gradient"
      >
        <MyComponent1 />
        <MyComponent3 />
      </section>
      <section className="w-full h-screen overflow-hidden snap-center">
        <MyComponent2 type="services" />
      </section>
      <section
        id="services"
        className="w-full h-screen overflow-hidden snap-center bg-hero-gradient"
      >
        <MyComponent4 />
      </section>
      <section className="w-full h-screen overflow-hidden snap-center">
        <MyComponent2 type="portfolio" />
      </section>
      <section id="portfolio" className="bg-hero-gradient">
        <MyComponent5 />
      </section>
      <section
        id="contact"
        className="w-full h-screen overflow-hidden snap-center bg-hero-gradient"
      >
        <MyComponent6 />
      </section>
    </main>
  );
};

export default HomePage;
