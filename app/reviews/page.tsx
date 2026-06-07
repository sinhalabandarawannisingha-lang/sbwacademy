"use client";

import { useState } from "react";
import app from "../firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const db = getFirestore(app);

export default function ReviewsPage() {

  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const submitReview = async () => {

    if (!name || !review) {
      alert("Fill all fields");
      return;
    }

    try {

      await addDoc(collection(db, "reviews"), {
        name,
        review,
        approved: false,
        createdAt: new Date(),
      });

      alert("Review Submitted");

      setName("");
      setReview("");

    } catch (error) {

      alert("Error submitting review");

    }

  };

  return (
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Student Reviews ⭐
      </h1>

      <div className="bg-[#0f1b33] p-6 rounded-2xl space-y-5 max-w-2xl">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#1b2a4a]"
        />

        <textarea
          placeholder="Write your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#1b2a4a] h-40"
        />

        <button
          onClick={submitReview}
          className="bg-green-500 px-6 py-3 rounded-xl font-bold"
        >
          Submit Review
        </button>

      </div>

    </main>
  );
}