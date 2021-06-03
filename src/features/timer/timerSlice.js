import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isRunning: false,
    reset: 0,
    workDuration: 50,
    breakDuration: 10,
    showSettings: false,
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,

    reducers: {
        stop: state => {
            state.isRunning = false;
            state.reset = state.reset + 1;
        },
        pause: state => {
            state.isRunning = false;
        },
        start: state => {
            state.isRunning = true;
        },
        showSettings: state => {
            state.showSettings = true;
        },
        hideSettings: state => {
            state.showSettings = false;
        },
    },
})

export const {stop, pause, start, showSettings, hideSettings} = timerSlice.actions;

// Selectors
export const selectIsRunning = (state) => state.timer.isRunning;

export const selectDuration = (state) => state.timer.workDuration;

export const selectReset = (state) => state.timer.reset;

export const selectShowSettings = (state) => state.timer.showSettings;

export default timerSlice.reducer;