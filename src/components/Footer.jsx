import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.webp";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-9 sm:px-8 sm:py-10 lg:px-12 lg:py-11">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-8">

          {/* ================= BRAND ================= */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="FastKitchen"
                className="h-auto w-[105px] object-contain sm:w-[115px] lg:w-[120px]"
              />
            </Link>

            <p className="mt-3 max-w-[320px] text-[12px] leading-[1.7] text-white/55">
              Premium interior solutions crafted with quality materials,
              thoughtful design and refined finishes.
            </p>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2.5 text-[11px] text-white/65">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.07]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>

              <span>Lahore, Pakistan</span>
            </div>

            {/* Phone */}
            <a
              href="tel:+923110706005"
              className="mt-2 flex w-fit items-center gap-2.5 text-[11px] text-white/65 transition-colors duration-300 hover:text-[#D92720]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.07]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.25a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>

              +923008098897
            </a>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
              Explore
            </h3>

            {/* Mobile: 1 2 / 3 4 */}
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2.5 lg:grid-cols-1 lg:gap-y-2.5">

              <Link
                to="/"
                className="group flex w-fit items-center gap-2 text-[12px] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Home

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>

              <Link
                to="/products"
                className="group flex w-fit items-center gap-2 text-[12px] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Products

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>

              <Link
                to="/gallery"
                className="group flex w-fit items-center gap-2 text-[12px] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Gallery

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>

              <Link
                to="/contact"
                className="group flex w-fit items-center gap-2 text-[12px] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Contact Us

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>

            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
              Services
            </h3>

            {/* Mobile: 1 2 / 3 4 */}
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2.5 lg:grid-cols-1 lg:gap-y-2.5">

              <Link
                to="/products"
                className="block w-fit text-[12px] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Kitchens
              </Link>

              <Link
                to="/products"
                className="block w-fit text-[12px] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Wardrobes
              </Link>

              <Link
                to="/products"
                className="block w-fit text-[12px] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Doors
              </Link>

              <Link
                to="/products"
                className="block w-fit text-[12px] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Media Walls
              </Link>

            </div>
          </div>

          {/* ================= SOCIAL ================= */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
              Stay Connected
            </h3>

            <p className="mt-4 max-w-[280px] text-[12px] leading-[1.7] text-white/55">
              Follow us for new designs, latest projects and interior
              inspiration.
            </p>

           
            {/* WhatsApp */}
            <a
              href="https://wa.me/923008098897"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D92720] px-4 py-2.5 text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#b91f1a]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L4 20l1.1-4.3A8.4 8.4 0 1 1 21 11.5Z" />
                <path d="M8.8 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.5.9 1.3 1.7 2.2 2.2.2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.6.7c.2.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.3-.2-2.7-.9-3.8-2-1.1-1.1-1.8-2.5-2-3.8-.1-.6.1-1.1.4-1.5Z" />
              </svg>

              WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-7 h-px bg-white/[0.08] sm:my-8" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-2 text-[10px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} FastKitchen. All rights reserved.
          </p>

          <p>Crafted for modern interiors.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;