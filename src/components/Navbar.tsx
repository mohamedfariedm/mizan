"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { X } from "lucide-react";

const links = [
  { href: "home", label: "Home" },
  { href: "features", label: "Features" },
  { href: "faq", label: "FAQ" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const offset = element.offsetTop - navHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (sectionId: string) => {
    if (sectionId === "home") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setIsMenuOpen(false);
      return;
    }

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Image
                  src="/menu.svg"
                  alt="menu"
                  width={24}
                  height={24}
                  priority
                />
              )}
            </button>
          </div>
          <div className="md:flex-shrink-0 flex-1 md:flex-none flex justify-center md:justify-start">
            <Image
              src="/logo.svg"
              alt="Mizan logo"
              width={140}
              height={38}
              className="w-24 md:w-[140px]"
              priority
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-2">
              {links.map(({ href, label }) => (
                <li
                  key={href}
                  className="text-charcoal px-3 py-2 text-lg font-medium cursor-pointer"
                  onClick={() => handleScroll(href)}
                >
                  {t(label)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white transform transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map(({ href, label }) => (
            <div
              key={href}
              className="text-charcoal hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              onClick={() => handleScroll(href)}
            >
              {t(label)}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
