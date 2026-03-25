import React from 'react';
import { RiCoinsLine } from 'react-icons/ri';
import navLogo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className='container mx-auto py-5  flex justify-between '>
            <div className="nav-logo w-14"><img src={navLogo} alt="nav-logo" /></div>
            <div className="nav-right flex items-center gap-16 ">
                <div className="links hidden md:flex gap-5 text-[rgba(19,19,19,0.7)]">
                    <p className=''>Home</p>
                    <p>Fixture</p>
                    <p>Teams</p>
                    <p>Schedules</p>
                </div>
                <button className='flex font-bold btn items-center gap-2'>0 coins<RiCoinsLine /></button>
            </div>
        </div>
    );
};

export default Navbar;