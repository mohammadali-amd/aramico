import Image from "next/image";

export default function Slider({img, title, alt, description}) {
  return (
    <div className="relative h-full w-full">
      <img
        src={img}
        alt={alt}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-end">
        <div className="w-1/3 ml-12 md:w-1/3 md:ml-20 lg:ml-32 bg-black p-10">
          <p className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
          {title}
          </p>
          <p className="mb-12 opacity-80 text-white">
          {description}
          </p>
        </div>
      </div>
    </div>
  );
}