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

      // 👑 Admin Login
      if (
        user.email ===
        "sinhalabandarawannisingha@gmail.com"
      ) {
        alert("Admin Login Successful");
        window.location.href = "/admin";
        return;
      }

      // 🎓 Student Check
      const studentRef = doc(
        db,
        "students",
        user.uid
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
  }; // login function close

  return (
    <div>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="password" 
        value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
    />
    <button onClick={login}>Login</button>
  </div>
);
} // LoginPage function close