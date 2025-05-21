import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-blue-900 to-gray-950  text-white py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">OneDesktop</h2>
          <p className="text-sm text-gray-300">
            Your one-stop POS desktop solution for efficient business management.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><FaFacebookF className="hover:text-teal-400" /></a>
            <a href="#"><FaTwitter className="hover:text-teal-400" /></a>
            <a href="#"><FaInstagram className="hover:text-teal-400" /></a>
            <a href="#"><FaLinkedin className="hover:text-teal-400" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} OneDesktop. All rights reserved.
      </div>
    </footer>
  );
}

