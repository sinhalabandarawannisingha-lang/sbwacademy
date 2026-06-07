"use client";

import { useEffect, useState } from "react";

import app from "../firebase";

import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(app);

export default function BookStorePage() {

  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {

    const loadBooks = async () => {

      const querySnapshot = await getDocs(
        collection(db, "books")
      );

      const bookList: any[] = [];

      querySnapshot.forEach((doc) => {

        bookList.push(doc.data());

      });

      setBooks(bookList);

    };

    loadBooks();

  }, []);

  return (
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 text-center mb-12">
        Book Store 📚
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {books.map((book, index) => (

          <div
            key={index}
            className="bg-[#0f1b33] p-5 rounded-2xl"
          >

            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover rounded-xl mb-5"
            />

            <h2 className="text-2xl font-bold mb-3">
              {book.title}
            </h2>

            <p className="text-yellow-400 text-2xl mb-5">
              Rs. {book.price}
            </p>

            <a
              href="https://wa.me/94719954816"
              target="_blank"
              className="block text-center bg-green-500 py-3 rounded-xl font-bold"
            >
              Order on WhatsApp
            </a>

          </div>

        ))}

      </div>

    </main>
  );
}