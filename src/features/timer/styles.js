import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    timer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    timerContainer: {
        margin: '20px',
        display: "flex",
        justifyContent: 'center'
    },
    text: {
        color: theme.palette.primary,
        fontSize: '20px',
    },
    value: {
        fontSize: '45px',
    },

}));