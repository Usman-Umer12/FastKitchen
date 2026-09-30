import React, { useEffect, useState } from "react";
import {
  X,
  Maximize2,
  MessageCircle,
  ArrowDown,
  Check,
} from "lucide-react";

// ============================================================
// DOORS
// ============================================================
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

// ============================================================
// BEDS
// ============================================================
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

// ============================================================
// WARDROBES
// ============================================================
import word1 from "../assets/word1.webp";
import word2 from "../assets/word2.webp";
import word3 from "../assets/word3.webp";
import word4 from "../assets/word4.webp";
import word5 from "../assets/word5.webp";
import word6 from "../assets/word6.webp";
import word7 from "../assets/word7.webp";

// ============================================================
// KITCHENS
// ============================================================
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

// ============================================================
// MEDIA WALLS
// ============================================================
import media1 from "../assets/media1.webp";
import media2 from "../assets/media2.webp";
import media3 from "../assets/media3.webp";
import media4 from "../assets/media4.webp";
import media5 from "../assets/media5.webp";
import media6 from "../assets/media6.webp";

// ============================================================
// CONSTANTS
// ============================================================

const WHATSAPP_NUMBER = "923008098897";

// ============================================================
// CATEGORY DATA
// ============================================================

const categories = [
  {
    id: "doors",
    name: "Doors",
    label: "Door Collection",
    intro:
      "Explore thoughtfully designed doors crafted to complement modern interiors with refined proportions, elegant detailing and lasting character.",
    images: [
      dor1,
      dor2,
      dor3,
      dor4,
      dor5,
      dor6,
      dor7,
      dor8,
      dor9,
      dor10,
      dor11,
      dor12,
      dor13,
      dor14,
      dor15,
    ],
    titles: [
      "Modern Wooden Door",
      "Contemporary Panel Door",
      "Luxury Designer Door",
      "Classic Heritage Door",
      "Premium Interior Door",
      "Modern Feature Door",
      "Elegant Wood Door",
      "Contemporary Designer Door",
      "Minimal Panel Door",
      "Luxury Entrance Door",
      "Classic Wood Design",
      "Modern Architectural Door",
      "Premium Custom Door",
      "Statement Wooden Door",
      "Bespoke Designer Door",
    ],
  },

  {
    id: "wardrobes",
    name: "Wardrobes",
    label: "Wardrobe Collection",
    intro:
      "Discover beautifully planned wardrobes that combine practical storage, refined finishes and contemporary design for sophisticated living spaces.",
    images: [
      word1,
      word2,
      word3,
      word4,
      word5,
      word6,
      word7,
    ],
    titles: [
      "Luxury Fitted Wardrobe",
      "Modern Sliding Wardrobe",
      "Classic Wood Wardrobe",
      "Premium Custom Wardrobe",
      "Contemporary Fitted Wardrobe",
      "Elegant Bedroom Wardrobe",
      "Bespoke Storage Wardrobe",
    ],
  },

  {
    id: "beds",
    name: "Beds",
    label: "Bedroom Collection",
    intro:
      "Create a refined bedroom with elegant bed designs focused on comfort, balanced proportions, premium finishes and timeless appeal.",
    images: [
      bed1,
      bed2,
      bed3,
      bed4,
      bed5,
      bed6,
      bed7,
      bed8,
      bed9,
      bed10,
      bed11,
      bed12,
      bed13,
      bed14,
      bed15,
      bed16,
    ],
    titles: [
      "Luxury King Bed",
      "Modern Designer Bed",
      "Classic Wooden Bed",
      "Premium Bedroom Bed",
      "Contemporary King Bed",
      "Elegant Wooden Bed",
      "Luxury Upholstered Bed",
      "Modern Platform Bed",
      "Designer Bedroom Bed",
      "Premium King Bedroom",
      "Classic Designer Bed",
      "Contemporary Bedroom Bed",
      "Bespoke Wooden Bed",
      "Luxury Statement Bed",
      "Modern Master Bed",
      "Premium Custom Bed",
    ],
  },

  {
    id: "kitchens",
    name: "Kitchens",
    label: "Kitchen Collection",
    intro:
      "Explore contemporary kitchens designed around everyday living, combining intelligent storage, elegant cabinetry and a sophisticated architectural finish.",
    images: [
      kitchen1,
      kitchen2,
      kitchen3,
      kitchen4,
      kitchen5,
      kitchen6,
      kitchen7,
      kitchen8,
      kitchen9,
      kitchen10,
      kitchen11,
      kitchen12,
      kitchen13,
      kitchen14,
      kitchen15,
      kitchen16,
    ],
    titles: [
      "Modern Luxury Kitchen",
      "Contemporary Kitchen",
      "Classic Kitchen",
      "Premium Wood Kitchen",
      "Modern Handleless Kitchen",
      "Luxury Fitted Kitchen",
      "Contemporary Wood Kitchen",
      "Minimal Designer Kitchen",
      "Premium Modern Kitchen",
      "Elegant Kitchen Interior",
      "Bespoke Luxury Kitchen",
      "Modern Family Kitchen",
      "Classic Contemporary Kitchen",
      "Designer Fitted Kitchen",
      "Refined Wood Kitchen",
      "Signature Luxury Kitchen",
    ],
  },

  {
    id: "media",
    name: "Media Walls",
    label: "Media Wall Collection",
    intro:
      "Bring your living space together with architectural media walls designed to integrate entertainment, storage and contemporary styling.",
    images: [
      media1,
      media2,
      media3,
      media4,
      media5,
      media6,
    ],
    titles: [
      "Modern Media Wall",
      "Luxury TV Wall",
      "Contemporary Media Unit",
      "Designer TV Feature",
      "Premium Media Wall",
      "Bespoke Entertainment Wall",
    ],
  },
];

// ============================================================
// PRODUCT HELPER
// ============================================================

const getProducts = (category) => {
  return category.images.map((image, index) => ({
    image,
    title: category.titles[index],
    category: category.name,
  }));
};

// ============================================================
// PRODUCT PAGE
// ============================================================

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("doors");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const activeData = categories.find(
    (category) => category.id === activeCategory
  );

  const activeProducts = getProducts(activeData);

  // ============================================================
  // BODY SCROLL LOCK
  // ============================================================

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  // ============================================================
  // ESCAPE MODAL
  // ============================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ============================================================
  // SCROLL TO PRODUCTS
  // ============================================================

  const scrollToProducts = () => {
    document.getElementById("products-collection")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ============================================================
  // WHATSAPP
  // ============================================================

  const getWhatsAppLink = (product) => {
    const message = `Hello, I am interested in "${product.title}". Please share more details, price and availability.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  // ============================================================
  // CATEGORY CHANGE
  // ============================================================

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);

    setTimeout(() => {
      document.getElementById("products-grid")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#171717]">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#111111]">

        {/* Red glow */}

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-red-700/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-12">

          <div className="w-full mt-15 max-w-4xl">

            {/* Small heading */}


            {/* Main heading */}

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Discover Our
              <span className="block text-red-500">
                Interior Collection
              </span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Explore beautifully crafted doors, wardrobes, bedrooms,
              kitchens and media walls created to bring elegance,
              functionality and character to your space.
            </p>

            {/* CTA */}

            <button
              type="button"
              onClick={scrollToProducts}
              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-red-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 active:translate-y-0 sm:px-8 sm:py-4 sm:text-sm"
            >
              Explore Collection

              <ArrowDown
                size={17}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>

          </div>
        </div>
      </section>

      {/* ======================================================
          PRODUCTS SECTION
      ====================================================== */}

      <section
        id="products-collection"
        className="scroll-mt-20 bg-[#F7F4EE]"
      >

        {/* ====================================================
            CATEGORY NAVIGATION
        ==================================================== */}

        <div className="sticky top-0 z-40 border-b border-black/[0.06] bg-[#F7F4EE]/95 backdrop-blur-xl">

          <div className="mx-auto max-w-7xl overflow-x-auto scrollbar-hide">

            <div className="flex min-w-max items-center justify-start gap-2 px-4 py-3 sm:justify-center sm:gap-3 sm:px-6 lg:py-4">

              {categories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex h-11 items-center justify-center rounded-full px-5 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300 sm:h-12 sm:px-6 sm:text-xs ${
                      isActive
                        ? "bg-[#171717] text-white shadow-lg shadow-black/10"
                        : "bg-white text-[#555] ring-1 ring-black/[0.05] hover:text-red-600"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}

            </div>
          </div>
        </div>

        {/* ====================================================
            COLLECTION INTRO
        ==================================================== */}

        <div className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8">

          <div className="border-b border-black/[0.08] pb-8">

            <div className="max-w-3xl">

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-red-600 sm:text-xs">
                {activeData.label}
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#151515] sm:text-4xl lg:text-5xl">
                {activeData.name}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#686868] sm:text-base sm:leading-8">
                {activeData.intro}
              </p>

            </div>

          </div>

          {/* ==================================================
              PRODUCTS GRID
          ================================================== */}

          <div
            id="products-grid"
            className="scroll-mt-28 pt-8 sm:pt-10"
          >

            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">

              {activeProducts.map((product, index) => (

                <article
                  key={`${product.category}-${index}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-[0_5px_25px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
                >

                  {/* IMAGE */}

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="relative block aspect-[0.86] w-full overflow-hidden bg-[#e9e5dc] text-left"
                    aria-label={`View ${product.title}`}
                  >

                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                    />

                    {/* Image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Expand button */}

                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#171717] opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100">

                      <Maximize2
                        size={14}
                        strokeWidth={2}
                      />

                    </div>

                  </button>

                  {/* CONTENT */}

                  <div className="p-4 sm:p-5">

                    {/* Category */}

                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-red-600 sm:text-[10px]">
                      {product.category}
                    </p>

                    {/* Title */}

                    <h3 className="mt-2 min-h-[42px] text-sm font-bold leading-5 tracking-tight text-[#171717] sm:min-h-[48px] sm:text-base sm:leading-6">
                      {product.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-[#777] sm:text-xs sm:leading-6">
                      Carefully designed with refined details, practical
                      proportions and a finish made for contemporary spaces.
                    </p>

                    {/* WhatsApp */}

                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="mt-4 flex min-h-[42px] w-full items-center justify-center gap-2 rounded-xl bg-[#171717] px-2.5 py-2.5 text-[9px] font-bold uppercase tracking-[0.07em] text-white transition-all duration-300 hover:bg-red-600 active:scale-[0.98] sm:min-h-[45px] sm:px-3 sm:text-[10px]"
                    >

                      <MessageCircle
                        size={15}
                        strokeWidth={2.3}
                        className="shrink-0"
                      />

                      <span>WhatsApp Inquiry</span>

                    </a>

                  </div>

                </article>

              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PRODUCT MODAL
      ====================================================== */}

      {selectedProduct && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedProduct(null)}
        >

          <div
            className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#F7F4EE] shadow-2xl sm:flex-row"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-red-600"
              aria-label="Close"
            >
              <X size={19} />
            </button>

            {/* IMAGE */}

            <div className="relative h-[40vh] min-h-[270px] bg-[#e8e2d8] sm:h-auto sm:min-h-[520px] sm:w-[57%]">

              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-4 left-4 rounded-full bg-black/75 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                {selectedProduct.category}
              </div>

            </div>

            {/* DETAILS */}

            <div className="flex flex-1 flex-col justify-center overflow-y-auto p-6 sm:p-9 lg:p-11">

              <div>

                <div className="mb-4 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-red-600" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-red-600 sm:text-[10px]">
                    {selectedProduct.category}
                  </span>

                </div>

                <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#171717] sm:text-3xl lg:text-4xl">
                  {selectedProduct.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#707070] sm:text-base">
                  A thoughtfully designed interior piece created with
                  attention to proportion, functionality and contemporary
                  detail. Speak with our team to discuss materials,
                  dimensions, finishes and custom requirements.
                </p>

              </div>

              {/* FEATURES */}

              <div className="my-6 space-y-3 border-y border-black/[0.08] py-6">

                <div className="flex items-center gap-3 text-xs font-medium text-[#444] sm:text-sm">

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <Check size={13} strokeWidth={2.5} />
                  </span>

                  Premium interior craftsmanship

                </div>

                <div className="flex items-center gap-3 text-xs font-medium text-[#444] sm:text-sm">

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <Check size={13} strokeWidth={2.5} />
                  </span>

                  Custom design consultation

                </div>

                <div className="flex items-center gap-3 text-xs font-medium text-[#444] sm:text-sm">

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <Check size={13} strokeWidth={2.5} />
                  </span>

                  Designed around your space

                </div>

              </div>

              {/* WHATSAPP CTA */}

              <a
                href={getWhatsAppLink(selectedProduct)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[50px] w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-lg shadow-red-900/15 transition-all duration-300 hover:bg-red-700 active:scale-[0.98] sm:min-h-[54px] sm:text-sm"
              >

                <MessageCircle
                  size={19}
                  strokeWidth={2.2}
                />

                Enquire on WhatsApp

              </a>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default Product;
