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
        <h3 className='heading-5 third-color m-auto relative w-[100%] top-[10vh] lg:w-[80%] max-md:!text-center lg:top-[20vh] md:max-lg:!text-2xl max-md:!text-lg'><span className='opacity-50 mx-4'>02</span>Meet your crew</h3>
            <div className="container mx-auto relative h-[80%] lg:h-[70%] top-[20%] lg:top-[30%]" id='crew'>
            <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >

        {
            crewData.map(crew => {
                return (
            <SwiperSlide key={crew.name} className='text-white max-sm:h-[50vh]'>
            <div className='flex gap-16 max-sm:gap-8 lg:gap-0 md:max-lg:flex-wrap flex-wrap-reverse lg:items-center lg:justify-around max-sm:h-full'>
            <section className='w-full text-center lg:text-start lg:w-[35%]'>
                    <div className='des-info max-lg:w-[80%] max-sm:w-[90%]  m-auto'>
                    <span className='heading-4 opacity-50 max-lg:!text-3xl max-md:!text-xl'>{crew.role}</span>
                    <h1 className='heading-3 xl:whitespace-nowrap max-lg:!text-5xl max-md:!text-3xl max-sm:!text-2xl'>{crew.name}</h1>
                    <p className='second-color body-text max-sm:!leading-6 max-sm:!text-lg'>{crew.bio}</p>
                    </div>
            </section>
            <section className='w-full lg:w-[40%] flex justify-center lg:justify-end h-full' id='imgSec'>
                <img src={crew.images.webp} alt={'image of'+ crew.name } className='lg:h-[680px] md:h-[600px] h-[220px]'></img>
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