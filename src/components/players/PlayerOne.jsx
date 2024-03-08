import React from 'react';
import PlayerOneImg from '../../assets/imgaes/index/player1.png';

const PlayerOne = ({currentPlayer, score, playerName}) => {
  return (
    <div className='grid '>
    <div className={`player-one mt-20 ${currentPlayer === 1 ? 'active' : ''}`}>
            <img className='w-38' src={PlayerOneImg} alt="" />
            <div className='grid mt-10 justify-center'>
            <h2 className='text-2xl font-extrabold text-white'>{playerName}</h2>
            <h2 className='text-xl font-bold text-white'>Score: {score}</h2>
            </div>
            
        </div>
        {currentPlayer === 1 && 
           <div className='bg-green-700 flex justify-center my-8 p-2 rounded-md'>
            <h1 className='text-white text-xl font-extrabold font-sans'>{currentPlayer === 1 && <p>It's Your turn</p>}</h1>
           </div>
           }
        </div>
  )
}

export default PlayerOne