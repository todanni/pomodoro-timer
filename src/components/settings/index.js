import React from "react";
import useStyles from './styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, IconButton,
    TextField
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import SaveIcon from '@material-ui/icons/Save';
import {hideSettings, selectShowSettings} from "../../features/timer/timerSlice";
import CancelIcon from '@material-ui/icons/Cancel';

export default function SettingsDialog(props){
    const classes = useStyles();
    const open = useSelector(selectShowSettings);
    const dispatch = useDispatch();

    return (
        <div>
            <Dialog open={open}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Setup Sessions</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create the amount of sessions you want and their duration and work/break split.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Session duration"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <IconButton
                        aria-label="stop-timer"
                        color="secondary"
                        onClick={() => dispatch(hideSettings())}
                    >
                        <SaveIcon/>
                    </IconButton>
                    <IconButton
                        aria-label="stop-timer"
                        onClick={() => dispatch(hideSettings())}
                    >
                        <CancelIcon/>
                    </IconButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}