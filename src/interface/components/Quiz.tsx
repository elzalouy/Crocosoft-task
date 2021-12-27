import { Answer, Questions_answers } from "interface/store";
import { Quiz, Quizes } from "../store/Quiz";

export declare interface QuizesProps {
  Quizes: Quizes;
}
export declare interface EditQuizProps {
  quiz_id: string;
}
export declare interface QuizProps {
  Quiz: Quiz;
}
export declare interface QuizCardProps {
  id: string;
  title: string;
  url: string;
  description: string;
  score: number;
  questions: number;
}
export declare interface QuestionCardProps {
  Question: Questions_answers;
}
export declare interface QuizInfoProps {
  onChnage: (arg: any) => void;
  setComplete: (arg: any | undefined) => void;
  completed: boolean;
  Quiz: Quiz;
}
export declare interface QuizQuestionsProps {
  onAddQuestion: (arg: any) => void;
  onEditQuestion: (arg: any) => void;
  onAddAnswer: (arg: any) => void;
  onEditAnswer: (arg: any) => void;
  onAddQuiz: (arg: any) => void;
  setComplete: (arg: any | undefined) => void;
  completed: boolean;
  Question: Questions_answers;
  Answer: Answer;
}
