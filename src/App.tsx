import React from 'react';
import { BookOpen } from 'lucide-react';
import TextInput from './components/TextInput';
import QuestionList from './components/QuestionList';
import { generateQuestionsFromText } from './utils/questionGenerator';
import type { Question } from './types';

function App() {
  const [questions, setQuestions] = React.useState<Question[]>([]);

  const handleTextSubmit = (text: string) => {
    const generatedQuestions = generateQuestionsFromText(text);
    setQuestions(generatedQuestions);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">MCQ Generator</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <TextInput onTextSubmit={handleTextSubmit} />
          
          {questions.length > 0 && (
            <QuestionList questions={questions} />
          )}

          {questions.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              <p className="text-lg">Paste your text above to generate multiple-choice questions.</p>
              <p className="text-sm mt-2">The generator will analyze your text and create relevant questions.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="mt-auto py-6 text-center text-gray-500">
        <p>© 2024 MCQ Generator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;