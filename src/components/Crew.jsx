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
            <div className="container mx-auto relative h-[65%] top-[35%]" id='crew'>
            <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >

        {
            crewData.map(crew => {
                return (
            <SwiperSlide key={crew.name} className='text-white flex'>
            <div className='flex items-center'>
            <section className='w-1/2'>
                    <div className='des-info'>
                    <h1 className='text-8xl'>{crew.name}</h1>
                    <p>
                    {crew.bio}
                    </p>
                    </div>
                    <hr></hr>
                    <div>
                    <div>
                    <span>AVG. DISTANCE</span>
                    <span>{crew.distance}</span>
                    </div>
                    <div>
                    <span>Est. travel time</span>
                    <span>{crew.travel}</span>
                    </div>

                    </div>
            </section>
            <section className='w-1/2 h-full'>
                <img src={crew.images.webp} alt={'image of'+ crew.name } height={680}></img>
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