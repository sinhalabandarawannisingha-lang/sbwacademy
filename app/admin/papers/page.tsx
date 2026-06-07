"use client";

import { useState } from "react";
import app from "../../firebase";

import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

const db = getFirestore(app);

export default function PapersPage() {

  const [title, setTitle] = useState("");
  const [pdfLink, setPdfLink] = useState("");

  const addPaper = async () => {

    if (!title || !pdfLink) {
      alert("Fill all fields");
      return;
    }

    try {

      await addDoc(collection(db, "papers"), {
        title,
        pdfLink,
        createdAt: new Date(),
      });

      alert("Paper Added Successfully");

      setTitle("");
      setPdfLink("");

    } catch (error) {

      alert("Error Saving Paper");

    }

  };

  return (
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Papers Management 📑
      </h1>

      <div className="bg-[#0f1b33] p-6 rounded-2xl max-w-2xl space-y-5">

        <input
          type="text"
          placeholder="Paper Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#1b2a4a]"
        />

        <input
          type="text"
          placeholder="Google Drive PDF Link"
          value={pdfLink}
          onChange={(e) => setPdfLink(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#1b2a4a]"
        />

        <button
          onClick={addPaper}
          className="bg-green-500 px-6 py-3 rounded-xl font-bold"
        >
          Save Paper
        </button>

      </div>

    </main>
  );
}