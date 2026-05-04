"use client";

import { useState, useEffect } from "react";
import { questionBank, Question } from "../../data/questions";

function getNextQuestion(
  exam: string,
  section: string,
  difficulty: string
): Question | null {
  const filtered = questionBank.filter(
    (q) =>
      q.exam === exam &&
      q.section === section &&
      q.difficulty === difficulty
  );

  if (filtered.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

export default function PracticePage() {
  const [exam, setExam] = useState("SAT");
  const [section, setSection] = useState("Math");
  const [difficulty, setDifficulty] = useState("Easy");
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [topicStats, setTopicStats] = useState<{
    [key: string]: { correct: number; total: number };
  }>({});

  useEffect(() => {
    const first = getNextQuestion(exam, section, difficulty);
    setCurrentQuestion(first);

    setScore(0);
    setSelected(null);
    setIsCorrect(null);
    setTopicStats({});
  }, [exam, section]);

  if (!currentQuestion) {
    return (
      <div className="text-white p-10">
        No questions available for this selection.
      </div>
    );
  }

  function handleAnswer(choice: string) {
    if (selected || !currentQuestion) return;

    setSelected(choice);

    const correct = choice === currentQuestion.correctAnswer;

    setIsCorrect(correct);
    if (correct) setScore((prev) => prev + 1);

    setTopicStats((prev) => {
      const topic = currentQuestion.topic;
      const existing = prev[topic] || { correct: 0, total: 0 };

      return {
        ...prev,
        [topic]: {
          correct: existing.correct + (correct ? 1 : 0),
          total: existing.total + 1,
        },
      };
    });

    // Adaptive difficulty
    if (correct) {
      if (difficulty === "Easy") setDifficulty("Medium");
      else if (difficulty === "Medium") setDifficulty("Hard");
    } else {
      if (difficulty === "Hard") setDifficulty("Medium");
      else if (difficulty === "Medium") setDifficulty("Easy");
    }
  }

  function nextQuestion() {
    const next = getNextQuestion(exam, section, difficulty);

    setCurrentQuestion(next);
    setSelected(null);
    setIsCorrect(null);
  }

  function resetQuiz() {
    setScore(0);
    setSelected(null);
    setIsCorrect(null);
    setTopicStats({});
    setDifficulty("Easy");
    const first = getNextQuestion(exam, section, "Easy");
    setCurrentQuestion(first);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Practice Mode</h1>
        <div className="mt-6 flex gap-4">
          <select
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            className="rounded-lg bg-slate-800 px-4 py-2"
          >
            <option value="SAT">SAT</option>
            <option value="ACT">ACT</option>
          </select>

          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="rounded-lg bg-slate-800 px-4 py-2"
          >
            <option value="Math">Math</option>
            <option value="Reading">Reading</option>
          </select>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="rounded-lg bg-slate-800 px-4 py-2"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="mt-2 text-slate-300">
          Score: <span className="font-bold">{score}</span>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Topic Performance</h2>
          <div className="mt-2 space-y-1 text-slate-300">
            {Object.entries(topicStats).map(([topic, stats]) => {
              const percent = Math.round(
                (stats.correct / stats.total) * 100
              );
              return (
                <div key={topic}>
                  {topic}: {percent}% ({stats.correct}/{stats.total})
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            {currentQuestion.topic}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {currentQuestion.difficulty}
          </p>
          <h2 className="mt-4 text-2xl font-semibold">
            {currentQuestion.text}
          </h2>

          <div className="mt-6 grid gap-3">
            {currentQuestion.choices.map((choice) => {
              let style = "border-slate-700";

              if (selected) {
                if (choice === currentQuestion.correctAnswer) {
                  style = "border-green-500 bg-green-500/20";
                } else if (choice === selected) {
                  style = "border-red-500 bg-red-500/20";
                }
              }

              return (
                <button
                  key={choice}
                  onClick={() => handleAnswer(choice)}
                  className={`rounded-xl border px-4 py-3 text-left ${style}`}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {isCorrect !== null && (
            <div className="mt-6 text-lg font-semibold">
              {isCorrect ? "Correct!" : "Incorrect."}
            </div>
          )}

          {selected && (
            <div className="mt-4 rounded-xl bg-slate-800 p-4 text-slate-200">
              <p className="font-semibold">Explanation:</p>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          {selected && (
            <div className="mt-6 flex gap-4">
              <button
                onClick={nextQuestion}
                className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950"
              >
                Next Question
              </button>
              <button
                onClick={resetQuiz}
                className="rounded-xl bg-slate-700 px-6 py-3 font-semibold text-white"
              >
                Reset Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
