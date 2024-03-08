import React, { useState, useEffect } from 'react';
import Robot from '../assets/imgaes/robot.png';
import Trophy from '../assets/imgaes/trophy.png';
import PlayerOne from '../assets/imgaes/index/player1.png';
import PlayerTwo from '../assets/imgaes/index/player2.png';
import PlayAgain from '../assets/imgaes/playAgain.png';



const AwardScreen = ({ player1Score, player2Score, player1Name, player2Name}) => {

    const topPlayer = player1Score > player2Score ? player1Name : player2Name;
    const topScore = player1Score > player2Score ? player1Score : player2Score;
    const bottomPlayer = player1Score > player2Score ? player2Name : player1Name;
    const bottomScore = player1Score > player2Score ? player2Score : player1Score;

   
    return (
        <div className="grid grid-flow-col-1 grid-flow-row-6 justify-center mt-16">
            <div className='mr-auto ml-auto'>
                <h3 className='text-white font-sans text-2xl'>Well Done!</h3>
                <h1 className='mt-5 mb-5 mx-6 text-white'>{topPlayer}</h1>
                <img src={Robot} alt="" />
            </div>
            <div className='oneDiv flex'>
                <img className='w-28'  src={PlayerOne} alt="" />
                <div className='flex mt-5 px-10'>
                    <h1 className='text-black'>1st Place</h1>
                    <p className='mx-10 text-black'>{topPlayer}</p>
                    <p className='text-black'>Score: {topScore}</p>
                </div>
            </div>
            <div className='flex twoDiv mt-4 justify-between'>
                <img className='w-20' src={PlayerTwo} alt="" />
                <div className='flex mt-5 px-10'>
                    <h1 className='text-black'>2nd Place</h1>
                    <p className='mx-10 text-black'>{bottomPlayer}</p>
                    <p className='text-black'>Score: {bottomScore}</p>
                </div>
            </div>
            <img className='mr-auto ml-auto mt-5' src={PlayAgain} alt="" />
            
        </div>
    );
};

export default AwardScreen;
