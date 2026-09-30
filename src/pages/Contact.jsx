import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";

// ============================================================
// CONFIG
// ============================================================

const WHATSAPP_NUMBER = "923008098897";

const GOOGLE_MAPS_LINK =
  "https://maps.app.goo.gl/xugSPg1ganHoREeK9";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Fast+Kitchen,+Lahore,+Pakistan&output=embed";

// ============================================================
// CATEGORIES
// ============================================================

const categories = [
  "Doors",
  "Wardrobes",
  "Beds",
  "Kitchens",
  "Media Walls",
];

// ============================================================
// CONTACT PAGE
// ============================================================

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
    category: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ==========================================================
  // HANDLE INPUT
  // ==========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setSubmitted(false);
  };

  // ==========================================================
  // VALIDATE
  // ==========================================================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Please enter your complete address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================================
  // WHATSAPP SUBMIT
  // ==========================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const message = `
Hello FastKitchen,

I would like to discuss a project.

CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
City: ${formData.city}
Address: ${formData.address}
Phone: ${formData.phone}
Required Category: ${formData.category}

Please contact me regarding my project.

Thank you.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);

    window.open(whatsappURL, "_blank");
  };

  // ==========================================================
  // INPUT STYLE
  // ==========================================================

  const inputClass = (field) => `
    w-full
    h-13
    rounded-xl
    border
    bg-[#FCFCFC]
    px-4
    text-sm
    text-[#17120D]
    outline-none
    transition-all
    duration-300
    placeholder:text-gray-400
    ${
      errors[field]
        ? "border-red-500 ring-2 ring-red-100"
        : "border-gray-200 focus:border-[#D9271C] focus:ring-4 focus:ring-[#D9271C]/10"
    }
  `;

  return (
    <main className="bg-[#F8F6F1] text-[#17120D]">

      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative min-h-[390px] overflow-hidden bg-[#0B0B0B] sm:min-h-[430px] lg:min-h-[470px]">

        {/* Subtle red glow */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#D9271C]/10 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#D9271C]/[0.07] blur-[130px]" />

        {/* Very subtle grid */}
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

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-[1450px] items-center px-5 pb-12 pt-28 sm:min-h-[430px] sm:px-8 sm:pb-14 sm:pt-32 lg:min-h-[470px] lg:px-12 lg:pb-16 lg:pt-36">

          <div className="max-w-3xl">

            {/* Small label */}
            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-9 bg-[#D9271C]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50 sm:text-xs">
                Contact FastKitchen
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-[2.5rem] font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s Talk
              <span className="block text-[#D9271C]">
                About Your Space.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Planning a new kitchen, wardrobe, door, bed or media wall?
              Send us your project details and our team will contact you
              directly on WhatsApp.
            </p>

            {/* Features */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-xs text-white/55">
                <CheckCircle2
                  size={15}
                  className="text-[#D9271C]"
                />
                Custom Designs
              </div>

              <div className="flex items-center gap-2 text-xs text-white/55">
                <CheckCircle2
                  size={15}
                  className="text-[#D9271C]"
                />
                Professional Work
              </div>

              <div className="flex items-center gap-2 text-xs text-white/55">
                <CheckCircle2
                  size={15}
                  className="text-[#D9271C]"
                />
                Direct WhatsApp
              </div>

            </div>

          </div>
        </div>

        {/* Bottom red line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#D9271C] via-[#D9271C]/40 to-transparent" />

      </section>

      {/* ======================================================
          CONTACT FORM SECTION
      ======================================================= */}

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-[1350px]">

          {/* Heading */}
          <div className="mb-9 max-w-2xl sm:mb-12">

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D9271C] sm:text-xs">
              Start Your Project
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#17120D] sm:text-4xl lg:text-5xl">
              Tell us what
              <span className="text-[#D9271C]"> you need.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Fill in your details below and send your requirements directly
              to our WhatsApp.
            </p>

          </div>

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

            {/* ==================================================
                FORM
            =================================================== */}

            <div className="rounded-[24px] border border-black/[0.06] bg-white p-5 shadow-[0_15px_60px_rgba(0,0,0,0.05)] sm:p-7 lg:p-9">

              {/* Form Header */}
              <div className="mb-7 flex items-start justify-between gap-4">

                <div>
                  <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                    Project Details
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                    Please provide your basic project information.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9271C]/10 text-[#D9271C]">
                  <MessageCircle size={19} />
                </div>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name + City */}
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={inputClass("name")}
                    />

                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em]"
                    >
                      City
                    </label>

                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Lahore"
                      className={inputClass("city")}
                    />

                    {errors.city && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.city}
                      </p>
                    )}
                  </div>

                </div>

                {/* Address */}
                <div>

                  <label
                    htmlFor="address"
                    className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em]"
                  >
                    Complete Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your complete address"
                    className={`${inputClass(
                      "address"
                    )} h-auto resize-none py-3.5`}
                  />

                  {errors.address && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.address}
                    </p>
                  )}

                </div>

                {/* Phone */}
                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[11px] font-bold uppercase tracking-[0.12em]"
                  >
                    Phone Number
                  </label>

                  <div className="relative">

                    <Phone
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="03XX XXXXXXX"
                      className={`${inputClass(
                        "phone"
                      )} pl-11`}
                    />

                  </div>

                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}

                </div>

                {/* Categories */}
                <div>

                  <label className="mb-3 block text-[11px] font-bold uppercase tracking-[0.12em]">
                    Select Category
                  </label>

                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">

                    {categories.map((category) => {

                      const selected =
                        formData.category === category;

                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              category,
                            }));

                            setErrors((prev) => ({
                              ...prev,
                              category: "",
                            }));

                            setSubmitted(false);
                          }}
                          className={`rounded-xl border px-3 py-3 text-left text-xs font-bold transition-all duration-300 sm:text-sm ${
                            selected
                              ? "border-[#D9271C] bg-[#D9271C] text-white shadow-lg shadow-[#D9271C]/15"
                              : "border-gray-200 bg-white text-gray-700 hover:border-[#D9271C]/40 hover:bg-[#D9271C]/5"
                          }`}
                        >

                          <span className="flex items-center justify-between gap-2">

                            {category}

                            {selected && (
                              <CheckCircle2 size={15} />
                            )}

                          </span>

                        </button>
                      );
                    })}

                  </div>

                  {errors.category && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.category}
                    </p>
                  )}

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#D9271C] px-5 text-sm font-black text-white shadow-lg shadow-[#D9271C]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#BD2117] hover:shadow-xl active:translate-y-0"
                >

                  <MessageCircle size={19} />

                  Send Details on WhatsApp

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

                {/* Success */}
                {submitted && (
                  <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">

                    <CheckCircle2 size={17} />

                    Your details are ready for WhatsApp.

                  </div>
                )}

                <p className="text-center text-[11px] leading-5 text-gray-400">
                  Your information will be sent directly to FastKitchen via
                  WhatsApp.
                </p>

              </form>

            </div>

            {/* ==================================================
                RIGHT SIDE
            =================================================== */}

            <div className="space-y-6">

              {/* Contact Info */}
              <div className="relative overflow-hidden rounded-[24px] bg-[#101010] p-6 text-white shadow-[0_15px_60px_rgba(0,0,0,0.10)] sm:p-8">

                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#D9271C]/10 blur-[80px]" />

                <div className="relative z-10">

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                    FastKitchen
                  </span>

                  <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    We&apos;re here to help.
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                    Have a project in mind? Contact our team and let&apos;s
                    discuss your requirements.
                  </p>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-7 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#D9271C]/40 hover:bg-white/[0.07]"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9271C] text-white">
                      <MessageCircle size={18} />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                        WhatsApp
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Chat with our team
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="ml-auto text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-white"
                    />

                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+923008098897"
                    className="group mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Phone size={18} />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                        Call Us
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        +923008098897
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="ml-auto text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-white"
                    />

                  </a>

                  {/* Location */}
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                      <MapPin size={18} />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                        Location
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        FastKitchen
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="ml-auto text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-white"
                    />

                  </a>

                </div>
              </div>

              {/* Simple CTA */}
              <div className="rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_15px_60px_rgba(0,0,0,0.04)] sm:p-7">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D9271C]/10 text-[#D9271C]">
                    <Clock3 size={19} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                      Project Consultation
                    </p>

                    <h4 className="mt-1 text-lg font-black">
                      Let&apos;s discuss your idea
                    </h4>
                  </div>

                </div>

                <p className="mt-5 text-sm leading-6 text-gray-500">
                  Share your requirements with us and our team will guide you
                  through the next steps.
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#D9271C] transition-colors hover:text-[#BD2117]"
                >
                  Talk on WhatsApp
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          GOOGLE MAP
      ======================================================= */}

      <section className="border-t border-black/[0.06] bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12">

        <div className="mx-auto max-w-[1350px]">

          {/* Map Heading */}
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D9271C] sm:text-xs">
                Find Us
              </span>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                Visit FastKitchen
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                Find our location and get directions through Google Maps.
              </p>

            </div>

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#17120D] px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#D9271C]"
            >

              <MapPin size={16} />

              Open in Google Maps

              <ArrowRight size={15} />

            </a>

          </div>

          {/* Map */}
          <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-gray-100 shadow-[0_15px_60px_rgba(0,0,0,0.06)]">

            <iframe
              title="FastKitchen Location"
              src={MAP_EMBED_URL}
              className="h-[350px] w-full sm:h-[430px] lg:h-[500px]"
              style={{
                border: 0,
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Label */}
            <div className="absolute bottom-4 left-4">

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#101010]/90 px-4 py-3 text-white shadow-xl backdrop-blur-md">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D9271C]">
                  <MapPin size={16} />
                </div>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                    Our Location
                  </p>

                  <p className="text-sm font-bold">
                    FastKitchen
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

     


    </main>
  );
};

export default Contact;