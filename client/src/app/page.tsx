// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* 🌟 Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to RCCG City of Champions
          </h1>
          <p className="text-lg md:text-2xl mt-2">
            Experience God's Presence & Transform Your Life
          </p>
          <Link
            href="/media/livestream"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Join Us Live
          </Link>
        </div>
      </section>

      {/* 📅 Next Service Countdown */}
      <section className="py-10 text-center bg-gray-100">
        <h2 className="text-2xl font-semibold">Next Service Starts In:</h2>
        <p className="text-4xl font-bold text-blue-600 mt-2">
          Sunday, 10:00 AM
        </p>
        <p className="mt-2">📍 RCCG City of Champions Auditorium</p>
      </section>

      {/* 📆 Upcoming Events */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Holy Ghost Service</h3>
            <p className="text-gray-700 mt-2">
              Join us for a powerful move of God.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              📅 Feb 10, 2025 | 6:00 PM
            </p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Youth Conference</h3>
            <p className="text-gray-700 mt-2">
              A special event for the next generation.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              📅 March 20, 2025 | 10:00 AM
            </p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Sunday Worship</h3>
            <p className="text-gray-700 mt-2">
              Join us for a powerful time in God's presence.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              📅 Every Sunday | 10:00 AM
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            href="/events"
            className="text-blue-600 font-semibold hover:underline"
          >
            See All Events →
          </Link>
        </div>
      </section>

      {/* 🎤 Latest Sermons */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Latest Sermons</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <Image
              src="/sermon1.jpg"
              width={300}
              height={200}
              alt="Sermon"
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">Walking in Faith</h3>
            <p className="text-sm text-gray-500 mt-1">
              Pastor John Doe | Jan 15, 2025
            </p>
            <Link
              href="/sermons"
              className="text-blue-600 font-semibold hover:underline mt-2 block"
            >
              Watch Now →
            </Link>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <Image
              src="/sermon2.jpg"
              width={300}
              height={200}
              alt="Sermon"
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">Power of Prayer</h3>
            <p className="text-sm text-gray-500 mt-1">
              Pastor Jane Smith | Jan 22, 2025
            </p>
            <Link
              href="/sermons"
              className="text-blue-600 font-semibold hover:underline mt-2 block"
            >
              Watch Now →
            </Link>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <Image
              src="/sermon3.jpg"
              width={300}
              height={200}
              alt="Sermon"
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">Victory in Christ</h3>
            <p className="text-sm text-gray-500 mt-1">
              Pastor Michael Johnson | Jan 29, 2025
            </p>
            <Link
              href="/sermons"
              className="text-blue-600 font-semibold hover:underline mt-2 block"
            >
              Watch Now →
            </Link>
          </div>
        </div>
      </section>

      {/* 💰 Give Online */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Support the Ministry</h2>
        <p className="text-center mt-2 text-gray-700">
          Your generous donations help spread the gospel.
        </p>
        <div className="text-center mt-6">
          <Link
            href="/giving"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Give Online
          </Link>
        </div>
      </section>

      {/* 🙏 Testimonials & Prayer Requests */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">
          Testimonies & Prayer Requests
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">John’s Testimony</h3>
            <p className="text-gray-700 mt-2">
              "God delivered me from financial hardship after sowing a seed. I
              got a new job the next day!"
            </p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Jane’s Testimony</h3>
            <p className="text-gray-700 mt-2">
              "After joining RCCG City of Champions, my life changed. My
              marriage was restored!"
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            href="/contact"
            className="text-blue-600 font-semibold hover:underline"
          >
            Submit a Prayer Request →
          </Link>
        </div>
      </section>
    </main>
  );
}
