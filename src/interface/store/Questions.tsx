export interface Questions_answers {
  answer_id: null;
  answers: Answer[];
  feedback_false: string;
  feedback_true: string;
  id: string;
  text: string;
}

export interface Answer {
  id: string;
  is_true: boolean;
  text: string;
}
