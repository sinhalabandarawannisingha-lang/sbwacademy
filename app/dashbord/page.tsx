"use client";

import { useEffect, useState } from "react";
import app from "../firebase";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

export default function DashboardPage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {

        if (!user) {

          window.location.href = "/login";
          return;

        }

        setLoading(false);

      }
    );

    return () => unsubscribe();

  }, []);

  if (loading) {

    return (
      <main className="min-h-screen bg-[#081120] text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Loading...
        </h1>
      </main>
    );

  }

  return (
    <main className="min-h-screen bg-[#081120] text-white">

      <nav className="bg-[#0f1b33] p-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-yellow-400">
          Student Dashboard 🎓
        </h1>

        <button
          onClick={async () => {

            await signOut(auth);

            window.location.href = "/login";

          }}
          className="bg-red-500 px-5 py-2 rounded-xl font-bold"
        >
          Logout
        </button>

      </nav>

      <section className="p-10">

        <h2 className="text-5xl font-bold text-yellow-400 mb-4">
          Welcome Student 👋
        </h2>

        <p className="text-xl text-gray-300">
          ඔබගේ ඉගෙනුම් අන්තර්ගත සියල්ල මෙතනින් ලබාගන්න.
        </p>

      </section>

      <section className="grid md:grid-cols-3 gap-6 px-10">

        <a
          href="/notes"
          className="bg-[#0f1b33] p-8 rounded-3xl hover:scale-105 transition"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">
            Notes 📄
          </h2>

          <p className="text-gray-300">
            සියලුම පාඩම් සටහන් ලබාගන්න.
          </p>
        </a>

        <a
          href="/papers"
          className="bg-[#0f1b33] p-8 rounded-3xl hover:scale-105 transition"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">
            Papers 📑
          </h2>

          <p className="text-gray-300">
            Model Papers download කරන්න.
          </p>
        </a>

        <a
          href="/videos"
          className="bg-[#0f1b33] p-8 rounded-3xl hover:scale-105 transition"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">
            Videos 🎥
          </h2>

          <p className="text-gray-300">
            Recorded lessons බලන්න.
          </p>
        </a>

      </section>

    </main>
  );
}