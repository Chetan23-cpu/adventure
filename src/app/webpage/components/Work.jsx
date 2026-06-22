import Image from "next/image";
import Link from "next/link";
import Pretile from "./Pretitle";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const workData = [
  {
    img: "/assets/img/work/badminton_event.png",
    name: "Badminton",
    description: "Shuttle Smash Challenge",
    href: "",
  },
  {
    img: "/assets/img/work/pickleball_event.png",
    name: "Pickleball",
    description: "Pickle Power Clash",
    href: "",
  },
  {
    img: "/assets/img/work/tennis_event.png",
    name: "Tennis",
    description: "Court Ace Battle",
    href: "",
  },
  {
    img: "/assets/img/work/volley_event.png",
    name: "Volleyball",
    description: "Net Spike Showdown",
    href: "",
  },
];

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-[540px] mx-auto xl:mb-20"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Pretile text="Events" center />
          <h2 className="h2 mb-3">Upcoming Events</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Join our events and challange yourself.
          </p>
        </motion.div>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
         variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt=""
                quality={100}
              />
              <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="pl-8">
                  <h4 className="!text-white font-primary font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>
                  <div className="flex item-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent text-primary text-2xl flex justify-center items-center absolute right-3"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
