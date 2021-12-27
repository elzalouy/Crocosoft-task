import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import Reducers from './reducers';

export const QuizSlice = createSlice({
    name: 'quiz',
    initialState: initialState,
    reducers: Reducers
})
export type QuizState = ReturnType<typeof QuizSlice.reducer>;
export const QuizActions = QuizSlice.actions;
export default QuizSlice.reducer;