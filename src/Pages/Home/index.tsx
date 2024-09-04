import { MenuSection, ShowcaseBanner } from "../../components";
import CartHeader from "../../components/Cart/Header";
import Caraousel from "../../components/Carousel";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <ShowcaseBanner />

      <Caraousel />
      <MenuSection />
    </div>
  );
};

export default Home;
