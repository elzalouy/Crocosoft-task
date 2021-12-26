import { Quiz, Quizes } from "../store/Quiz";

export declare interface QuizesProps {
  Quizes: Quizes;
}
export declare interface QuestionsProps {
  quiz_id: string;
}
export declare interface EditQuizProps {
  quiz_id: string;
}
export declare interface QuizProps {
  Quiz: Quiz;
}
export declare interface QuizCardProps {
  title: string;
  url: string;
  description: string;
  score: number;
  questions: number;
}
