import React, { use, useState } from 'react';
import Card from '../../ui/Card';

const Players = ({ info,coins,  setCoins }) => {

    const [btnData, setBtnData] = useState('Available')
    const [selectedPlayers, setSelectedPlayers] = useState([])

    console.log(selectedPlayers)

    const handleBtn = (btn) => {
        btn === 'Available' ? setBtnData('Available') :
            setBtnData('Selected')

    }



    return (
        <div className='space-y-8'>
            <div className="header flex justify-between">
                {btnData == 'Available' && <div className='font-bold text-3xl '>Available Players</div>}
                {btnData == 'Selected' && <div className='font-bold text-3xl '>Selected Player ({selectedPlayers.length}/{info.length})</div>}

                <div>
                    <button
                        onClick={() => handleBtn('Available')}
                        className={`btn rounded-xl rounded-r-none ${btnData == 'Available' && 'bg-[#e7fe29]'} text-[#131313]`}>Available</button>

                    <button
                        onClick={() => handleBtn('Selected')}
                        className={`btn rounded-xl rounded-l-none ${btnData == 'Selected' && 'bg-[#e7fe29]'} text-[#131313]`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

                {
                    btnData == 'Available' &&
                    info.map(player => <Card 
                        coins={coins}
                        setCoins={setCoins}
                        selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} key={player.playerName} player={player} />)
                }

                {
                    btnData == 'Selected' &&
                    selectedPlayers.map(player => <Card selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} 
                    key={player.playerName} player={player} />)
                }




            </div>
        </div>
    );
};

export default Players;