import React from 'react';
import useStyles from "./styles";
import {AppBar, CssBaseline, Divider, IconButton, Toolbar} from "@material-ui/core";
import Timer from "../../features/timer/Timer";
import Controls from "../controls";
import TasksBoard from "../../features/tasks/Task";
import SettingsDialog from "../settings";
import SettingsIcon from '@material-ui/icons/Settings';
import {useDispatch} from "react-redux";
import {showSettings} from "../../features/timer/timerSlice";

export default function Dashboard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="absolute">
                <Toolbar className={classes.toolbar}>
                    <img src="https://i.ibb.co/3fPnz9k/white-logo-transparent-background.png"
                         alt="white-logo-transparent-background" className={classes.logo}/>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <SettingsDialog/>
                <IconButton
                    aria-label="stop-timer"
                    onClick={() => dispatch(showSettings())}
                >
                    <SettingsIcon/>
                </IconButton>
                <Timer/>
                <Controls/>
                <Divider/>
                <TasksBoard/>
            </main>
        </div>
    );
}