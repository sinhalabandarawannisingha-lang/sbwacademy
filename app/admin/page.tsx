"use client";

import { app } from "../firebase";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);

export default function AdminPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          window.location.href = "/login";
          return;
        }

        if (
          user.email?.toLowerCase() ===
          "sinhalabandarawannisingha@gmail.com"
        ) {
          setLoading(false);
        } else {
          window.location.href = "/dashboard";
        }
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
    <main className="min-h-screen flex bg-[#081120] text-white">
      {/* Sidebar */}
      <div className="w-72 bg-[#0f1b33] p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-yellow-400 mb-10">
            Admin Panel
          </h1>

          <div className="space-y-4">
            <a
              href="/admin"
              className="block w-full bg-yellow-400 text-black py-3 rounded-xl font-bold text-center"
            >
              Dashboard
            </a>

            <a
              href="/admin/students"
              className="block w-full bg-[#1b2a4a] py-3 rounded-xl text-center"
            >
              Students
            </a>

            <a
              href="/admin/videos"
              className="block w-full bg-[#1b2a4a] py-3 rounded-xl text-center"
            >
              Videos
            </a>

            <a
              href="/admin/notes"
              className="block w-full bg-[#1b2a4a] py-3 rounded-xl text-center"
            >
              Notes
            </a>

            <a
              href="/admin/papers"
              className="block w-full bg-[#1b2a4a] py-3 rounded-xl text-center"
            >
              PDF Papers
            </a>

            <a
              href="/admin/reviews"
              className="block w-full bg-[#1b2a4a] py-3 rounded-xl text-center"
            >
              Reviews
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

      {/* Content */}
      <div className="flex-1 p-10">
        <h1 className="text-5xl font-bold text-yellow-400 mb-6">
          Welcome Admin 👑
        </h1>

        <p className="text-xl text-gray-300">
          Manage students, videos, notes,
          papers and reviews from the menu.
        </p>
      </div>
    </main>
  );
}