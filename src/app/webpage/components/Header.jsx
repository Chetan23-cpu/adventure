"use client";

import { Link as ScrollLink } from "react-scroll";

import { RiArrowRightUpLine } from "react-icons/ri";
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";
import Link from "next/link";
import { FaRegUserCircle, FaShoppingCart, FaRegistered } from "react-icons/fa";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "sports",
    path: "/sports",
  },
  {
    name: "amenities",
    path: "/aminities",
  },
  {
    name: "classes",
    path: "/classes",
  },
  {
    name: "events",
    path: "/events",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary py-4 relative z-[999]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <Logo />
          </div>

          {/* nav and button */}
          <nav className="hidden xl:flex items-center gap-12 navbar">
            <ul className="flex">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
                >
                  <Link
                    href={link.path}
                    className="cursor-pointer hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-white group ml-5">
              <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
                <Link href="/booking">Book Now</Link>
              </div>
              <div className="w-11 h-11 bg-primary flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
            <div className={styles.button_wrapper}>
              <button
                className={styles.button}
                onClick={() => setIsOpen(!isOpen)}
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
              {isOpen && (
                <div className={styles.user_card}>
                  <h4>
                    <FaRegUserCircle />
                    Profile
                  </h4>
                  <h4>
                    <FaShoppingCart />
                    Bookings
                  </h4>
                  <h4>
                    <FaRegistered />
                    Register
                  </h4>
                  <h4>
                    <RiLoginCircleFill />
                    Login
                  </h4>
                  <h4>
                    <RiLogoutCircleFill />
                    Logout
                  </h4>
                </div>
              )}
            </div>
          </nav>

          {/* nav mobile */}

          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
