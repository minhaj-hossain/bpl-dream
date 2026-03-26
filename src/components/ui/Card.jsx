import React, { useState } from 'react';
import { CiFlag1 } from 'react-icons/ci';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ player, selectedPlayers, setSelectedPlayers, coins, setCoins }) => {

    const { playerName, country, rating, value, role, battingStyle } = player;
    
    const isExist = selectedPlayers.find(p => p.playerName === player.playerName);

    const hangleSelection = () => {

        if (!isExist && coins > value) {
            setSelectedPlayers(prevPlayers => [...prevPlayers, player]
            )
            toast("You've selected!")
        }

        if (coins > value) {
            setCoins(prevCoins => prevCoins - value)
        }else {
            toast("You can't select!")
        }
    }

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
                    <button
                        onClick={hangleSelection}
                        className='btn'
                        disabled={isExist}>{isExist ? 'Selected' : 'Select player'}</button>
                </div>
            </div>

        </div>
    );
};

export default Card;