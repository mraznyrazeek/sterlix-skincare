import React, { useState } from "react";
import sterlixLogo from "../assets/sterlix-logo.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Discover", href: "#discover" },
  { label: "Brands", href: "#brands" },
  { label: "Coming Soon", href: "#coming-soon" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <div
        className="
          mx-auto
          flex
          h-[118px]
          max-w-[1550px]
          items-start
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* =================================================
            LOGO
        ================================================= */}
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          aria-label="STRLIX Skincare"
          className="
            group
            relative
            flex
            h-[118px]
            w-[190px]
            items-start
            justify-start
          "
        >

          {/* Soft glow behind logo */}
          <span
            className="
              pointer-events-none
              absolute
              left-[-15px]
              top-[15px]
              h-[95px]
              w-[145px]
              rounded-full
              bg-[#fffaf7]/35
              blur-2xl
            "
          />

          {/* Logo */}
          <img
            src={sterlixLogo}
            alt="STRLIX Skincare"
            className="
              relative
              mt-[3px]
              h-[112px]
              w-auto
              max-w-none
              object-contain
              origin-top-left
              transition-all
              duration-300
              group-hover:scale-[1.04]
            "
          />

        </a>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}
        <nav
          className="
            hidden
            items-center
            gap-10
            pt-[35px]
            md:flex
          "
        >

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                group
                relative
                text-[9px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#403d38]
                transition
                duration-300
                hover:text-[#d1847f]
              "
            >
              {item.label}

              {/* Elegant hover line */}
              <span
                className="
                  absolute
                  -bottom-2
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-[#d99590]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}

        </nav>


        {/* =================================================
            DESKTOP CTA
        ================================================= */}
        <a
          href="#coming-soon"
          className="
            hidden
            mt-[17px]
            rounded-full
            border
            border-[#d99590]/45
            bg-[#fffaf7]/75
            px-6
            py-3
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#6b514c]
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[#d99590]
            hover:bg-[#d99590]
            hover:text-white
            md:block
          "
        >
          Be First To Know
        </a>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            mt-[20px]
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#2b2925]/20
            bg-white/40
            backdrop-blur-md
            transition
            hover:border-[#d99590]
            md:hidden
          "
        >
          {menuOpen ? (
            <span
              className="
                text-[22px]
                font-light
                leading-none
                text-[#2b2925]
              "
            >
              ×
            </span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="h-px w-5 bg-[#2b2925]" />
              <span className="ml-2 h-px w-3 bg-[#d99590]" />
            </div>
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      <div
        className={`
          overflow-hidden
          border-t
          border-[#d8c3bc]/40
          bg-[#f8f1ec]/95
          backdrop-blur-xl
          transition-all
          duration-300
          md:hidden
          ${
            menuOpen
              ? "max-h-[420px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <nav className="px-6 py-5">

          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-[#2b2925]/10
                py-4
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#403d38]
                transition
                hover:text-[#d1847f]
              "
            >

              <span>
                {item.label}
              </span>

              <span
                className="
                  text-[8px]
                  text-[#a48f87]
                  transition
                  group-hover:translate-x-1
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

            </a>
          ))}


          {/* Mobile CTA */}
          <a
            href="#coming-soon"
            onClick={() => setMenuOpen(false)}
            className="
              mt-5
              flex
              items-center
              justify-center
              rounded-full
              border
              border-[#d99590]/50
              bg-[#fffaf7]
              px-5
              py-3.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#6b514c]
              transition-all
              duration-300
              hover:bg-[#d99590]
              hover:text-white
            "
          >
            Be First To Know

            <span className="ml-2 text-[12px]">
              →
            </span>
          </a>

        </nav>

      </div>

    </header>
  );
}