"use client";

export default function AboutPage() {

  return (
    <main className="min-h-screen bg-[#081120] text-white">

      {/* HERO SECTION */}

      <section className="text-center py-24 px-6">

        <h1 className="text-6xl font-bold text-yellow-400 mb-6">
          අපේ සිංහල පංතිය ✨
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A/L සිංහල විෂය හදාරන සිසුන් සඳහා නවීන තාක්ෂණය සමඟ
          ගුණාත්මක සිංහල අධ්‍යාපනය ලබාදෙන online academy එකක්.
        </p>

      </section>
{/* TEACHER PROFILE */}

<section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="bg-[#0f1b33] rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">

    <div className="flex justify-center">

      <img
        src="/sir.jpeg"
        alt="Teacher"
        className="w-[350px] rounded-3xl border-4 border-yellow-400 shadow-2xl"
      />

    </div>

    <div>

      <h2 className="text-5xl font-bold text-yellow-400 mb-6">
        ඔබගේ ආචාර්යවරයා 👨‍🏫
      </h2>

      <p className="text-gray-300 text-xl leading-10 mb-6">
        A/L සිංහල විෂය සඳහා නවීන teaching methods
        සහ online learning system එකක් සමඟ
        සිසුන්ට ඉහළ ප්‍රතිඵල ලබාදීම අපගේ අරමුණයි.
      </p>

      <div className="space-y-4 text-lg text-gray-300">

        <p>✅ Advanced Level Sinhala Specialist</p>

        <p>✅ Online & Physical Classes</p>

        <p>✅ Recorded Lessons & Notes</p>

        <p>✅ Student Focused Teaching</p>

      </div>

    </div>

  </div>

</section>





      {/* ABOUT */}

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-20">

        <div className="bg-[#0f1b33] p-8 rounded-3xl">

          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            අප ගැන 👨‍🏫
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            අපගේ සිංහල පංතිය මගින්G.C.E A/L සිසුන්ට සරලව සහ ප්‍රායෝගිකව සිංහල විෂය
            ඉගැන්වීම සිදුකරයි.
          </p>

        </div>

        <div className="bg-[#0f1b33] p-8 rounded-3xl">

          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            අපගේ විශේෂතා 🔥
          </h2>

          <ul className="space-y-4 text-lg text-gray-300">

            <li>✅ Recorded Video Lessons</li>

            <li>✅ PDF Notes</li>

            <li>✅ Model Papers</li>

            <li>✅ WhatsApp Support</li>

            <li>✅ Online Learning System</li>

          </ul>

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-[#0f1b33] p-10 rounded-3xl text-center">

          <h2 className="text-5xl font-bold text-yellow-400 mb-10">
            අපගේ ජයග්‍රහණ 🏆
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

      {/* CONTACT */}

      <section className="text-center pb-24 px-6">

        <h2 className="text-5xl font-bold text-yellow-400 mb-6">
          අදම අප සමඟ එක්වන්න 🚀
        </h2>

        <p className="text-gray-300 text-xl mb-8">
          Online සිංහල පංතියට දැන්ම register වන්න.
        </p>

        <a
          href="/join-class"
          className="bg-green-500 px-8 py-4 rounded-2xl text-xl font-bold"
        >
          Join Class
        </a>

      </section>

    </main>
  );
}