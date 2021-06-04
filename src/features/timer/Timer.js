import React from 'react';
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';
import {finishSession, selectDuration, selectIsRunning, selectReset} from "./timerSlice";

export default function Timer(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isRunning = useSelector(selectIsRunning);
    const key = useSelector(selectReset);
    const duration = useSelector(selectDuration);

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className={classes.text}>End of session!</div>;
        }

        const time = new Date(remainingTime * 1000).toISOString().substr(11, 8)

        return (
            <div className={classes.timer}>
                <div className={classes.text}>Remaining</div>
                <div className={classes.value}>{time}</div>
                <div className={classes.text}>Session</div>
            </div>
        );
    };

    const onCompleteHandler = () => {
        dispatch(finishSession());
        return [true, 10000];
    }

    return(
        <div className={classes.timerContainer}>
            <CountdownCircleTimer
                isPlaying={isRunning}
                key={key}
                size={350}
                duration={duration*60}
                initialRemainingTime={duration*60}
                colors={[["#004777", 1]]}
                onComplete={() => onCompleteHandler()}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div>
    );
}