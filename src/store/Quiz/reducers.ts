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
const exports = { setQuizes, setQuiz, updateQuiz };
export default exports;