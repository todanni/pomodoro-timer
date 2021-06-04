import React from 'react';
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';
import {
    finishSession,
    selectDuration,
    selectIsBreakTime,
    selectIsFinalSession,
    selectIsRunning,
    selectReset
} from "./timerSlice";

export default function Timer(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isRunning = useSelector(selectIsRunning);
    const key = useSelector(selectReset);
    const duration = useSelector(selectDuration);
    const breakTime = useSelector(selectIsBreakTime);
    const finalSession = useSelector(selectIsFinalSession);

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
        if (!finalSession) {
            dispatch(finishSession());
        }
        return [!(finalSession && breakTime), 0]
    }

    return(
        <div className={classes.timerContainer}>
            <CountdownCircleTimer
                isPlaying={isRunning}
                key={key}
                size={350}
                duration={duration}
                initialRemainingTime={duration}
                colors={ breakTime ? breakColours : workColours }
                onComplete={() => onCompleteHandler()}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div>
    );
}

const workColours = [
    ['#004777', 0.33],
    ['#F7B801', 0.33],
    ['#A30000', 0.33],
];

const breakColours = [
    ["#00FF00", 0.5],
    ["#FFFF00", 0.5],
];