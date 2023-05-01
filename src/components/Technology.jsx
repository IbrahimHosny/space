import React ,{useContext, useState, useEffect} from 'react';
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
const [width , setWidth] = useState(window.innerWidth);
    useEffect(() => {
    let handleWidth = () => {
        setWidth((width) => width = window.innerWidth )
    }
    window.addEventListener('resize', handleWidth)
    },[])
    // const width = window.innerWidth;

    const data = useContext(dataContext);
    const techData = data.technology;
    const pagination = {
        clickable: true,
        renderBullet: function (index , className ) {
            return `<span class="heading-4 opacity-100 text-white swiper-pagination-bullet items-center justify-center">${index+1}</span>`
        },
        horizontalClass: true,
    };

    return (
        <div className='bg-[url("./assets/technology/background-technology-desktop.jpg")] bg-no-repeat bg-cover h-screen'>
        <h3 className='heading-5 third-color m-auto relative w-[100%] top-[10vh] lg:w-[80%] max-md:!text-center lg:top-[20vh] md:max-lg:!text-2xl max-md:!text-lg'><span className='opacity-50 mx-4'>03</span>SPACE LAUNCH 101</h3>
        <div className='w-full h-[80%] lg:w-[80%] lg:h-[60%] absolute right-0 bottom-[10%]' id='tech'>
        <Swiper
        direction={"vertical"}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        >
        {
            techData.map( technology => {
                return (
                    <SwiperSlide key={technology.name} className='flex flex-wrap-reverse items-center justify-evenly lg:justify-end'>
                    <section className='lg:w-[45%] w-[90%] max-xl:text-center max-lg:mx-auto'>
                    <span className='second-color subheading-2'>THE TERMINOLOGY…</span>
                    <h2 className='heading-3 third-color max-md:!text-3xl md:max-lg:!text-5xl'>{technology.name}</h2>
                    <p className='body-text second-color'>
                    {technology.description}
                    </p>
                    </section>
                    <div className='lg:w-[45%] w-full flex justify-end'>
    {width >= 1024 ? <img src={technology.images.portrait} alt='tech' id='techImg'></img> : <img src={technology.images.landscape} alt='tech' className='w-full h-[170px] sm:max-md:h-[240px] md:max-xl:h-[360px]' id='techImg'></img>}
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