// src/pages/events/revival-night.tsx
import React from "react";

const RevivalNight = () => {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto bg-white">
      <h1 className="text-4xl font-extrabold text-center text-gold-500 mb-8">
        RCCG City of Champions Revival Night
      </h1>

      {/* Program 1 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Program 1: Opening & Worship
        </h2>

        <h3 className="text-2xl font-bold text-gold-500 mb-4">
          About Program 1
        </h3>
        <p className="text-lg text-black leading-relaxed">
          The first part of the Revival Night focuses on uplifting and preparing
          the hearts of all attendees. We will begin with powerful worship and
          praise, invoking God's presence to set the tone for the night. This
          program is designed to prepare the spiritual atmosphere for a deep
          encounter with God.
        </p>

        <h3 className="text-2xl font-bold text-gold-500 mb-4">
          Event Schedule
        </h3>
        <table className="min-w-full table-auto border-collapse text-left text-lg text-black">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 border-b">Date</th>
              <th className="py-4 px-6 border-b">Time</th>
              <th className="py-4 px-6 border-b">Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-6 border-b">Friday, [Date]</td>
              <td className="py-3 px-6 border-b">7:00 PM</td>
              <td className="py-3 px-6 border-b">Opening Worship</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border-b">Friday, [Date]</td>
              <td className="py-3 px-6 border-b">8:00 PM</td>
              <td className="py-3 px-6 border-b">Praise & Worship Session</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Program 2 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Program 2: Revival Message & Healing
        </h2>

        <h3 className="text-2xl font-bold text-gold-500 mb-4">
          About Program 2
        </h3>
        <p className="text-lg text-black leading-relaxed">
          The second part of the Revival Night is centered around the word of
          God, where we will receive an empowering message from our special
          guest speaker, <strong>Pastor [Speaker Name]</strong>. This session
          will be followed by a powerful healing and deliverance service, where
          the Holy Spirit will move in mighty ways to bring about spiritual
          renewal and physical healing.
        </p>

        <h3 className="text-2xl font-bold text-gold-500 mb-4">
          Event Schedule
        </h3>
        <table className="min-w-full table-auto border-collapse text-left text-lg text-black">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 border-b">Date</th>
              <th className="py-4 px-6 border-b">Time</th>
              <th className="py-4 px-6 border-b">Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-6 border-b">Friday, [Date]</td>
              <td className="py-3 px-6 border-b">8:30 PM</td>
              <td className="py-3 px-6 border-b">
                Revival Message by Pastor [Speaker Name]
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 border-b">Friday, [Date]</td>
              <td className="py-3 px-6 border-b">9:30 PM</td>
              <td className="py-3 px-6 border-b">
                Healing & Deliverance Service
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 border-b">Friday, [Date]</td>
              <td className="py-3 px-6 border-b">10:30 PM</td>
              <td className="py-3 px-6 border-b">Closing & Benediction</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Venue */}
      <section>
        <h2 className="text-2xl font-bold text-gold-500 mb-4">Venue</h2>
        <p className="text-lg text-black leading-relaxed">
          The event will be held at <strong>RCCG City of Champions</strong>,
          located at <strong>26, Shonola Street, Aguda-Ogba, Lagos.</strong>
          We invite you to join us for an unforgettable time of worship and
          renewal.
        </p>
      </section>
    </div>
  );
};

export default RevivalNight;
