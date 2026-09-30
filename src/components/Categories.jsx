import React, { useState } from "react";
import {
  Maximize2,
  X,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

// ============================================================
// DOORS
// ============================================================

import door1 from "../assets/dor1.webp";
import door2 from "../assets/dor2.webp";
import door3 from "../assets/dor3.webp";
import door4 from "../assets/dor4.webp";

// ============================================================
// BEDS
// ============================================================

import bed1 from "../assets/bed1.webp";
import bed2 from "../assets/bed2.webp";
import bed3 from "../assets/bed3.webp";
import bed4 from "../assets/bed4.webp";

// ============================================================
// WARDROBES
// ============================================================

import wardrobe1 from "../assets/word1.webp";
import wardrobe2 from "../assets/word2.webp";
import wardrobe3 from "../assets/word3.webp";
import wardrobe4 from "../assets/word4.webp";

// ============================================================
// KITCHENS
// ============================================================

import kitchen1 from "../assets/kitchen1.webp";
import kitchen2 from "../assets/kitchen2.webp";
import kitchen3 from "../assets/kitchen3.webp";
import kitchen4 from "../assets/kitchen4.webp";

// ============================================================
// MEDIA WALLS
// ============================================================

import media1 from "../assets/media1.webp";
import media2 from "../assets/media2.webp";
import media3 from "../assets/media3.webp";
import media4 from "../assets/media4.webp";

// ============================================================
// WHATSAPP
// ============================================================

const WHATSAPP_NUMBER = "923008098897";

// ============================================================
// CATEGORY DATA
// ============================================================

const categories = [
  {
    id: "doors",
    name: "Doors",
    products: [
      {
        title: "Modern Wooden Door",
        image: door1,
        description:
          "Refined wooden doors designed with clean detailing, balanced proportions and a timeless finish.",
      },
      {
        title: "Contemporary Panel Door",
        image: door2,
        description:
          "Contemporary panel detailing with a clean architectural character, crafted to complement modern interiors.",
      },
      {
        title: "Luxury Designer Door",
        image: door3,
        description:
          "A distinctive entrance design combining elegant proportions, refined detailing and lasting visual appeal.",
      },
      {
        title: "Classic Heritage Door",
        image: door4,
        description:
          "Traditional craftsmanship with carefully considered proportions and sophisticated finishing details.",
      },
    ],
  },

  {
    id: "wardrobes",
    name: "Wardrobes",
    products: [
      {
        title: "Luxury Fitted Wardrobe",
        image: wardrobe1,
        description:
          "Tailored storage designed around your space, bringing together elegant finishes and everyday functionality.",
      },
      {
        title: "Modern Sliding Wardrobe",
        image: wardrobe2,
        description:
          "A streamlined wardrobe solution featuring clean lines, practical storage and a contemporary finish.",
      },
      {
        title: "Classic Wood Wardrobe",
        image: wardrobe3,
        description:
          "Warm natural wood detailing paired with practical storage for a refined and timeless bedroom interior.",
      },
      {
        title: "Premium Custom Wardrobe",
        image: wardrobe4,
        description:
          "A bespoke wardrobe solution created to complement your bedroom layout, style and storage requirements.",
      },
    ],
  },

  {
    id: "beds",
    name: "Beds",
    products: [
      {
        title: "Luxury King Bed",
        image: bed1,
        description:
          "A beautifully proportioned bed designed to bring comfort, elegance and a refined character to the bedroom.",
      },
      {
        title: "Modern Designer Bed",
        image: bed2,
        description:
          "Contemporary bedroom design with clean lines, considered proportions and a premium finished appearance.",
      },
      {
        title: "Classic Wooden Bed",
        image: bed3,
        description:
          "Timeless wooden craftsmanship created to bring warmth and understated elegance to sophisticated interiors.",
      },
      {
        title: "Premium Bedroom Bed",
        image: bed4,
        description:
          "A distinctive bedroom centrepiece combining comfort, considered design and quality craftsmanship.",
      },
    ],
  },

  {
    id: "kitchens",
    name: "Kitchens",
    products: [
      {
        title: "Modern Luxury Kitchen",
        image: kitchen1,
        description:
          "A sophisticated kitchen concept designed around contemporary living, practical flow and refined detailing.",
      },
      {
        title: "Contemporary Kitchen",
        image: kitchen2,
        description:
          "Elegant cabinetry and clean architectural details create a functional and polished modern interior.",
      },
      {
        title: "Classic Kitchen",
        image: kitchen3,
        description:
          "A timeless kitchen concept balancing traditional character with modern practicality and everyday comfort.",
      },
      {
        title: "Premium Wood Kitchen",
        image: kitchen4,
        description:
          "Warm wood finishes and bespoke detailing create a welcoming kitchen designed for everyday living.",
      },
    ],
  },

  {
    id: "media",
    name: "Media Walls",
    products: [
      {
        title: "Modern Media Wall",
        image: media1,
        description:
          "A refined media wall designed to create a balanced focal point while enhancing the living space.",
      },
      {
        title: "Luxury TV Wall",
        image: media2,
        description:
          "A sophisticated entertainment feature combining integrated storage with clean contemporary design.",
      },
      {
        title: "Contemporary Media Unit",
        image: media3,
        description:
          "Clean architectural detailing and practical functionality designed for modern living environments.",
      },
      {
        title: "Designer TV Feature",
        image: media4,
        description:
          "A statement TV feature combining premium materials, balanced proportions and elegant detailing.",
      },
    ],
  },
];

// ============================================================
// COMPONENT
// ============================================================

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("doors");
  const [selectedImage, setSelectedImage] = useState(null);

  const activeData = categories.find(
    (category) => category.id === activeCategory
  );

  // ==========================================================
  // WHATSAPP
  // ==========================================================

  const getWhatsAppLink = (product) => {
    const message = `Hello, I am interested in "${product.title}". Please share more details, price and availability.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  // ==========================================================
  // OPEN IMAGE
  // ==========================================================

  const openImage = (product) => {
    setSelectedImage(product);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white py-13 sm:py-16 lg:py-10">
        {/* ====================================================
            SUBTLE BACKGROUND DETAIL
        ==================================================== */}

        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#FFF4F4] blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* ==================================================
              SECTION HEADER
          ================================================== */}

          <div className="mb-9 max-w-[760px] sm:mb-11 lg:mb-14">
            {/* Small label */}
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <span className="h-px w-7 bg-[#D32F2F] sm:w-9" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#D32F2F] sm:text-[10px]">
                Our Collection
              </span>
            </div>

            {/* Main heading */}
            <h2
              className="
                font-serif
                text-[34px]
                font-medium
                leading-[1.08]
                tracking-[-0.035em]
                text-[#171717]
                sm:text-[43px]
                lg:text-[52px]
                xl:text-[56px]
              "
            >
              Crafted for{" "}
              <span className="italic text-[#D32F2F]">
                beautiful spaces.
              </span>
            </h2>

            {/* Professional description */}
            <p
              className="
                mt-4
                max-w-[650px]
                text-[12px]
                font-normal
                leading-[1.8]
                tracking-[0.01em]
                text-[#666666]
                sm:mt-5
                sm:text-[13px]
                sm:leading-[1.9]
                lg:text-[14px]
              "
            >
              Explore our collection of thoughtfully designed interior
              solutions, created to bring together refined aesthetics,
              practical functionality and quality craftsmanship for modern
              homes.
            </p>
          </div>

          {/* ==================================================
              CATEGORY SELECTOR
          ================================================== */}

          <div className="mb-9 overflow-x-auto scrollbar-hide sm:mb-11">
            <div className="flex min-w-max items-center gap-7 border-b border-[#ECECEC] pr-5 sm:gap-9 lg:gap-11">
              {categories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSelectedImage(null);
                    }}
                    className={`
                      relative
                      whitespace-nowrap
                      pb-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      transition-colors
                      duration-200
                      sm:pb-3.5
                      sm:text-[11px]
                      ${
                        isActive
                          ? "text-[#D32F2F]"
                          : "text-[#555555] hover:text-[#222222]"
                      }
                    `}
                  >
                    {category.name}

                    {isActive && (
                      <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#D32F2F]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ==================================================
              ACTIVE CATEGORY HEADER
          ================================================== */}

          <div className="mb-7 flex flex-col gap-3.5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#D32F2F] sm:text-[9px]">
                Selected Collection
              </span>

              <h3
                className="
                  mt-1.5
                  font-serif
                  text-[28px]
                  font-medium
                  leading-[1.1]
                  tracking-[-0.025em]
                  text-[#171717]
                  sm:text-[34px]
                  lg:text-[38px]
                "
              >
                {activeData.name}
              </h3>
            </div>

            <p
              className="
                max-w-[480px]
                text-[11px]
                font-normal
                leading-[1.75]
                tracking-[0.01em]
                text-[#777777]
                sm:text-right
                sm:text-[12px]
                sm:leading-[1.8]
                lg:max-w-[520px]
              "
            >
              Discover four carefully selected designs from our{" "}
              {activeData.name.toLowerCase()} collection, created to suit
              contemporary interiors and individual spaces.
            </p>
          </div>

          {/* ==================================================
              PRODUCTS GRID
              MOBILE: 2
              DESKTOP: 4
          ================================================== */}

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {activeData.products.map((product, index) => (
              <article
                key={product.title}
                className="
                  overflow-hidden
                  border
                  border-[#E8E8E8]
                  bg-white
                "
              >
                {/* ==================================================
                    IMAGE
                =================================================== */}

                <button
                  type="button"
                  onClick={() => openImage(product)}
                  aria-label={`View ${product.title}`}
                  className="
                    group
                    relative
                    block
                    h-[175px]
                    w-full
                    overflow-hidden
                    bg-[#F5F5F5]
                    text-left
                    sm:h-[235px]
                    md:h-[255px]
                    lg:h-[285px]
                    xl:h-[300px]
                  "
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-[1.02]
                    "
                  />

                  {/* Expand */}
                  <span
                    className="
                      absolute
                      right-2.5
                      top-2.5
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      bg-white/95
                      text-[#333333]
                      sm:right-3
                      sm:top-3
                    "
                  >
                    <Maximize2
                      size={14}
                      strokeWidth={1.5}
                    />
                  </span>

                  {/* Number */}
                  <span
                    className="
                      absolute
                      bottom-2.5
                      left-3
                      text-[8px]
                      font-medium
                      tracking-[0.15em]
                      text-white
                      drop-shadow-sm
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>

                {/* ==================================================
                    PRODUCT CONTENT
                =================================================== */}

                <div className="p-3.5 sm:p-4 lg:p-5">
                  {/* Category */}
                  <span
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#D32F2F]
                      sm:text-[8px]
                    "
                  >
                    {activeData.name}
                  </span>

                  {/* Title */}
                  <h4
                    className="
                      mt-1.5
                      font-serif
                      text-[16px]
                      font-medium
                      leading-[1.2]
                      tracking-[-0.01em]
                      text-[#171717]
                      sm:text-[19px]
                      lg:text-[20px]
                    "
                  >
                    {product.title}
                  </h4>

                  {/* Description + WhatsApp */}
                  <div className="mt-3 flex items-end gap-2">
                    <p
                      className="
                        line-clamp-3
                        min-w-0
                        flex-1
                        text-[9px]
                        font-normal
                        leading-[1.65]
                        tracking-[0.005em]
                        text-[#737373]
                        sm:text-[10px]
                        sm:leading-[1.7]
                      "
                    >
                      {product.description}
                    </p>

                    {/* WhatsApp */}
                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp about ${product.title}`}
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-[#F1D4D4]
                        bg-[#FFF8F8]
                        text-[#D32F2F]
                        transition-colors
                        duration-200
                        hover:border-[#D32F2F]
                        hover:bg-[#D32F2F]
                        hover:text-white
                      "
                    >
                      <MessageCircle
                        size={16}
                        strokeWidth={1.5}
                      />
                    </a>
                  </div>

                  {/* Bottom */}
                  <div className="mt-3 flex items-center justify-between border-t border-[#EEEEEE] pt-3">
                    <span
                      className="
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.14em]
                        text-[#999999]
                        sm:text-[8px]
                      "
                    >
                      Bespoke Design
                    </span>

                    <button
                      type="button"
                      onClick={() => openImage(product)}
                      className="
                        flex
                        items-center
                        gap-1
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.13em]
                        text-[#555555]
                        transition-colors
                        duration-200
                        hover:text-[#D32F2F]
                        sm:text-[8px]
                      "
                    >
                      View

                      <ArrowUpRight
                        size={11}
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ==================================================
              SHOW ALL PRODUCTS
          ================================================== */}

          <div className="mt-9 flex justify-center sm:mt-11 lg:mt-12">
            <button
              type="button"
              onClick={() => {
                window.location.href = "/products";
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                border
                border-[#D32F2F]
                bg-[#D32F2F]
                px-6
                py-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-white
                transition-colors
                duration-200
                hover:bg-[#B71C1C]
                sm:px-8
                sm:py-3.5
              "
            >
              Show All Products

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          IMAGE MODAL
      ======================================================== */}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/90
            p-3
            sm:p-6
          "
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
            className="
              absolute
              right-3
              top-3
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              bg-white
              text-[#222222]
              sm:right-6
              sm:top-6
            "
          >
            <X
              size={19}
              strokeWidth={1.5}
            />
          </button>

          {/* IMAGE */}
          <div
            className="
              relative
              max-h-[92vh]
              max-w-[1400px]
              overflow-hidden
              bg-white
              p-1
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="
                max-h-[90vh]
                max-w-full
                object-contain
              "
            />

            {/* DETAILS */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-5 pt-12 text-white">
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/70">
                {activeData.name}
              </p>

              <h3 className="mt-1 font-serif text-xl sm:text-2xl">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          RESPONSIVE UTILITIES
      ======================================================== */}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 640px) {
          .scrollbar-hide {
            padding-bottom: 1px;
          }
        }
      `}</style>
    </>
  );
};

export default Categories;