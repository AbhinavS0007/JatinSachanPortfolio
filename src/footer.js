import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Jatin Sachan
          </h2>
          <p className="text-gray-400 mb-6">
            Graphic Designer creating modern and impactful visual identities.
          </p>

          {/* Social Links */}
          <div className="flex gap-5 text-xl">
            <a href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="">
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© {new Date().getFullYear()} Jatin Sachan. All rights reserved.</p>
        <p>Designed & Developed with ❤️</p>
      </div>
    </footer>
  );
}
