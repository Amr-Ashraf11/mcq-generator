export function generateQuestionsFromText(text: string) {
  // This is a simple implementation. In a production environment,
  // you'd want to use NLP or an AI service to generate better questions.
  const sentences = text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 20);

  return sentences.slice(0, 5).map((sentence, index) => {
    const words = sentence.split(' ').filter(w => w.length > 4);
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    return {
      id: `q-${index}`,
      question: `What word completes this sentence: "${sentence.replace(randomWord, '_____')}"?`,
      options: [
        randomWord,
        words[Math.floor(Math.random() * words.length)],
        words[Math.floor(Math.random() * words.length)],
        words[Math.floor(Math.random() * words.length)],
      ].filter((v, i, a) => a.indexOf(v) === i).slice(0, 4),
      correctAnswer: 0,
    };
  });
}