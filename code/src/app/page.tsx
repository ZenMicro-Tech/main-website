import Footer from "@/components/Footer";
import Contact from "../components/Contact";
import HeroHome from "../components/HeroHome";
import Services from "../components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZenMicro - Home",
  description: "Boost your savings with ZenMicro’s cloud resource optimization",
};

export default function Home() {
  return (
    <div className="relative">
      {/* <Header /> */}
      <HeroHome />
      <Services />
      <Contact />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
