import React, {useState} from 'react';
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';
import {selectDuration, selectIsRunning, selectReset} from "./timerSlice";

export default function Timer(props) {
    const classes = useStyles();
    const isRunning = useSelector(selectIsRunning);
    const duration = useSelector(selectDuration);
    const key = useSelector(selectReset);

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className={classes.timer}>Break time</div>;
        }
        return (
            <div className={classes.timer}>
                <div className={classes.text}>Remaining</div>
                <div className={classes.value}>{remainingTime}</div>
                <div className={classes.text}>seconds</div>
            </div>
        );
    };

    return(
        <div className={classes.timerContainer}>
            <CountdownCircleTimer
                isPlaying={isRunning}
                key={key}
                size={350}
                duration={duration}
                initialRemainingTime={duration}
                colors={[["#004777", 1]]}
                onComplete={() => [true, 1000]}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div>
    );
}
