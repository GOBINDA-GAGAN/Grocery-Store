"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const NavBar = () => {
  const categories = [
    { name: "Home", href: "/" },
    { name: "Fruits & Dairy", href: "/fruits-dairy" },
    { name: "Vegetables", href: "/vegetables" },
    { name: "Meats & Poultry", href: "/meats-poultry" },
    { name: "Seafood", href: "/seafood" },
    { name: "Bakery & Bread", href: "/bakery-bread" },
    { name: "Beverages", href: "/beverages" },
    { name: "Tea & Coffee", href: "/tea-coffee" },
    { name: "Snacks", href: "/snacks" },
    { name: "Frozen & Ready-to-Eat", href: "/frozen-ready" },
    { name: "Household", href: "/household" },
    { name: "Organic", href: "/organic" },
    { name: "Spices", href: "/spices" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // First 9 categories
  const firstCategories = categories.slice(0, 9);
  // Remaining categories for dropdown
  const extraCategories = categories.slice(9);

  return (
    <nav className="container mx-auto  relative">
      <div className="px-4 py-3 flex flex-wrap justify-center gap-4">
        {firstCategories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="text-gray-700 hover:text-green-700 font-medium transition"
          >
            <span className="bg-gray-100 py-1 px-2 rounded-2xl">
              {cat.name}
            </span>
          </Link>
        ))}

        {/* More / Less dropdown button */}
        {extraCategories.length > 0 && (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{ backgroundColor: "var(--color-primary)" }}
              className="py-1 px-3 rounded-2xl text-white font-medium hover:opacity-90 transition flex items-center gap-1"
            >
              {dropdownOpen ? (
                <>
                  Less <IoChevronUp className="transition-transform" />
                </>
              ) : (
                <>
                  More <IoChevronDown className="transition-transform" />
                </>
              )}
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-max bg-white border border-gray-200 shadow-lg rounded-md flex flex-col py-2 z-50">
                {extraCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium transition"
                    onClick={() => setDropdownOpen(false)} // close on click
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
