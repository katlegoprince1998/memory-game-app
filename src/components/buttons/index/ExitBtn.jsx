import React from 'react';
import ExitBton from '../../../assets/imgaes/index/red.png';

const ExitBtn = () => {
  return (
    <div className='absolute right-10 top-4'>
      <a href="#index">
        <img src={ExitBton} alt="Exit game" />
        </a>
    </div>
 


  )
}

export default ExitBtn