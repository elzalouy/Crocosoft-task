import { Quizes } from "interface/store";

const initialState: Quizes = {
    Quizes: [{
        id: "",
        title: "",
        url: "",
        score: 0,
        questions_answers: [{
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
        }]
    }]
}
export default initialState;