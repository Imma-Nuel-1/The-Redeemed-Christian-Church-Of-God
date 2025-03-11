// src/app/components/Navbar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string | null) => {
    setDropdown(menu);
  };

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    toggleDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(null);
    }, 300); // Delay closing the dropdown slightly
  };

  return (
    <nav
      className={`bg-blue-600 text-white p-4 fixed top-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0 shadow-md" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="text-lg font-bold">
          RCCG City of Champions
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-5 relative">
          {/* Home */}
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>

          {/* About - Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-gray-400">About</button>
            {dropdown === "about" && (
              <ul
                className="absolute left-0 w-48 bg-white text-black shadow-lg rounded-lg mt-2"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    href="/about/history"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/doctrine"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Doctrine
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/beliefs"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Beliefs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/leadership"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/general-overseer"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    General Overseer
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Events - Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("events")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-gray-400">Events</button>
            {dropdown === "events" && (
              <ul
                className="absolute left-0 w-48 bg-white text-black shadow-lg rounded-lg mt-2"
                onMouseEnter={() => handleMouseEnter("events")}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    href="/events/annual-conference"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Annual Conference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events/revival-night"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Revival Night
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events/youth-conference"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Youth Conference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events/children-special"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Children's Special
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Media - Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("media")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-gray-400">Media</button>
            {dropdown === "media" && (
              <ul
                className="absolute left-0 w-48 bg-white text-black shadow-lg rounded-lg mt-2"
                onMouseEnter={() => handleMouseEnter("media")}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    href="/media/livestream"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Livestream
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media/photos"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media/videos"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Video Gallery
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Resources - Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-gray-400">Resources</button>
            {dropdown === "resources" && (
              <ul
                className="absolute left-0 w-56 bg-white text-black shadow-lg rounded-lg mt-2"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    href="/resources/education"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Christian Educational Material
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/ebooks"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    E-Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/prayer-request"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Prayer Request
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/counselling"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Counseling Request
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/giving"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Giving Channels
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Arms - Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("arms")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-gray-400">Arms</button>
            {dropdown === "arms" && (
              <ul
                className="absolute left-auto right-0 w-48 bg-white text-black shadow-lg rounded-lg mt-2"
                onMouseEnter={() => handleMouseEnter("arms")}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    href="/arms/men"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Men's Fellowship
                  </Link>
                </li>
                <li>
                  <Link
                    href="/arms/women"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Women's Ministry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/arms/teens"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Teen Ministry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/arms/youth"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Youth Fellowship
                  </Link>
                </li>
                <li>
                  <Link
                    href="/arms/children"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Children’s Church
                  </Link>
                </li>
                <li>
                  <Link
                    href="/arms/nextgen"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    NextGen Ministry
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Find Us - Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("findus")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-gray-400">Find Us</button>
            {dropdown === "findus" && (
              <ul
                className="absolute left-auto right-0 w-48 bg-white text-black shadow-lg rounded-lg mt-2"
                onMouseEnter={() => handleMouseEnter("findus")}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link
                    href="/find-us/contact"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/find-us/directory"
                    onClick={() => setDropdown(null)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Church Directory
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
