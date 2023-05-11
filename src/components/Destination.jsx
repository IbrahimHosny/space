import React , {useContext} from 'react';
import '../App.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { dataContext } from '../App';


    const Destination = () => {
        const Data = useContext(dataContext);
        const destinationsData = Data.destinations;
        let names = destinationsData.map(destination => {
    return  destination.name;
})
    const pagination = {
        clickable: true,
        renderBullet: function (index , className ) {
            return `<span class="text-white w-fit second-color nav-text h-4 mx-3 swiper-pagination-bullet">${names[index]}</span>`
        },
        
    };
    return (
        <div className='bg-[url("./assets/destination/background-destination-desktop.jpg")] bg-no-repeat bg-cover h-screen'>
            <h3 className='heading-5 third-color m-auto relative w-[100%] top-[10vh] lg:w-[80%] max-lg:!text-center lg:top-[20vh] md:max-lg:!text-2xl max-md:!text-base'><span className='opacity-50 mx-4'>01</span>Pick your destination</h3>
            <div className="container mx-auto relative max-sm:!h-[80vh] top-[15%] lg:top-[40%]" id='destination'>
            <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >

        {
            destinationsData.map(destination => {
                return (
            <SwiperSlide key={destination.name} className='text-white flex'>
            <div className='flex flex-wrap items-center justify-center gap-10 lg:gap-0 max-sm:h-[100%] max-sm:items-start'>
            <section className='lg:w-[40%] w-full lg:block flex justify-center'>
                <img src={destination.images.webp} alt={'image of'+ destination.name } className='w-[180px] md:w-[300px] lg:w-[380px] xl:w-[445px]'></img>
            </section>
            <section className='lg:w-1/3 w-[95%]'>
                    <div className='des-info flex flex-col items-center lg:block'>
                    <h1 className='heading-3 max-sm:!text-[42px] lg:!text-[100px] m-auto'>{destination.name}</h1>
                    <p className='second-color body-text mb-6 max-sm:!text-[16px] max-sm:!leading-6 max-sm:text-center'>
                    {destination.description}
                    </p>
                    </div>
                    <hr></hr>
                    <div className='flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-20 my-4'>
                    <div className='flex flex-col items-center sm:w-fit max-sm:w-[40%]'>
                    <span className='subheading-2 second-color'>AVG. DISTANCE</span>
                    <span className='subheading-1 max-sm:!text-[22px] whitespace-nowrap'>{destination.distance}</span>
                    </div>
                    <div className='flex flex-col items-center sm:w-fit max-sm:w-[40%]'>
                    <span className='subheading-2 second-color'>Est. travel time</span>
                    <span className='subheading-1 max-sm:!text-[22px] whitespace-nowrap'>{destination.travel}</span>
                    </div>

                    </div>
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

export default Destination;