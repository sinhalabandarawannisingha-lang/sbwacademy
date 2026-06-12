"use client";

import { app } from "../firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);

export default function AdminPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/login";
        return;
      }

      const adminEmail = "sinhalabandarawannisingha@gmail.com";

      if (
  user.email?.toLowerCase() ===
  "sinhalabandarawannisingha@gmail.com"
) {
        setLoading(false);
        return;
      } else {
        window.location.href = "/dashbord";
        return;
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#081120] text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Loading...</h1>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen flex bg-[#081120] text-black">
      {/* SIDEBAR */}
      <div className="w-72 bg-[#0f1b33] p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-yellow-400 mb-10">
            Admin Panel
          </h1>
          <div className="space-y-4">
            <a href="/admin" className="block w-full bg-yellow-400 text-black py-3 rounded-xl font-bold text-center">
              Dashboard
            </a>
            <a href="/admin/students" className="block w-full bg-[#1b2a4a] py-3 rounded-xl text-center">
              Students
            </a>
          </div>
        </div>

        <button
          onClick={async () => {
            await signOut(auth);
            window.location.href = "/login";
          }}
          className="bg-red-500 py-3 rounded-xl font-bold"
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-10">
        <h1 className="text-5xl font-bold text-yellow-400 mb-10">
          Welcome Admin 👑
        </h1>
      </div>
    </main>
  );
}