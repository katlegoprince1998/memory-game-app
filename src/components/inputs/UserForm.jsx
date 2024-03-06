import React from 'react';
import PlayBtn from '../../assets/imgaes/index/green.png';

const UserForm = () => {
  return (
    <div>
       <form>
         <div className='input-field flex justify-center'>
              <input className='w-80 h-12 p-4  mx-10 rounded-md' type="text" placeholder='Name of Player 1' />
              <input className='w-80 h-12 p-4  mx-10 rounded-md' type="text" placeholder='Name of Player 2' />
         </div>
         <div className='flex justify-center mt-10'>
             <img src={PlayBtn} alt="play btn" />
         </div>

       </form>
    </div>
  )
}

export default UserForm