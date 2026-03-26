import React from 'react';
import { CiFlag1 } from 'react-icons/ci';
import { FaUserAlt } from 'react-icons/fa';

const Card = ({ player }) => {

    // console.log(player)

    const { playerName, country, rating, value, role, battingStyle } = player;

    return (
        <div className='p-6 border border-[rgba(19,19,19,0.1)] rounded-xl'>

            <div>
                <div className='mb-6'><img className='rounded-md' src="/images/babar.webp" alt="" /></div>

                <div className='flex gap-3 items-center'>
                    <FaUserAlt />
                    <p>{playerName}</p>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>

                        <CiFlag1 />
                        <p>{country}</p>
                    </div>

                    <button className='btn'>{role}</button>
                </div>

            </div>

            <div className="divider"></div>

            <div className='space-y-4'>
                <div className='flex justify-between items-center'>
                    <h4 className='font-bold'>Rating</h4>
                    <p className='text-[rgba(19,19,19,0.7)]'>{rating}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <h4 className='font-bold'>Batting style</h4>
                    <p className='text-[rgba(19,19,19,0.7)]'>{battingStyle}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <h4 className='font-bold'>Price: {value}</h4>
                    <button className='btn'>Choose Player</button>
                </div>
            </div>

        </div>
    );
};

export default Card;