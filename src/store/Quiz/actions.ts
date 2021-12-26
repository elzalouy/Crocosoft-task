import { createAsyncThunk } from "@reduxjs/toolkit"
import { mock } from "src/mock/mock"
import { logging } from '../../config'
import { QuizActions } from "./index"
export const getQuizes = () => {
    console.log(mock)
    return (dispatch: any) => {
        dispatch(QuizActions.setQuizes(mock))
    };
};