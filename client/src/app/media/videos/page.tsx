// src/pages/media/video-page.tsx

"use client";

import React, { useEffect, useState } from "react";

const VideoPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure it only loads after hydration
  }, []);

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto bg-white">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
        Video Gallery - RCCG City of Champions
      </h1>

      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Our Recent Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mounted && (
            <>
              {/* Video 1 */}
              <div className="relative">
                <video
                  controls
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src="/videos/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video 2 */}
              <div className="relative">
                <video
                  controls
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src="/videos/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Description Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Video Gallery Description
        </h2>
        <p className="text-lg text-black leading-relaxed">
          Welcome to our video gallery! Here, we share recordings from our
          events and services at RCCG City of Champions. Watch these videos to
          experience our community, worship, and powerful moments.
        </p>
      </section>
    </div>
  );
};

export default VideoPage;
