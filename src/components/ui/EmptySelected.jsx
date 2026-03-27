import React from 'react';

const EmptySelected = () => {
    return (
        <div className='col-span-3 flex justify-center items-center text-center py-20'>
            <div  className='space-y-6'>
                <h3 className='font-bold text-4xl '>No player Selected Yet</h3>
                <p className='text-[rgba(19,19,19,0.7)]'>Go to Available tab to select players</p>
            </div>
        </div>
    );
};

export default EmptySelected;