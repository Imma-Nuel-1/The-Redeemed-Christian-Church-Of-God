// src/app/components/Footer.tsx
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-1 px-6 md:px-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Church Info & Logo */}
        <div>
          {/* Logo and Slogan Side-by-Side */}
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1751980409/COC_logo_eneb3x.jpg"
              alt="Church Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="font-bold text-white text-3xl -mt-5">
              R.C.C.G <br />
              City of Champions
            </p>
          </div>

          <h3 className="font-bold text-lg mt-6">
            .....WHERE MEN REIGN AS GODS <br /> YOUTH PROVINCE 7
          </h3>
          <p className=" text-xl leading-relaxed">
            📍26/28 Shonola Street, <br />
            Opposite Excellence Hotel, Aguda-Ogba,, <br />
            Lagos State, Nigeria. <br />
            08061513753, 0704-209-0001, <br />
            0704-209-0002 <br />
            (SMS & WhatsApp Only)
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-[#B40404] text-2xl hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[#B40404] text-2xl hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-[#B40404] text-2xl hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="flex space-x-4 mt-4 text-pink-400 text-lg">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-3xl mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg mt-16">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                ◉ Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                ◉ Bulletins
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                ◉ Church Directory
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                ◉ Media (YouTube/Foursquare TV)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                ◉ Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Instagram Feed (Live) */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-3xl mb-4">Instagram Feed</h3>
          <div className="mt-2">
            <iframe
              src="https://widgets.sociablekit.com/instagram-feed/iframe/25576026"
              className="w-full md:w-[550px] h-[500px] border-none overflow-hidden"
              allowTransparency={true}
              scrolling="yes"
              title="Instagram Feed"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} RCCG City of Champions. All rights
          reserved. Website designed with{" "}
          <span className="text-red-500">❤️</span> by{" "}
          <span className="text-yellow-400 font-medium">
            Olumuyiwa Emmanuel Adesanya
          </span>
          .
        </p>
      </div>
    </footer>
  );
}
