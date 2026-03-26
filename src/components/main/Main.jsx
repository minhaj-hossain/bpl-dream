import React, { use } from 'react';
import Banner from './banner/Banner';
import Players from './players/Players';

const Main = ({ playersInfo,coins,  setCoins }) => {

    const info = use(playersInfo)

    return (
        <div className='container mx-auto space-y-10 mb-100'>
            <Banner />
            <Players coins={coins} setCoins={setCoins} info ={info} />
        </div>
    );
};

export default Main;