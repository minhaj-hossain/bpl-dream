import React from 'react';
import Card from '../../ui/Card';

const Players = () => {
    return (
        <div className='space-y-8'>
            <div className="header flex justify-between">
                <div className='font-bold text-3xl '>Available Players</div>
                <div>
                    <button className='btn rounded-xl rounded-r-none bg-[#e7fe29] text-[#131313]'>Available</button>
                    <button className='btn rounded-xl   rounded-l-none text-[rgba(19,19,19,0.6)]'>Selected (0)</button>
                </div>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <Card />
            </div>
        </div>
    );
};

export default Players;