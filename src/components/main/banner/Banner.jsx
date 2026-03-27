import React from 'react';
import bannerMain from '../../../assets/images/banner-main.png'
import Btn from '../../ui/Btn';

const Banner = () => {
    return (
        <div className={` bg-black  flex justify-center items-center py-16 rounded-2xl bg-[url('/images/bg-shadow.png')] bg-cover bg-center`}>
            <div className='-2 space-y-6 flex flex-col items-center text-center'>
                <div className=' '>

                    <img className='' src={bannerMain} alt="banner main image" />
                </div>
                <div className=' flex flex-col items-center font-bold text-white'>
                    <h1 className='text-xl lg:text-3xl mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='font-medium opacity-[0.7] mb-6'>Beyond Boundaries Beyond Limits</p>
                    <Btn textContent='Claim Free Credit' />
                </div>

            </div>
        </div>
    );
};

export default Banner;