'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';

export default function Slider({ imagesx }: { imagesx: string[] }) {
  return imagesx?.length < 1 ? (
    <></>
  ) : (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className='mySwiper'
      >
        {imagesx?.map((src: string, index: number) => (
          <SwiperSlide key={`${index}`}>
            <Image
              width='0'
              height='0'
              sizes='100vw'
              className='w-full h-auto'
              src={src}
              alt='img'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
