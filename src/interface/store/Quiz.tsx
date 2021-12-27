import { Answer } from ".";
import { Questions_answers } from "./Questions";

export interface Quiz {
  id: string;
  title: string;
  url: string;
  score: number;
  questions_answers: Questions_answers[];
  description: string;
}
export interface Quizes {
  Quizes: {
    id: string;
    title: string;
    url: string;
    score: number;
    questions_answers: Questions_answers[];
    description: string;
  }[];
  Quiz: Quiz;
  newQuiz: Quiz;
  editQuiz: Quiz;
  Question: Questions_answers;
  Answer: Answer;
}
