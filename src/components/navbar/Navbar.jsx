import React from 'react';
import { RiCoinsLine } from 'react-icons/ri';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between'>
            <div className="nav-logo"><img src="/src/assets/logo.png" alt="nav-logo" /></div>
            <div className="nav-right flex items-center gap-16 ">
                <div className="links flex gap-5">
                    <p>Home</p>
                    <p>Fixture</p>
                    <p>Teams</p>
                    <p>Schedules</p>
                </div>
                <button className='flex items-center gap-2'>0 coins<RiCoinsLine /></button>
            </div>
        </div>
    );
};

export default Navbar;