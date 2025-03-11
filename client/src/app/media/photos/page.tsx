// src/pages/media/photo-gallery.tsx
import React from "react";

const PhotoGallery = () => {
  return (
    <div className="py-12 px-6 max-w-6xl mx-auto bg-white">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
        Photo Gallery - RCCG City of Champions
      </h1>

      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Our Recent Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Photo 1 */}
          <div className="relative">
            <img
              src="/media/photos/event1.jpg" // Updated image path
              alt="Event 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Event 1</span>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="relative">
            <img
              src="/media/photos/event2.jpg" // Updated image path
              alt="Event 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Event 2</span>
            </div>
          </div>

          {/* Photo 3 */}
          <div className="relative">
            <img
              src="/media/photos/event3.jpg" // Updated image path
              alt="Event 3"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Event 3</span>
            </div>
          </div>

          {/* Photo 4 */}
          <div className="relative">
            <img
              src="/media/photos/event4.jpg" // Updated image path
              alt="Event 4"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Event 4</span>
            </div>
          </div>

          {/* More photos can be added similarly */}
        </div>
      </section>

      {/* Description Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Gallery Description
        </h2>
        <p className="text-lg text-black leading-relaxed">
          Welcome to our photo gallery! Here, we showcase some of the beautiful
          moments and experiences from our church's events. Our community
          gathers regularly to worship, pray, and support each other, and we are
          thrilled to share these memories with you. Browse through the photos
          to get a glimpse of the vibrant and loving atmosphere at RCCG City of
          Champions.
        </p>
        <p className="text-lg text-black mt-4 leading-relaxed">
          Whether you’re seeing familiar faces or discovering new ones, we hope
          these images inspire you to join us in person for future events and to
          become part of our growing family.
        </p>
      </section>
    </div>
  );
};

export default PhotoGallery;
