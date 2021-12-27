import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux'
import QuizSlice from './Quiz';
const rootReducers = combineReducers({ Quiz: QuizSlice })
export const store = configureStore({
    reducer: rootReducers
});
export default store;
export type RootState = ReturnType<typeof rootReducers>;
