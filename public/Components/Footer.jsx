import React from "react";
import Link from "next/link";
import { MdBloodtype } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#EB2C29] text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO + DESCRIPTION */}
        <div>
          <div>
            <Link href="/" className="flex items-center gap-2">
              <MdBloodtype size={45} />
              <span className="text-2xl font-bold">Blood-Bank</span>
            </Link>
          </div>

          <p className="text-sm leading-6">
            Saving lives through voluntary blood donation. Join us and make a
            difference today.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="footer-title text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/search-donors" className="hover:underline">
                Search Donors
              </Link>
            </li>
            <li>
              <Link href="/add-blood-request" className="hover:underline">
                Add Request
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="footer-title text-white mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="footer-title text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <Link href="https://x.com/">
              <FaFacebookSquare size={30} />
            </Link>
            <Link href="https://www.facebook.com/">
              <FaSquareXTwitter size={30} />
            </Link>
            <Link href="https://www.linkedin.com/">
              <FaLinkedin size={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center mt-10 border-t border-red-300 pt-4 text-sm">
        © {new Date().getFullYear()} BloodBank. All Rights Reserved.
      </div>
    </footer>
  );
}
