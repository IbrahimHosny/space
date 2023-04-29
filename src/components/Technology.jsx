import React ,{useContext} from 'react';
import { dataContext } from '../App';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "../App.css";

// import required modules
import { Pagination } from "swiper";

const Technology = () => {

    const data = useContext(dataContext);
    const techData = data.technology;
    const pagination = {
        clickable: true,
        renderBullet: function (index , className ) {
            console.log(className);
            return `<span class="text-white swiper-pagination-bullet"></span>`
        },
        
    };

    return (
        <div className='bg-[url("./assets/technology/background-technology-desktop.jpg")] bg-no-repeat bg-cover h-screen'>
        <div className='w-[80%] h-[60%] absolute right-0 bottom-[10%]' id='tech'>
        <Swiper
        direction={"vertical"}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        >
        {
            techData.map( technology => {
                return (
                    <SwiperSlide className='justify-end'>
                    <section className='w-[40%]'>
                    <span>THE TERMINOLOGY…</span>
                    <h2>{technology.name}</h2>
                    <p>
                    {technology.description}
                    </p>
                    </section>
                    <div className='w-[40%]'>
                    <img src={technology.images.portrait} alt='tech'></img>
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

export default Technology;