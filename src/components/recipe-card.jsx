import logo from "../Images/logott.svg";
import Button from "./button";
import React, { useState } from "react";

const RecipeCard = () => {
  const [isToggled, setIsToggled] = useState(false);
  const textOptions = {
    default: "View Full Recipe",
    toggled: "Close Full Recipe",
  };

  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="flex w-full bg-white rounded-3xl shadow-card-shadow ">
      <div className="w-2/3  p-8 flex flex-col gap-4">
        <h3 className="text-3xl font-medium">Creamy Garlic Parmesan Pasta</h3>
        <p>Total Time: 25 mins</p>
        <div className="flex gap-4">
          <img src={logo} alt="" className="h-14 rounded-xl" />
          <div className="flex flex-col gap-1">
            <p className="font-medium">Levi Roots</p>
            <p className="text-sm">5h Ago</p>
          </div>
        </div>
        <p className=" text-lg w-3/4">
          A quick and comforting pasta dish that's rich, creamy, and full of
          garlic and Parmesan flavor. Perfect for a weeknight dinner!
        </p>
        <Button
          text={{
            current: isToggled ? textOptions.toggled : textOptions.default,
          }}
          onClick={handleClick}
        />
      </div>
      <div className="w-1/3 flex justify-end p-8 ">
        <img className="h-52 rounded-3xl" src={logo} alt="" />
      </div>
    </div>
  );
};

export default RecipeCard;
