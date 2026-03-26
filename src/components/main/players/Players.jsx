import React, { use, useState } from 'react';
import Card from '../../ui/Card';

const Players = ({info}) => {

    const [btnData, setBtnData] = useState('Available')


    const handleBtn = (btn) => {
        btn === 'Available' ? setBtnData('Available'):
            setBtnData('Selected') 
        
    }



    return (
        <div className='space-y-8'>
            <div className="header flex justify-between">
                <div className='font-bold text-3xl '>Available Players</div>
                <div>
                    <button onClick={() => handleBtn('Available')} className={`btn rounded-xl rounded-r-none ${btnData == 'Available' && 'bg-[#e7fe29]'} text-[#131313]`}>Available</button>
                    <button onClick={() => handleBtn('Selected')} className={`btn rounded-xl rounded-l-none ${btnData == 'Selected' && 'bg-[#e7fe29]'} text-[#131313]`}>Selected (0)</button>
                </div>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            
            {
                    info.map(player => <Card key={player.playerName} player ={player} />)
            }
                

            </div>
        </div>
    );
};

export default Players;