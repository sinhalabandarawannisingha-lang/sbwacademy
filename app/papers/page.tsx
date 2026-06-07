"use client";

import { useEffect, useState } from "react";
import app from "../firebase";

import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const db = getFirestore(app);
const auth = getAuth(app);

export default function PapersPage() {

  const [papers, setPapers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {

        if (!user) {

          window.location.href = "/login";
          return;

        }

        const querySnapshot = await getDocs(
          collection(db, "papers")
        );

        const papersList: any[] = [];

        querySnapshot.forEach((doc) => {

          papersList.push({
            id: doc.id,
            ...doc.data(),
          });

        });

        setPapers(papersList);
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
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Papers Library 📑
      </h1>

      <div className="space-y-5">

        {papers.map((paper) => (

          <div
            key={paper.id}
            className="bg-[#0f1b33] p-5 rounded-2xl flex justify-between items-center"
          >

            <h2 className="text-2xl font-bold">
              {paper.title}
            </h2>

            <a
              href={paper.pdfLink}
              target="_blank"
              className="bg-green-500 px-5 py-2 rounded-xl font-bold"
            >
              Download PDF
            </a>

          </div>

        ))}

      </div>

    </main>
  );
}