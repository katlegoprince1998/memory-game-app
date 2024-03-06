import React, { useState } from 'react';
import PlayerOne from './players/PlayerOne';
import PlayerTwo from './players/PlayerTwo';
import Heading from './text/index/Heading';
import ExitBtn from './buttons/index/ExitBtn';
import Card from './Card';
import data from '../data';

const Board = ({ player1Name, player2Name }) => {
    const [items, setItems] = useState(data().sort(() => Math.random() - 0.5));
    const [prev, setPrev] = useState(-1);
    const [currentPlayer, setCurrentPlayer] = useState(1); // Start with Player 1
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    const reshuffle = () => {
        setItems(data().sort(() => Math.random() - 0.5));
        setPrev(-1);
        setCurrentPlayer(1); // Reset to Player 1
    };

    const switchPlayer = () => {
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    };

    const incrementScore = () => {
        if (currentPlayer === 1) {
            setPlayerOneScore(playerOneScore + 1);
        } else {
            setPlayerTwoScore(playerTwoScore + 1);
        }
    };

    const check = (current) => {
        if (items[current].id === items[prev].id) {
            items[current].stat = "correct";
            items[prev].stat = "correct";
            setItems([...items]);
            setPrev(-1);
            incrementScore(); // Increment score if correct pair
        } else {
            items[current].stat = "wrong";
            items[prev].stat = "wrong";
            setItems([...items]);
            setTimeout(() => {
                items[current].stat = "";
                items[prev].stat = "";
                setItems([...items]);
                setPrev(-1);
                switchPlayer(); // Switch player after incorrect pairs
            }, 1000);
        }
    };

    const handleClick = (id) => {
        if (prev === -1) {
            items[id].stat = "active";
            setItems([...items]);
            setPrev(id);
        } else {
            check(id);
        }
    };

    return (
        <>
            <Heading />
            <ExitBtn />
            <div className='flex mt-10 justify-evenly'>
                <PlayerOne score={playerOneScore} currentPlayer={currentPlayer} playerName={player1Name} />
                <div className='board'>
                    {items.map((item, index) => (
                        <Card key={index} item={item} handleClick={handleClick} id={index} />
                    ))}
                </div>
                <PlayerTwo score={playerTwoScore} currentPlayer={currentPlayer} playerName={player2Name} />
            </div>
        </>
    );
};

export default Board;
