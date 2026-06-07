"use client";

import { useEffect, useState } from "react";
import app from "../../firebase";

import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(app);

export default function ReviewsAdminPage() {

  const [reviews, setReviews] = useState<any[]>([]);

  const loadReviews = async () => {

    const querySnapshot = await getDocs(
      collection(db, "reviews")
    );

    const reviewList: any[] = [];

    querySnapshot.forEach((reviewDoc) => {

      reviewList.push({
        id: reviewDoc.id,
        ...reviewDoc.data(),
      });

    });

    setReviews(reviewList);

  };

  useEffect(() => {

    loadReviews();

  }, []);

  const approveReview = async (id: string) => {

    await updateDoc(doc(db, "reviews", id), {
      approved: true,
    });

    loadReviews();

  };

  const deleteReview = async (id: string) => {

    await deleteDoc(doc(db, "reviews", id));

    loadReviews();

  };

  return (
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Reviews Management ⭐
      </h1>

      <div className="space-y-5">

        {reviews.map((review) => (

          <div
            key={review.id}
            className="bg-[#0f1b33] p-5 rounded-2xl"
          >

            <h2 className="text-2xl font-bold">
              {review.name}
            </h2>

            <p className="text-gray-300 mt-3">
              {review.review}
            </p>

            <p className="mt-3">
              {review.approved
                ? "Approved ✅"
                : "Pending ⏳"}
            </p>

            <div className="flex gap-3 mt-5">

              {!review.approved && (

                <button
                  onClick={() =>
                    approveReview(review.id)
                  }
                  className="bg-green-500 px-5 py-2 rounded-xl"
                >
                  Approve
                </button>

              )}

              <button
                onClick={() =>
                  deleteReview(review.id)
                }
                className="bg-red-500 px-5 py-2 rounded-xl"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}