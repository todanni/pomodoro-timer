import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 20,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        backgroundColor: "white",
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    logo: {
        maxWidth: 160,
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
    },
    value: {
        fontSize: '45px',
    },
    buttons: {
        margin: '5px',
    },
    inputsForm: {
        margin: '5px',
    },
    controlsRoot: {
        margin: '10px',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "column",
    },
    task: {
        display: 'flex',
        alignItems: 'center',
        height: '46px',
        flexDirection: 'row',
        width: '100%',
    },
    tasksRoot: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));