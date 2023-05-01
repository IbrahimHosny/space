import React, { Fragment } from 'react';

const Home = () => {
    return (
        <div className='bg-[url("./assets/home/background-home-desktop.jpg")] bg-no-repeat bg-cover h-screen'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 h-[85%] top-[10%] lg:top-[50%] lg:h-auto  relative'>
            <section className='max-xl:text-center'>
            <span className='heading-5 second-color max-lg:!text-base'>SO, YOU WANT TO TRAVEL TO</span>
            <h1 className='heading-1  third-color max-sm:!text-8xl max-sm:!leading-loose'>SPACE</h1>
            <p className='body-text second-color'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
            </section>
            <section className='flex items-center justify-center'>
            <button className='bg-white h-[220px] w-[220px] lg:h-[275px] lg:w-[275px] rounded-full text-4xl heading-4'> Explore </button>
            </section>
            </div>
        </div>
    );
};

export default Home;