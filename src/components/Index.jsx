import React, { useState } from 'react';
import Heading from './text/index/Heading';
import ExitBtn from './buttons/index/ExitBtn';
import Player1 from '../assets/imgaes/index/player1.png';
import Player2 from '../assets/imgaes/index/player2.png';
import PlayBtn from '../assets/imgaes/index/green.png';

const Index = ({ onInformationFilled }) => {
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');

    const handleInformationFilled = () => {
        if (player1Name.trim() !== '' && player2Name.trim() !== '') {
            onInformationFilled(player1Name, player2Name);
        } else {
            alert('Please fill in the names of both players.');
        }
    };

    return (
        <>
            <Heading />
            <ExitBtn />
            <div>
                <div className='subheading'>
                    <h1 className='text-white flex justify-center'>Are you ready to play?</h1>
                </div>
                <div className='flex w-96 mr-auto ml-80 mt-10'>
                    <img src={Player1} alt="Player 1" />
                    <img src={Player2} alt="Player 2" />
                </div>
                <form>
                    <div className='input-field flex justify-center'>
                        <input
                            className='w-80 h-12 p-4 mx-10 rounded-md'
                            type="text"
                            placeholder='Name of Player 1'
                            value={player1Name}
                            onChange={(e) => setPlayer1Name(e.target.value)}
                        />
                        <input
                            className='w-80 h-12 p-4 mx-10 rounded-md'
                            type="text"
                            placeholder='Name of Player 2'
                            value={player2Name}
                            onChange={(e) => setPlayer2Name(e.target.value)}
                        />
                    </div>
                    <div onClick={handleInformationFilled} className='flex justify-center mt-10'>
                        <img src={PlayBtn} alt="play btn" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Index;
