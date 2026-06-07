"use client";

import { useEffect, useState } from "react";

import app from "../../firebase";

import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(app);

export default function StudentsPage() {

  const [students, setStudents] = useState<any[]>([]);

  const loadStudents = async () => {

    const querySnapshot = await getDocs(
      collection(db, "students")
    );

    const studentList: any[] = [];

    querySnapshot.forEach((studentDoc) => {

      studentList.push({
        id: studentDoc.id,
        ...studentDoc.data(),
      });

    });

    setStudents(studentList);

  };

  useEffect(() => {

    loadStudents();

  }, []);

  const approveStudent = async (id: string) => {

    await updateDoc(doc(db, "students", id), {
      approved: true,
    });

    alert("Student Approved");

    loadStudents();

  };

  const deleteStudent = async (id: string) => {

    await deleteDoc(doc(db, "students", id));

    alert("Student Deleted");

    loadStudents();

  };

  return (
    <main className="min-h-screen bg-[#081120] text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Students Management 👨‍🎓
      </h1>

      <div className="space-y-5">

        {students.map((student) => (

          <div
            key={student.id}
            className="bg-[#0f1b33] p-5 rounded-2xl flex justify-between items-center"
          >

            <div>

              <h2 className="text-2xl font-bold">
                {student.email}
              </h2>

              <p className="text-gray-300">
                {student.approved
                  ? "Approved ✅"
                  : "Pending Approval ⏳"}
              </p>

            </div>

            <div className="flex gap-3">

              {!student.approved && (

                <button
                  onClick={() =>
                    approveStudent(student.id)
                  }
                  className="bg-green-500 px-5 py-2 rounded-xl"
                >
                  Approve
                </button>

              )}

              <button
                onClick={() =>
                  deleteStudent(student.id)
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