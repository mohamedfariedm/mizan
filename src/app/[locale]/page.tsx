import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <section className="container-main">
        <Navbar />
      </section>
      <section id="home" className="container-main">
        <Hero />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <section id="features" className="container-main">
        <Features />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}
