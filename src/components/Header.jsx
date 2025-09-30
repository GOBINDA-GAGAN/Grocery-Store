"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoHeartOutline, IoMenu, IoClose, IoSearch } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import Search from "./Search";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-400  z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🥬</span>
            <h1 className="text-xl font-bold text-black">FreshBasket</h1>
          </Link>

          {/* Desktop & Laptop Search */}
          <div className="hidden lg:flex flex-1 mx-4">
            <Search />
          </div>

          {/* Desktop & Laptop Auth + Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-secondary transition">
              Login
            </button>
            <button className="px-3 py-1.5 border border-primary text-black rounded-lg hover:bg-secondary hover:text-white transition">
              Sign Up
            </button>
            <button className="relative p-2 text-black hover:text-secondary">
              <IoHeartOutline size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                20
              </span>
            </button>
            <button className="relative p-2 text-black hover:text-secondary">
              <BsHandbag size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                30
              </span>
            </button>
          </div>

          {/* Tablet & Mobile Icons */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileSearchOpen(true)}
              className="text-2xl text-black"
            >
              <IoSearch />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-2xl text-black"
            >
              <IoMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl text-black"
          >
            <IoClose />
          </button>
        </div>

        <div className="px-4 space-y-4">
          {/* Auth Buttons */}
          <div className="flex flex-col space-y-2">
            <button className="w-full px-3 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition">
              Login
            </button>
            <button className="w-full px-3 py-2 border border-primary text-black rounded-lg hover:bg-secondary hover:text-white transition">
              Sign Up
            </button>
          </div>

          {/* Wishlist & Cart */}
          <div className="flex space-x-4 mt-2">
            <button className="relative p-2 text-black hover:text-secondary">
              <IoHeartOutline size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                20
              </span>
            </button>
            <button className="relative p-2 text-black hover:text-secondary">
              <BsHandbag size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                30
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Search Panel */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 px-4 py-3 transition-transform duration-300 ease-in-out ${
          mobileSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
          />
          <button
            onClick={() => setMobileSearchOpen(false)}
            className="text-2xl text-black"
          >
            <IoClose />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {(mobileMenuOpen || mobileSearchOpen) && (
        <div
          className="fixed inset-0.5 z-40"
          onClick={() => {
            setMobileMenuOpen(false);
            setMobileSearchOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Header;
