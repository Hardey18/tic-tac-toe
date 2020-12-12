import React, { FC } from 'react';
import styled from 'styled-components';
import { Winner } from './Board';
import { StartButton } from './StartButton';

type ResetScreenProps = {
    winner: Winner;
    onReset(): void;
}

const WinnerHeading = styled.h2`
  color: #333;
  text-align: center;
  margin-top: 0;
  font-size: 2rem;
  font-family: "Varela Round";
  display: block;
`;

export const ResetSCreen:FC<ResetScreenProps> = ({winner, onReset}) => {
    return (
        <>
            <WinnerHeading>{winner === "tie" ? "It's a tie" : `${winner} is a winner`}</WinnerHeading>
            <StartButton onClick={onReset}>Restart</StartButton>
        </>
    )
}