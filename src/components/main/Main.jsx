import React from 'react';
import Banner from './banner/Banner';
import Players from './players/Players';

const Main = () => {
    return (
        <div className='container mx-auto space-y-10 mb-100'>
            <Banner />
            <Players />
        </div>
    );
};

export default Main;