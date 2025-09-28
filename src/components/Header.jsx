import Link from "next/link";
import Search from "./Search";
import { IoHeartOutline } from "react-icons/io5";

import { BsHandbag } from "react-icons/bs";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className="w-full bg-white border-b border-gray-400 sticky z-50 top-0 left-0 ">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🥬</span>
            <h1 className="text-xl font-bold text-black">FreshBasket</h1>
          </Link>

          {/* search */}
          <Search />

          {/* Cart */}
          <div className="flex items-center space-x-4">
            {/* Login */}
            <button className="px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-secondary transition">
              Login
            </button>

            {/* Sign Up */}
            <button className="px-3 py-1.5 border border-primary text-black rounded-lg hover:bg-secondary  hover:text-white transition">
              Sign Up
            </button>
            {/* Wishlist */}
            <button className="relative p-2 text-black hover:text-secondary ">
              <IoHeartOutline size={22} />
              {/* Wishlist badge */}
              <span className="absolute -top-1  -right-1  bg-red-500  text-white text-xs px-1.5 py-0.5 rounded-full">
                20
              </span>
            </button>

            {/* Cart */}
            <button className="relative p-2 text-black hover:text-secondary ">
              <BsHandbag size={22} />
              {/* Cart badge */}
              <span className="absolute -top-1  -right-1 bg-red-500  text-white text-xs px-1.5 py-0.5 rounded-full">
                30
              </span>
            </button>
          </div>
        </div>
      </header>

      <div>
        <NavBar />
      </div>
    </>
  );
}
