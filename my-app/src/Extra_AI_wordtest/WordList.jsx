// components/WordList.jsx
import React, { useState, useEffect } from "react";

export default function WordList() {
  const [words, setWords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editWord, setEditWord] = useState("");
  const [editMeaning, setEditMeaning] = useState("");

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

  const startEdit = (index) => {
    setEditIndex(index);
    setEditWord(words[index].word);
    setEditMeaning(words[index].meaning);
  };

  const saveEdit = () => {
    const updated = [...words];
    updated[editIndex] = { word: editWord, meaning: editMeaning };
    setWords(updated);
    localStorage.setItem("words", JSON.stringify(updated));
    setEditIndex(null);
    setEditWord("");
    setEditMeaning("");
  };

  return (
    <ul className="space-y-2">
      {words.map((w, i) => (
        <li key={i} className="p-2 border rounded">
          {editIndex === i ? (
            <div className="space-y-2">
              <input
                value={editWord}
                onChange={(e) => setEditWord(e.target.value)}
                className="w-full p-1 border rounded"
              />
              <input
                value={editMeaning}
                onChange={(e) => setEditMeaning(e.target.value)}
                className="w-full p-1 border rounded"
              />
              <button
                onClick={saveEdit}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                저장
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <strong>{w.word}</strong> - {w.meaning}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(i)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  수정
                </button>
                <button
                  onClick={() => deleteWord(i)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  삭제
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
