import {createSlice, current} from '@reduxjs/toolkit';

const initialState = {
    isRunning: false,
    reset: 0,
    showSettings: false,
    currentSession: 0,
    sessionsConfig: [
        {numberOfSessions: 4, breakDuration: 10, workDuration: 50},
        {numberOfSessions: 1, breakDuration: 60, workDuration: 50},
        {numberOfSessions: 4, breakDuration: 10, workDuration: 50},
    ],
    sessions: [ {breakDuration: 10, workDuration: 50} ],
    breakTime: false,
    finalSession: false,
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
        saveSessionConfig: (state, action) => {
            state.sessionsConfig = action.payload;
        },
        saveSessions: (state, action) => {
            state.sessions = action.payload;
        },
        finishSession: state => {
            if(state.breakTime){
                state.currentSession += 1;
            }
            else {
                state.breakTime = !state.breakTime
            }
        }
    },
})

export const {stop, pause, start, showSettings, hideSettings, saveSessionConfig, saveSessions, finishSession} = timerSlice.actions;

// Selectors
export const selectIsRunning = (state) => state.timer.isRunning;

export const selectReset = (state) => state.timer.reset;

export const selectShowSettings = (state) => state.timer.showSettings;

export const selectDuration = (state) => {
    if (state.breakTime) {
        return state.timer.sessions[state.timer.currentSession].breakDuration;
    }
    return state.timer.sessions[state.timer.currentSession].workDuration;
};

export const selectIsBreakTime = (state) => state.timer.breakTime;

export const selectIsFinalSession = (state) => state.timer.sessions.length === state.timer.currentSession + 1;

export default timerSlice.reducer;