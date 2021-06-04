import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import timerReducer from '../features/timer/timerSlice';
import tasksReducer from '../features/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    tasks: tasksReducer,
  },
});
