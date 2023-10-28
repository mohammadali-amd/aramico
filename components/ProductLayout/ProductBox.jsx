import React from "react";
import Image from "next/image";

const productBox = ({ image, title, description }) => {
  return (
    <div className="flex">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Image
            src={image}
            alt="Magnesium_Ignot"
            className="border-[6px] border-white shadow-xl shadow-black/30"
          />
        </div>
        <div>
          <h3 className="text-2xl text-secondary md:text-3xl">
            <b>{title}</b>
          </h3>
          <hr className="w-20 h-[2px] bg-primary border-0 my-2" />
          <p className="text-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default productBox;
