import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Deals } from "@/components/sections/Deals";
import { MenuSection } from "@/components/sections/MenuSection";
import { Gallery } from "@/components/sections/Gallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Reviews } from "@/components/sections/Reviews";
import { Delivery } from "@/components/sections/Delivery";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileBar } from "@/components/sections/StickyMobileBar";

function App() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      <Navbar />
      <main>
        <Hero />
        <Deals />
        <MenuSection />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <Delivery />
        <Location />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}

export default App;
