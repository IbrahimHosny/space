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
            console.log(className);
            return `<span class="text-white w-fit h-4 mx-3 swiper-pagination-bullet">${names[index]}</span>`
        },
        
    };
    return (
        <div className='bg-[url("./assets/destination/background-destination-desktop.jpg")] bg-no-repeat bg-cover h-screen'>
            <div className="container mx-auto relative top-[40%]" id='destination'>
            <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >

        {
            destinationsData.map(destination => {
                return (
            <SwiperSlide key={destination.name} className='text-white flex'>
            <div className='flex items-center'>
            <section className='w-1/2'>
                <img src={destination.images.webp} alt={'image of'+ destination.name }></img>
            </section>
            <section className='w-1/2'>
                    <div className='des-info'>
                    <h1 className='text-8xl'>{destination.name}</h1>
                    <p>
                    {destination.description}
                    </p>
                    </div>
                    <hr></hr>
                    <div>
                    <div>
                    <span>AVG. DISTANCE</span>
                    <span>{destination.distance}</span>
                    </div>
                    <div>
                    <span>Est. travel time</span>
                    <span>{destination.travel}</span>
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