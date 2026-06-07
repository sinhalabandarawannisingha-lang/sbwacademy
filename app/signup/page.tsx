"use client";

import { useState } from "react";

import app from "../firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export default function SignupPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {

    try {

      const userCredential =
  await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

await setDoc(
  doc(db, "students", userCredential.user.uid),
  {
    email,
    approved: false,
    createdAt: new Date(),
  }
);

      alert("Account Created");

      window.location.href = "/login";

    } catch (error) {

      alert("Signup Failed");

    }

  };

  return (
    <main className="min-h-screen bg-[#081120] flex items-center justify-center p-6">

      <div className="bg-[#0f1b33] p-8 rounded-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">
          Student Signup
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-[#1b2a4a] text-white placeholder-gray-300"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-[#1b2a4a] text-white placeholder-gray-300"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signup}
            className="w-full bg-green-500 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            Create Account
          </button>

        </div>

      </div>

    </main>
  );
}