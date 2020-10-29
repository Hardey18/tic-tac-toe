import React, { FC } from 'react';
import { Winner } from './Board';

type ResetScreenProps = {
    winner: Winner;
    onReset(): void;
}

export const ResetSCreen:FC<ResetScreenProps> = ({winner, onReset}) => {
    return (
        <>
            <h2>{winner} is a winner</h2>
            <button onClick={onReset}>Restart</button>
        </>
    )
}