import { LoaderFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
// import { useLoaderData } from "remix";
import QuizGrid from "~/components/QuizGrid";
import { QuizComponent } from "~/types/quiz";

export const loader: LoaderFunction = async () => {
  const mockQuizData = [
    { id: 1, type: "question", text: "What is the capital of France?" },
    { id: 2, type: "option", text: "Paris" },
    { id: 3, type: "option", text: "Rome" },
  ];

  return json({ quizData: mockQuizData });
};

export default function QuizPage() {
  // Correctly reference `quizData` here instead of `components`
  const { quizData } = useLoaderData<{ quizData: QuizComponent[] }>();

  console.log("quizData in quiz route:", quizData);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      <QuizGrid components={quizData} onDropComponent={() => {}} />
    </div>
  );
}
