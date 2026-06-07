"use client";

import { useState } from "react";
import app from "../../firebase";

import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";

const db = getFirestore(app);

export default function VideosPage() {

  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const addVideo = async () => {

    if (!title || !videoLink) {
      alert("Fill all fields");
      return;
    }

    await addDoc(collection(db, "videos"), {
      title,
      videoLink,
      createdAt: new Date(),
    });

    alert("Video Added");

    setTitle("");
    setVideoLink("");
  };

  return (
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Videos Management 🎥
      </h1>

      <div className="bg-[#0f1b33] p-6 rounded-2xl max-w-2xl space-y-5">

        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#1b2a4a]"
        />

        <input
          type="text"
          placeholder="YouTube Video Link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#1b2a4a]"
        />

        <button
          onClick={addVideo}
          className="bg-green-500 px-6 py-3 rounded-xl font-bold"
        >
          Save Video
        </button>

      </div>

    </main>
  );
}