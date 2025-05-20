// components/AddWord.jsx
import React, { useState } from "react";

export default function AddWord() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const saveWord = () => {
    const words = JSON.parse(localStorage.getItem("words") || "[]");
    words.push({ word, meaning });
    localStorage.setItem("words", JSON.stringify(words));
    setWord("");
    setMeaning("");
    alert("단어가 저장되었습니다!");
  };

  return (
    <div className="space-y-4">
      <input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="영어 단어"
        className="w-full p-2 border rounded"
      />
      <input
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
        placeholder="뜻"
        className="w-full p-2 border rounded"
      />
      <button
        onClick={saveWord}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        저장
      </button>
    </div>
  );
}
