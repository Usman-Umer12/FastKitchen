import React from "react";

const features = [
  {
    title: "Premium Quality",
    description: "Finest materials & quality craftsmanship",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 3l2.2 4.45 4.92.72-3.56 3.47.84 4.9L12 14.2l-4.4 2.34.84-4.9L4.88 8.17l4.92-.72L12 3Z" />
        <path d="M8.5 18.5 12 21l3.5-2.5" />
      </svg>
    ),
  },

  {
    title: "Modern Designs",
    description: "Elegant & timeless designs for every home",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M4 19.5V5.8a1.8 1.8 0 0 1 1.8-1.8H20v15.5H5.8A1.8 1.8 0 0 0 4 21.3" />
        <path d="M4 19.5c0-1 .8-1.8 1.8-1.8H20" />
        <path d="M8 7h8" />
        <path d="M8 10h5" />
      </svg>
    ),
  },

  {
    title: "Custom Designs",
    description: "Interior solutions tailored to your space",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="M5 5l14 14" />
        <path d="M19 5L5 19" />
      </svg>
    ),
  },

  {
    title: "Dedicated Support",
    description: "We're here to help you anytime",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M4 12a8 8 0 0 1 16 0" />
        <path d="M4 12v5a2 2 0 0 0 2 2h1v-6H4Z" />
        <path d="M20 12v5a2 2 0 0 1-2 2h-1v-6h3Z" />
        <path d="M9 20h4" />
        <path d="M13 20a2 2 0 0 0 2-2" />
      </svg>
    ),
  },
];

const HomeFeatures = () => {
  return (
    <section
      className="
        relative
        z-10
        -mt-14
        w-full
        bg-[#F8F5EF]
        text-[#171717]

        sm:-mt-10
        lg:-mt-10
      "
    >
      <div className="w-full">
        <div className="grid w-full grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                flex
                min-h-[82px]
                items-center
                gap-3
                px-4
                py-4
                transition-colors
                duration-300
                hover:bg-white/50

                sm:min-h-[90px]
                sm:gap-4
                sm:px-6

                lg:min-h-[100px]
                lg:px-8

                xl:px-12

                ${
                  index % 2 !== 0
                    ? "border-l border-[#171717]/[0.07]"
                    : ""
                }

                ${
                  index >= 2
                    ? "border-t border-[#171717]/[0.07] lg:border-t-0"
                    : ""
                }

                ${
                  index !== 0
                    ? "lg:border-l lg:border-[#171717]/[0.07]"
                    : ""
                }
              `}
            >
              {/* ICON */}
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D92720]/25
                  bg-[#D92720]/[0.06]
                  text-[#D92720]
                  transition-all
                  duration-300

                  hover:border-[#D92720]
                  hover:bg-[#D92720]
                  hover:text-white

                  sm:h-10
                  sm:w-10
                "
              >
                {feature.icon}
              </div>

              {/* CONTENT */}
              <div className="min-w-0">
                <h3
                  className="
                    font-['Montserrat']
                    text-[11px]
                    font-semibold
                    leading-tight
                    tracking-[0.01em]
                    text-[#171717]

                    sm:text-[13px]
                    lg:text-[14px]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-1
                    max-w-[220px]
                    font-['Inter']
                    text-[9px]
                    font-normal
                    leading-[1.5]
                    tracking-[0.01em]
                    text-[#6B6B6B]

                    sm:text-[10px]
                    lg:text-[11px]
                  "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;