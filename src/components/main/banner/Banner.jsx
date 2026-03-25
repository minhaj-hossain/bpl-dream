import React from 'react';
import bgBanner from '../../../assets/images/bg-shadow.png'
import bannerMain from '../../../assets/images/banner-main.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgBanner})` }} className={` bg-black bg-cover flex justify-center items-center py-16 rounded-2xl`}>
            <div className='-2 space-y-6 flex flex-col items-center text-center'>
                <div className=' '>

                    <img className='' src={bannerMain} alt="banner main image" />
                </div>
                <div className='font-bold text-white'>
                    <h1 className='text-3xl mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='font-medium opacity-[0.7] mb-6'>Beyond Boundaries Beyond Limits</p>
                    <button className='btn bg-[#e7fe29] text-[#131313]'>Claim Free Credit</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;