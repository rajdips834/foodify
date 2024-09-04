import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import {
  Mojito,
  cPakora,
  Fish,
  Icecream,
  Strawberry,
  Blueberries,
  Rice,
  Rice1,
} from "../../components/Assets";
import { FoodItem } from "../../../types";
import { useStateValue } from "../../context/StateProvider";
import { SingleFoodItem } from "../../components/FoodItem";
import { Title } from "../../components/Sections";
const Caraousel = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const isSmallScreen = window.innerWidth < 640; // Check if the screen is smaller than 640px

  return (
    <div className="pt-[40px] w-full overflow-hidden">
      <div className="flex items-center justify-center w-full pb-[40px]">
        <Title title={"Trending Dishes"} center />
      </div>
      <div className="">
        <Carousel
          centerSlidePercentage={isSmallScreen ? 70 : 30}
          centerMode={true}
          autoPlay // Enables automatic sliding
          infiniteLoop // Allows the slider to loop infinitely
          showThumbs={false} // Hides the thumbnail navigation
          showStatus={false} // Hides the status indicator
          interval={3000} // Sets the interval between slides (in milliseconds)
        >
          {foodItems &&
            foodItems.map((item: FoodItem) => (
              <SingleFoodItem
                key={item.id}
                item={item}
                col={false}
                admin={false}
              />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Caraousel;
