import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assets/logo1.webp";

// ============================================================
// NAVBAR
// ============================================================

const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  // ==========================================================
  // HOME PAGE CHECK
  // ==========================================================

  const isHome = location.pathname === "/";

  // ==========================================================
  // CLOSE MOBILE MENU WHEN ROUTE CHANGES
  // ==========================================================

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // ==========================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // ==========================================================

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ==========================================================
  // CLOSE MENU
  // ==========================================================

  const closeMobile = () => {
    setMobileOpen(false);
  };

  // ==========================================================
  // NAVIGATION LINKS
  // ==========================================================

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header
        className="
          absolute
          left-0
          right-0
          top-0
          z-[60]
          w-full
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[88px]
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-5
            sm:min-h-[94px]
            sm:px-8
            lg:min-h-[102px]
            lg:px-12
            xl:px-16
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            onClick={closeMobile}
            className="
              relative
              z-[80]
              flex
              shrink-0
              items-center
              outline-none
            "
          >
            <img
              src={logo}
              alt="FastKitchen"
              className="
                h-[70px]
                w-auto
                max-w-[235px]
                object-contain
                transition-transform
                duration-300
                sm:h-[76px]
                sm:max-w-[255px]
                lg:h-[84px]
                lg:max-w-[185px]
                xl:h-[90px]
                xl:max-w-[305px]
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="
              hidden
              lg:block
            "
          >
            <div
              className="
                flex
                items-center
                gap-8
                xl:gap-10
                2xl:gap-11
              "
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `
                      group
                      relative
                      flex
                      items-center
                      rounded-md
                      px-1
                      py-2.5
                      text-[13px]
                      font-semibold
                      tracking-[0.01em]
                      no-underline
                      outline-none
                      transition-all
                      duration-300
                      xl:text-[14px]

                      ${
                        isActive
                          ? "text-white"
                          : "text-white/[0.88]"
                      }

                      hover:text-[#FFF7ED]
                      hover:bg-white/[0.06]
                    `
                  }
                >
                  {link.name}

                  {/* =========================================
                      SUBTLE ACTIVE / HOVER DOT
                  ========================================== */}

                  <span
                    className={`
                      absolute
                      -right-1
                      top-[7px]
                      h-[3px]
                      w-[3px]
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        location.pathname === link.path
                          ? "scale-100 bg-[#FFF0DC]"
                          : "scale-0 bg-[#FFF0DC] group-hover:scale-100"
                      }
                    `}
                  />
                </NavLink>
              ))}
            </div>
          </nav>

          {/* =================================================
              DESKTOP CONTACT BUTTON
          ================================================== */}

          <Link
            to="/products"
            className="
              group
              hidden
              items-center
              gap-2
              rounded-full
              bg-[#D92720]
              px-5
              py-2.5
              text-[12px]
              font-semibold
              tracking-wide
              text-white
              shadow-[0_8px_25px_rgba(217,39,32,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#BF211B]
              lg:flex
              xl:px-6
            "
          >
            Shop Now

            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((prev) => !prev)
            }
            className={`
              relative
              z-[80]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              transition-all
              duration-300
              lg:hidden

              ${
                mobileOpen
                  ? "border-[#D92720] bg-[#D92720] text-white"
                  : "border-white/[0.20] bg-black/[0.18] text-white backdrop-blur-md"
              }

              hover:border-[#D92720]
              hover:text-white
            `}
          >
            {mobileOpen ? (
              <X
                size={21}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={2}
              />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={closeMobile}
        className={`
          fixed
          inset-0
          z-[65]
          bg-black/[0.52]
          backdrop-blur-[3px]
          transition-all
          duration-300
          lg:hidden

          ${
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-[100dvh]
          w-[88%]
          max-w-[390px]
          flex-col
          overflow-hidden
          bg-[#0B0B0B]
          text-white
          shadow-[-20px_0_60px_rgba(0,0,0,0.35)]
          transition-transform
          duration-[400ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          lg:hidden

          ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =================================================
            MOBILE TOP
        ================================================== */}

        <div
          className="
            flex
            min-h-[92px]
            shrink-0
            items-center
            justify-between
            border-b
            border-white/[0.08]
            px-5
            sm:px-6
          "
        >
          {/* Logo */}

          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="FastKitchen"
              className="
                h-[65px]
                w-auto
                max-w-[220px]
                object-contain
                sm:h-[70px]
                sm:max-w-[240px]
              "
            />
          </Link>

          {/* Close */}

          <button
            type="button"
            onClick={closeMobile}
            aria-label="Close navigation"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.12]
              text-white
              transition-all
              duration-200
              hover:border-[#D92720]
              hover:bg-[#D92720]
              hover:text-white
            "
          >
            <X
              size={20}
              strokeWidth={1.9}
            />
          </button>
        </div>

        {/* =================================================
            MOBILE NAVIGATION
        ================================================== */}

        <nav
          className="
            flex-1
            overflow-y-auto
            bg-[#0B0B0B]
            px-5
            py-8
            sm:px-6
          "
        >
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `
                    group
                    flex
                    min-h-[58px]
                    items-center
                    justify-between
                    rounded-xl
                    border
                    px-4
                    no-underline
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "border-[#FFF0DC]/20 bg-[#FFF0DC] text-[#111111]"
                        : "border-white/[0.06] bg-[#111111] text-white hover:border-white/[0.12] hover:bg-[#171717] hover:text-[#FFF0DC]"
                    }
                  `
                }
              >
                <div className="flex items-center gap-4">
                  {/* Number */}

                  <span
                    className="
                      text-[9px]
                      font-bold
                      tracking-[0.15em]
                      text-white/[0.30]
                      transition-colors
                      duration-300
                      group-hover:text-[#FFF0DC]/60
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Name */}

                  <span
                    className="
                      text-[15px]
                      font-semibold
                      tracking-[-0.01em]
                    "
                  >
                    {link.name}
                  </span>
                </div>

                {/* Arrow */}

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    opacity-40
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </NavLink>
            ))}
          </div>

          {/* =================================================
              SMALL BRAND MESSAGE
          ================================================== */}

          <div
            className="
              mt-10
              rounded-2xl
              border
              border-white/[0.06]
              bg-[#111111]
              p-5
            "
          >
            <div
              className="
                mb-3
                h-[3px]
                w-8
                rounded-full
                bg-[#D92720]
              "
            />

            <p
              className="
                text-[15px]
                font-semibold
                leading-[1.45]
                tracking-[-0.01em]
                text-white
              "
            >
              Beautiful interiors,
              <br />
              thoughtfully designed.
            </p>

            <p
              className="
                mt-2
                text-[11px]
                leading-[1.7]
                text-white/[0.48]
              "
            >
              Kitchens, wardrobes, media walls
              and complete interior solutions.
            </p>
          </div>
        </nav>

        {/* =================================================
            MOBILE BOTTOM CTA
        ================================================== */}

        <div
          className="
            shrink-0
            border-t
            border-white/[0.08]
            bg-[#0B0B0B]
            px-5
            pb-5
            pt-4
            sm:px-6
            sm:pb-6
          "
        >
          <Link
            to="/contact"
            onClick={closeMobile}
            className="
              group
              flex
              min-h-[50px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#D92720]
              px-5
              text-[13px]
              font-bold
              text-white
              shadow-[0_8px_25px_rgba(217,39,32,0.15)]
              transition-all
              duration-300
              hover:bg-[#BF211B]
            "
          >
            Contact Us

            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
