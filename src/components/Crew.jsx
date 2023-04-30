import React, {useContext} from 'react';
import { dataContext } from '../App';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import '../App.css'
const Crew = () => {
    const data = useContext(dataContext);
    const crewData = data.crew;

    const pagination = {
        clickable: true,
        renderBullet: function (index , className ) {
            console.log(className);
            return `<span class="text-white swiper-pagination-bullet"></span>`
        },
        
    };
    return (
        <div className='bg-[url("./assets/crew/background-crew-desktop.jpg")] bg-no-repeat bg-cover h-screen overflow-hidden'>
            <div className="container mx-auto relative h-[80%] lg:h-[70%] top-[20%] lg:top-[30%]" id='crew'>
            <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >

        {
            crewData.map(crew => {
                return (
            <SwiperSlide key={crew.name} className='text-white flex'>
            <div className='flex gap-16 lg:gap-0 md:max-lg:flex-wrap flex-wrap-reverse lg:items-center lg:justify-around'>
            <section className='w-full text-center lg:text-start lg:w-[35%]'>
                    <div className='des-info max-lg:w-[80%] m-auto'>
                    <span className='heading-4 opacity-50 max-lg:!text-3xl max-md:!text-xl'>{crew.role}</span>
                    <h1 className='heading-3 xl:whitespace-nowrap max-lg:!text-5xl max-md:!text-3xl'>{crew.name}</h1>
                    <p className='second-color body-text'>{crew.bio}</p>
                    </div>
            </section>
            <section className='w-full lg:w-[40%] flex justify-center lg:justify-end h-full'>
                <img src={crew.images.webp} alt={'image of'+ crew.name } className='lg:h-[680px] md:h-[600px] h-[400px]'></img>
            </section>

            </div>
            </SwiperSlide>
                )
            })
        }

            
            </Swiper>
            </div>
        </div>
    );
};

export default Crew;