import Image from "next/image";

export default function Slider({ img, title, alt, description, position }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={img}
        alt={alt}
        className="h-screen w-full object-cover"
        loading="lazy"
      />
      <div className="inset-0 grid h-full w-full items-end">
        <div
          className={`slider-content-bg absolute bottom-0 ${
            position ? "right-36" : "left-36"
          } w-1/3 h-2/5 md:w-1/3 bg-primary/90 p-10`}>
          <div className="slider-title">
            <p className="mb-4 text-[45px] text-white font-semibold">{title}</p>
          </div>
          <div className="slider-description">
            <p className="mb-12 text-[25px] text-white animate-description">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
