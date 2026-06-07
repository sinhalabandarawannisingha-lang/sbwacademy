"use client";

import { useState } from "react";

import app from "../../firebase";

import {
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore";

const db = getFirestore(app);

export default function BookStorePage() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const addBook = async () => {

    if (!title || !price || !image) {

      alert("Fill all fields");

      return;

    }

    try {

      await addDoc(collection(db, "books"), {

        title,
        price,
        image,
        createdAt: new Date(),

      });

      alert("Book Added");

      setTitle("");
      setPrice("");
      setImage("");

    } catch (error) {

      alert("Error adding book");

    }

  };

  return (
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Book Store 📚
      </h1>

      <div className="bg-[#0f1b33] p-6 rounded-2xl space-y-5">

        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#1b2a4a] text-white"
        />

        <input
          type="text"
          placeholder="Book Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#1b2a4a] text-white"
        />

        <input
          type="text"
          placeholder="Book Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#1b2a4a] text-white"
        />

        <button
          onClick={addBook}
          className="bg-green-500 px-6 py-3 rounded-xl font-bold"
        >
          Add Book
        </button>

      </div>

    </main>
  );
}