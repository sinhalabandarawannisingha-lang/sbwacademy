"use client";

import { useState } from "react";

import app from "../firebase";

import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const studentRef = doc(
        db,
        "students",
        userCredential.user.uid
      );

      const studentSnap =
        await getDoc(studentRef);

      if (!studentSnap.exists()) {

        alert("Student Record Not Found");
        return;

      }

      if (!studentSnap.data().approved) {

        alert(
          "Your account is waiting for admin approval."
        );

        return;

      }

      alert("Login Successful");

      window.location.href = "/dashboard";

    } catch (error) {

      alert("Wrong Email or Password");

    }

  };

  return (
    <main className="min-h-screen bg-[#081120] flex items-center justify-center p-6">

      <div className="bg-[#0f1b33] p-8 rounded-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">
          Student Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#1b2a4a] text-white placeholder-gray-300"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#1b2a4a] text-white placeholder-gray-300"
          />

          <button
            onClick={login}
            className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            Login
          </button>

        </div>

      </div>

    </main>
  );
}