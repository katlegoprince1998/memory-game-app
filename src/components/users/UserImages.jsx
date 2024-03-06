import React from 'react';
import Player1  from '../../assets/imgaes/index/player1.png';
import Player2 from '../../assets/imgaes/index/player2.png';
const UserImages = () => {
  return (
    <div className='flex  w-96 mr-auto ml-80 mt-10'>
     <img src={Player1 } alt="" />
     <img src={Player2 } alt="" />

    </div>
  )
}

export default UserImages