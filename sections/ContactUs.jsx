"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import SliderLayout from "@/components/SliderLayout";
import Slider from "@/components/Slider";
import Divider from "@/components/Divider";

import { ContactUsSlider } from "@/images/sliders";
import {
  phone,
  email,
  location,
  fax,
  whatsapp,
  tick_box,
} from "../images/icons";
import { placeholder, sara_zoghtalab, map } from "@/images/other";

const sliderContent = [
  {
    id: "1",
    img: ContactUsSlider,
    alt: "PASSION",
    title: "PASSION",
    description: "for providing solutions to industrial problems",
  },
];

const ContactUs = () => {
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

      <div className="md:y-10 my-10 mt-36 md:mt-8 page-layout">
        <h1 className="text-center text-[36px] md:text-[46px]">Contact Us</h1>
        <div className="flex justify-center">
          <Divider />
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-4 page-layout">
        <div>
          <h2 className="text-[36px] text-primary">aramico</h2>
          <Divider mt={"0"} />
          {/* Contact Information */}
          <div>
            <ul className="grid gap-2 mt-8">
              <li className="flex gap-2">
                <span className="flex">
                  <Image src={location} alt="location" className="w-4" />
                </span>
                <span>Unit 304, No.14, Salar St.,</span>
              </li>
              <li className="flex gap-2">
                <span>&nbsp; &nbsp; &nbsp; &nbsp;Mahmudiyeh, Tehran, Iran</span>
              </li>
              <li className="flex gap-2">
                <span className="flex">
                  <Image src={phone} alt="phone" className="w-4" />
                </span>
                <span>021-42167000</span>
              </li>
              <li className="flex gap-2">
                <span className="flex">
                  <Image src={whatsapp} alt="whatsapp" className="w-4" />
                </span>
                <span>+98-922-213-59-44</span>
              </li>
              <li className="flex gap-2">
                <span className="flex">
                  <Image src={fax} alt="fax" className="w-4" />
                </span>
                <span>021-42167001</span>
              </li>
              <li className="flex gap-2">
                <span className="flex">
                  <Image src={email} alt="email" className="w-4" />
                </span>
                <span>info@arami-co.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image src={map} alt="map" />
        </div>
      </div>

      <div className="bg-gray-200 grid grid-cols-1 gap-1 text-center py-8 my-10">
        <div className="flex justify-center">
          <Image src={tick_box} alt="quote" width={36} />
        </div>
        <div>
          <span className="text-[20px] md:text-[24px]">
            For quality, consistency, and our customers’ trust!
          </span>
        </div>
        <div className="flex justify-center">
          <Divider mb={0} width={150} />
        </div>
        <span className="text-[14px]">ARAMICO</span>
      </div>

      <div className="mx-6 md:mx-[25rem]">
        <h2 className="text-[36px] text-primary">Managers</h2>
        <Divider mt={"0"} />
      </div>
      <div class="grid md:grid-cols-2 gap-8 page-layout">
        <div className="flex gap-6">
          <div>
            <Image src={placeholder} alt="placeholder" className="w-72" />
          </div>
          <p className="mb-6">
            <b>Abdolhasan Mahnama</b> <br />
            CEO <br /> <br />
            021 42167000 <br />
            ah.mahnama@arami-co.com
          </p>
        </div>

        <div className="flex gap-6">
          <div>
            <Image src={sara_zoghtalab} alt="sara_zoghtalab" className="w-72" />
          </div>
          <p className="mb-6">
            <b>Sara Zoghtalab</b> <br />
            Head of Sales <br /> <br />
            021 42167000 <br />
            ah.mahnama@arami-co.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
