// src/app/livestream/page.tsx
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const Livestream = () => {
  // Replace with your actual YouTube Channel ID
  const youtubeChannelID = "YOUR_YOUTUBE_CHANNEL_ID";

  return (
    <main className="bg-white min-h-screen">
      {/* 🎥 Live Streaming Section */}
      <section className="relative flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Live Church Service
        </h1>
        <p className="text-lg md:text-xl mt-3 text-gray-300 text-center">
          Join us for a life-changing experience
        </p>

        {/* 📺 Embedded YouTube Livestream */}
        <div className="w-full max-w-4xl mt-6">
          <iframe
            className="w-full h-[300px] md:h-[500px] rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/OwoDkqEMxAM?si=j_Lr6wGZQ5hBr0ae`}
            title="Church Livestream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* 📆 Next Livestream Details */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold">Next Service Starts:</h2>
          <p className="text-lg text-blue-400">Sunday, 10:00 AM (WAT)</p>
          <p className="mt-2">📍 RCCG City of Champions Auditorium</p>
        </div>
      </section>

      {/* 🎥 Past Sermons */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">
          Watch Previous Messages
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 container mx-auto">
          {[
            {
              title: "Walking in Faith",
              date: "Jan 15, 2025",
              img: "/sermon1.jpg",
            },
            {
              title: "Power of Prayer",
              date: "Jan 22, 2025",
              img: "/sermon2.jpg",
            },
            {
              title: "Victory in Christ",
              date: "Jan 29, 2025",
              img: "/sermon3.jpg",
            },
          ].map((sermon, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
              <Image
                src={sermon.img}
                width={300}
                height={200}
                alt={sermon.title}
                className="rounded-lg"
                priority={index === 0}
              />
              <h3 className="text-xl font-semibold mt-2">{sermon.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Pastor | {sermon.date}
              </p>
              <Link
                href="/sermons"
                className="text-blue-600 font-semibold hover:underline mt-2 block"
              >
                Watch Now →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 🌍 Stay Connected */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Stay Connected</h2>
        <p className="text-lg text-gray-700 mt-2">
          Follow us on social media for updates and live notifications
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link
            href="https://www.youtube.com/YOUR_CHANNEL"
            className="text-red-600 text-3xl"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.facebook.com/YOUR_PAGE"
            className="text-blue-600 text-3xl"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/YOUR_PROFILE"
            className="text-pink-600 text-3xl"
          >
            <FaInstagram />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Livestream;
