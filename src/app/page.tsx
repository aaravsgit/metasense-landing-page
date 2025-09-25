import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FeatureBlocks } from "@/components/site/FeatureBlocks";
import { Testimonial } from "@/components/site/Testimonial";
import { FAQ } from "@/components/site/FAQ";
import { BottomCTA } from "@/components/site/BottomCTA";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="pt-20">
        <Hero />
      </section>

      <section className="py-24">
        <HowItWorks />
      </section>

      <section className="py-24">
        <FeatureBlocks />
      </section>

      <section className="py-28">
        <Testimonial />
      </section>

      <section className="py-28">
        <FAQ />
      </section>

      <section className="py-28">
        <BottomCTA />
      </section>

      <Footer />
    </main>
  );
}
