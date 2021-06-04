import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        { title: 'Placeholder non-completed task', done: false},
        { title: 'Placeholder completed task', done: true}
    ],
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        updateTaskStatus: (state, action) => {
            state.tasks[action.payload].done = !state.tasks[action.payload].done;
        },
        setTasks: (state, action) => {
          state.tasks = action.payload;
        },
    },
})

export const {addTask, updateTaskStatus, setTasks} = taskSlice.actions;

// Selectors
export const selectTasks = state => state.tasks.tasks;

// Selector for all non-completed tasks
export const selectNonCompletedTasks = createSelector(
    [selectTasks], tasks => {
        return tasks.filter(task => task.done === false);
    }
);

// Selector for all completed tasks
export const selectCompletedTasks = createSelector(
    [selectTasks], tasks => {
        return tasks.filter(task => task.done === true);
    }
);

export default taskSlice.reducer;