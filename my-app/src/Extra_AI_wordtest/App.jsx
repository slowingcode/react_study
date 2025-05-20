// App.jsx
import React, { useState } from "react";
import AddWord from "./AddWord";
import WordList from "./WordList";
import Quiz from "./Quiz";
import ReverseQuiz from "./ReverseQuiz";

export default function App() {
  const [view, setView] = useState("add");

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex justify-around mb-4">
        <button
          onClick={() => setView("add")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          단어 추가
        </button>
        <button
          onClick={() => setView("list")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          단어 목록
        </button>
        <button
          onClick={() => setView("quiz")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          한영 단어 테스트
        </button>
        <button
          onClick={() => setView("reverse")}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          영한 단어 테스트
        </button>
      </div>
      {view === "add" && <AddWord />}
      {view === "list" && <WordList />}
      {view === "quiz" && <Quiz />}
      {view === "reverse" && <ReverseQuiz />}
    </div>
  );
}
