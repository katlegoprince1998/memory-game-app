import React from 'react';
import Restart from "../../../assets/imgaes/restart.png";

const RestartBtn = ({ reshuffle }) => {
    return (
      <div className='absolute right-52 top-4'>
          <img onClick={reshuffle} src={Restart} alt="Restart" />
      </div>
    )
  }

export default RestartBtn