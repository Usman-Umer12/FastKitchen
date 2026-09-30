import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";

import Navbar from "../components/Navbar";
import HomeFeatures from "./HomeTrustProjects";

// ============================================================
// DESKTOP IMAGES
// ============================================================

import mediaWallImage from "../assets/des1.webp";
import wardrobeImage from "../assets/des2.webp";
import kitchenImage from "../assets/des3.webp";
import bedroomImage from "../assets/des4.webp";

// ============================================================
// MOBILE IMAGES
// ============================================================

import mobileImage1 from "../assets/mob1.webp";
import mobileImage2 from "../assets/mob2.webp";
import mobileImage3 from "../assets/mob3.webp";
import mobileImage4 from "../assets/mob4.webp";

// ============================================================
// HERO SLIDES
// ============================================================

const slides = [
  {
    number: "01",
    category: "MEDIA WALLS",
    title: "Designed to",
    accent: "define your space.",
    description:
      "Contemporary media walls crafted with clean lines, practical storage and a refined finish that brings the entire living space together.",
    desktopImage: mediaWallImage,
    mobileImage: mobileImage1,
  },

  {
    number: "02",
    category: "BESPOKE WARDROBES",
    title: "Storage made",
    accent: "beautifully personal.",
    description:
      "Thoughtfully designed wardrobes made around your lifestyle, your space and the way you want your interiors to feel.",
    desktopImage: wardrobeImage,
    mobileImage: mobileImage2,
  },

  {
    number: "03",
    category: "BESPOKE KITCHENS",
    title: "A kitchen made",
    accent: "for everyday living.",
    description:
      "Modern kitchens combining elegant finishes, intelligent storage and practical design for a space that feels naturally yours.",
    desktopImage: kitchenImage,
    mobileImage: mobileImage3,
  },

  {
    number: "04",
    category: "BEDROOM INTERIORS",
    title: "Create a space",
    accent: "made for you.",
    description:
      "Beautifully crafted bedroom interiors designed around comfort, simplicity and the details that make your space feel complete.",
    desktopImage: bedroomImage,
    mobileImage: mobileImage4,
  },
];

// ============================================================
// HOME
// ============================================================

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ==========================================================
  // AUTO SLIDER
  // ==========================================================

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // ==========================================================
  // WHATSAPP
  // ==========================================================

  const whatsappMessage = encodeURIComponent(
    "Hello, I found your interior design work online and I'm interested in your products. I would like to discuss a custom interior project and get more details about your designs, pricing and available options."
  );

  const whatsappLink = `https://wa.me/923008098897?text=${whatsappMessage}`;

  const current = slides[activeSlide];

  return (
    <main
      className="
        min-h-screen
        bg-[#F8F5EF]
        text-white
        antialiased
      "
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* ======================================================
          HERO
      ======================================================= */}

      <section
        className="
          relative
          h-[70vh]
          min-h-[620px]
          max-h-[760px]
          overflow-hidden
          bg-[#0b0808]
        "
      >
        {/* ====================================================
            BACKGROUND SLIDES
        ===================================================== */}

        {slides.map((slide, index) => (
          <div
            key={slide.number}
            className={`
              absolute
              inset-0
              transition-opacity
              duration-[1000ms]
              ease-out
              ${
                activeSlide === index
                  ? "z-[1] opacity-100"
                  : "z-0 opacity-0"
              }
            `}
          >
            <picture>
              {/* MOBILE IMAGE */}

              <source
                media="(max-width: 767px)"
                srcSet={slide.mobileImage}
              />

              {/* DESKTOP IMAGE */}

              <img
                src={slide.desktopImage}
                alt={slide.category}
                className={`
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-[7000ms]
                  ease-out
                  ${
                    activeSlide === index
                      ? "scale-[1.035]"
                      : "scale-100"
                  }
                `}
              />
            </picture>
          </div>
        ))}

        {/* ====================================================
            DESKTOP DARK OVERLAY
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[2]
            bg-gradient-to-r
            from-black/[0.84]
            via-black/[0.52]
            to-black/[0.10]
          "
        />

        {/* ====================================================
            MOBILE OVERLAY
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[2]
            bg-gradient-to-t
            from-black/[0.72]
            via-black/[0.25]
            to-black/[0.12]
            md:hidden
          "
        />

        {/* ====================================================
            BOTTOM DARK GRADIENT
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[2]
            h-[42%]
            bg-gradient-to-t
            from-black/[0.82]
            to-transparent
          "
        />

        {/* ====================================================
            SUBTLE RED BRAND LIGHT
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-[-230px]
            z-[3]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#D92720]/[0.10]
            blur-[120px]
          "
        />

        {/* ====================================================
            NAVBAR
        ===================================================== */}

        <div className="relative z-50">
          <Navbar />
        </div>

        {/* ====================================================
            HERO CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-20
            mx-auto
            flex
            h-full
            max-w-[1440px]
            items-center
            px-5
            pt-[70px]
            mt-10

            sm:px-8
            sm:pt-[75px]

            lg:px-12
            lg:pt-[70px]

            xl:px-16
          "
        >
          <div
            className="
              w-full
              max-w-[650px]
              pb-[90px]

              sm:max-w-[680px]
              sm:pb-[100px]

              lg:max-w-[710px]
              lg:pb-[105px]
            "
          >
            {/* ==================================================
                CATEGORY
            =================================================== */}

            <div
              className="
                mb-5
                flex
                items-center
                gap-3

                sm:mb-6
              "
            >
              <span
                className="
                  h-[2px]
                  w-8
                  shrink-0
                  rounded-full
                  bg-[#D92720]

                  sm:w-11
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  uppercase
                  leading-none
                  tracking-[0.24em]
                  text-white/[0.88]

                  sm:text-[10px]
                  sm:tracking-[0.30em]

                  lg:tracking-[0.34em]
                "
              >
                {current.category}
              </span>
            </div>

            {/* ==================================================
                MAIN HEADING
            =================================================== */}

            <h1
              className="
                m-0
                max-w-[650px]
                text-[40px]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-white

                sm:text-[54px]

                md:text-[62px]

                lg:text-[70px]

                xl:text-[76px]
              "
            >
              {current.title}
            </h1>

            {/* ==================================================
                RED ACCENT
            =================================================== */}

            <div
              className="
                mt-1
                max-w-[650px]
                text-[40px]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#D92720]

                sm:text-[54px]

                md:text-[62px]

                lg:text-[70px]

                xl:text-[76px]
              "
            >
              {current.accent}
            </div>

            {/* ==================================================
                DESCRIPTION
            =================================================== */}

            <p
              className="
                m-0
                mt-5
                max-w-[490px]
                text-[13px]
                font-normal
                leading-[1.65]
                text-white/[0.72]

                sm:mt-6
                sm:max-w-[535px]
                sm:text-[14px]
                sm:leading-[1.7]

                lg:mt-7
                lg:max-w-[570px]
                lg:text-[15px]
                lg:leading-[1.75]
              "
            >
              {current.description}
            </p>

            {/* ==================================================
                BUTTONS
            =================================================== */}

            <div
              className="
                mt-6
                grid
                w-full
                grid-cols-2
                gap-3

                sm:mt-7
                sm:flex
                sm:w-auto
                sm:items-center
              "
            >
              {/* CONTACT */}

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-[46px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#D92720]
                  px-3
                  text-[11px]
                  font-semibold
                  tracking-wide
                  text-white
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#B91F19]

                  sm:w-auto
                  sm:min-h-[47px]
                  sm:px-7
                  sm:text-[12px]
                "
              >
                <Phone
                  size={15}
                  strokeWidth={2}
                  className="shrink-0"
                />

                <span className="whitespace-nowrap">
                  Contact Us
                </span>
              </Link>

              {/* EXPLORE */}

              <Link
                to="/products"
                className="
                  group
                  inline-flex
                  min-h-[46px]
                  w-full
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/[0.24]
                  bg-black/[0.20]
                  px-3
                  text-[10px]
                  font-semibold
                  tracking-wide
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300

                  hover:border-white/[0.55]
                  hover:bg-white/[0.10]

                  sm:w-auto
                  sm:min-h-[47px]
                  sm:gap-2
                  sm:px-7
                  sm:text-[12px]
                "
              >
                <span className="whitespace-nowrap">
                  Explore Our Products
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FEATURES SECTION
      ======================================================= */}

      <div className="relative z-10 w-full">
        <HomeFeatures />
      </div>

      {/* ======================================================
          WHATSAPP FLOATING BUTTON
      ======================================================= */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          group
          fixed
          bottom-5
          right-5
          z-[100]
          flex
          h-[57px]
          w-[57px]
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_12px_35px_rgba(0,0,0,0.28)]
          transition-all
          duration-300

          hover:scale-105
          hover:shadow-[0_15px_40px_rgba(37,211,102,0.28)]

          sm:bottom-6
          sm:right-6
          sm:h-[59px]
          sm:w-[59px]
        "
      >
        {/* ====================================================
            SOFT PULSE
        ===================================================== */}

        <span
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            border
            border-[#25D366]
            opacity-60
            animate-[whatsappPulse_2.5s_ease-out_infinite]
          "
        />

        {/* ====================================================
            WHATSAPP ICON
        ===================================================== */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="
            relative
            z-10
            h-[30px]
            w-[30px]
            fill-white
            transition-transform
            duration-300
            group-hover:scale-105
          "
          aria-hidden="true"
        >
          <path
            d="
              M16.01 3C8.83 3 3 8.83 3 16.01
              c0 2.3.61 4.46 1.68 6.33L3 29l6.84-1.64
              a12.94 12.94 0 0 0 6.17 1.56
              C23.17 28.92 29 23.1 29 15.91
              C29 8.83 23.18 3 16.01 3Zm0 23.7
              c-2.02 0-3.9-.54-5.53-1.48l-.4-.23
              -4.06.97.98-3.96-.26-.41
              a10.86 10.86 0 0 1-1.66-5.78
              c0-6 4.9-10.9 10.92-10.9
              5.99 0 10.88 4.9 10.88 10.9
              0 6.01-4.89 10.89-10.87 10.89Zm5.97-8.15
              c-.33-.17-1.94-.96-2.24-1.07
              -.3-.11-.52-.17-.74.17
              -.22.33-.85 1.07-1.04 1.29
              -.19.22-.38.25-.71.08
              -.33-.17-1.39-.51-2.65-1.63
              -.98-.87-1.64-1.94-1.83-2.27
              -.19-.33-.02-.51.14-.68
              .15-.15.33-.38.49-.57
              .16-.19.22-.33.33-.55
              .11-.22.05-.41-.03-.58
              -.08-.17-.74-1.78-1.01-2.44
              -.27-.65-.54-.56-.74-.57
              -.19-.01-.41-.01-.63-.01
              -.22 0-.57.08-.87.41
              -.3.33-1.14 1.11-1.14 2.7
              0 1.59 1.17 3.12 1.34 3.34
              .16.22 2.3 3.51 5.57 4.92
              .78.34 1.39.55 1.87.71
              .79.25 1.51.21 2.08.13
              .63-.09 1.94-.79 2.21-1.55
              .27-.76.27-1.41.19-1.55
              -.08-.14-.3-.22-.63-.39Z
            "
          />
        </svg>
      </a>

      {/* ======================================================
          WHATSAPP PULSE ANIMATION
      ======================================================= */}

      <style>
        {`
          @keyframes whatsappPulse {
            0% {
              transform: scale(0.92);
              opacity: 0.65;
            }

            70% {
              transform: scale(1.35);
              opacity: 0;
            }

            100% {
              transform: scale(1.35);
              opacity: 0;
            }
          }
        `}
      </style>
    </main>
  );
};

export default Home;