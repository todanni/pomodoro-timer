import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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