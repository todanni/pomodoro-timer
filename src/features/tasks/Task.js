import {Box, Checkbox, IconButton, InputBase} from "@material-ui/core";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import useStyles from './styles';

const tasks = [
    {id: 0, title: 'Placeholder non-completed task', done: false},
    {id: 1, title: 'Placeholder completed task', done: true}
];

export default function TasksBoard(props) {
    const classes = useStyles();

    return (
        <Box className={classes.tasksRoot}>
            <Box className={classes.task}>
                <IconButton size="small">
                    <DragIndicatorIcon color="disabled"/>
                </IconButton>
                <Checkbox/>
                <InputBase
                    className={classes.input}
                    placeholder="Create new task..."
                    // onKeyPress={handleOnCreate}
                    inputProps={{style: {fontSize: 14}}}
                />
            </Box>
            {tasks.map((task, index) =>
                (<Task key={task.id} task={task} index={index} loading={false}/>))}
        </Box>
    );
}

function Task(props) {
    const classes = useStyles();

    return (
        <Box className={classes.task}>
            <IconButton size="small">
                <DragIndicatorIcon color="disabled"/>
            </IconButton>
            <Checkbox checked={props.task.done}/>
            <TaskTitle task={props.task}/>
        </Box>
    );
}

function TaskTitle(props) {
    const classes = useStyles();

    return (
        <InputBase
            readOnly={true}
            className={classes.input}
            value={props.task.title}
            inputProps={{style: {fontSize: 14}}}
        />
    );
}