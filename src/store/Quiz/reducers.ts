import { PayloadAction } from "@reduxjs/toolkit"
import { Quizes } from "../../interface/store"

export const setQuizes = (state: any, action: any) => {
    state.Quizes = action.payload
}
export const setQuiz = (state: any, action: any) => {
    state.Quiz = action.payload
}
export const updateQuiz = (state: any, action: any) => {
    let id = action?.payload?.quiz_id;
    let index = state?.Quizes?.findIndex((item: any) => item.id === id)
    if (index >= 0) {
        let newState = [...state.Quizes];
        newState[index] = action.payload.quiz;
        state.quizes = newState
    }
}
export const newToQuizes = (state: Quizes, action: any) => {
    let Quizes = [...state.Quizes], newQuiz = { ...state.newQuiz }
    newQuiz.id = Quizes[Quizes.length - 1].id + 25;
    let list = [...Quizes, newQuiz]
    state.Quizes = list;
}
export const editNewQuiz = (state: Quizes, action: PayloadAction<{ element: string, data: any }>) => {
    let newQuiz: any = state.newQuiz
    newQuiz[action?.payload?.element] = action.payload.data;
    state.newQuiz = newQuiz;
}
export const editQuiz = (state: Quizes, action: PayloadAction<{ element: string, data: any }>) => {
    let Quiz: any = state.Quiz;
    Quiz[action.payload.element] = action.payload.data
    state.Quiz = Quiz
}
export const editQuestion = (state: Quizes, action: PayloadAction<{ element: string, data: any }>) => {
    let Question: any = { ...state.Question };
    Question[action.payload.element] = action.payload.data;
    state.Question = Question
}
export const editAnswer = (state: Quizes, action: PayloadAction<{ element: string, data: any }>) => {
    let Answer: any = { ...state.Answer };
    Answer[action.payload.element] = action.payload.data;
    state.Answer = Answer
}
export const initializeAnswer = (state: Quizes, action: any) => {
    let Answer = {
        id: "",
        is_true: false,
        text: ""
    }
    state.Answer = Answer
}
export const initializeQuestion = (state: Quizes, action: any) => {
    let Question = {
        answer_id: null,
        answers: [
            {
                id: "",
                is_true: false,
                text: "",
            }
        ],
        feedback_false: "",
        feedback_true: "",
        id: "",
        text: ""
    }
    state.Question = Question
}
const exports = { setQuizes, setQuiz, updateQuiz, newToQuizes, editQuiz, editNewQuiz, editQuestion, editAnswer, initializeAnswer, initializeQuestion };
export default exports;