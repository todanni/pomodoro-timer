import React, {useState} from 'react';
import useStyles from './styles';
import {IconButton} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import {useDispatch} from "react-redux";
import {start, stop, pause} from "../../features/timer/timerSlice";


export default function Controls(props){
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className={classes.controlsRoot}>
            <div className={classes.buttons}>
                <IconButton
                    aria-label="start-timer"
                    onClick={() => dispatch(start())}
                >
                    <PlayArrowIcon/>
                </IconButton>
                <IconButton
                    aria-label="pause-timer"
                    onClick={() => dispatch(pause())}
                >
                    <PauseIcon/>
                </IconButton>
                <IconButton
                    aria-label="stop-timer"
                    onClick={() => dispatch(stop())}
                >
                    <StopIcon/>
                </IconButton>
            </div>
            <form className={classes.inputsForm}>
            </form>
        </div>
    );

}