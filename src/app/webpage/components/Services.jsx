"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import Button from "./Buttom";

import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import { TabsList } from "@radix-ui/react-tabs";
import { div } from "framer-motion/client";
import Pretile from "./Pretitle";

import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
import Link from "next/link";

const serviceData = [
  {
    name: "badminton",
    icon: <PiWallFill />,
    title: "Badminton",
    description:
      "Step onto the court and unleash your potential with fast-paced badminton action at NETPLAY ARENA. Our world-class courts offer the ideal setting for training, competition, and recreational play. Gather your friends, challenge your opponents, and enjoy the thrill of every rally.",
    serviceList: [
      "Professional-grade courts",
      "Suitable for all",
      "Bright, well-maintained courts",
      "Wooden Floor",
      "Regular coaching programs",
      "Safe, clean, and spacious",
    ],
    thumbs: [
      { url: "/assets/img/services/badminton_thumb2.png" },
      { url: "/assets/img/services/badminton_thumb.png" },
    ],
  },
  {
    name: "pickleball",
    icon: <PiPaintRollerFill />,
    title: "Pickleball",
    description:
      "Pickleball is a fast-growing paddle sport that combines elements of tennis, badminton, and table tennis. It is played on a smaller court with a perforated plastic ball and solid paddles, making it easy to learn and fun for all age groups. The game can be played in singles or doubles and is popular for both recreational and competitive play",
    serviceList: [
      "singles or doubles.",
      "Recreational",
      "Easy to learn",
      "Fast-paced",
      "low-impact",
      "for all ages",
    ],
    thumbs: [
      { url: "/assets/img/services/pickleball_thumb.png" },
      { url: "/assets/img/services/pickleball2_thumb.png" },
    ],
  },
  {
    name: "Tennis",
    icon: <PiWrenchFill />,
    title: "Tennis",
    description:
      "Our tennis facility is designed to deliver a premium playing experience for all skill levels. The court is built with standard surfaces to ensure fair play and better performance. Whether you are practicing alone, playing with friends, or training competitively, our tennis court provides the ideal setup.",
    serviceList: [
      "Standard-size tennis court",
      "High-quality surface",
      "singles and doubles matches",
      "Structural Fix",
      "proper lighting",
      "coaching sessions",
    ],
    thumbs: [
      { url: "/assets/img/services/tennis_thumb.png" },
      { url: "/assets/img/services/tennis_thumb2.png" },
    ],
  },
  {
    name: "Vollyball",
    icon: <PiUserGearFill />,
    title: "Vollyball",
    description:
      "Our sports complex offers a well-maintained volleyball court designed for both casual play and competitive matches. With high-quality flooring, proper net setup, and ample lighting, players can enjoy a smooth and energetic game experience. Whether you are a beginner or an experienced player, our facility provides the perfect environment to improve skills and enjoy team sports.",
    serviceList: [
      "Professionally maintained court",
      "standard court dimensions",
      "competitive matches",
      "night games",
      "practice sessions",
      "Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/volley_thumb.png" },
      { url: "/assets/img/services/volley_thumb2.png" },
    ],
  },
];

const fadeInVarient = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("badminton");

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-[540px] mx-auto mb-20"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Pretile text={"Our Services"} center />
          <h2 className="h2 mb-3">Sports We Offer</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            World-class facilities, professional standards, and unforgettable
            sporting experiences await.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="construction"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px]  h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none cursor-pointer"
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${activeTab === item.name ? "bg-primary text-white" : "bg-accent text-primary"}`}
                    >
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                      {item.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}

            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px] w-[]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    className="flex flex-col md:flex-row gap-[30px]"
                    variants={fadeInVarient}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                  >
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => {
                        return (
                          <div
                            key={index}
                            className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                          >
                            <Image src={thumb.url} fill alt="" />
                          </div>
                        );
                      })}
                    </div>
                    {/* text and button */}
                    <div>
                      <div>
                        <h3 className={`h3 mb-6 services_title`}>{item.title}</h3>
                        <p className="mb-10">{item.description}</p>

                        {/* Service List */}
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="capitalize font-medium text-primary">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        {/*Button */}
                        <Link href="/booking">
                          <Button text="Book Now" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
