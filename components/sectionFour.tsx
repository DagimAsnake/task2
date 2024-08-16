'use client';

import React, { useRef } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import seven from '@/public/seven.jpg';

const testimonials = [
  {
    id: '1',
    name: 'Jane Eyre',
    description:
      "Keep it short and conversational. Your testimonial should only be two or three paragraphs, at most. They should be written in your customer's tone so that your testimonial doesn't seem overly formal or technical.",
    job: 'Digital Marketer',
    imageSrc: seven,
  },
  {
    id: '2',
    name: 'Jane Eyre',
    description:
      "Keep it short and conversational. Your testimonial should only be two or three paragraphs, at most. They should be written in your customer's tone so that your testimonial doesn't seem overly formal or technical.",
    job: 'Digital Marketer',
    imageSrc: seven,
  },
  {
    id: '3',
    name: 'Jane Eyre',
    description:
      "Keep it short and conversational. Your testimonial should only be two or three paragraphs, at most. They should be written in your customer's tone so that your testimonial doesn't seem overly formal or technical.",
    job: 'Digital Marketer',
    imageSrc: seven,
  },
  {
    id: '4',
    name: 'Jane Eyre',
    description:
      "Keep it short and conversational. Your testimonial should only be two or three paragraphs, at most. They should be written in your customer's tone so that your testimonial doesn't seem overly formal or technical.",
    job: 'Digital Marketer',
    imageSrc: seven,
  },
];

const SectionFour = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className='h-screen'>
      <div className='mx-auto w-[50%] pb-3'>
        <h1 className='text-yellow-600 pt-10'>
          Hear directly from those we have helped. See how our tailored
          solutions have made a difference for others, and see what they could
          do for you.
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-yellow-500 border-t border-yellow-200'>
        <div className='md:col-span-2 mt-2'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true} // Enable infinite scrolling
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className='p-6 rounded-lg border mt-14'>
                  <div className='flex justify-center items-center mb-4 -mt-14'>
                    <img
                      className='rounded-full w-14 h-14 object-cover'
                      src='/seven.jpg'
                      alt='six'
                    />
                  </div>
                  <FaQuoteRight className='text-3xl mb-4' />
                  <p className='mb-4'>{testimonial.description}</p>
                  <h3 className='font-bold'>{testimonial.name}</h3>
                  <p className='text-sm text-gray-500'>{testimonial.job}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='flex justify-center items-center mt-4 space-x-4'>
            <div
              ref={prevRef}
              className='text-3xl text-yellow-600 cursor-pointer'
            >
              <FaChevronLeft />
            </div>
            <div
              ref={nextRef}
              className='text-3xl text-yellow-600 cursor-pointer'
            >
              <FaChevronRight />
            </div>
          </div>
        </div>

        <div className='hidden md:block mt-2'>
          <img
            className='rounded-l-3xl w-full object-cover'
            src='/six.jpg'
            alt='six'
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
