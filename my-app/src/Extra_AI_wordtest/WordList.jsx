// components/WordList.jsx
import React, { useState, useEffect } from "react";

export default function WordList() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("words") || "[]");
    setWords(stored);
  }, []);

  const deleteWord = (index) => {
    const updated = [...words];
    updated.splice(index, 1);
    setWords(updated);
    localStorage.setItem("words", JSON.stringify(updated));
  };

  return (
    <ul className="space-y-2">
      {words.map((w, i) => (
        <li
          key={i}
          className="p-2 border rounded flex justify-between items-center"
        >
          <div>
            <strong>{w.word}</strong> - {w.meaning}
          </div>
          <button
            onClick={() => deleteWord(i)}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
