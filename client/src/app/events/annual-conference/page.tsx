// src/pages/events/annual-conference.tsx
import React from "react";

const AnnualConference = () => {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
        RCCG City of Champions Annual Conference
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          About the Conference
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          The RCCG City of Champions Annual Conference is a premier event that
          brings together members of the church and the wider community to
          celebrate the goodness of God, strengthen their faith, and receive
          impartation through powerful teachings and anointed worship. Every
          year, the conference features renowned speakers, workshops, and
          sessions designed to inspire and empower individuals to live out their
          faith in every area of life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Conference Theme
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          This year’s theme for the Annual Conference is{" "}
          <strong>"Empowered for Purpose"</strong>. As believers, we are called
          to live with purpose, passion, and power. This theme serves as a
          reminder that through Christ, we are empowered to fulfill our divine
          purpose and make an impact on the world around us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Keynote Speakers
        </h2>
        <ul className="text-lg text-gray-800 list-disc pl-6">
          <li>
            <strong>Pastor [Speaker Name]</strong> - A dynamic preacher and
            teacher, Pastor [Speaker Name] will be sharing on "Living with
            Kingdom Purpose."
          </li>
          <li>
            <strong>Pastor [Speaker Name]</strong> - A powerful worship leader
            and spiritual mentor, Pastor [Speaker Name] will lead sessions on
            "Empowering the Spirit within."
          </li>
          <li>
            <strong>Special Guest [Speaker Name]</strong> - [Short biography or
            focus of their session].
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Conference Schedule
        </h2>
        <table className="min-w-full table-auto border-collapse text-left text-lg text-gray-800">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 border-b">Date</th>
              <th className="py-4 px-6 border-b">Time</th>
              <th className="py-4 px-6 border-b">Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-6 border-b">Saturday, [Date]</td>
              <td className="py-3 px-6 border-b">9:00 AM</td>
              <td className="py-3 px-6 border-b">Opening Session & Worship</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border-b">Saturday, [Date]</td>
              <td className="py-3 px-6 border-b">12:00 PM</td>
              <td className="py-3 px-6 border-b">
                Keynote Speaker: [Speaker Name]
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 border-b">Saturday, [Date]</td>
              <td className="py-3 px-6 border-b">2:00 PM</td>
              <td className="py-3 px-6 border-b">Breakout Sessions</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border-b">Saturday, [Date]</td>
              <td className="py-3 px-6 border-b">5:00 PM</td>
              <td className="py-3 px-6 border-b">Closing Remarks & Prayer</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Registration</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Don’t miss out on this impactful event! Registration is now open for
          the RCCG City of Champions Annual Conference. Secure your spot today
          and be part of this life-changing experience.
        </p>
        <button className="mt-4 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
          Register Now
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Venue</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          The conference will be held at <strong>RCCG City of Champions</strong>
          , located at <strong>26, Shonola Street, Aguda-Ogba, Lagos.</strong>
          We look forward to welcoming you to this special event.
        </p>
      </section>
    </div>
  );
};

export default AnnualConference;
