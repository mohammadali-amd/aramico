"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";

import SliderLayout from "@/components/SliderLayout";
import Slider from "@/components/Slider";
import Divider from "@/components/Divider";
import {
  AboutUsSlider_1,
  AboutUsSlider_2,
  AboutUsSlider_3,
} from "@/images/sliders";
import { tick_box } from "@/images/icons";
import {
  aramico_group_logos,
  vision,
  we_deliver,
  aramico_history,
} from "@/images/other";

const sliderContent = [
  {
    id: "1",
    img: AboutUsSlider_1,
    alt: "INNOVATION",
    title: "INNOVATION",
    description: "To give more value to metallurgical and mining industry",
  },
  {
    id: "@",
    img: AboutUsSlider_2,
    alt: "QUALITY",
    title: "QUALITY",
    description: "We owe it to each of our customers",
    position: "right",
  },
  {
    id: "3",
    img: AboutUsSlider_3,
    alt: "SOLIDARITY",
    title: "SOLIDARITY",
    description: "This is the cement which unites our teams",
    position: "right",
  },
];

const AboutUs = () => {
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

      <div className="my-10 mt-36 md:mt-8 page-layout">
        <h1 className="text-[36px]">About Us</h1>
        <Divider mt={0} />

        <p>
          Amayesh Rah Mihan Co. (ARAMICO) was founded in 2009 based on several
          years of experience from the founders from their many industrial
          projects in the fields of mining, metallurgy, and energy industries.
          The procedure of this company is based on opportunity identification,
          research and development, implementation of projects at the laboratory
          and pilot level, completing the technical knowledge, and
          implementation of projects with appropriate economic parameters on an
          industrial scale.
          <br /> <br />
          On this basis, aramico company succeeded in building the first
          magnesium ingot production unit in Iran, the first calcined alumina
          production plant in Iran (ALPHA), the first production unit of fused
          ceramic products (fused alumina and fused mullite), and a cathode
          copper production unit and possesses developed know-how of many
          processes in the field of mining and metallurgy.
          <br /> <br />
          By creating an active and dynamic environment and the proper
          organization of young experts who are often graduates of the country’s
          top universities, and combining it with experienced managers and
          founders in the industrial field, this company is able to implement
          large industrial projects in various fields.
        </p>
      </div>

      <div className="bg-gray-200 grid grid-cols-1 gap-1 text-center py-8 my-10">
        <div className="flex justify-center">
          <Image src={tick_box} alt="quote" width={36} />
        </div>
        <div>
          <span className="text-[20px] md:text-[24px]">
            We love what we do and we want to do it for a long time. Research,
            innovation, sustainability and intelligent technology are our
            driving forces.
          </span>
        </div>
        <div className="flex justify-center">
          <Divider mb={0} width={150} />
        </div>
        <span className="text-[14px]">ARAMICO</span>
      </div>

      <div class="grid md:grid-cols-2 gap-8 page-layout">
        <div>
          <h2 className="text-[27px] text-primary">We deliver</h2>
          <Divider mt={"0"} />
          <p>
            <b>the quality</b> you need … <br />
            <b>the solution</b> you want … <br />
            <b>the support</b> you deserve! <br />
            <br /> <br />
            We are the partner who will accompany you!
          </p>
        </div>
        <div>
          <Image src={we_deliver} alt="we deliver" />
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Divider width={300} />
      </div>

      <div class="grid md:grid-cols-2 gap-8 page-layout">
        <div>
          <Image src={aramico_group_logos} alt="we deliver" />
        </div>
        <div>
          <h2 className="text-[27px] text-primary">We are the ARAMICO group</h2>
          <Divider mt={"0"} />
          <p>
            ARAMICO group is a group of companies with over 200 employees in the
            country at several plants in Tehran, Khorasan, Qazvin, Kerman, and
            Mazandaran striving to provide the best possible support and advice
            for our customers worldwide.
            <br /> <br />
            How do we implement our visions? Knowledge and many years of
            experience in plant and mechanical engineering, joy and courage in
            innovating, trust and the freedom to allow creativity. And of
            course, close relationships with our customers in order to keep up
            to date with new challenges. This is the only way our
            ground-breaking solutions can mature for our customers and our
            environment.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Divider width={300} />
      </div>

      <div class="grid md:grid-cols-2 gap-8 page-layout">
        <div>
          <div className="flex justify-center">
            <Image src={vision} alt="we deliver" className="pb-2" />
          </div>
          <h2 className="text-[27px] text-center">Vision</h2>
          <div className="flex justify-center">
            <Divider mt={"0"} mb={"20"} width={50} />
          </div>
          <p className="text-center">
            Our vision is to be recognized as the top company in the country and
            a reliable international company for implementing industrial
            projects in the field of metallurgy, mining and energy.
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <Image src={vision} alt="we deliver" className="pb-2" />
          </div>
          <h2 className="text-[27px] text-center">Mission</h2>
          <div className="flex justify-center">
            <Divider mt={"0"} mb={"20"} width={50} />
          </div>
          <p className="text-center">
            Our mission is to identify opportunities, develop technical
            knowledge, and design and implement industrial projects in the field
            of metallurgy, minerals, and energy.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Divider width={300} />
      </div>

      <div class="grid md:grid-cols-2 gap-8 page-layout">
        <div>
          <h2 className="text-[27px] text-primary">aramico - history</h2>
          <Divider mt={"0"} />
          <p>
            We initiated research and development studies on magnesium
            production more than a decade ago in 2008. Since that time we took
            every step necessary (lab scale and pilot scale production) for
            achieving the technology of an industrial magnesium production line.
            In 2014 we built the first magnesium production plant in the country
            as an EPC contractor.
            <br /> <br />
            Since then aramico never stopped and has completed many industrial
            projects in various fields of mining and metallurgy throughout the
            country. The first alpha alumina production plant in Iran (ALPHA),
            the first electrofused production unit of the country (ALTUS), a
            copper cathode production plant (ITAD), and a magnesium ingot
            production plant (KHORASAN MG) are just some of the projects of this
            company.
          </p>
        </div>
        <div>
          <Image src={aramico_history} alt="we deliver" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
