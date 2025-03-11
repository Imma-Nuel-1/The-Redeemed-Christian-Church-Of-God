"use client";

export default function Giving() {
  return (
    <main className="bg-white min-h-screen">
      {/* 🏛 Giving Section */}
      <section className="py-12 px-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Online Giving
        </h1>
        <p className="text-lg text-center text-gray-500 mt-2">
          Your giving helps to support the church, ministries, and outreach
          programs.
        </p>
      </section>

      {/* 🏦 Giving Details - Side by Side Layout */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tithes Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Tithes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Give your 10% to support the church's mission and reach. We
              believe in honoring God through our tithes.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-700">
                Account Name: The Redeemed Christian Church Of God
              </p>
              <p className="text-lg text-gray-700">Account Number: 123456789</p>
              <p className="text-lg text-gray-700">Bank Name: XYZ Bank</p>
              <p className="text-lg text-gray-700">Sort Code: 01-23-45</p>
            </div>
          </div>

          {/* Offerings Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Offerings
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your offerings help fund the church’s operations and outreach
              programs. Any amount you give makes a difference.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-700">
                Account Name: The Redeemed Christian Church Of God
              </p>
              <p className="text-lg text-gray-700">Account Number: 123456789</p>
              <p className="text-lg text-gray-700">Bank Name: XYZ Bank</p>
              <p className="text-lg text-gray-700">Sort Code: 01-23-45</p>
            </div>
          </div>

          {/* Building Fund Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Building Fund
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your contribution helps us build and improve our church facilities
              for a better community impact.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-700">
                Account Name: The Redeemed Christian Church Of God
              </p>
              <p className="text-lg text-gray-700">Account Number: 123456789</p>
              <p className="text-lg text-gray-700">Bank Name: XYZ Bank</p>
              <p className="text-lg text-gray-700">Sort Code: 01-23-45</p>
            </div>
          </div>

          {/* Children Welfare Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Children Welfare
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Help us provide for the children in our community by donating to
              our children welfare programs.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-700">
                Account Name: The Redeemed Christian Church Of God
              </p>
              <p className="text-lg text-gray-700">Account Number: 123456789</p>
              <p className="text-lg text-gray-700">Bank Name: XYZ Bank</p>
              <p className="text-lg text-gray-700">Sort Code: 01-23-45</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
