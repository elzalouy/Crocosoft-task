import { Quizes } from "interface/store";

const initialState: Quizes = {
    Quizes: [{
        id: "",
        title: "",
        url: "",
        score: 0,
        description: '',
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
    }],
    Quiz: {
        id: "",
        title: "",
        url: "",
        score: 0,
        description: "",
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
        }],
    },
    newQuiz: {
        id: "",
        title: "",
        url: "",
        score: 0,
        description: "",
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
    },
    editQuiz: {
        id: "",
        title: "",
        url: "",
        score: 0,
        description: "",
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
    },
    Question: {
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
    },
    Answer: {
        id: "",
        is_true: false,
        text: ""
    }
}
export default initialState;