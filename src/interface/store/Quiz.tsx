import { Questions_answers } from "./Questions";

export interface Quizes {
  Quizes: {
    id: string;
    title: string;
    url: string;
    score: number;
    questions_answers: Questions_answers[];
  }[];
}
export interface Quiz {
  id: string;
  title: string;
  url: string;
  score: number;
  questions_answers: Questions_answers[];
}
