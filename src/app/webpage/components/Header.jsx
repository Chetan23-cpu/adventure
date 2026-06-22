"use client";

import { Link as ScrollLink } from "react-scroll";

import { RiArrowRightUpLine } from "react-icons/ri";
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "sports",
    path: "services",
  },
  {
    name: "amenities",
    path: "projects",
  },
  {
    name: "classes",
    path: "classes",
  },
  {
    name: "events",
    path: "events",
  },
];

const Header = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <Logo />
          </div>

          {/* nav and button */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
                  >
                    <ScrollLink
                      to={link.path}
                      smooth
                      spy
                      className="cursor-pointer"
                      activeClass="text-accent"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>

            <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-white group ml-5">
              <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
                Book Now
              </div>
              <div className="w-11 h-11 bg-primary flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
            <button className={styles.button}>
              <Link href="/user_login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </button>
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
