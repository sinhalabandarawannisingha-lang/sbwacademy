"use client";

import { useState } from "react";

import app from "../firebase";

import {
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore";

const db = getFirestore(app);

export default function JoinClass() {

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [district, setDistrict] = useState("");
  const [problem, setProblem] = useState("");

  const sendWhatsApp = async () => {

    try {

      await addDoc(collection(db, "students"), {
        name,
        grade,
        school,
        district,
        problem,
        createdAt: new Date(),
      });

      const message = `📚 Sinhala Class Join Request

👤 සම්පුර්ණ නම: ${name}

🎓 ශ්‍රේණිය: ${grade}

🏫 පාසල: ${school}

📍 දිස්ත්‍රික්කය: ${district}

❓ ගැටලු: ${problem}`;

      const url = `https://wa.me/94719954816?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");

    } catch (error) {

      alert("Error saving data");

    }

  };

  return (
    <main className="min-h-screen bg-[#081120] text-white flex items-center justify-center p-6">

      <div className="bg-[#0f1b33] p-8 rounded-2xl w-full max-w-xl space-y-5">

        <h1 className="text-3xl font-bold text-yellow-400 text-center">
          Join Sinhala Class
        </h1>

        <input
          type="text"
          placeholder="සම්පුර්ණ නම"
          className="w-full p-3 rounded-lg bg-[#1b2a4a] text-white placeholder-gray-300"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="ඉගෙනුම ලබන ශ්‍රේණිය"
          className="w-full p-3 rounded-lg bg-[#1b2a4a] text-white placeholder-gray-300"
          onChange={(e) => setGrade(e.target.value)}
        />

<input
          type="text"
          placeholder="G.C.E A/l විභාගයට මුහුණ දෙන වර්ෂය"
          className="w-full p-3 rounded-lg bg-[#1b2a4a] text-white placeholder-gray-300"
          onChange={(e) => setDistrict(e.target.value)}
        />



        <input
          type="text"
          placeholder="පාසල"
          className="w-full p-3 rounded-lg bg-[#1b2a4a] text-white placeholder-gray-300"
          onChange={(e) => setSchool(e.target.value)}
        />

        <input
          type="text"
          placeholder="දිස්ත්‍රික්කය"
          className="w-full p-3 rounded-lg bg-[#1b2a4a] text-white placeholder-gray-300"
          onChange={(e) => setDistrict(e.target.value)}
        />

        <textarea
          placeholder="සිංහල විෂය පිළිබඳ ගැටලු (අවශ්‍ය නම්)"
          className="w-full p-3 rounded-lg bg-[#1b2a4a] text-white placeholder-gray-300"
          onChange={(e) => setProblem(e.target.value)}
        />

        <button
          onClick={sendWhatsApp}
          className="w-full bg-green-500 py-3 rounded-xl font-bold hover:scale-105 transition"
        >
          Send WhatsApp Request
        </button>

      </div>

    </main>
  );
}