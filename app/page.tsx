"use client";

import { useEffect, useState } from "react";
import app from "./firebase";

import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

export default function HomePage() {

const db = getFirestore(app);

const [reviews, setReviews] = useState<any[]>([]);

useEffect(() => {

  const loadReviews = async () => {

    const querySnapshot = await getDocs(
      collection(db, "reviews")
    );

    const reviewList: any[] = [];

    querySnapshot.forEach((doc) => {

      const data = doc.data();

      if (data.approved === true) {
        reviewList.push(data);
      }

    });

    setReviews(reviewList);

  };

  loadReviews();

}, []);

  return (
    <main className="min-h-screen bg-[#081120] text-white">
{/* NAVBAR */}

<nav className="flex justify-between items-center px-8 py-6 bg-[#0f1b33]">

  <h1 className="text-3xl font-bold text-yellow-400">
    A/L සිංහල
  </h1>

  <div className="flex gap-6 text-lg">

    <a href="/" className="hover:text-yellow-400">
      Home
    </a>

    <a href="/about" className="hover:text-yellow-400">
      About
    </a>

    <a href="/book-store" className="hover:text-yellow-400">
      Book Store
    </a>

    <a href="/login" className="hover:text-yellow-400">
      Login
    </a>

  </div>

</nav>




      {/* HERO */}

      <section className="grid md:grid-cols-2 items-center gap-10 py-28 px-10 max-w-7xl mx-auto">

        <h1 className="text-7xl font-bold text-yellow-400 mb-6">
          A/L සිංහල පංතිය ✨
        </h1>

        <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-10">
          A/L සිංහල විෂය ඉහළ ප්‍රතිඵල සඳහා
          නවීන online learning platform එකක් සමඟ
          සාර්ථක අධ්‍යාපනයක් ලබාගන්න.
        </p>

<p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-10">
   (අප සමග සම්බන්ධ විමට පලමුව join class බොත්තම ඔබා එහි ඇති පොරොමය පුරවන්න . ඉන් පසු students singnup බොත්තම ඔබා ගිණුමක් සකසන්න. ඔබගෙ පොරමය පිරික්සිමෙන් අනතුරුව ඔබට අපගෙ සිංහල පංතිය සමග සම්බන්ධ විමට හැකියාව ලැබේ.)
        </p>

<div className="flex justify-center">

  <img
    src="/sir.jpeg"
    alt="Teacher"
    className="w-[400px] rounded-3xl shadow-2xl border-4 border-yellow-400 hover:scale-105 transition duration-300"
  />
<div className="mt-6 text-center">

  <h2 className="text-3xl font-bold text-yellow-400">
    බණ්ඩාර වන්නිසිංහ
  </h2>

  <p className="text-gray-300 mt-2">
    A/L Sinhala Lecturer
  </p>

  <div className="flex justify-center gap-4 mt-5">

    <div className="bg-[#0f1b33] px-4 py-3 rounded-xl">
      <p className="text-yellow-400 font-bold">500+</p>
      <p className="text-sm text-gray-300">Students</p>
    </div>

    <div className="bg-[#0f1b33] px-4 py-3 rounded-xl">
      <p className="text-yellow-400 font-bold">10+</p>
      <p className="text-sm text-gray-300">Years</p>
    </div>

  </div>

</div>
</div>

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="/join-class"
            className="bg-green-500 px-8 py-4 rounded-2xl text-xl font-bold"
          >
            Join Class
          </a>

          <a
            href="/about"
            className="bg-yellow-400 text-black px-8 py-4 rounded-2xl text-xl font-bold"
          >
            About Class
          </a>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-24">

        <div className="bg-[#0f1b33] p-8 rounded-3xl">

          <h2 className="text-3xl font-bold text-yellow-400 mb-5">
            Recorded Lessons 🎥
          </h2>

          <p className="text-gray-300 text-lg">
            ඕනෑම වෙලාවක video lessons බලන්න පුළුවන්.
          </p>

        </div>

        <div className="bg-[#0f1b33] p-8 rounded-3xl">

          <h2 className="text-3xl font-bold text-yellow-400 mb-5">
            PDF Notes 📄
          </h2>

          <p className="text-gray-300 text-lg">
            සම්පූර්ණ lesson notes download කරන්න.
          </p>

        </div>

        <div className="bg-[#0f1b33] p-8 rounded-3xl">

          <h2 className="text-3xl font-bold text-yellow-400 mb-5">
            Model Papers 📑
          </h2>

          <p className="text-gray-300 text-lg">
            විභාගයට සූදානම් වෙන්න model papers ලබාගන්න.
          </p>

        </div>

      </section>

      {/* RESULTS */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="bg-[#0f1b33] p-10 rounded-3xl text-center">

          <h2 className="text-5xl font-bold text-yellow-400 mb-10">
            අපගේ ප්‍රතිඵල 🏆
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>

              <p className="text-6xl font-bold text-green-400">
                500+
              </p>

              <p className="text-xl mt-3 text-gray-300">
                Students
              </p>

            </div>

            <div>

              <p className="text-6xl font-bold text-green-400">
                A+
              </p>

              <p className="text-xl mt-3 text-gray-300">
                Top Results
              </p>

            </div>

            <div>

              <p className="text-6xl font-bold text-green-400">
                100+
              </p>

              <p className="text-xl mt-3 text-gray-300">
                Video Lessons
              </p>

            </div>

          </div>

        </div>

      </section>
{/* STUDENT REVIEWS */}

<section className="max-w-6xl mx-auto px-6 pb-24">

  <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">
    සිසුන්ගේ අදහස් ⭐
  </h2>
<div className="flex justify-center mb-10">

  <a
    href="/reviews"
    className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
  >
    📝 Review එකක් ලියන්න
  </a>

</div>
  <div className="grid md:grid-cols-3 gap-8">

    {reviews.map((review, index) => (

      <div
        key={index}
        className="bg-[#0f1b33] p-8 rounded-3xl"
      >

        <p className="text-gray-300 text-lg mb-5">
          "{review.review}"
        </p>

        <h3 className="text-yellow-400 font-bold">
          - {review.name}
        </h3>

      </div>

    ))}

  </div>

</section>

<div className="flex justify-center mt-10">

  <a
    href="/all-reviews"
    className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
  >
    ⭐ සියලුම Reviews බලන්න
  </a>

</div>


      {/* CTA */}

      <section className="text-center pb-28 px-6">

        <h2 className="text-5xl font-bold text-yellow-400 mb-6">
          අදම පංතියට එකතු වෙන්න 
        </h2>

        <p className="text-xl text-gray-300 mb-8">
          A/L සිංහල විෂය සාර්ථකව ජයගන්න.
        </p>

        <a
          href="/signup"
          className="bg-green-500 px-10 py-5 rounded-2xl text-2xl font-bold"
        >
          Student Signup
        </a>

      </section>
{/* FOOTER */}

<footer className="bg-[#0f1b33] text-center py-10 mt-20">

  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
    A/L සිංහල පංතිය ✨
  </h2>

  <p className="text-gray-300 mb-6">
    Online Learning Platform for Advanced Level Students
  </p>

  <div className="flex justify-center gap-6">

    <a
      href="https://wa.me/94719954816"
      target="_blank"
      className="bg-green-500 px-5 py-3 rounded-xl font-bold"
    >
      WhatsApp
    </a>

    <a
      href="https://youtube.com/@sinhalabandarawannisinghe?si=70cNODhQrbi6avdP"
      className="bg-red-500 px-5 py-3 rounded-xl font-bold"
    >
      YouTube
    </a>

    <a
      href="https://www.facebook.com/share/1E2n9YSoTe/"
      className="bg-blue-500 px-5 py-3 rounded-xl font-bold"
    >
      Facebook
    </a>

<a
  href="https://www.tiktok.com/@bandarawannighesinhala?_r=1&_t=ZS-96mVXRdnyNt"
  target="_blank"
  className="bg-black px-5 py-3 rounded-xl font-bold"
>
  TikTok
</a>


  </div>

</footer>







    </main>
  );
}