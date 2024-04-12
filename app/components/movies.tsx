"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

export default function Movies() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=47409cd77a0ae9552851e6b7d55b9c02`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
      
      <div className='container mx-auto w-full h-auto relative rounded-2xl px-5'>
        <h1 className='text-2xl underline text-center mt-4 font-semibold mx-auto'>
          Trending Movies
          </h1>
        <Swiper className="mx-auto backdrop-blur-sm h-64 w-full relative"
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView='auto'
          autoplay
          navigation
          scrollbar={{ draggable: true }}>
          {movieList.map((movie) => (
            <SwiperSlide className=' m-auto !h-52 !w-36 relative' key={movie['id']}>
              <Image
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className="shadow-lg shadow-black mx-auto rounded-3xl" 
                src={`https://image.tmdb.org/t/p/w500${movie['poster_path']}`}
                alt={movie['title']}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
}
