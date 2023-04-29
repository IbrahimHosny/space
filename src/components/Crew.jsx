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
            <div className="container mx-auto relative h-[70%] top-[30%]" id='crew'>
            <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >

        {
            crewData.map(crew => {
                return (
            <SwiperSlide key={crew.name} className='text-white flex'>
            <div className='flex items-center justify-around'>
            <section className='w-[35%]'>
                    <div className='des-info'>
                    <span className='heading-4 opacity-50'>{crew.role}</span>
                    <h1 className='heading-3 whitespace-nowrap'>{crew.name}</h1>
                    <p className='second-color body-text'>
                    {crew.bio}
                    </p>
                    </div>
            </section>
            <section className='w-[40%] flex justify-end h-full'>
                <img src={crew.images.webp} alt={'image of'+ crew.name } ></img>
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