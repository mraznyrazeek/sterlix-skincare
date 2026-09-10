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

          {/* Slight Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7f0e9]/30 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1450px] items-center px-6 pt-24 sm:px-10 lg:min-h-[820px] lg:px-14">
            <div className="max-w-[600px]">
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-9 bg-[#74836f]" />

                <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#5e6959]">
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
                  className="inline-flex items-center justify-center rounded-full bg-[#d99590] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#c9827d]"
                >
                  Explore What's Coming

                  <span className="ml-3 text-sm">→</span>
                </a>

                <a
                  href="#coming-soon"
                  className="inline-flex items-center justify-center rounded-full border border-[#4d4944]/25 bg-white/30 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#403d38] backdrop-blur-sm transition hover:border-[#d99590] hover:text-[#c9827d]"
                >
                  Contact Us
                </a>
              </div>

              {/* Small Reassurance */}
              <div className="mt-10 flex items-center gap-3 text-[8px] uppercase tracking-[0.22em] text-[#77716a]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d99590]" />

                Online destination coming soon
              </div>
            </div>
          </div>

          {/* Bottom Hero Metadata */}
          <div className="absolute bottom-7 left-6 right-6 z-10 flex items-center justify-between sm:left-10 sm:right-10 lg:left-14 lg:right-14">
            <span className="text-[7px] uppercase tracking-[0.3em] text-[#716a63]">
              CURATED BEAUTY
            </span>

            <span className="text-[7px] uppercase tracking-[0.3em] text-[#716a63]">
              Sterlix · 2026
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
                <p>ABOUT Sterlix</p>
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
                  favourites and trusted international skincare brands 
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
            FINAL FOOTER / CONTACT
        ========================================================= */}

        <footer
          id="coming-soon"
          className="relative overflow-hidden bg-[#f8f1ed] px-6 pt-20 text-[#332624] sm:px-10 lg:px-16 lg:pt-24"
        >
          <div className="mx-auto max-w-[1320px]">
            {/* =================================================
                CONTACT INTRO
            ================================================= */}

            <div className="relative border-b border-[#d8c3bc] pb-16 lg:pb-20">
              {/* Decorative Circles */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#d8958f]/15" />

              <div className="pointer-events-none absolute right-4 top-[-20px] h-40 w-40 rounded-full bg-[#d8958f]/5" />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
                {/* =================================================
                    LEFT — CONTACT INTRO
                ================================================= */}

                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-9 bg-[#d8958f]" />

                    <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#a97872]">
                      WE'RE HERE TO HELP
                    </span>
                  </div>

                  <h2 className="max-w-[650px] font-serif text-[48px] font-normal leading-[0.92] tracking-[-0.045em] text-[#2d2321] sm:text-[62px] lg:text-[70px]">
                    Have a question?
                    <br />

                    <span className="italic text-[#d1847f]">
                      Let's talk.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[510px] text-[12px] leading-6 text-[#765f5a]">
                    Whether you'd like to know more about a product, our
                    upcoming collection or anything skincare related, we're
                    always happy to hear from you.
                  </p>
                </div>

                {/* =================================================
                    RIGHT — WHATSAPP EDITORIAL CONTACT
                ================================================= */}

                <div className="relative lg:pl-10">
                  {/* Soft decorative glow */}
                  <div className="pointer-events-none absolute -right-8 -top-10 h-52 w-52 rounded-full bg-[#d99590]/[0.06] blur-2xl" />

                  <div className="relative overflow-hidden border-y border-[#d8c3bc] py-9 sm:py-11">
                    {/* Top metadata */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#d1847f]" />

                        <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#a97872]">
                          QUICK RESPONSE
                        </span>
                      </div>

                      <span className="font-serif text-[12px] italic text-[#b59b94]">
                        01
                      </span>
                    </div>

                    {/* Main content */}
                    <div className="mt-8 grid grid-cols-[auto_1fr] items-start gap-6">
                      {/* WhatsApp mark */}
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
                        <h3 className="font-serif text-[32px] leading-[1] tracking-[-0.025em] text-[#332624] sm:text-[38px]">
                          Chat with us
                        </h3>

                        <p className="mt-4 max-w-[390px] text-[11px] leading-6 text-[#765f5a] sm:text-[12px]">
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
                      className="group mt-9 flex items-center justify-between border-t border-[#dfcec8] pt-5 transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[8px] font-medium uppercase tracking-[0.24em] text-[#57936e]">
                          WHATSAPP
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#d1847f]" />

                        <span className="text-[10px] text-[#806a65]">
                          +94 77 123 4567
                        </span>
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8ddd0] bg-[#f0f8f2] text-[#278b55] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#278b55] group-hover:text-white">
                        <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                      </span>
                    </a>

                    {/* Bottom note */}
                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px flex-1 bg-[#eadbd6]" />

                      <span className="text-[7px] uppercase tracking-[0.2em] text-[#aa8b84]">
                        Usually the easiest way to reach us
                      </span>

                      <span className="h-px flex-1 bg-[#eadbd6]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                MAIN FOOTER
            ================================================= */}

            <div className="grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_0.8fr] lg:py-16">
              {/* =================================================
                  BRAND
              ================================================= */}

              <div>
                <div className="font-serif text-[25px] tracking-[0.28em] text-[#2e2422]">
                  Sterlix
                </div>

                <p className="mt-2 text-[7px] uppercase tracking-[0.5em] text-[#aa7d77]">
                  SKINCARE
                </p>

                <p className="mt-6 max-w-[330px] text-[12px] leading-6 text-[#765f5a]">
                  A curated destination for Korean beauty, trusted skincare
                  and products worth discovering.
                </p>

                {/* Social Links */}
                <div className="mt-7 flex items-center gap-3">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/lumiere.skincare"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#d6beb7] bg-[#fffaf7] text-[#5f4945] transition-all duration-300 hover:-translate-y-1 hover:border-[#d1847f] hover:bg-[#d1847f] hover:text-white"
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
                    href="https://facebook.com/lumiere.skincare"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#d6beb7] bg-[#fffaf7] text-[#5f4945] transition-all duration-300 hover:-translate-y-1 hover:border-[#d1847f] hover:bg-[#d1847f] hover:text-white"
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
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#c6dfcd] bg-[#edf8f0] text-[#278b55] transition-all duration-300 hover:-translate-y-1 hover:border-[#8fc3a1] hover:bg-[#278b55] hover:text-white"
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

              {/* =================================================
                  CONTACT
              ================================================= */}

              <div>
                <h3 className="font-serif text-[21px] text-[#332624]">
                  Let's Connect
                </h3>

                <div className="mt-6 space-y-5">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-[11px] text-[#765f5a] transition hover:text-[#278b55]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7f4eb] text-[#278b55] transition group-hover:bg-[#278b55] group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path d="M20.5 11.2a8.3 8.3 0 0 1-12.2 7.3L4 20l1.5-4.1A8.3 8.3 0 1 1 20.5 11.2Z" />

                        <path d="M8.2 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6 0l.7-.5c.2-.1.4-.1.6 0l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.4-.2-2.8-.9-4-2-1.2-1.1-2-2.4-2.5-3.8-.2-.6-.1-1.2.1-1.8Z" />
                      </svg>
                    </span>

                    <span>
                      <span className="block text-[8px] uppercase tracking-[0.16em] text-[#a7837d]">
                        WhatsApp
                      </span>

                      <span className="mt-0.5 block">
                        +94 77 123 4567
                      </span>
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:hello@Sterlix.example"
                    className="group flex items-center gap-3 text-[11px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ead8d2] text-[#9e6e68] transition group-hover:bg-[#d1847f] group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
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
                      <span className="block text-[8px] uppercase tracking-[0.16em] text-[#a7837d]">
                        Email
                      </span>

                      <span className="mt-0.5 block">
                        hello@Sterlix.example
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              {/* =================================================
                  EXPLORE
              ================================================= */}

              <div>
                <h3 className="font-serif text-[21px] text-[#332624]">
                  Explore
                </h3>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="#about"
                    className="group flex items-center justify-between text-[11px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    About

                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>

                  <a
                    href="#discover"
                    className="group flex items-center justify-between text-[11px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Shop Categories

                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>

                  <a
                    href="#coming-soon"
                    className="group flex items-center justify-between text-[11px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Contact

                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM BAR
            ================================================= */}

            <div className="flex flex-col gap-4 border-t border-[#d8c3bc] py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[7px] uppercase tracking-[0.22em] text-[#9a7771]">
                © 2026 Sterlix Skincare
              </p>
              <div className="flex items-center gap-5 text-[7px] uppercase tracking-[0.18em] text-[#9a7771]">
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;