import React from 'react';
import PlayerTwoImg from '../../assets/imgaes/index/player2.png';

const PlayerTwo = ({ currentPlayer, score , playerName}) => {
    return (
        <div>
        <div className={`player-two mt-20 ${currentPlayer === 2 ? 'active' : ''}`}>
            <img className='w-28' src={PlayerTwoImg} alt="" />
            <div className='grid mt-10 justify-center'>
            <h2 className='text-2xl font-extrabold text-white'>{playerName}</h2>
            <h2 className='text-xl font-bold text-white'>Score: {score}</h2>
            </div>
            
        </div>
        {currentPlayer === 2 &&
          <div className='bg-white flex justify-center my-8 p-2 rounded-md'>
          <h1 className='text-blue-700 text-xl font-extrabold font-sans'>{currentPlayer === 2 && <p>It's your turn</p>}</h1>
         </div>
                   }
         </div>
    );
};

export default PlayerTwo;
