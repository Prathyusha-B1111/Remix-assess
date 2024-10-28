export type QuizComponent = {
  id: string;
  type: 'progressBar' | 'questionNumber' | 'timer' | 'questionText' | 'image' | 'option';
  content: string;
  position: { x: number; y: number };
};

export type QuizQuestion = {
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: number;
  imageUrl?: string;
};

export type QuizConfig = {
  components: QuizComponent[];
};
