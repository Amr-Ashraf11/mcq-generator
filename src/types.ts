export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface MCQSet {
  id: string;
  title: string;
  questions: Question[];
}