import React from "react";
import Header from "./components/Header";
import aboutSkincare from "./assets/about-skincare.png";
import "./index.css";
import DiscoverSection from "./components/DiscoverSection";

const brands = [
  {
    number: "01",
    name: "COSRX",
    category: "K-BEAUTY",
  },
  {
    number: "02",
    name: "BEAUTY OF JOSEON",
    category: "K-BEAUTY",
  },
  {
    number: "03",
    name: "SKIN1004",
    category: "K-BEAUTY",
  },
  {
    number: "04",
    name: "ANUA",
    category: "K-BEAUTY",
  },
  {
    number: "05",
    name: "THE ORDINARY",
    category: "EVERYDAY CARE",
  },
  {
    number: "06",
    name: "CERA VE",
    category: "DERMATOLOGICAL",
  },
  {
    number: "07",
    name: "CETAPHIL",
    category: "EVERYDAY CARE",
  },
  {
    number: "08",
    name: "OLAY",
    category: "SKINCARE",
  },
  {
    number: "09",
    name: "GARNIER",
    category: "BEAUTY CARE",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-10 bg-[#c98f88]/50" />

      <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#ae7771]">
        {children}
      </span>

      <span className="h-px w-10 bg-[#c98f88]/50" />
    </div>
  );
}

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
        <section
          id="top"
          className="relative min-h-[760px] overflow-hidden bg-[#eee5dc] lg:min-h-[820px]"
        >

          {/* Hero Image */}
          <img
            src="/hero-skincare.png"
            alt="Curated skincare collection"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Soft editorial overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f0e9]/95 via-[#f7f0e9]/65 to-transparent" />

          {/* Slight bottom fade */}
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
                  <span className="ml-3 text-sm">
                    →
                  </span>
                </a>

                <a
                  href="#coming-soon"
                  className="inline-flex items-center justify-center rounded-full border border-[#4d4944]/25 bg-white/30 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#403d38] backdrop-blur-sm transition hover:border-[#d99590] hover:text-[#c9827d]"
                >
                  Contact Us
                </a>

              </div>

              {/* Small reassurance */}
              <div className="mt-10 flex items-center gap-3 text-[8px] uppercase tracking-[0.22em] text-[#77716a]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d99590]" />
                Online destination coming soon
              </div>

            </div>
          </div>

          {/* Bottom Hero Metadata */}
          <div className="absolute bottom-7 left-6 right-6 z-10 flex items-center justify-between sm:left-10 sm:right-10 lg:left-14 lg:right-14">

            <span className="text-[7px] uppercase tracking-[0.3em] text-[#716a63]">
              CURATED SKINCARE
            </span>

            <span className="text-[7px] uppercase tracking-[0.3em] text-[#716a63]">
              STARLIX · 2026
            </span>

          </div>
        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section className="about-section" id="about">
          <div className="about-container">

            <div className="about-visual">
              <div className="about-image-wrap">

                <img
                  src={aboutSkincare}
                  alt="Curated skincare collection"
                  className="about-image"
                />

                <span className="about-sparkle">
                  ✦
                </span>

              </div>
            </div>

            <div className="about-content">

              <div className="about-eyebrow">
                <span />
                <p>ABOUT Starlix</p>
                <span />
              </div>

              <h2>
                Skincare should feel like <em>self-care.</em>
              </h2>

              <div className="about-text">

                <p>
                  Starlix is being created as a curated online destination
                  for people who genuinely enjoy skincare.
                </p>

                <p>
                  We're exploring a carefully selected mix of Korean beauty
                  favourites and trusted international skincare brands —
                  making it easier to discover products that deserve a place
                  in your routine.
                </p>

                <p>
                  Our final collection is still being curated. More details,
                  products and availability will be revealed closer to launch.
                </p>

              </div>

              <div className="about-signature">
                <span>
                  Curated with intention
                </span>

                <span className="signature-line" />
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            CATEGORIES
        ===================================================== */}
        <DiscoverSection />


        {/* =====================================================
            BRANDS
        ===================================================== */}
        <section
          id="brands"
          className="bg-[#f8f1ed] px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
        >

          <div className="mx-auto max-w-[1250px]">

            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">

              {/* LEFT — Editorial Introduction */}
              <div>

                <SectionLabel>
                  Brands We're Exploring
                </SectionLabel>

                <h2 className="mt-6 font-serif text-[46px] leading-[0.92] tracking-[-0.045em] text-[#292322] sm:text-[58px]">
                  Familiar
                  <br />
                  favourites.
                  <br />
                  <span className="italic text-[#ce7f7c]">
                    New discoveries.
                  </span>
                </h2>

                <p className="mt-6 max-w-[430px] text-[13px] leading-6 text-[#715c57]">
                  A glimpse at the skincare names we're exploring for the
                  Starlix collection — from Korean beauty favourites to
                  trusted everyday essentials.
                </p>

                <div className="mt-6 flex items-center gap-3">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#d58a84]" />

                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#a17c76]">
                    Collection coming soon
                  </span>

                </div>

              </div>


              {/* RIGHT — Brand Index */}
              <div className="grid grid-cols-2 border-l border-t border-[#cdb6ae]/45">

                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="group relative min-h-[92px] border-b border-r border-[#cdb6ae]/45 px-5 py-5 transition-all duration-300 hover:bg-[#f1e3de] sm:min-h-[100px] sm:px-6"
                  >

                    {/* Top Row */}
                    <div className="flex items-center justify-between">

                      <span className="text-[7px] tracking-[0.2em] text-[#b58a83]">
                        {brand.number}
                      </span>

                      <span className="text-[6px] uppercase tracking-[0.16em] text-[#b58a83]/80">
                        {brand.category}
                      </span>

                    </div>

                    {/* Brand */}
                    <div className="mt-5 flex items-end justify-between">

                      <h3 className="font-serif text-[17px] tracking-[0.045em] text-[#43322f] transition-colors duration-300 group-hover:text-[#c77d78] sm:text-[19px]">
                        {brand.name}
                      </h3>

                      <span className="translate-x-1 text-[12px] text-[#c77d78] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        ↗
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            CURATED FOR YOU
        ===================================================== */}
        <section
          className="curated-section"
          id="curated"
        >

          {/* Decorative background elements */}
          <div className="curated-orbit curated-orbit-left">
            <span className="curated-sparkle">
              ✦
            </span>
          </div>

          <div className="curated-orbit curated-orbit-right">
            <span className="curated-sparkle">
              ✦
            </span>
          </div>

          <div className="curated-circle curated-circle-left" />
          <div className="curated-circle curated-circle-right" />

          <div className="curated-content">

            {/* Eyebrow */}
            <div className="curated-eyebrow">
              <span />
              <p>CURATED FOR YOU</p>
              <span />
            </div>

            {/* Heading */}
            <h2 className="curated-heading">
              Your skincare shelf,
              <br />
              <em>reimagined.</em>
            </h2>

            {/* Main description */}
            <p className="curated-description">
              From Korean skincare favourites to trusted everyday essentials,
              Starlix will bring together a selection made for discovering,
              exploring and building a routine you love.
            </p>

            {/* Small supporting text */}
            <p className="curated-note">
              We're still finalising the collection. What you see here is an
              expression of the world we're creating — not a final product
              catalogue.
            </p>

            {/* CTA */}
            <a
              href="#coming-soon"
              className="curated-button"
            >
              Contact Starlix
              <span>
                →
              </span>
            </a>

            {/* Bottom detail */}
            <div className="curated-footer">
              <span />
              <b>
                ✦
              </b>
              <span />
            </div>

            <p className="curated-tagline">
              SKINCARE FOR A BRIGHTER YOU
            </p>

          </div>

        </section>


        {/* =====================================================
            FINAL FOOTER / CONTACT
        ===================================================== */}
        <footer
          id="coming-soon"
          className="relative overflow-hidden bg-[#f8f1ed] px-6 pt-20 text-[#332624] sm:px-10 lg:px-16 lg:pt-24"
        >

          <div className="mx-auto max-w-[1320px]">


            {/* =================================================
                CONTACT INTRO
            ================================================= */}
            <div className="relative border-b border-[#d8c3bc] pb-16 lg:pb-20">

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#d8958f]/15" />

              <div className="pointer-events-none absolute right-4 top-[-20px] h-40 w-40 rounded-full bg-[#d8958f]/5" />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">


                {/* LEFT */}
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

                    Whether you'd like to know more about a product,
                    our upcoming collection or anything skincare related,
                    we're always happy to hear from you.

                  </p>

                </div>


                {/* RIGHT — WHATSAPP CTA */}
                <div className="lg:pl-12">

                  <div className="rounded-[28px] border border-[#decac3] bg-[#fffaf7] p-7 shadow-[0_18px_50px_rgba(80,50,45,0.05)] sm:p-8">

                    <div className="flex items-start justify-between gap-6">

                      <div>

                        <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#a7837d]">
                          QUICK RESPONSE
                        </p>

                        <h3 className="mt-3 font-serif text-[28px] leading-tight text-[#332624] sm:text-[32px]">
                          Chat with us
                        </h3>

                        <p className="mt-3 max-w-[330px] text-[11px] leading-6 text-[#806a65]">
                          Send us your question directly on WhatsApp.
                          We'll be happy to help.
                        </p>

                      </div>


                      {/* WhatsApp Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f4eb] text-[#278b55]">

                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <path d="M20.5 11.2a8.3 8.3 0 0 1-12.2 7.3L4 20l1.5-4.1A8.3 8.3 0 1 1 20.5 11.2Z" />

                          <path d="M8.2 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6 0l.7-.5c.2-.1.4-.1.6 0l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.4-.2-2.8-.9-4-2-1.2-1.1-2-2.4-2.5-3.8-.2-.6-.1-1.2.1-1.8Z" />
                        </svg>

                      </div>

                    </div>


                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/94771234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 flex w-full items-center justify-between rounded-full border border-[#b9ddc5] bg-[#e8f6ec] px-6 py-4 text-[#287c4d] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#83bd98] hover:bg-[#dff1e5] hover:shadow-[0_10px_25px_rgba(39,139,85,0.10)]"
                    >

                      <span className="flex items-center gap-3">

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#278b55] text-white">

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

                          <span className="block text-[8px] uppercase tracking-[0.18em] text-[#57936e]">
                            WhatsApp
                          </span>

                          <span className="mt-0.5 block text-[11px] font-medium">
                            Chat with us
                          </span>

                        </span>

                      </span>


                      <span className="text-lg">
                        ↗
                      </span>

                    </a>


                    <p className="mt-4 text-center text-[7px] uppercase tracking-[0.18em] text-[#a48781]">
                      Usually the easiest way to reach us
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                MAIN FOOTER
            ================================================= */}
            <div className="grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_0.8fr] lg:py-16">


              {/* BRAND */}
              <div>

                <div className="font-serif text-[25px] tracking-[0.28em] text-[#2e2422]">
                  Starlix
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

                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                      />

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


              {/* CONTACT */}
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
                    href="mailto:hello@starlix.example"
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
                        hello@starlix.example
                      </span>

                    </span>

                  </a>

                </div>

              </div>


              {/* EXPLORE */}
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
                    Discover

                    <span className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>

                  </a>


                  <a
                    href="#brands"
                    className="group flex items-center justify-between text-[11px] text-[#765f5a] transition hover:text-[#d1847f]"
                  >
                    Brands

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
                © 2026 Starlix Skincare
              </p>

              <div className="flex items-center gap-5 text-[7px] uppercase tracking-[0.18em] text-[#9a7771]">

                <span>
                  Curated with intention
                </span>

                <span className="h-1 w-1 rounded-full bg-[#d1847f]" />

                <span>
                  Made for skincare lovers
                </span>

              </div>

            </div>

          </div>

        </footer>

      </main>
    </div>
  );
}

export default App;