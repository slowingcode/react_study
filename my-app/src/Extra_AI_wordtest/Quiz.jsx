// components/Quiz.jsx
import React, { useState } from "react";

export default function Quiz() {
  const allWords = JSON.parse(localStorage.getItem("words") || "[]");
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (allWords.length === 0) return <p>저장된 단어가 없습니다.</p>;

  const checkAnswer = () => {
    if (input.trim().toLowerCase() === allWords[current].word.toLowerCase()) {
      setScore(score + 1);
    }
    if (current + 1 === allWords.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
      setInput("");
    }
  };

  if (done) {
    return (
      <p>
        테스트 완료! 점수: {score} / {allWords.length}
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-lg">뜻: {allWords[current].meaning}</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="영어 단어 입력"
        className="w-full p-2 border rounded"
      />
      <button
        onClick={checkAnswer}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        제출
      </button>
    </div>
  );
}
