import React from 'react';
import type { Question } from '../types';
import QuestionCard from './QuestionCard';

interface QuestionListProps {
  questions: Question[];
}

export default function QuestionList({ questions }: QuestionListProps) {
  const [answers, setAnswers] = React.useState<Record<string, number>>({});

  const handleAnswer = (questionId: string, selectedAnswer: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));
  };

  const calculateScore = () => {
    const answeredQuestions = Object.keys(answers).length;
    const correctAnswers = questions.reduce((acc, question) => {
      return acc + (answers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);
    return { answeredQuestions, correctAnswers };
  };

  const { answeredQuestions, correctAnswers } = calculateScore();

  return (
    <div className="w-full max-w-3xl">
      {answeredQuestions > 0 && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <p className="text-center text-lg">
            Score: <span className="font-bold text-indigo-600">{correctAnswers}</span> / {answeredQuestions}
          </p>
        </div>
      )}
      {questions.map(question => (
        <QuestionCard
          key={question.id}
          question={question}
          onAnswer={handleAnswer}
          selectedAnswer={answers[question.id]}
        />
      ))}
    </div>
  );
}