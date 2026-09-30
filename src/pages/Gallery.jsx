import React, { useEffect, useState } from "react";
import {
  X,
  Maximize2,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ============================================================
// ASSETS
// ============================================================

// ---------------- DOORS ----------------

import dor1 from "../assets/dor1.webp";
import dor2 from "../assets/dor2.webp";
import dor3 from "../assets/dor3.webp";
import dor4 from "../assets/dor4.webp";
import dor5 from "../assets/dor5.webp";
import dor6 from "../assets/dor6.webp";
import dor7 from "../assets/dor7.webp";
import dor8 from "../assets/dor8.webp";
import dor9 from "../assets/dor9.webp";
import dor10 from "../assets/dor10.webp";
import dor11 from "../assets/dor11.webp";
import dor12 from "../assets/dor12.webp";
import dor13 from "../assets/dor13.webp";
import dor14 from "../assets/dor14.webp";
import dor15 from "../assets/dor15.webp";

// ---------------- BEDROOMS ----------------

import bed1 from "../assets/bed1.webp";
import bed2 from "../assets/bed2.webp";
import bed3 from "../assets/bed3.webp";
import bed4 from "../assets/bed4.webp";
import bed5 from "../assets/bed5.webp";
import bed6 from "../assets/bed6.webp";
import bed7 from "../assets/bed7.webp";
import bed8 from "../assets/bed8.webp";
import bed9 from "../assets/bed9.webp";
import bed10 from "../assets/bed10.webp";
import bed11 from "../assets/bed11.webp";
import bed12 from "../assets/bed12.webp";
import bed13 from "../assets/bed13.webp";
import bed14 from "../assets/bed14.webp";
import bed15 from "../assets/bed15.webp";
import bed16 from "../assets/bed16.webp";

// ---------------- WARDROBES ----------------

import word1 from "../assets/word1.webp";
import word2 from "../assets/word2.webp";
import word3 from "../assets/word3.webp";
import word4 from "../assets/word4.webp";
import word5 from "../assets/word5.webp";
import word6 from "../assets/word6.webp";
import word7 from "../assets/word7.webp";

// ---------------- KITCHENS ----------------

import kitchen1 from "../assets/kitchen1.webp";
import kitchen2 from "../assets/kitchen2.webp";
import kitchen3 from "../assets/kitchen3.webp";
import kitchen4 from "../assets/kitchen4.webp";
import kitchen5 from "../assets/kitchen5.webp";
import kitchen6 from "../assets/kitchen6.webp";
import kitchen7 from "../assets/kitchen7.webp";
import kitchen8 from "../assets/kitchen8.webp";
import kitchen9 from "../assets/kitchen9.webp";
import kitchen10 from "../assets/kitchen10.webp";
import kitchen11 from "../assets/kitchen11.webp";
import kitchen12 from "../assets/kitchen12.webp";
import kitchen13 from "../assets/kitchen13.webp";
import kitchen14 from "../assets/kitchen14.webp";
import kitchen15 from "../assets/kitchen15.webp";
import kitchen16 from "../assets/kitchen16.webp";

// ---------------- MEDIA WALLS ----------------

import media1 from "../assets/media1.webp";
import media2 from "../assets/media2.webp";
import media3 from "../assets/media3.webp";
import media4 from "../assets/media4.webp";
import media5 from "../assets/media5.webp";
import media6 from "../assets/media6.webp";

// ============================================================
// CONFIG
// ============================================================

const WHATSAPP_NUMBER = "923110706005";

// ============================================================
// GALLERY DATA
// ============================================================

const galleryData = [
  // ==========================================================
  // DOORS
  // ==========================================================

  {
    id: "door-01",
    categoryName: "Doors",
    title: "Classic Wood Door",
    description:
      "A warm wooden door concept combining traditional character with modern finishing.",
    image: dor3,
  },
  {
    id: "door-02",
    categoryName: "Doors",
    title: "Contemporary Door",
    description:
      "Clean geometry and refined detailing create a modern architectural look.",
    image: dor2,
  },
  {
    id: "door-03",
    categoryName: "Doors",
    title: "Contemporary Entrance",
    description:
      "A modern entrance concept designed around clean architectural lines.",
    image: dor12,
  },
  {
    id: "door-04",
    categoryName: "Doors",
    title: "Designer Door",
    description:
      "A distinctive design focused on proportion, texture and architectural appeal.",
    image: dor8,
  },
  {
    id: "door-05",
    categoryName: "Doors",
    title: "Elegant Door",
    description:
      "A balanced door design with subtle detailing and a premium appearance.",
    image: dor7,
  },
  {
    id: "door-06",
    categoryName: "Doors",
    title: "Luxury Door",
    description:
      "A premium door concept created for sophisticated residential interiors.",
    image: dor9,
  },
  {
    id: "door-07",
    categoryName: "Doors",
    title: "Minimal Door",
    description:
      "A clean and understated design for modern architectural spaces.",
    image: dor10,
  },
  {
    id: "door-08",
    categoryName: "Doors",
    title: "Modern Entrance Door",
    description:
      "A distinctive entrance door designed to create a strong first impression.",
    image: dor1,
  },
  {
    id: "door-09",
    categoryName: "Doors",
    title: "Modern Panel Door",
    description:
      "A refined panel design combining simplicity with a premium finish.",
    image: dor14,
  },
  {
    id: "door-10",
    categoryName: "Doors",
    title: "Modern Wood Finish",
    description:
      "A sophisticated wooden finish with a timeless contemporary profile.",
    image: dor6,
  },
  {
    id: "door-11",
    categoryName: "Doors",
    title: "Premium Interior Door",
    description:
      "A refined interior door designed to complement contemporary spaces.",
    image: dor4,
  },
  {
    id: "door-12",
    categoryName: "Doors",
    title: "Premium Timber Door",
    description:
      "A rich timber-inspired design created for elegant residential spaces.",
    image: dor13,
  },
  {
    id: "door-13",
    categoryName: "Doors",
    title: "Signature Door",
    description:
      "A distinctive signature design created to bring personality to the space.",
    image: dor15,
  },
  {
    id: "door-14",
    categoryName: "Doors",
    title: "Statement Door",
    description:
      "A bold door design created to add character to an interior or entrance.",
    image: dor5,
  },
  {
    id: "door-15",
    categoryName: "Doors",
    title: "Wooden Entrance",
    description:
      "A warm entrance design bringing natural texture and strong visual presence.",
    image: dor11,
  },

  // ==========================================================
  // BEDROOMS
  // ==========================================================

  {
    id: "bed-01",
    categoryName: "Bedrooms",
    title: "Contemporary Bedroom",
    description:
      "A modern bedroom composition with carefully balanced furniture and finishes.",
    image: bed3,
  },
  {
    id: "bed-02",
    categoryName: "Bedrooms",
    title: "Contemporary Suite",
    description:
      "A polished bedroom setting with a modern and balanced interior composition.",
    image: bed10,
  },
  {
    id: "bed-03",
    categoryName: "Bedrooms",
    title: "Designer Bedroom",
    description:
      "A refined bedroom concept featuring modern proportions and premium finishes.",
    image: bed8,
  },
  {
    id: "bed-04",
    categoryName: "Bedrooms",
    title: "Elegant Bedroom",
    description:
      "A warm bedroom interior combining practical design with elegant detailing.",
    image: bed4,
  },
  {
    id: "bed-05",
    categoryName: "Bedrooms",
    title: "Elegant Suite",
    description:
      "A timeless bedroom composition with refined furniture and interior detailing.",
    image: bed15,
  },
  {
    id: "bed-06",
    categoryName: "Bedrooms",
    title: "Luxury Bed Interior",
    description:
      "A sophisticated bedroom setting designed for a calm and comfortable atmosphere.",
    image: bed2,
  },
  {
    id: "bed-07",
    categoryName: "Bedrooms",
    title: "Luxury Interior",
    description:
      "A sophisticated bedroom interior designed around comfort and atmosphere.",
    image: bed9,
  },
  {
    id: "bed-08",
    categoryName: "Bedrooms",
    title: "Minimal Bedroom",
    description:
      "A calm and minimal bedroom concept designed for modern living.",
    image: bed7,
  },
  {
    id: "bed-09",
    categoryName: "Bedrooms",
    title: "Modern Bed Design",
    description:
      "A contemporary bed setting with a clean and sophisticated interior language.",
    image: bed6,
  },
  {
    id: "bed-10",
    categoryName: "Bedrooms",
    title: "Modern Bedroom",
    description:
      "A complete bedroom concept focused on comfort, proportion and refined detailing.",
    image: bed1,
  },
  {
    id: "bed-11",
    categoryName: "Bedrooms",
    title: "Modern Comfort",
    description:
      "A comfortable bedroom concept with a clean contemporary character.",
    image: bed14,
  },
  {
    id: "bed-12",
    categoryName: "Bedrooms",
    title: "Modern Sleeping Space",
    description:
      "A functional and stylish bedroom concept for contemporary homes.",
    image: bed11,
  },
  {
    id: "bed-13",
    categoryName: "Bedrooms",
    title: "Premium Bedroom",
    description:
      "A premium bedroom concept designed around comfort and visual harmony.",
    image: bed5,
  },
  {
    id: "bed-14",
    categoryName: "Bedrooms",
    title: "Premium Suite",
    description:
      "A premium bedroom setting designed to create a calm and elegant environment.",
    image: bed13,
  },
  {
    id: "bed-15",
    categoryName: "Bedrooms",
    title: "Refined Bedroom",
    description:
      "A sophisticated interior built around clean lines and subtle details.",
    image: bed12,
  },
  {
    id: "bed-16",
    categoryName: "Bedrooms",
    title: "Signature Bedroom",
    description:
      "A carefully composed bedroom interior designed for modern residential spaces.",
    image: bed16,
  },

  // ==========================================================
  // KITCHENS
  // ==========================================================

  {
    id: "kitchen-01",
    categoryName: "Kitchens",
    title: "Classic Contemporary Kitchen",
    description:
      "A timeless kitchen style combining classic warmth with contemporary detailing.",
    image: kitchen8,
  },
  {
    id: "kitchen-02",
    categoryName: "Kitchens",
    title: "Contemporary Kitchen",
    description:
      "Thoughtfully designed cabinetry and elegant detailing for a modern home.",
    image: kitchen2,
  },
  {
    id: "kitchen-03",
    categoryName: "Kitchens",
    title: "Designer Kitchen",
    description:
      "A designer-inspired kitchen composition with functional architectural details.",
    image: kitchen15,
  },
  {
    id: "kitchen-04",
    categoryName: "Kitchens",
    title: "Elegant Kitchen",
    description:
      "A warm and modern kitchen composition with carefully planned storage.",
    image: kitchen4,
  },
  {
    id: "kitchen-05",
    categoryName: "Kitchens",
    title: "Functional Kitchen",
    description:
      "A practical kitchen layout designed with modern lifestyles in mind.",
    image: kitchen9,
  },
  {
    id: "kitchen-06",
    categoryName: "Kitchens",
    title: "Luxury Kitchen",
    description:
      "A premium interior kitchen concept focused on refined materials and usability.",
    image: kitchen6,
  },
  {
    id: "kitchen-07",
    categoryName: "Kitchens",
    title: "Minimal Kitchen",
    description:
      "Clean lines and efficient cabinetry create a calm contemporary environment.",
    image: kitchen5,
  },
  {
    id: "kitchen-08",
    categoryName: "Kitchens",
    title: "Modern Cabinetry",
    description:
      "Smart cabinetry and a balanced layout designed for everyday living.",
    image: kitchen7,
  },
  {
    id: "kitchen-09",
    categoryName: "Kitchens",
    title: "Modern Kitchen",
    description:
      "A refined kitchen concept combining practical storage with a clean contemporary finish.",
    image: kitchen1,
  },
  {
    id: "kitchen-10",
    categoryName: "Kitchens",
    title: "Modern Living Kitchen",
    description:
      "A spacious and practical kitchen concept made for contemporary living.",
    image: kitchen14,
  },
  {
    id: "kitchen-11",
    categoryName: "Kitchens",
    title: "Premium Interior",
    description:
      "A polished kitchen interior with a strong focus on detail and finish.",
    image: kitchen13,
  },
  {
    id: "kitchen-12",
    categoryName: "Kitchens",
    title: "Premium Kitchen",
    description:
      "A sophisticated kitchen space designed around functionality and visual balance.",
    image: kitchen3,
  },
  {
    id: "kitchen-13",
    categoryName: "Kitchens",
    title: "Refined Kitchen",
    description:
      "Elegant proportions and modern storage come together in this refined concept.",
    image: kitchen11,
  },
  {
    id: "kitchen-14",
    categoryName: "Kitchens",
    title: "Signature Kitchen",
    description:
      "A carefully finished kitchen concept bringing together style and practicality.",
    image: kitchen16,
  },
  {
    id: "kitchen-15",
    categoryName: "Kitchens",
    title: "Statement Kitchen",
    description:
      "A distinctive kitchen design created to become the centre of the home.",
    image: kitchen10,
  },
  {
    id: "kitchen-16",
    categoryName: "Kitchens",
    title: "Urban Kitchen",
    description:
      "A modern urban kitchen designed around clean surfaces and useful storage.",
    image: kitchen12,
  },

  // ==========================================================
  // MEDIA WALLS
  // ==========================================================

  {
    id: "media-01",
    categoryName: "Media Walls",
    title: "Contemporary Media Unit",
    description:
      "A clean media wall concept combining display, storage and modern detailing.",
    image: media2,
  },
  {
    id: "media-02",
    categoryName: "Media Walls",
    title: "Designer Media Unit",
    description:
      "A distinctive media wall designed around proportion, storage and visual balance.",
    image: media5,
  },
  {
    id: "media-03",
    categoryName: "Media Walls",
    title: "Luxury Media Wall",
    description:
      "A sophisticated media feature designed to become the focal point of the room.",
    image: media3,
  },
  {
    id: "media-04",
    categoryName: "Media Walls",
    title: "Minimal Media Wall",
    description:
      "A refined and understated media solution for modern living spaces.",
    image: media4,
  },
  {
    id: "media-05",
    categoryName: "Media Walls",
    title: "Modern Media Wall",
    description:
      "A statement media wall designed to bring structure and character to the living room.",
    image: media1,
  },
  {
    id: "media-06",
    categoryName: "Media Walls",
    title: "Signature Media Wall",
    description:
      "A premium media concept bringing together modern design and practical functionality.",
    image: media6,
  },

  // ==========================================================
  // WARDROBES
  // ==========================================================

  {
    id: "wardrobe-01",
    categoryName: "Wardrobes",
    title: "Built-In Wardrobe",
    description:
      "A seamless wardrobe solution designed to maximise storage without compromising style.",
    image: word1,
  },
  {
    id: "wardrobe-02",
    categoryName: "Wardrobes",
    title: "Contemporary Storage",
    description:
      "A modern storage system combining functionality with clean visual lines.",
    image: word5,
  },
  {
    id: "wardrobe-03",
    categoryName: "Wardrobes",
    title: "Elegant Wardrobe",
    description:
      "Balanced proportions and practical storage create an elegant bedroom solution.",
    image: word4,
  },
  {
    id: "wardrobe-04",
    categoryName: "Wardrobes",
    title: "Luxury Wardrobe",
    description:
      "A premium wardrobe concept designed to complement sophisticated interiors.",
    image: word6,
  },
  {
    id: "wardrobe-05",
    categoryName: "Wardrobes",
    title: "Minimal Storage",
    description:
      "A simple and refined wardrobe concept for modern bedrooms.",
    image: word7,
  },
  {
    id: "wardrobe-06",
    categoryName: "Wardrobes",
    title: "Modern Wardrobe",
    description:
      "A clean wardrobe design with a sophisticated contemporary appearance.",
    image: word2,
  },
  {
    id: "wardrobe-07",
    categoryName: "Wardrobes",
    title: "Premium Storage",
    description:
      "A refined storage concept designed around modern bedroom interiors.",
    image: word3,
  },
];

// ============================================================
// SORT A → Z
// ============================================================

const sortedGallery = [...galleryData].sort((a, b) =>
  a.title.localeCompare(b.title)
);

// ============================================================
// WHATSAPP
// ============================================================

const getWhatsAppLink = (title = "your project") => {
  const message = `Hi FastKitchen, I saw your "${title}" project in the gallery and would like to discuss a similar design.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
};

// ============================================================
// GALLERY COMPONENT
// ============================================================

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // ==========================================================
  // CURRENT INDEX
  // ==========================================================

  const currentIndex = selectedImage
    ? sortedGallery.findIndex(
        (item) => item.id === selectedImage.id
      )
    : -1;

  // ==========================================================
  // NEXT
  // ==========================================================

  const showNext = () => {
    if (!sortedGallery.length) return;

    const nextIndex =
      currentIndex >= sortedGallery.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(sortedGallery[nextIndex]);
  };

  // ==========================================================
  // PREVIOUS
  // ==========================================================

  const showPrevious = () => {
    if (!sortedGallery.length) return;

    const previousIndex =
      currentIndex <= 0
        ? sortedGallery.length - 1
        : currentIndex - 1;

    setSelectedImage(sortedGallery[previousIndex]);
  };

  // ==========================================================
  // MODAL KEYBOARD
  // ==========================================================

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  return (
    <main className="overflow-hidden bg-[#F8F6F1] text-[#17120D]">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[390px] overflow-hidden bg-[#0B0B0B] sm:min-h-[430px] lg:min-h-[470px]">

        {/* RED GLOW */}

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#D9271C]/10 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#D9271C]/[0.07] blur-[130px]" />

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-[1450px] items-center px-5 pb-12 pt-28 sm:min-h-[430px] sm:px-8 sm:pb-14 sm:pt-32 lg:min-h-[470px] lg:px-12 lg:pb-16 lg:pt-36">

          <div className="max-w-3xl">

            {/* LABEL */}

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-9 bg-[#D9271C]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50 sm:text-xs">
                Our Gallery
              </span>

            </div>

            {/* HEADING */}

            <h1 className="text-[2.5rem] font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Explore Our

              <span className="block text-[#D9271C]">
                Latest Designs.
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Explore our collection of kitchens, wardrobes, doors,
              bedrooms and media walls — thoughtfully designed for
              modern spaces and everyday living.
            </p>

            {/* FEATURES */}

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-xs text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9271C]" />
                Custom Designs
              </div>

              <div className="flex items-center gap-2 text-xs text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9271C]" />
                Modern Interiors
              </div>

              <div className="flex items-center gap-2 text-xs text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D9271C]" />
                FastKitchen
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM RED LINE */}

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#D9271C] via-[#D9271C]/40 to-transparent" />

      </section>


      {/* ======================================================
          INTRO
      ====================================================== */}

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-[1350px]">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            {/* LEFT */}

            <div>

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D9271C] sm:text-xs">
                Our Work
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-[#17120D] sm:text-4xl lg:text-5xl">

                Inspiration for

                <span className="block text-[#D9271C]">
                  your next space.
                </span>

              </h2>

            </div>

            {/* RIGHT */}

            <p className="max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Browse our complete collection of interior projects.
              Each design reflects our focus on practical layouts,
              refined details and modern aesthetics.
            </p>

          </div>

        </div>

      </section>


      {/* ======================================================
          MASONRY GALLERY
      ====================================================== */}

      <section className="px-3 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28">

        <div className="mx-auto max-w-[1450px]">

          <div
            className="
              columns-2
              gap-3
              sm:columns-2
              sm:gap-4
              md:columns-3
              lg:columns-3
              xl:columns-4
              xl:gap-5
            "
          >

            {sortedGallery.map((project) => (

              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedImage(project)}
                className="
                  group
                  relative
                  mb-3
                  block
                  w-full
                  break-inside-avoid
                  cursor-pointer
                  overflow-hidden
                  rounded-xl
                  bg-black
                  text-left
                  sm:mb-4
                  sm:rounded-2xl
                  lg:mb-5
                "
              >

                {/* IMAGE */}

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    block
                    h-auto
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* EXPAND */}

                <div className="absolute right-3 top-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-10 sm:w-10">

                  <Maximize2 size={15} />

                </div>

                {/* PROJECT INFO */}

                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4 lg:p-5">

                  <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#D9271C] sm:text-[9px]">
                    {project.categoryName}
                  </p>

                  <h3 className="text-sm font-bold leading-tight text-white sm:text-base">
                    {project.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-[9px] font-medium text-white/70 sm:text-[10px]">

                    View Project

                    <ArrowRight size={11} />

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="bg-[#0B0B0B] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="relative mx-auto max-w-[1350px] overflow-hidden rounded-[28px] bg-[#D9271C] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* DECORATION */}

          <div className="absolute -left-24 -top-24 h-52 w-52 rounded-full bg-white/[0.07] blur-[70px]" />

          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-black/10 blur-[80px]" />

          {/* CONTENT */}

          <div className="relative z-10 max-w-3xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/55 sm:text-xs">
              Start Your Project
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Have an idea for your space?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Share your requirements with our team and let's turn
              your idea into a beautifully designed space.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              {/* WHATSAPP */}

              <a
                href={getWhatsAppLink("a new interior project")}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#101010]
                  px-6
                  py-3.5
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-black
                  sm:text-sm
                "
              >

                <MessageCircle size={17} />

                Discuss Your Project

                <ArrowRight size={15} />

              </a>

              {/* PRODUCTS */}

              <a
                href="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/30
                  px-6
                  py-3.5
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#17120D]
                  sm:text-sm
                "
              >

                Explore Products

                <ArrowRight size={15} />

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FULLSCREEN MODAL
      ====================================================== */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/95
            p-3
            backdrop-blur-md
            sm:p-5
            lg:p-8
          "
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-4
              top-4
              z-30
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/10
              text-white
              transition-all
              hover:bg-white/20
              sm:right-6
              sm:top-6
              sm:h-11
              sm:w-11
            "
          >
            <X size={20} />
          </button>


          {/* PREVIOUS */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="
              absolute
              left-3
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/10
              text-white
              transition-all
              hover:bg-white/20
              sm:left-6
              sm:h-12
              sm:w-12
              lg:left-8
            "
          >
            <ChevronLeft size={21} />
          </button>


          {/* NEXT */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="
              absolute
              right-3
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/10
              text-white
              transition-all
              hover:bg-white/20
              sm:right-6
              sm:h-12
              sm:w-12
              lg:right-8
            "
          >
            <ChevronRight size={21} />
          </button>


          {/* MODAL CONTAINER */}

          <div
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              grid
              max-h-[92vh]
              w-full
              max-w-6xl
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#111111]
              sm:rounded-3xl
              lg:grid-cols-[1.4fr_0.6fr]
            "
          >

            {/* IMAGE AREA */}

            <div className="relative flex min-h-[42vh] items-center justify-center bg-black lg:min-h-[76vh]">

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="
                  h-full
                  max-h-[55vh]
                  w-full
                  object-contain
                  lg:max-h-[76vh]
                "
              />

            </div>


            {/* DETAILS */}

            <div className="max-h-[45vh] overflow-y-auto p-5 sm:p-7 lg:max-h-none lg:p-9">

              {/* CATEGORY */}

              <div className="mb-5 flex items-center gap-2">

                <span className="h-[2px] w-7 bg-[#D9271C]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D9271C]">
                  {selectedImage.categoryName}
                </span>

              </div>


              {/* TITLE */}

              <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                {selectedImage.title}
              </h3>


              {/* DESCRIPTION */}

              <p className="mt-4 text-sm leading-7 text-white/50">
                {selectedImage.description}
              </p>


              {/* DETAILS */}

              <div className="mt-7 border-t border-white/10 pt-6">

                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Project Details
                </p>

                <div className="space-y-3 text-xs sm:text-sm">

                  <div className="flex items-center justify-between gap-4">

                    <span className="text-white/40">
                      Category
                    </span>

                    <span className="font-medium text-white">
                      {selectedImage.categoryName}
                    </span>

                  </div>

                  <div className="flex items-center justify-between gap-4">

                    <span className="text-white/40">
                      Design
                    </span>

                    <span className="font-medium text-white">
                      Custom
                    </span>

                  </div>

                  <div className="flex items-center justify-between gap-4">

                    <span className="text-white/40">
                      Style
                    </span>

                    <span className="font-medium text-white">
                      Contemporary
                    </span>

                  </div>

                </div>

              </div>


              {/* WHATSAPP */}

              <a
                href={getWhatsAppLink(selectedImage.title)}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#D9271C]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#BD2117]
                "
              >

                <MessageCircle size={17} />

                Discuss Similar Design

                <ArrowRight size={15} />

              </a>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default Gallery;