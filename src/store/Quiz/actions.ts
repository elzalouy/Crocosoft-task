import { useSelector } from "react-redux";
import { mock } from "src/mock/mock"
import { QuizActions } from "./index";
export const getQuizes = () => {
    return (dispatch: any) => {
        dispatch(QuizActions.setQuizes(mock))
    };
};

// export const getQuiz = (id: any) => {
//     return (dispatch: any) => {
//         let index = mock.findIndex(i => i.id === parseInt(id));
//         if (index >= 0) {
//             dispatch(QuizActions.setQuiz(Quiz))
//         }
//     }
// }