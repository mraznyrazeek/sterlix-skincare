import React from "react";
import Header from "./components/Header";
import aboutSkincare from "./assets/about-skincare.png";
import "./index.css";
import DiscoverSection from "./components/DiscoverSection";

function App() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#f8f1ed] text-[#29201f]"
    >
      <Header />

      <main>
        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="relative min-h-[760px] overflow-hidden bg-[#eee5dc] lg:min-h-[820px]">
          {/* Hero Image */}
          <img
            src="/hero-skincare.png"
            alt="Curated skincare collection"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Soft Editorial Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f0e9]/95 via-[#f7f0e9]/65 to-transparent" />

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7f0e9]/30 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1450px] items-center px-6 pt-24 sm:px-10 lg:min-h-[820px] lg:px-14">
            <div className="max-w-[600px]">
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-9 bg-[#74836f]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#5e6959]">
                  TRUSTED BRANDS · BEAUTY · SELF-CARE
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-[58px] leading-[0.91] tracking-[-0.045em] text-[#292725] sm:text-[76px] md:text-[86px] lg:text-[82px] xl:text-[94px]">
                Skincare for a
                <br />

                <span className="font-serif italic text-[#6e846b]">
                  Brighter You
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-[500px] text-[14px] leading-7 text-[#5f5a54] sm:text-[15px]">
                A thoughtfully curated skincare destination bringing together
                Korean beauty favourites, trusted international names and
                everyday essentials worth discovering.
              </p>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#discover"
                  className="inline-flex items-center justify-center rounded-full bg-[#d99590] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c9827d]"
                >
                  Explore What's Coming

                  <span className="ml-3 text-sm">→</span>
                </a>

                <a
                  href="#coming-soon"
                  className="inline-flex items-center justify-center rounded-full border border-[#4d4944]/25 bg-white/30 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#403d38] backdrop-blur-sm transition hover:border-[#d99590] hover:text-[#c9827d]"
                >
                  Contact Us
                </a>
              </div>

              {/* Reassurance */}
              <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#77716a]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d99590]" />
                Online destination coming soon
              </div>
            </div>
          </div>

          {/* Bottom Hero Metadata */}
          <div className="absolute bottom-7 left-6 right-6 z-10 flex items-center justify-between sm:left-10 sm:right-10 lg:left-14 lg:right-14">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#716a63]">
              CURATED BEAUTY
            </span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-[#716a63]">
              2026
            </span>
          </div>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================= */}

        <section className="about-section" id="about">
          <div className="about-container">
            <div className="about-visual">
              <div className="about-image-wrap">
                <img
                  src={aboutSkincare}
                  alt="Curated skincare collection"
                  className="about-image"
                />

                <span className="about-sparkle">✦</span>
              </div>
            </div>

            <div className="about-content">
              <div className="about-eyebrow">
                <span />
                <p>ABOUT STERLIX</p>
                <span />
              </div>

              <h2>
                Skincare should feel like <em>self-care.</em>
              </h2>

              <div className="about-text">
                <p>
                  Sterlix is being created as a curated online destination
                  for people who genuinely enjoy skincare.
                </p>

                <p>
                  We're exploring a carefully selected mix of Korean beauty
                  favourites and trusted international skincare brands,
                  making it easier to discover products that deserve a place
                  in your routine.
                </p>

                <p>
                  Our final collection is still being curated. More details,
                  products and availability will be revealed closer to launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SHOP BY CATEGORY
        ========================================================= */}

        <DiscoverSection />

        {/* =========================================================
            FOOTER / CONTACT
        ========================================================= */}

        <footer
          id="coming-soon"
          className="relative overflow-hidden bg-[#f8f1ed] px-6 pt-20 text-[#332624] sm:px-10 lg:px-16 lg:pt-28"
        >
          <div className="mx-auto max-w-[1320px]">

            {/* =====================================================
                CONTACT INTRO
            ===================================================== */}

            <div className="relative border-b border-[#d8c3bc] pb-20 lg:pb-24">

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#d8958f]/15" />

              <div className="pointer-events-none absolute right-8 top-0 h-44 w-44 rounded-full bg-[#d8958f]/5" />

              <div className="relative grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

                {/* =================================================
                    LEFT — CONTACT INTRO
                ================================================= */}

                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <span className="h-px w-10 bg-[#d8958f]" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#a97872]">
                      WE'RE HERE TO HELP
                    </span>
                  </div>

                  <h2 className="max-w-[650px] font-serif text-[52px] font-normal leading-[0.95] tracking-[-0.045em] text-[#2d2321] sm:text-[66px] lg:text-[76px]">
                    Have a question?
                    <br />

                    <span className="italic text-[#d1847f]">
                      Let's talk.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-[520px] text-[14px] leading-7 text-[#765f5a] sm:text-[15px]">
                    Whether you'd like to know more about a product, our
                    upcoming collection or anything skincare related, we're
                    always happy to hear from you.
                  </p>
                </div>

                {/* =================================================
                    RIGHT — WHATSAPP
                ================================================= */}

                <div className="relative lg:pl-10">

                  <div className="pointer-events-none absolute -right-8 -top-10 h-52 w-52 rounded-full bg-[#d99590]/[0.06] blur-2xl" />

                  <div className="relative overflow-hidden border-y border-[#d8c3bc] py-10 sm:py-12">

                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="h-px w-9 bg-[#d1847f]" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#a97872]">
                          QUICK RESPONSE
                        </span>
                      </div>

                      <span className="font-serif text-[14px] italic text-[#b59b94]">
                        01
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="mt-9 grid grid-cols-[auto_1fr] items-start gap-6">

                      {/* WhatsApp icon */}
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#b9d9c3] bg-[#edf7f0] text-[#278b55]">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9e4d1]">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.45"
                          >
                            <path d="M20.5 11.2a8.3 8.3 0 0 1-12.2 7.3L4 20l1.5-4.1A8.3 8.3 0 1 1 20.5 11.2Z" />

                            <path d="M8.2 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6 0l.7-.5c.2-.1.4-.1.6 0l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.4-.2-2.8-.9-4-2-1.2-1.1-2-2.4-2.5-3.8-.2-.6-.1-1.2.1-1.8Z" />
                          </svg>
                        </div>
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="font-serif text-[34px] leading-none tracking-[-0.025em] text-[#332624] sm:text-[40px]">
                          Chat with us
                        </h3>

                        <p className="mt-4 max-w-[400px] text-[13px] leading-6 text-[#765f5a] sm:text-[14px]">
                          Have a question about skincare, a product or our
                          upcoming collection? We'd love to hear from you.
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp action */}
                    <a
                      href="https://wa.me/94771234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-10 flex items-center justify-between border-t border-[#dfcec8] pt-6"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#57936e]">
                          WHATSAPP
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#d1847f]" />

                        <span className="text-[12px] text-[#806a65]">
                          +971 509487325
                        </span>
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8ddd0] bg-[#f0f8f2] text-[#278b55] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#278b55] group-hover:text-white">
                        <span className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          →
                        </span>
                      </span>
                    </a>

                    {/* Bottom note */}
                    <div className="mt-7 flex items-center gap-3">
                      <span className="h-px flex-1 bg-[#eadbd6]" />

                      <span className="text-[9px] uppercase tracking-[0.15em] text-[#aa8b84]">
                        Usually the easiest way to reach us
                      </span>

                      <span className="h-px flex-1 bg-[#eadbd6]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                MODERN FOOTER NAVIGATION
            ===================================================== */}

            <div className="grid gap-14 border-b border-[#d8c3bc] py-16 md:grid-cols-[1.6fr_0.9fr_0.9fr] lg:py-20">

              {/* =================================================
                  SHOP BY CATEGORY
              ================================================= */}

              <div>
                <div className="mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a97872]">
                    Comming Soon
                  </span>

                  <h3 className="mt-2 font-serif text-[32px] tracking-[-0.02em] text-[#332624]">
                    Shop by Category
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Cleansers
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Toners
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Serums
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Moisturizers
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Sunscreen
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Face Masks
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Eye Care
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Body Care
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Beauty Tools
                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* =================================================
                  CONTACT
              ================================================= */}

              <div>
                <div className="mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a97872]">
                    CONTACT
                  </span>

                  <h3 className="mt-2 font-serif text-[32px] tracking-[-0.02em] text-[#332624]">
                    Let's Connect
                  </h3>
                </div>

                <div className="space-y-5">

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-[14px] text-[#765f5a] transition hover:text-[#278b55]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f4eb] text-[#278b55] transition group-hover:bg-[#278b55] group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path d="M20.5 11.2a8.3 8.3 0 0 1-12.2 7.3L4 20l1.5-4.1A8.3 8.3 0 1 1 20.5 11.2Z" />

                        <path d="M8.2 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6 0l.7-.5c.2-.1.4-.1.6 0l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.4-.2-2.8-.9-4-2-1.2-1.1-2-2.4-2.5-3.8-.2-.6-.1-1.2.1-1.8Z" />
                      </svg>
                    </span>

                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.15em] text-[#a7837d]">
                        WhatsApp
                      </span>

                      <span className="mt-1 block">
                        +971 509487325
                      </span>
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@shopsterlix.com"
                    className="group flex items-center gap-4 text-[14px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ead8d2] text-[#9e6e68] transition group-hover:bg-[#d1847f] group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                        />

                        <path d="m4 7 8 6 8-6" />
                      </svg>
                    </span>

                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.15em] text-[#a7837d]">
                        Email
                      </span>

                      <span className="mt-1 block">
                        info@shopsterlix.com
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              {/* =================================================
                  EXPLORE
              ================================================= */}

              <div>
                <div className="mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a97872]">
                    DISCOVER
                  </span>

                  <h3 className="mt-2 font-serif text-[32px] tracking-[-0.02em] text-[#332624]">
                    Explore
                  </h3>
                </div>

                <div className="flex flex-col gap-5">

                  <a
                    href="#about"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    About Us

                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Categories

                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#coming-soon"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Contact Us

                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>

                  <a
                    href="#top"
                    className="group flex items-center gap-2 text-[15px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Back to Top

                    <span className="opacity-0 transition group-hover:-translate-y-1 group-hover:opacity-100">
                      ↑
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* =====================================================
                BOTTOM FOOTER
            ===================================================== */}

            <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[11px] tracking-[0.08em] text-[#9a7771]">
                © 2026 Sterlix Skincare. All rights reserved.
              </p>

               {/* Developer Credit */}
<p className="flex items-center gap-2 text-[11px] tracking-[0.06em] text-[#9a7771]">
  <span>Designed & developed by</span>

  <a
    href="YOUR_LINKEDIN_URL"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-1.5 font-medium text-[#765f5a] transition-colors duration-300 hover:text-[#d1847f]"
    aria-label="Razny Razeek on LinkedIn"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.1 2.1 0 1 0 4.75 7.2 2.1 2.1 0 0 0 4.75 3ZM21 13.8c0-3.76-2-5.52-4.67-5.52-2.15 0-3.11 1.18-3.65 2v-1.78H9.18V21h3.5v-6.18c0-1.63.31-3.2 2.32-3.2 1.98 0 2 1.86 2 3.3V21H21v-7.2Z" />
    </svg>

    <span>Razny Razeek</span>
  </a>
</p>

              <div className="flex items-center gap-4">

                {/* Instagram */}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6beb7] bg-[#fffaf7] text-[#5f4945] transition-all duration-300 hover:-translate-y-1 hover:border-[#d1847f] hover:bg-[#d1847f] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />

                    <circle cx="12" cy="12" r="4" />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.8"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6beb7] bg-[#fffaf7] text-[#5f4945] transition-all duration-300 hover:-translate-y-1 hover:border-[#d1847f] hover:bg-[#d1847f] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v6h4v-6h3.2l.8-4H13V9c0-.7.3-1 1-1z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c6dfcd] bg-[#edf8f0] text-[#278b55] transition-all duration-300 hover:-translate-y-1 hover:border-[#8fc3a1] hover:bg-[#278b55] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M20.5 11.2a8.3 8.3 0 0 1-12.2 7.3L4 20l1.5-4.1A8.3 8.3 0 1 1 20.5 11.2Z" />

                    <path d="M8.2 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6 0l.7-.5c.2-.1.4-.1.6 0l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.4-.2-2.8-.9-4-2-1.2-1.1-2-2.4-2.5-3.8-.2-.6-.1-1.2.1-1.8Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;