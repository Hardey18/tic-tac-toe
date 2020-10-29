import React, { useState } from 'react';
import styled from 'styled-components';
import { Board, Winner } from './Board';
import { ResetSCreen } from './ResetScreen';
import { StartScreen } from './StartScreen';

// const Button = styled.a<{ primary?: boolean }>`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;

//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${props => props.primary && css`
//     background: white;
//     color: black;
//   `}
// `

const BoardContainer = styled.div`
  background: #ffffff;
  width: 500px;
  height: 500px;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px #00000033;
  border: 20px solid #ffffff;
`;

type GameState = "start" | "game" | "reset";

function App() {
  const [winner, setWinner] = useState<Winner>();
  const [gameState, setGameState] = useState<GameState>("start")

  const onStart = () => {
    setGameState("game")
  }

  const onGameEnd = (winner: Winner) => {
    setWinner(winner)
    setGameState("reset")
  }

  const onReset = () => {
    setWinner(undefined)
    setGameState("game")
  }

  return (
    <>
      <BoardContainer>
        {{
          start: <StartScreen onStart={onStart} />,
          game: <Board onGameEnd={onGameEnd} />,
          reset: <ResetSCreen winner={winner} onReset={onReset} />
        }[gameState]}
      </BoardContainer>
    </>
  );
}

export default App;
