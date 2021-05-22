import { Header } from "../components/common/Header";
import { Hero } from "../components/HomePage/Hero";
import { TravelSuggestions } from "../components/HomePage/TravelSuggestions";
import { SliderSection } from "../components/HomePage/SliderSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TravelSuggestions />
      <SliderSection />
    </>
  );
}
