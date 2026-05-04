export type Question = {
  text: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
  topic: string;

  exam: string;       // SAT, ACT, etc.
  section: string;    // Math, Reading
  difficulty: string; // Easy, Medium, Hard
};

export const questionBank: Question[] = [
  {
    text: "What is the value of x if 2x + 6 = 14?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "4",
    explanation: "Subtract 6, then divide by 2.",
    topic: "Algebra",
    exam: "SAT",
    section: "Math",
    difficulty: "Easy",
  },
  {
    text: "Solve: 3x = 12",
    choices: ["2", "3", "4", "6"],
    correctAnswer: "4",
    explanation: "Divide both sides by 3.",
    topic: "Algebra",
    exam: "SAT",
    section: "Math",
    difficulty: "Easy",
  },
  {
    text: "What is 10% of 50?",
    choices: ["5", "10", "15", "20"],
    correctAnswer: "5",
    explanation: "0.1 × 50 = 5.",
    topic: "Percentages",
    exam: "SAT",
    section: "Math",
    difficulty: "Easy",
  },
  {
    text: "If f(x) = 2x + 3, what is f(4)?",
    choices: ["8", "10", "11", "12"],
    correctAnswer: "11",
    explanation: "Plug in x = 4 → 2(4) + 3 = 11.",
    topic: "Functions",
    exam: "SAT",
    section: "Math",
    difficulty: "Medium",
  },
  {
    text: "Which sentence is grammatically correct?",
    choices: [
      "She don't like apples.",
      "She doesn't likes apples.",
      "She doesn't like apples.",
      "She not like apples.",
    ],
    correctAnswer: "She doesn't like apples.",
    explanation: "Correct subject-verb agreement.",
    topic: "Grammar",
    exam: "SAT",
    section: "Reading",
    difficulty: "Easy",
  },
  {
    text: "What is the meaning of 'ubiquitous'?",
    choices: [
      "Rare",
      "Everywhere",
      "Confusing",
      "Temporary",
    ],
    correctAnswer: "Everywhere",
    explanation: "Ubiquitous means present everywhere.",
    topic: "Vocabulary",
    exam: "SAT",
    section: "Reading",
    difficulty: "Medium",
  },
  {
  text: "What is 7 × 6?",
  choices: ["36", "40", "42", "48"],
  correctAnswer: "42",
  explanation: "7 × 6 = 42.",
  topic: "Arithmetic",
  exam: "ACT",
  section: "Math",
  difficulty: "Easy",
},
{
  text: "Choose the correct sentence.",
  choices: [
    "They is going to school.",
    "They are going to school.",
    "They going to school.",
    "They be going to school.",
  ],
  correctAnswer: "They are going to school.",
  explanation: "Correct subject-verb agreement.",
  topic: "Grammar",
  exam: "ACT",
  section: "Reading",
  difficulty: "Easy",
},
];