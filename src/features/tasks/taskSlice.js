import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {id: 0, title: 'Placeholder non-completed task', done: false},
        {id: 1, title: 'Placeholder completed task', done: true}
    ],
};

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,

    reducers: {
        complete: state => {
        },
        add: state => {

        },
    },
})

export const {complete, add} = taskSlice.actions;

// Selectors
export const selectTasks = (state) => state.tasks;

export default taskSlice.reducer;