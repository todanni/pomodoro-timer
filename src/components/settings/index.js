import React from "react";
import useStyles from './styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {hideSettings, saveSessionConfig, saveSessions, selectShowSettings} from "../../features/timer/timerSlice";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function SettingsDialog(props) {
    const classes = useStyles();
    const open = useSelector(selectShowSettings);
    const dispatch = useDispatch();

    const [sessions, setSessions] = React.useState([]);

    const [sessionsConfig, setSessionsConfig] = React.useState([
        {numberOfSessions: 4, breakDuration: 10, workDuration: 50},
        {numberOfSessions: 1, breakDuration: 60, workDuration: 50},
        {numberOfSessions: 4, breakDuration: 10, workDuration: 50},
    ]);

    const updateSessionRow = (index, field, value) => {
        if(value === "") {
            return
        }
        let newSessionsConfig = [...sessionsConfig]
        newSessionsConfig[index][field] = value;
        setSessionsConfig(newSessionsConfig);
    }

    const addSessionRow = () => {
        const newSessionsConfig = [...sessionsConfig, {numberOfSessions: 1, breakDuration: 60, workDuration: 50}]
        setSessionsConfig(newSessionsConfig);
    }

    const deleteSessionRow = (index) => {
        let newSessionsConfig = [...sessionsConfig];
        newSessionsConfig.splice(index, 1);
        setSessionsConfig(newSessionsConfig);
    }

    const saveConfig = () => {
        let transformedSessions = [];

        sessionsConfig.forEach((sessionRow) => {
            // console.log(sessions)
            for (let i=0; i<sessionRow.numberOfSessions; i++) {
                const sess = {breakDuration: sessionRow.breakDuration, workDuration: sessionRow.workDuration};
                transformedSessions.push(sess)
                setSessions(transformedSessions)
            }
        })
        console.log(transformedSessions);
        dispatch(saveSessionConfig(sessionsConfig));
        dispatch(saveSessions(transformedSessions))
        dispatch(hideSettings())
    }

    return (
        <div>
            <Dialog open={open}
                    aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Setup Sessions</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create the amount of sessions you want and their duration and work/break split.
                    </DialogContentText>
                    {sessionsConfig.map((session, index) =>
                        (
                            <Session
                              key={"session_" + index}
                              updateSessionRow={updateSessionRow}
                              addSessionRow={addSessionRow}
                              deleteSessionRow={deleteSessionRow}
                              index={index}
                              row={session}
                        />))}

                </DialogContent>

                <DialogActions className={classes.actionControls}>

                    {/*Save button*/}
                    <Button color="secondary" variant="contained" className={classes.actionButton}
                            onClick={() => saveConfig() }>
                        Save
                    </Button>

                    {/*Cancel button*/}
                    <Button color="primary" variant="outlined" className={classes.actionButton}
                            onClick={() => dispatch(hideSettings())}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function Session(props) {
    const classes = useStyles();

    return (
        <div className={classes.session}>
            <TextField
                id="outlined-number"
                className={classes.field}
                label="Number of sessions"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={props.row.numberOfSessions}
                variant="outlined"
                onChange={(e) =>
                    props.updateSessionRow(props.index, "numberOfSessions", parseInt(e.target.value, 10))}
            />
            <TextField
                id="outlined-number"
                className={classes.field}
                label="Work interval"
                type="number"
                placeholder="50"
                value={props.row.workDuration}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) =>
                    props.updateSessionRow(props.index, "workDuration", parseInt(e.target.value, 10))}
                variant="outlined"
            />
            <TextField
                id="outlined-number"
                className={classes.field}
                label="Break duration"
                placeholder="10"
                value={props.row.breakDuration}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) =>
                    props.updateSessionRow(props.index, "breakDuration", parseInt(e.target.value, 10))}
                variant="outlined"
            />
            {props.index > 0 ?
                <IconButton
                    aria-label="delete-session"
                    onClick={() => props.deleteSessionRow(props.index)}
                >
                    <DeleteOutlineIcon/>
                </IconButton> :
                <IconButton
                    aria-label="add-session"
                    color="secondary"
                    onClick={() => props.addSessionRow()}
                >
                    <AddCircleIcon/>
                </IconButton>}
        </div>
    );
}