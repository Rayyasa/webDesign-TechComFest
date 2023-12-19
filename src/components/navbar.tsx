"use client";
import React from "react";
import Image from "next/image";
import logo from "../assets/indiscoveries-logo.png";
import Link from "next/link";
import useHideNav from "@/app/hook/useHideNav";
import Lenis from "@studio-freight/lenis";
import { HomeIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const { hideNav } = useHideNav();
  const path = usePathname().split('/')[1].split('-')[0]
  const pathAbout = usePathname().split('/')[1]

  return (
    <nav
      className={`navbar fixed z-20 justify-center shadow ${
        hideNav ? "-top-20" : "top-0"
      } inset-x-0 bg-white transition-all duration-300 `}
    >
      <div className="flex w-full max-w-[1500px] justify-between px-6 ">
        <div className="h-10">
          <Link href={"/#home"}>
            <Image
              alt="logo indiscoveries"
              src={logo}
              className="h-full w-auto"
            />
          </Link>
        </div>
        {path != 'blog' && pathAbout != 'about-us' && (
          <>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-1 gap-x-1">
                <li>
                  <Link href='/#home'>Home</Link>
                </li>
                <li>
                  <Link href='/#topics'>Topics</Link>
                </li>
                <li>
                  <Link href='/#gallery'>Gallery</Link>
                </li>
                <li>
                  <Link href='/#blog'>Blog</Link>
                </li>
                <li>
                  <Link href='/#quotes'>Quotes</Link>
                </li>
                <li>
                  <Link href='/#event'>Event</Link>
                </li>
                <li className="">
                  <Link href={'/about-us'}>About Us</Link>
                </li>
              </ul>
            </div>
            <div className="dropdown block lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </div>
              <ul tabIndex={0} className="menu -right-5 top-14 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                <li>
                  <Link href='/#home'>Home</Link>
                </li>
                <li>
                  <Link href='/#topics'>Topics</Link>
                </li>
                <li>
                  <Link href='/#gallery'>Gallery</Link>
                </li>
                <li>
                  <Link href='/#blog'>Blog</Link>
                </li>
                <li>
                  <Link href='/#quotes'>Quotes</Link>
                </li>
                <li>
                  <Link href='/#event'>Event</Link>
                </li>
                <li className="">
                  <Link href={'/about-us'}>About Us</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
