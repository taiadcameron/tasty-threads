import React from "react";
import pic1 from "../Images/Icons/03.png";
import pic2 from "../Images/Icons/06 1.png";
import pic3 from "../Images/Icons/07 1.png";
import pic4 from "../Images/Icons/07.png";
import pic5 from "../Images/Icons/08 1.png";

function CookingIcons() {
  return (
    <div className=" select-none grid grid-cols-3 grid-rows- gap-8 max-h-full">
      <div className="w-80">
        <img src={pic5} alt="" />
      </div>
      <div></div>
      <div className="w-60">
        <img src={pic3} alt="" />
      </div>
      <div></div>
      <div className="w-72">
        <img src={pic1} alt="" />
      </div>
      <div></div>
    </div>
  );
}

export default CookingIcons;
