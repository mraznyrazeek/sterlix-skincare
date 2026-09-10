const shopCategories = [
  {
    number: "01",
    title: "Face Care",
    accent: "✦",
  },
  {
    number: "02",
    title: "Hair Care",
    accent: "○",
  },
  {
    number: "03",
    title: "Body Care",
    accent: "✧",
  },
  {
    number: "04",
    title: "Sun Care",
    accent: "☼",
  },
  {
    number: "05",
    title: "Makeup",
    accent: "♡",
  },
  {
    number: "06",
    title: "Beauty Tools & Accessories",
    accent: "✦",
  },
];

const comingSoonCategories = [
  {
    number: "01",
    title: "Korean Beauty",
    text: "Discover some of the most-loved names in Korean skincare, from gentle essentials to innovative treatments.",
    accent: "✦",
  },
  {
    number: "02",
    title: "Everyday Essentials",
    text: "Simple, dependable skincare for cleansing, hydration, protection and everyday routines.",
    accent: "○",
  },
  {
    number: "03",
    title: "Skin Treatments",
    text: "Serums, masks and targeted skincare for the moments when your routine needs something extra.",
    accent: "✧",
  },
  {
    number: "04",
    title: "Trusted Brands",
    text: "Well-known international names alongside new skincare discoveries worth knowing.",
    accent: "♡",
  },
];

export default function DiscoverSection() {
  return (
    <>
      {/* =========================================================
          SECTION 1 — SHOP BY CATEGORY / MORE TO COME
      ========================================================= */}

      <section
        id="categories"
        className="relative overflow-hidden bg-[#f8f0eb] px-6 py-24 text-[#29201f] sm:px-10 lg:px-14 lg:py-32"
      >
        <div className="mx-auto max-w-[1320px]">

          {/* Main layout */}
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">

            {/* LEFT — EDITORIAL INTRO */}
            <div className="max-w-[500px]">

              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d1847f]" />

                <span className="text-[8px] font-medium uppercase tracking-[0.32em] text-[#a96f69]">
                  SHOP BY CATEGORY
                </span>

                <span className="h-px w-8 bg-[#d1847f]" />
              </div>

              {/* Heading */}
              <h2 className="font-serif text-[55px] font-normal leading-[0.91] tracking-[-0.055em] text-[#292322] sm:text-[68px] lg:text-[72px] xl:text-[78px]">
                Skincare for
                <br />
                every you.
                <br />
                <em className="text-[#d1847f]">
                  More to come.
                </em>
              </h2>

              {/* Description */}
              <p className="mt-8 max-w-[440px] text-[12px] leading-6 text-[#756560] sm:text-[13px]">
                We're carefully curating a collection across skincare,
                haircare, bodycare and more bringing together Korean beauty
                favourites and trusted global brands for launch.
              </p>

              {/* CTA */}
              <a
                href="#coming-soon"
                className="mt-8 inline-flex items-center gap-8 border border-[#d1847f] px-7 py-4 text-[8px] font-semibold uppercase tracking-[0.22em] text-[#754f4b] transition-all duration-300 hover:bg-[#d1847f] hover:text-white"
              >
                Stay Tuned for Launch

                <span className="text-base leading-none">
                  →
                </span>
              </a>

              {/* Trust row */}
              <div className="mt-10 grid max-w-[430px] grid-cols-3 border-t border-[#d9c5bd] pt-5">

                <div className="flex flex-col items-center px-3 text-center">
                  <span className="text-[15px] text-[#d1847f]">
                    ♧
                  </span>

                  <span className="mt-2 text-[6px] font-medium uppercase leading-3 tracking-[0.18em] text-[#9a7770]">
                    Carefully
                    <br />
                    Curated
                  </span>
                </div>

                <div className="flex flex-col items-center border-x border-[#d9c5bd] px-3 text-center">
                  <span className="text-[15px] text-[#d1847f]">
                    ♡
                  </span>

                  <span className="mt-2 text-[6px] font-medium uppercase leading-3 tracking-[0.18em] text-[#9a7770]">
                    Trusted
                    <br />
                    Brands
                  </span>
                </div>

                <div className="flex flex-col items-center px-3 text-center">
                  <span className="text-[15px] text-[#d1847f]">
                    ○
                  </span>

                  <span className="mt-2 text-[6px] font-medium uppercase leading-3 tracking-[0.18em] text-[#9a7770]">
                    Coming
                    <br />
                    Soon
                  </span>
                </div>

              </div>
            </div>

            {/* RIGHT — CATEGORY GRID */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">

              {shopCategories.map((category) => (
                <article
                  key={category.number}
                  className="group relative min-h-[185px] overflow-hidden rounded-[10px] border border-[#ddc9c1] bg-[#f5ebe5] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#d1847f] hover:shadow-[0_18px_45px_rgba(90,55,48,0.08)]"
                >

                  {/* Decorative circles */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#d1847f]/20 transition-transform duration-700 group-hover:scale-125" />

                  <div className="pointer-events-none absolute -bottom-12 -right-4 h-28 w-28 rounded-full bg-[#d1847f]/[0.06] transition-transform duration-700 group-hover:scale-125" />

                  {/* Top row */}
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-[7px] font-medium tracking-[0.25em] text-[#c08a83]">
                      {category.number}
                    </span>

                    <span className="text-[16px] text-[#d1847f]">
                      {category.accent}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-7">

                    <h3 className="mt-2 max-w-[250px] font-serif text-[25px] leading-[0.95] tracking-[-0.02em] text-[#2f2826]">
                      {category.title}
                    </h3>

                    <p className="mt-3 max-w-[250px] text-[9px] leading-4 text-[#806d67]">
                      {category.text}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between border-t border-[#dcc8c0] pt-3">
                    <span className="text-[6px] font-medium uppercase tracking-[0.18em] text-[#b27b74]">
                      COMING SOON
                    </span>

                    <span className="text-[12px] text-[#d1847f] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                </article>
              ))}

            </div>
          </div>

        </div>

        {/* Decorative bottom circle */}
        <div className="pointer-events-none absolute -bottom-28 right-[8%] h-56 w-56 rounded-full border border-[#d1847f]/10" />

      </section>


      {/* =========================================================
          SECTION 2 — SOMETHING BEAUTIFUL FOR EVERY ROUTINE
      ========================================================= */}

      <section
        id="discover"
        className="relative overflow-hidden bg-[#ead9d2] px-6 py-24 text-[#29201f] sm:px-10 lg:px-14 lg:py-32"
      >
        <div className="mx-auto max-w-[1180px]">

          {/* Section heading */}
          <div className="mx-auto max-w-[760px] text-center">

            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b9867e]" />

              <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#a8756e]">
                WHAT WE'RE BRINGING TOGETHER
              </span>

              <span className="h-px w-8 bg-[#b9867e]" />
            </div>

            <h2 className="font-serif text-[50px] font-normal leading-[0.92] tracking-[-0.05em] sm:text-[65px] lg:text-[76px]">
              Something beautiful for
              <br />
              <em className="text-[#d1847f]">
                every routine.
              </em>
            </h2>

            <p className="mx-auto mt-7 max-w-[550px] text-[11px] leading-6 text-[#806a64] sm:text-[12px]">
              We're exploring a collection built around the skincare
              categories people love most.
            </p>

          </div>


          {/* 4 editorial cards */}
          <div className="mt-14 grid overflow-hidden rounded-[3px] border border-[#d3bbb3] md:grid-cols-2 xl:grid-cols-4">

            {comingSoonCategories.map((category, index) => (
              <article
                key={category.number}
                className={`group relative min-h-[285px] border-[#d3bbb3] bg-[#eadfd9] p-6 transition-all duration-500 hover:bg-[#f0e4df] ${
                  index !== 0 ? "border-t md:border-t xl:border-l" : ""
                } ${
                  index === 2 ? "md:border-l-0 xl:border-l" : ""
                } ${
                  index === 3 ? "md:border-l xl:border-l" : ""
                }`}
              >

                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-9 -top-9 h-28 w-28 rounded-full border border-[#d1847f]/20 transition-transform duration-700 group-hover:scale-125" />

                <div className="pointer-events-none absolute -bottom-12 right-5 h-28 w-28 rounded-full bg-[#d1847f]/[0.06]" />

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-[7px] font-medium tracking-[0.25em] text-[#c1867e]">
                    {category.number}
                  </span>

                  <span className="text-[15px] text-[#d1847f]">
                    {category.accent}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-10">
                  <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#bd8179]">
                    COMING SOON
                  </p>

                  <h3 className="mt-3 font-serif text-[25px] leading-[1] tracking-[-0.02em] text-[#302826]">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-[10px] leading-5 text-[#806b65]">
                    {category.text}
                  </p>
                </div>

                {/* Footer */}
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between border-t border-[#d5beb6] pt-4">
                  <span className="text-[6px] font-medium uppercase tracking-[0.18em] text-[#b17b74]">
                    EXPLORE WHEN WE LAUNCH
                  </span>

                  <span className="text-[12px] text-[#d1847f] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </article>
            ))}

          </div>


          {/* Bottom message */}
          <div className="mt-8 flex items-center justify-center gap-4">

            <span className="h-px flex-1 bg-[#cdb4ac]" />

            <p className="whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.22em] text-[#9b7770]">
              A carefully considered collection.
              <strong className="font-medium text-[#d1847f]">
                {" "}
                Nothing rushed.
              </strong>
            </p>

            <span className="h-px flex-1 bg-[#cdb4ac]" />

          </div>

        </div>
      </section>
    </>
  );
}