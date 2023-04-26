import React, { Fragment } from 'react';

const Home = () => {
    return (
        <div className='bg-[url("./assets/home/background-home-desktop.jpg")] bg-no-repeat bg-cover h-screen'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 top-[50%] relative'>
            <section className=''>
            <span>SO, YOU WANT TO TRAVEL TO</span>
            <h1 className='text-9xl text-white'>SPACE</h1>
            <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
            </section>
            <section className=''>
            <button className='bg-white lg:h-[275px] lg:w-[275px] rounded-full text-4xl'> Explore </button>
            </section>
            </div>
        </div>
    );
};

export default Home;