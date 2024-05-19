import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../logoAnimation.json';

const Maintenance = () => {
    return (
        <div className='max-w-3xl mx-auto p-4 h-screen flex flex-col items-center justify-center'>
            <div>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ height: 250, width: 250 }}
                />
                <div className='text-xl flex flex-col mt-4 font-normal text-center'>
                    <span>I'm just fixing a few things.</span>
                    <span>Be right back!</span>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
