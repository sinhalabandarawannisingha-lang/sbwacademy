"use client";

import { useEffect, useState } from "react";
import app from "../firebase";

import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(app);

export default function AllReviewsPage() {

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

          reviewList.push({
            id: doc.id,
            ...data,
          });

        }

      });

      setReviews(reviewList);

    };

    loadReviews();

  }, []);

  return (
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 text-center mb-12">
        සියලුම සිසුන්ගේ අදහස් ⭐
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {reviews.map((review) => (

          <div
            key={review.id}
            className="bg-[#0f1b33] p-8 rounded-3xl"
          >

            <div className="text-yellow-400 text-xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 text-lg mb-5">
              "{review.review}"
            </p>

            <h3 className="text-yellow-400 font-bold">
              - {review.name}
            </h3>

          </div>

        ))}

      </div>

    </main>
  );
}