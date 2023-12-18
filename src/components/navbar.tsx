"use client";
import React from "react";
import Image from "next/image";
import logo from "../assets/indiscoveries-logo.png";
import Link from "next/link";
import useHideNav from "@/app/hook/useHideNav";
import { HomeIcon, Bars3Icon } from "@heroicons/react/24/outline";
const Navbar = () => {
  const { hideNav } = useHideNav();
  return (
    <nav
      className={`navbar shadow justify-center fixed z-20 ${
        hideNav ? "-top-20" : "top-0"
      } inset-x-0 transition-all duration-300 bg-white `}
    >
      <div className="flex w-full justify-between max-w-[1500px] px-6 ">
        <Link
          href={"/"}
          className="btn btn-ghost btn-circle normal-case font-normal md:flex hidden"
        >
          <HomeIcon className="h-7" />
        </Link>
        <div className="h-10">
          <Link href={"/"}>
            <Image
              alt="logo indiscoveries"
              src={logo}
              className="h-full w-auto
        "
            />
          </Link>
        </div>
        <div className="dropdown dropdown-end">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
