import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux'
import QuizSlice from './Quiz';

export const store = configureStore({
    reducer: {
        Quiz: QuizSlice
    }
});
export default store;
