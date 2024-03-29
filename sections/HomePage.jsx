"use client";

import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import SliderLayout from "@/components/SliderLayout";
import CarouselLayout from "@/components/CarouselLayout";
import Slider from "@/components/Slider";
import ProductLayout from "@/components/ProductLayout/ProductLayout";
import ProductBox from "@/components/ProductLayout/ProductBox";
import Divider from "@/components/Divider";

import { Slider_1, Slider_2, Slider_3, Slider_4 } from "../images/sliders";
import { pic_1, pic_2, pic_3 } from "../images/homePage";
import { tick_box } from "../images/icons";
import { Magnesium_Ignot } from "../images/products";
import Quote from "@/components/Quote";

const sliderContent = [
  {
    id: "1",
    img: Slider_1,
    alt: "PASSION",
    title: "PASSION",
    description: "for providing solutions to industrial problems",
  },

  {
    id: "2",
    img: Slider_2,
    alt: "KNOWLEDGE",
    title: "KNOWLEDGE",
    description: "creation through years of research and experiments",
  },

  {
    id: "3",
    img: Slider_3,
    alt: "TECHNOLOGY",
    title: "TECHNOLOGY",
    description:
      "advancement by combining youthful energy and years of experience",
    position: "right",
  },

  {
    id: "4",
    img: Slider_4,
    alt: "SUSTAINABILITY",
    title: "SUSTAINABILITY",
    description: "Today progress without harming tomorrow",
  },
];

const HomePage = () => {
  return (
    <div>
      <div className="hidden md:block">
        <SliderLayout>
          {sliderContent.map((slider) => (
            <SwiperSlide key={slider.id}>
              <Slider
                img={slider.img}
                title={slider.title}
                alt={slider.alt}
                description={slider.description}
                position={slider.position}
              />
            </SwiperSlide>
          ))}
        </SliderLayout>
      </div>

      <section className="mt-[9rem] md:mt-0 page-layout">
        <h1 className="text-2xl md:text-4xl mt-8">
          Industrial & Engineering Projects Implementation
        </h1>
        <Divider className="my-3" />
        <h2>A perfect harmony of research, design and execution</h2>
        <div className="flex justify-between mt-6">
          <CarouselLayout>
            <SwiperSlide>
              <Image src={pic_1} alt="pic_1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={pic_2} alt="pic_2" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={pic_3} alt="pic_3" />
            </SwiperSlide>
          </CarouselLayout>
        </div>

        <p className="py-10 text-base text-text">
          <b>ARAMICO</b> is a trustworthy brand for providing industrial
          solutions and services. Our process is based on finding opportunities,
          research and development, implementing projects at the laboratory and
          pilot level and implementing projects with suitable economic
          parameters on an industrial scale. We are ready to cooperate with our
          customers to launch industrial projects in various fields.
        </p>

        <ul className="space-y-3 text-text">
          <li className="inline-grid grid-flow-col gap-5">
            <span className="mt-[2px]">
              <Image src={tick_box} alt="check box" width={17} />
            </span>
            <span>
              <b>Mining industries:</b> Enrichment and concentration of
              minerals, Crushing and granulation lines, Calcination and roasting
              of minerals, etc.
            </span>
          </li>
          <li className="inline-grid grid-flow-col gap-5">
            <span className="mt-[2px]">
              <Image src={tick_box} alt="check box" width={17} />
            </span>
            <span>
              <b>Metallurgical industries:</b> Production of magnesium ingots
              from dolomite ore, Production of cathode copper, Production of
              calcined alumina (Alpha), Production of fused alumina and mullite,
              Production of sponge iron using tunnel furnace, Centrifugal
              casting, etc.
            </span>
          </li>
          <li className="inline-grid grid-flow-col gap-5">
            <span className="mt-[2px]">
              <Image src={tick_box} alt="check box" width={17} />
            </span>
            <span>
              <b>Renewable energies:</b> Wind, water and solar energy.
            </span>
          </li>
        </ul>
      </section>

      <Quote text="For quality, consistency, and our customers’ trust!" />

      <section className="page-layout">
        <h2 className="text-3xl text-primary">PROJECTS</h2>
        <Divider />
        <ProductLayout>
          <ProductBox
            image={Magnesium_Ignot}
            title="Magnesium Ingot Production"
            description="In recent years, due to the special properties of magnesium, the most important of which are low density, higher weight-to-strength ratio than aluminum, the ability to form intermetallic compounds, and high thermal activity …"
          />
        </ProductLayout>
      </section>
    </div>
  );
};

export default HomePage;
