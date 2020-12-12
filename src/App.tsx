import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Board, Winner } from './Board';
import { ResetSCreen } from './ResetScreen';
import { StartScreen } from './StartScreen';

const variants = {
  start: { opacity: 1, scale: 1, width: "100px", height: "50px", transition: { type: "spring", duration: 0.8 } },
  game: { opacity: 1, scale: 1, width: "250px", height: "250px", transition: { type: "spring", duration: 0.8 } },
  reset: { opacity: 1, scale: 1, width: "175px", height: "150px", transition: { type: "spring", duration: 0.8 } },
  hidden: { opacity: 0, scale: 0.8 }
}

const BoardContainer = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants,
}))`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px #00000033;
  border: 20px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
  font-size: 4rem;
  text-shadow: -3px 3px #00000066;
  font-family: "Varela Round";
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
      <Heading>Tic-Tac-Toe</Heading>
      <BoardContainer animate={gameState}>
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
