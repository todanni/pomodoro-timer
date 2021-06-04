import {Box, Checkbox, IconButton, InputBase} from "@material-ui/core";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {addTask, selectTasks, updateTaskStatus} from "./taskSlice";


export default function TasksBoard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    const handleOnCreate = (e) => {
        // If Enter is pressed and the task isn't empty
        if(e.charCode === 13 && e.target.value !== "" ) {
            dispatch(addTask({title: e.target.value, done: false}))
            e.target.value = "";
        }
    }

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
                    onKeyPress={handleOnCreate}
                    inputProps={{style: {fontSize: 14}}}
                />
            </Box>
            {tasks.map((task, index) =>
                (<Task key={index} task={task} index={index} loading={false}/>))}
        </Box>
    );
}

function Task(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Box className={classes.task}>
            <IconButton size="small">
                <DragIndicatorIcon color="disabled"/>
            </IconButton>
            <Checkbox checked={props.task.done} onClick={() => dispatch(updateTaskStatus(props.index))}/>
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