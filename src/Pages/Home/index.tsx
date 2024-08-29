import { MenuSection, ShowcaseBanner } from "../../components";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <ShowcaseBanner />
      <MenuSection />
    </div>
  );
};

export default Home;
