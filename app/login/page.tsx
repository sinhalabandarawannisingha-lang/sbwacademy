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

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 👑 ADMIN LOGIN
      if (user.email === "sinhalabandarawannisingha@gmail.com") {
        alert("Admin Login Successful");
        window.location.href = "/admin";
        return;
      }

      // 🎓 STUDENT CHECK
      const studentRef = doc(db, "students", user.uid);
      const studentSnap = await getDoc(studentRef);

      if (!studentSnap.exists()) {
        alert("Student Record Not Found");
        return;
      }

      const data = studentSnap.data();

      if (!data?.approved) {
        alert("Your account is waiting for admin approval.");
        return;
      }

      alert("Login Successful");
      window.location.href = "/dashboard";
    } catch (error: any) {
      console.log(error.message);
      alert("Wrong Email or Password");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <br />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <br />

      <button onClick={login}>Login</button>
    </div>
  );
}