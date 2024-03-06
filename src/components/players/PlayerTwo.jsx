import React from 'react';
import PlayerTwoImg from '../../assets/imgaes/index/player2.png';

const PlayerTwo = ({ currentPlayer, score , playerName}) => {
    return (
        <div className={`player-two my-36 ${currentPlayer === 2 ? 'active' : ''}`}>
            <img src={PlayerTwoImg} alt="" />
            <h2>{playerName}</h2>
            <h2>Score: {score}</h2>
            {currentPlayer === 2 && <p>It's  {playerName}'s turn</p>}
        </div>
    );
};

export default PlayerTwo;
