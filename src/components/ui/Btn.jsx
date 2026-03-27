import React from 'react';

const Btn = ({ textContent, onClick }) => {
    return (

        < div onClick={onClick} className='w-fit py-1 px-1 rounded-md border'>
                <button className='btn bg-[#e7fe29] text-[#131313]'>{textContent}</button>
            </div>
        
    );
};

export default Btn;