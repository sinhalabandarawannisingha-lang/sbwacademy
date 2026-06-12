"use client";

import {app} from "../firebase";

import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  useEffect,
  useState,
} from "react";


const auth = getAuth(app);

export default function AdminPage() {

const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {

        if (!user) {

          window.location.href = "/login";
          setLoading(false);
          return;
        }
    if (user && user.email === "sinhalabandarawannisingha@gmail.com")  {
  window.location.href = "/dashboard";
  return;
}

window.location.href = "/admin";

        setLoading(false);

      });

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

      {/* SIDEBAR */}

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
              Papers
            </a>

            <a
              href="/admin/book-store"
              className="block w-full bg-[#1b2a4a] py-3 rounded-xl text-center"
            >
              Book Store
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

        {/* CARDS */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-[#0f1b33] p-6 rounded-2xl">

            <h2 className="text-2xl font-bold text-yellow-400 mb-2">
              Students
            </h2>

            <p className="text-5xl font-bold">
              120
            </p>

          </div>

          <div className="bg-[#0f1b33] p-6 rounded-2xl">

            <h2 className="text-2xl font-bold text-yellow-400 mb-2">
              Videos
            </h2>

            <p className="text-5xl font-bold">
              45
            </p>

          </div>

          <div className="bg-[#0f1b33] p-6 rounded-2xl">

            <h2 className="text-2xl font-bold text-yellow-400 mb-2">
              Notes
            </h2>

            <p className="text-5xl font-bold">
              30
            </p>

          </div>

        </div>

        {/* STUDENT TABLE */}

        <div className="bg-[#0f1b33] p-6 rounded-2xl">

          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Recent Students
          </h2>

          <div className="space-y-4">

            <div className="bg-[#1b2a4a] p-4 rounded-xl flex justify-between items-center">

              <div>

                <p className="font-bold">
                  Kasun Perera
                </p>

                <p className="text-gray-300">
                  Grade 11
                </p>

              </div>

              <button className="bg-green-500 px-4 py-2 rounded-lg">
                Approve
              </button>

            </div>

            <div className="bg-[#1b2a4a] p-4 rounded-xl flex justify-between items-center">

              <div>

                <p className="font-bold">
                  Nethmi Silva
                </p>

                <p className="text-gray-300">
                  Grade 10
                </p>

              </div>

              <button className="bg-green-500 px-4 py-2 rounded-lg">
                Approve
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}