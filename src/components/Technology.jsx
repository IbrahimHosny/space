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
            return `<span class="heading-4 opacity-100 text-white swiper-pagination-bullet items-center justify-center">${index+1}</span>`
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
                    <SwiperSlide className='flex items-center justify-end'>
                    <section className='w-[45%]'>
                    <span className='second-color subheading-2'>THE TERMINOLOGY…</span>
                    <h2 className='heading-3 third-color'>{technology.name}</h2>
                    <p className='body-text second-color'>
                    {technology.description}
                    </p>
                    </section>
                    <div className='w-[45%] flex justify-end'>
                    <img src={technology.images.portrait} alt='tech' id='techImg'></img>
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