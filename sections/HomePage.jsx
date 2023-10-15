"use client"

import { SwiperSlide } from 'swiper/react';
import SliderLayout from '@/components/SliderLayout';
import Slider from '@/components/Slider';
import { Slider_1, Slider_2, Slider_3, Slider_4 } from '../images/sliders';

const sliderContent = [
    {
      id: '1',
      img: Slider_1,
      alt: 'PASSION',
      title: 'PASSION',
      description: 'for providing solutions to industrial problems',
    },
  
    {
      id: '2',
      img: Slider_2,
      alt: 'KNOWLEDGE',
      title: 'KNOWLEDGE',
      description: 'creation through years of research and experiments',
    },
  
    {
      id: '3',
      img: Slider_3,
      alt: 'TECHNOLOGY',
      title: 'TECHNOLOGY',
      description: 'advancement by combining youthful energy and years of experience',
      position: 'right',
    },
  
    {
      id: '4',
      img: Slider_4,
      alt: 'SUSTAINABILITY',
      title: 'SUSTAINABILITY',
      description: 'Today progress without harming tomorrow',
    }
]

const HomePage = () => {
  return (
    <div>
      <SliderLayout>
          {sliderContent.map(slider => (
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

      <section className='page-layout'>
        <div className="mx-[3rem]">
          <h1>Industrial & Engineering Projects Implementation</h1>
          <h2>A perfect harmony of research, design and execution</h2>
        </div>
      </section>
    </div>
  )
}

export default HomePage;