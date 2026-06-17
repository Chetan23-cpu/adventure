import Image from "next/image";
import Link from "next/link";

import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const Footer = () => {
  return (
    <motion.footer
      className="mt-16 xl:mt-32 bg-primary"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src="/assets/logo.svg" width={230} height={48} alt="" />
            </Link>
            <p className="text-border max-w-[270px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
            </p>
          </div>
          {/*Contact */}
          <div className="flex-1 text-border">
            <div className="h4 text-white mb-10">Contact</div>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl" />
                <p>1250 Brickstone Ave, USA</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p>+91 (7827090225)</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p>email@urbanbuild.com</p>
              </li>
            </ul>
          </div>

          {/*Newsletter */}
          <div className="flex-1 text-border">
            <div className="h4 text-white mb-10">Newsletter</div>
            <p className="mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
            </p>
            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />
              <button className="bg-accent w-12 h-12 absolute right-2 top-2 bottom-2 text-primary text-xl flex items-center justify-center">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-border">
          Copyright &copy; 2025 UrbanBuild, All rights reserversed.
        </p>
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
