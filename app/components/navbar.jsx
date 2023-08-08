'use client'

import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useLogout } from '../hooks/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
// import { useContext } from "react";
// import { UserContext } from "../contexts/UserContext";
// import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navbar = () => {
  const { logout, isLoading } = useLogout()
  const [user, loading, error] = useAuthState(auth)

  return (
    <div>
      <nav className="bg-[#333333] w-full ">
        <div className="navbar lg:flex lg:justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost text-white lg:hidden">
                <RxHamburgerMenu />
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
              >
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

            <Link
              className="btn btn-ghost normal-case lg:text-lg text-md text-white"
              href="/"
            >
              ADMIN VIRTUOSA
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex lg:justify-between lg:items-center">
            <ul className="menu menu-horizontal px-1 text-white">
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
                {user && (
                  <button type="button" onClick={logout}>
                    <Link href="/">
                      <FiLogOut />
                    </Link>
                  </button>
                )}

                {/* )} */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
