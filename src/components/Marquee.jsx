import React from "react";
import { ArrowUpRight } from "lucide-react";

// ============================================================
// IMAGE IMPORTS
// ============================================================

import doorImage from "../assets/dor1.webp";
import wardrobeImage from "../assets/word1.webp";
import kitchenImage from "../assets/kitchen1.webp";
import mediaImage from "../assets/media1.webp";
import bedImage from "../assets/bed1.webp";

// ============================================================
// MARQUEE
// ============================================================

const Marquee = () => {
  const products = [
    {
      number: "01",
      title: "Doors",
      image: doorImage,
    },
    {
      number: "02",
      title: "Wardrobes",
      image: wardrobeImage,
    },
    {
      number: "03",
      title: "Kitchens",
      image: kitchenImage,
    },
    {
      number: "04",
      title: "Media Walls",
      image: mediaImage,
    },
    {
      number: "05",
      title: "Bedrooms",
      image: bedImage,
    },
  ];

  // Duplicate the collection for a seamless loop
  const marqueeItems = [...products, ...products];

  return (
    <section className="w-full overflow-hidden bg-[#FFFDF9] py-10 sm:py-14 lg:py-16">
      {/* ======================================================
          HEADER
      ======================================================= */}

      <div className="mx-auto mb-7 w-full max-w-[1440px] px-4 sm:mb-9 sm:px-6 lg:mb-11 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          {/* LEFT CONTENT */}

          <div className="max-w-[700px]">
            <p
              className="
                mb-2
                font-['Inter']
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#D32F2F]
                sm:text-[10px]
                lg:text-[11px]
              "
            >
              Our Collections
            </p>

            <h2
              className="
                font-['Montserrat']
                text-[27px]
                font-semibold
                leading-[1.12]
                tracking-[-0.025em]
                text-[#1F1F1F]
                sm:text-[36px]
                lg:text-[44px]
              "
            >
              Designed for{" "}
              <span className="font-serif font-medium italic text-[#D32F2F]">
                modern living.
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}

          <p
            className="
              max-w-[360px]
              font-['Inter']
              text-[11px]
              font-normal
              leading-[1.65]
              text-[#707070]
              sm:text-right
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            Bespoke interiors crafted with thoughtful design, quality
            materials, and attention to every detail.
          </p>
        </div>
      </div>

      {/* ======================================================
          MARQUEE WRAPPER
      ======================================================= */}

      <div className="relative w-full overflow-hidden">
        {/* ====================================================
            LEFT EDGE FADE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-8
            bg-gradient-to-r
            from-[#FFFDF9]
            via-[#FFFDF9]/70
            to-transparent
            sm:w-14
            lg:w-20
          "
        />

        {/* ====================================================
            RIGHT EDGE FADE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-8
            bg-gradient-to-l
            from-[#FFFDF9]
            via-[#FFFDF9]/70
            to-transparent
            sm:w-14
            lg:w-20
          "
        />

        {/* ====================================================
            MOVING TRACK
        ===================================================== */}

        <div className="marquee-track flex w-max items-stretch">
          {marqueeItems.map((product, index) => (
            <article
              key={`${product.number}-${index}`}
              className="
                marquee-card
                group
                relative
                mx-1.5
                w-[220px]
                shrink-0
                overflow-hidden
                rounded-[3px]
                border
                border-[#E7E1D8]
                bg-white
                sm:mx-2
                sm:w-[285px]
                lg:w-[330px]
              "
            >
              {/* ==================================================
                  IMAGE
              =================================================== */}

              <div
                className="
                  relative
                  h-[205px]
                  overflow-hidden
                  sm:h-[250px]
                  lg:h-[275px]
                "
              >
                <img
                  src={product.image}
                  alt={`${product.title} interior design`}
                  loading="lazy"
                  draggable="false"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/55
                    via-black/5
                    to-transparent
                  "
                />

                {/* ==================================================
                    NUMBER
                =================================================== */}

                <div
                  className="
                    absolute
                    left-3
                    top-3
                    flex
                    h-7
                    min-w-7
                    items-center
                    justify-center
                    rounded-[2px]
                    border
                    border-white/30
                    bg-white/95
                    px-2
                    backdrop-blur-sm
                    sm:left-4
                    sm:top-4
                  "
                >
                  <span
                    className="
                      font-['Inter']
                      text-[8px]
                      font-semibold
                      tracking-[0.16em]
                      text-[#D32F2F]
                      sm:text-[9px]
                    "
                  >
                    {product.number}
                  </span>
                </div>

                {/* ==================================================
                    ARROW
                =================================================== */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-[2px]
                    border
                    border-white/30
                    bg-white/95
                    text-[#202020]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:bg-[#D32F2F]
                    group-hover:text-white
                    sm:right-4
                    sm:top-4
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                  />
                </div>

                {/* ==================================================
                    IMAGE TEXT
                =================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-4
                    sm:p-5
                  "
                >
                  <p
                    className="
                      mb-1.5
                      font-['Inter']
                      text-[7px]
                      font-medium
                      uppercase
                      tracking-[0.24em]
                      text-white/75
                      sm:text-[8px]
                    "
                  >
                    FastKitchen
                  </p>

                  <h3
                    className="
                      font-['Montserrat']
                      text-[20px]
                      font-semibold
                      leading-tight
                      tracking-[-0.02em]
                      text-white
                      sm:text-[24px]
                    "
                  >
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* ==================================================
                  CARD FOOTER
              =================================================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3
                  sm:px-5
                  sm:py-3.5
                "
              >
                <span
                  className="
                    font-['Inter']
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-[#777777]
                    sm:text-[9px]
                  "
                >
                  Explore Collection
                </span>

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#D32F2F]
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ======================================================
          MARQUEE ANIMATION
      ======================================================= */}

      <style>{`
        /* ======================================================
           SMOOTH CONTINUOUS MARQUEE
        ====================================================== */

        @keyframes fastkitchen-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .marquee-track {
          animation: fastkitchen-marquee 42s linear infinite;
          transform: translate3d(0, 0, 0);
          will-change: transform;
          backface-visibility: hidden;
        }

        /* ======================================================
           CARD HOVER
        ====================================================== */

        .marquee-card {
          transition:
            transform 400ms ease,
            box-shadow 400ms ease,
            border-color 400ms ease;
        }

        .marquee-card:hover {
          transform: translateY(-4px);
          border-color: rgba(211, 47, 47, 0.22);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.08);
        }

        /* ======================================================
           PAUSE ON DESKTOP HOVER
        ====================================================== */

        @media (min-width: 768px) {
          .marquee-track:hover {
            animation-play-state: paused;
          }
        }

        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 34s;
          }

          .marquee-card:hover {
            transform: none;
            box-shadow: none;
          }
        }

        /* ======================================================
           REDUCE MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }

          .marquee-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Marquee;