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
      position: 'right-36'
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

      <section className='px-8 xl:px-60 mt-10'>
        Fermentum posuere urna nec tincidunt praesent. Aliquam faucibus purus in massa tempor nec. Sem et tortor consequat id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Neque gravida in fermentum et sollicitudin ac orci. Dignissim cras tincidunt lobortis feugiat vivamus at. Tortor condimentum lacinia quis vel eros donec. Laoreet non curabitur gravida arcu ac tortor dignissim. Viverra maecenas accumsan lacus vel facilisis. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Turpis in eu mi bibendum neque egestas congue quisque. Amet tellus cras adipiscing enim eu turpis egestas. Id semper risus in hendrerit gravida rutrum. Nibh cras pulvinar mattis nunc sed blandit libero. Morbi tincidunt augue interdum velit.
        <br />      <br />      <br />
        Massa tincidunt nunc pulvinar sapien. Ipsum dolor sit amet consectetur adipiscing. Urna et pharetra pharetra massa. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Ipsum dolor sit amet consectetur adipiscing elit ut. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Odio facilisis mauris sit amet massa vitae. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Aliquet nec ullamcorper sit amet risus nullam eget felis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.
        <br />      <br />      <br />
        Sit amet nulla facilisi morbi. Integer enim neque volutpat ac tincidunt vitae semper. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Egestas fringilla phasellus faucibus scelerisque. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Etiam dignissim diam quis enim. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Blandit turpis cursus in hac habitasse platea dictumst. Vestibulum sed arcu non odio euismod lacinia at quis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Donec massa sapien faucibus et molestie ac feugiat sed. Facilisis mauris sit amet massa vitae tortor condimentum. Aliquam faucibus purus in massa tempor nec feugiat. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
        <br />      <br />      <br />
        Metus aliquam eleifend mi in nulla posuere sollicitudin. Quam lacus suspendisse faucibus interdum posuere lorem. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Arcu cursus vitae congue mauris rhoncus. Nullam non nisi est sit amet. Dui faucibus in ornare quam viverra orci. Ut sem viverra aliquet eget sit amet. Molestie nunc non blandit massa enim nec dui. Porttitor lacus luctus accumsan tortor posuere ac ut. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
        <br />      <br />      <br />
        Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Pellentesque diam volutpat commodo sed. Nibh tellus molestie nunc non blandit. Porttitor massa id neque aliquam vestibulum morbi. Aliquet lectus proin nibh nisl condimentum. Mi eget mauris pharetra et ultrices. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Ut tristique et egestas quis. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Sodales neque sodales ut etiam sit amet nisl purus. Et pharetra pharetra massa massa ultricies. Odio eu feugiat pretium nibh. Enim lobortis scelerisque fermentum dui. Urna condimentum mattis pellentesque id nibh tortor id. Feugiat nibh sed pulvinar proin gravida hendrerit. Quis varius quam quisque id diam. Elit ut aliquam purus sit. Malesuada bibendum arcu vitae elementum curabitur.
        <br />      <br />      <br />
        Est velit egestas dui id ornare. Fermentum posuere urna nec tincidunt. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet venenatis urna cursus eget. Amet nisl suscipit adipiscing bibendum est ultricies. Tortor condimentum lacinia quis vel eros donec ac. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Ut venenatis tellus in metus vulputate eu scelerisque felis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sed tempus urna et pharetra. Tellus in metus vulputate eu scelerisque felis. Arcu risus quis varius quam quisque id diam. Enim facilisis gravida neque convallis a cras semper. Ante metus dictum at tempor. Venenatis cras sed felis eget velit aliquet. Eget aliquet nibh praesent tristique magna sit amet. Viverra vitae congue eu consequat ac.
      </section>
    </div>
  )
}

export default HomePage;