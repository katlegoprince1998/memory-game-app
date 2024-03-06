import React, { useState } from 'react';
import Board from "./components/Board";
import Index from "./components/Index";

export default function App() {
    const [informationFilled, setInformationFilled] = useState(false);
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');

    // Function to handle information filling completion
    const handleInformationFilled = (player1Name, player2Name) => {
        setInformationFilled(true);
        setPlayer1Name(player1Name);
        setPlayer2Name(player2Name);
    };

    return (
        <>
            {!informationFilled && 
                <Index 
                    onInformationFilled={handleInformationFilled} 
                />
            }
            {informationFilled && 
                <Board 
                    player1Name={player1Name}
                    player2Name={player2Name}
                />
            }
        </>
    );
}
