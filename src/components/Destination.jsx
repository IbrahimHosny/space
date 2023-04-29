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
            return `<span class="text-white w-fit second-color nav-text h-4 mx-3 swiper-pagination-bullet">${names[index]}</span>`
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
            <div className='flex items-center justify-center'>
            <section className='w-[40%]'>
                <img src={destination.images.webp} alt={'image of'+ destination.name }></img>
            </section>
            <section className='w-1/3'>
                    <div className='des-info'>
                    <h1 className='heading-2'>{destination.name}</h1>
                    <p className='second-color body-text mb-6'>
                    {destination.description}
                    </p>
                    </div>
                    <hr></hr>
                    <div className='flex gap-20 my-4'>
                    <div className='flex flex-col items-center w-fit'>
                    <span className='subheading-2 second-color'>AVG. DISTANCE</span>
                    <span className='subheading-1'>{destination.distance}</span>
                    </div>
                    <div className='flex flex-col items-center w-fit'>
                    <span className='subheading-2 second-color'>Est. travel time</span>
                    <span className='subheading-1'>{destination.travel}</span>
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