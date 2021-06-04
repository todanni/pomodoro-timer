import {Box, Checkbox, IconButton, InputBase} from "@material-ui/core";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {addTask, selectTasks, setTasks, updateTaskStatus} from "./taskSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


export default function TasksBoard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    const handleOnCreate = (e) => {
        if(e.charCode === 13) {
            dispatch(addTask({title: e.target.value, done: false}))
            e.target.value = "";
        }
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            tasks,
            result.source.index,
            result.destination.index
        );

        dispatch(setTasks(items));
    }

    return (
        <div>
            <CreateTask handleOnCreate={handleOnCreate}/>
            <DragDropContext onDragEnd={onDragEnd} className={classes.task}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {tasks.map((task, index) => (
                                <Draggable key={"some_random_key" +index} draggableId={"some_random_key" +index} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Task task={task} index={index}/>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>

    );
}

function CreateTask(props) {
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
                    onKeyPress={props.handleOnCreate}
                    inputProps={{style: {fontSize: 14}}}
                />
            </Box>
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


// const handleOnCreate = (e) => {
//     // If Enter is pressed and the task isn't empty
//     if(e.charCode === 13 && e.target.value !== "" ) {
//         dispatch(addTask({title: e.target.value, done: false}))
//         e.target.value = "";
//     }
// }
