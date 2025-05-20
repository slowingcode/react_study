import React, { useState } from "react";

export default function ReverseQuiz() {
  const allWords = JSON.parse(localStorage.getItem("words") || "[]");
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [results, setResults] = useState([]);

  if (allWords.length === 0) return <p>저장된 단어가 없습니다.</p>;

  const checkAnswer = () => {
    const correct = input.trim() === allWords[current].meaning;
    if (correct) {
      setScore(score + 1);
    }
    setResults((prev) => [
      ...prev,
      {
        word: allWords[current].word,
        meaning: allWords[current].meaning,
        userAnswer: input.trim(),
        correct,
      },
    ]);
    if (current + 1 === allWords.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
      setInput("");
    }
  };

  if (done) {
    return (
      <div className="space-y-4">
        <p>
          테스트 완료! 점수: {score} / {allWords.length}
        </p>
        <ul className="space-y-2">
          {results.map((r, i) => (
            <li
              key={i}
              className={`p-2 border rounded ${
                r.correct ? "border-green-500" : "border-red-500"
              }`}
            >
              <div>
                <strong>단어:</strong> {r.word}
              </div>
              <div>
                <strong>입력한 뜻:</strong> {r.userAnswer}
              </div>
              <div>
                <strong>정답 뜻:</strong> {r.meaning}
              </div>
              <div className={r.correct ? "text-green-600" : "text-red-600"}>
                {r.correct ? "정답" : "오답"}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-lg">단어: {allWords[current].word}</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="뜻 입력"
        className="w-full p-2 border rounded"
      />
      <button
        onClick={checkAnswer}
        className="px-4 py-2 bg-yellow-600 text-white rounded"
      >
        제출
      </button>
    </div>
  );
}
