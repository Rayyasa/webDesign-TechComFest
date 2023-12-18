"use client";
import React from "react";
import Image from "next/image";
import logo from "../assets/indiscoveries-logo.png";
import Link from "next/link";
import useHideNav from "@/app/hook/useHideNav";
import Lenis from "@studio-freight/lenis";
import { HomeIcon, Bars3Icon } from "@heroicons/react/24/outline";
const Navbar = () => {
  const { hideNav } = useHideNav();
  return (
    <nav
      className={`navbar fixed z-20 justify-center shadow ${
        hideNav ? "-top-20" : "top-0"
      } inset-x-0 bg-white transition-all duration-300 `}
    >
      <div className="flex w-full max-w-[1500px] justify-between px-6 ">
        <div className="h-10">
          <Link href={"/"}>
            <Image
              alt="logo indiscoveries"
              src={logo}
              className="h-full w-auto"
            />
          </Link>
        </div>
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1 btn-circle btn-ghost">
            <Bars3Icon className="h-7" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
          </ul>
        </div> */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/#id-topics'}>Home</Link>
            </li>
            <li>
              <details>
                <summary>Topics</summary>
                <ul className="rounded-t-none bg-base-100 p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="">
              <Link href={''}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
