import React from 'react';
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full bg-gray-100 my-5 rounded-lg'>
            <div className='border-2 border-amber-400 space-y-5'>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <button className='btn btn-primary'>Test</button>
            </div>
            <div className='border-2 border-amber-400 flex justify-end'>
                <img className='w-5/12 border-2 border-amber-400 ' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;