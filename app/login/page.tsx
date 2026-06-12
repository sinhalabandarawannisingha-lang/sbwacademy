"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase";

const auth = getAuth(app);
const db = getFirestore(app);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      // 👑 ADMIN
      if (
        user.email?.toLowerCase() ===
        "sinhalabandarawannisingha@gmail.com"
      ) {
        window.location.href = "/admin";
        return;
      }

      // 🎓 STUDENT
      const studentRef = doc(
        db,
        "students",
        user.uid
      );

      const studentSnap =
        await getDoc(studentRef);

      if (!studentSnap.exists()) {
        alert("Student record not found");
        return;
      }

      const data = studentSnap.data();

      if (!data?.approved) {
        window.location.href = "/pending";
        return;
      }

      window.location.href = "/dashboard";

    } catch (error) {
      console.log(error);
      alert("Wrong Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Student Portal
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          {loading
            ? "Logging In..."
            : "Login"}
        </button>
      </div>
    </div>
  );
}