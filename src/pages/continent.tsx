import { Header } from "../components/common/Header";
import { Banner } from "../components/ContinentPage/Banner";
import { CitiesSection } from "../components/ContinentPage/CitiesSection";
import { ContinentDescription } from "../components/ContinentPage/ContinentDescription";

export default function Continent() {
  return (
    <>
      <Header />
      <Banner />
      <ContinentDescription />
      <CitiesSection />
    </>
  );
}
