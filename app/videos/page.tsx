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

export default function VideosPage() {

  const [videos, setVideos] = useState<any[]>([]);
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
          collection(db, "videos")
        );

        const list: any[] = [];

        querySnapshot.forEach((doc) => {

          list.push({
            id: doc.id,
            ...doc.data(),
          });

        });

        setVideos(list);
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
        Video Lessons 🎥
      </h1>

      <div className="space-y-5">

        {videos.map((video) => (

          <div
            key={video.id}
            className="bg-[#0f1b33] p-5 rounded-2xl flex justify-between items-center"
          >

            <h2 className="text-2xl font-bold">
              {video.title}
            </h2>

            <a
              href={video.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 px-5 py-2 rounded-xl font-bold"
            >
              Watch Video
            </a>

          </div>

        ))}

      </div>

    </main>
  );
}