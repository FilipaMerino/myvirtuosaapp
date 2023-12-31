"use client";

import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLogout } from "../hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
// import { useContext } from "react";
// import { UserContext } from "../contexts/UserContext";
// import { signOutUser } from "../../utils/firebase/firebase.utils"
import logoNavbarOrange from "../../public/images/logoNavBarOrange.png";

import Image from "next/image";

const Navbar = () => {
  const { logout, isLoading } = useLogout();
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <nav className="bg-[#333333] w-full lg:pr-2 h-[10rem] flex items-center">
        <div className="navbar lg:flex lg:justify-between">
          <div className="navbar-start">
            <div className="dropdown ml-10">
              <label
                tabIndex={0}
                className="btn btn-ghost text-white lg:hidden">
                <RxHamburgerMenu />
              </label>

              <ul
                tabIndex={0}
                className="bg-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-32">
                <li>
                  <Link href="/about">About</Link>
                </li>

                <li>
                  <Link href="/#service">Services</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>

                <li>
                  <button type="button" onClick={logout}>
                    <Link href="./">
                      <strong>Log Out</strong>
                    </Link>
                  </button>
                </li>
              </ul>
            </div>

            <div className="items-center hidden lg:flex">
              <Link href="/">
                <Image
                  src={logoNavbarOrange}
                  height={250}
                  width={250}
                  alt="logo"
                  className=""
                />
              </Link>


            </div>
          </div>

          <div className="navbar-center hidden lg:flex lg:justify-between lg:items-center gap-6 mr-10 ">
            <Link
              href="/about"
              className="link hover:text-[#f2f2ef5e] no-underline text-[16px] text-white ">
              About
            </Link>

            <Link
              href="/#service"
              className="link no-underline hover:text-[#f2f2ef5e] text-[16px] text-white ">
              Services
            </Link>

            <Link
              href="/blog"
              className="link no-underline hover:text-[#f2f2ef5e] text-[16px] text-white ">
              Blog
            </Link>

            {user && (
              <button type="button" onClick={logout}>
                <Link
                  href="/"
                  className="link no-underline hover:text-[#f2f2ef5e] text-[14px] text-white">
                  <FiLogOut />
                </Link>
              </button>
            )}

            {/* )} */}
          </div>
          <div className="items-center lg:hidden flex justify-end">
              <Link href="/">
                <Image
                  src={logoNavbarOrange}
                  height={160}
                  width={160}
                  alt="logo"
                  className=""
                />
              </Link>


            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
