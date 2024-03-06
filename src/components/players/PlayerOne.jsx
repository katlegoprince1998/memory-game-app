import React from 'react';
import PlayerOneImg from '../../assets/imgaes/index/player1.png';

const PlayerOne = ({currentPlayer, score, playerName}) => {
  return (
    <div className={`player-one my-36 ${currentPlayer === 1 ? 'active' : ''}`}>
            <img src={PlayerOneImg} alt="" />
            <h2>{playerName}</h2>
            <h2>Score: {score}</h2>
            {currentPlayer === 1 && <p>It's {playerName}'s turn</p>}
        </div>
  )
}

export default PlayerOne