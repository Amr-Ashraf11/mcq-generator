import React from 'react';
import { Check, X } from 'lucide-react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, selectedAnswer: number) => void;
  selectedAnswer?: number;
}

export default function QuestionCard({ question, onAnswer, selectedAnswer }: QuestionCardProps) {
  const isAnswered = selectedAnswer !== undefined;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-lg font-medium text-gray-800 mb-4">{question.question}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = question.correctAnswer === index;
          const showCorrect = isAnswered && isCorrect;
          const showIncorrect = isAnswered && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => !isAnswered && onAnswer(question.id, index)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center justify-between
                ${isAnswered ? 'cursor-default' : 'hover:bg-indigo-50 cursor-pointer'}
                ${showCorrect ? 'bg-green-100 border-green-500' : ''}
                ${showIncorrect ? 'bg-red-100 border-red-500' : ''}
                ${isSelected && !isAnswered ? 'bg-indigo-100 border-indigo-500' : ''}
                ${!isSelected && !isAnswered ? 'border border-gray-200' : 'border'}
              `}
            >
              <span className="flex-1">{option}</span>
              {showCorrect && <Check className="w-5 h-5 text-green-600" />}
              {showIncorrect && <X className="w-5 h-5 text-red-600" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}