import React, { FC } from 'react';
import { StartButton } from './StartButton';

type StartScreenProps = {
    onStart(): void;
}

export const StartScreen:FC<StartScreenProps> = ({onStart}) => {
    return <StartButton onClick={onStart}>Start</StartButton>
}