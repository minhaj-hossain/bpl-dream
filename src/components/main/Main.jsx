import React, { use} from 'react';
import Banner from './banner/Banner';
import Players from './players/Players';
import Btn from '../ui/Btn';

const Main = ({ playersInfo, coins, setCoins }) => {

    const info = use(playersInfo)

    const [btnData, setBtnData] = React.useState('Available')

    const goBack = () => {
        alert("Working on it")
    }

    return (
        <div className='container mx-auto space-y-10 mb-100'>
            <Banner />

            <Players coins={coins}
                setCoins={setCoins}
                info={info}
                btnData={btnData}
                setBtnData={setBtnData} />

            {
                btnData == 'Selected' && <Btn onClick={goBack} textContent= 'Select more players'/>
            }
        </div>
    );
};

export default Main;