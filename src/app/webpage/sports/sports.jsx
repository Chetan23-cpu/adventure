"use client";
import Pretile from "../components/Pretitle";
import styles from "./sports.module.css";
import Image from "next/image";
import Button from "../components/Buttom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
import { useState } from "react";
import Badminton_pricing from "./price";
import Pickleball_pricing from "./pickleball_price";
import Tennis_pricing from "./tennis_price";
import Volleyball_pricing from "./vollyball_price";
import Link from "next/link";

const Sportspage = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [activeTab2, setActiveTab2] = useState("features2");
  const [activeTab3, setActiveTab3] = useState("features3");
  const [activeTab4, setActiveTab4] = useState("features4");

  return (
    <div className={styles.container}>
      <div className={styles.pretile}>
        <Pretile text="Sports" />
      </div>
      <div>
        <div className="pt-10 xl:pt-10" id="about">
          <div className="container mx-auto">
            <div className="flex flex-col  xl:gap-15 xl:flex-row xl:items-top">
              <div className="flex-1">
                <motion.div
                  className="max-w-[540px]"
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className={styles.title}>Badminton:</div>
                  <div className={styles.details}>
                    <button className={`${styles.features} ${activeTab === "features" ? styles.active : ""}`} onClick={() => setActiveTab("features")}>Features</button>
                    <button
                      className={`${styles.features} ${activeTab === "price" ? styles.active : ""}`}
                      onClick={() => setActiveTab("price")}
                    >
                      Charges
                    </button>
                  </div>
                  {activeTab == "features" && (
                    <div>
                      <p className="mb-10">
                        With premium courts, modern amenities, and a passion for
                        excellence, we are committed to creating unforgettable
                        sporting experiences.
                      </p>
                      <div className={styles.bullet_points}>
                        <div className={styles.dot}>
                          Professional-grade badminton courts
                        </div>
                        <div className={styles.dot}>
                          Flexible court booking options
                        </div>
                        <div className={styles.dot}>
                          Coaching programs for all levels
                        </div>
                        <div className={styles.dot}>
                          Regular tournaments and leagues
                        </div>
                        <div className={styles.dot}>
                          Clean changing rooms and amenities
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab == "price" && (
                    <div>
                        <Badminton_pricing />
                    </div>
                  )}
                  <div className={styles.button}>
                    <Link href='/booking'>
                      <Button text="Book Now" />
                    </Link>
                    
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="flex-1 xl:flex xl:justify-center"
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="relative xl:w-[444px] xl:h-[493px]">
                  <div className="hidden xl:block absolute -top-4 -left-4 -z-10 w-[444px] h-[493px] bg-accent" />
                  <Image
                    src="/assets/img/sports/sports_badminton.png"
                    width={444}
                    height={492}
                    alt="About"
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="pt-10 xl:pt-10 mt-30" id="about">
          <div className="container mx-auto">
            <div className="flex flex-col gap-12 xl:gap-10 xl:flex-row xl:items-top">
              <motion.div
                className="flex-1 xl:flex xl:justify-left"
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="relative xl:w-[444px] xl:h-[493px]">
                  <div className="hidden xl:block absolute -top-4 -left-4 -z-10 w-[444px] h-[493px] bg-accent" />
                  <Image
                    src="/assets/img/sports/sports_tennis.png"
                    width={444}
                    height={492}
                    alt="About"
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <div className="flex-1">
                <motion.div
                  className="max-w-[540px]"
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className={styles.title}>Tennis:</div>
                  <div className={styles.details}>
                    <button className={`${styles.features} ${activeTab3 === "features3" ? styles.active :""}`} onClick={() => setActiveTab3("features3")}>Features</button>
                    <button className={`${styles.features} ${activeTab3 === "price3" ? styles.active :""}`} onClick={() => setActiveTab3("price3")}>Charges</button>
                  </div>
                  {activeTab3 === 'features3' &&(
                    <>
                  <p className="mb-10">
                    With premium courts, modern amenities, and a passion for
                    excellence, we are committed to creating unforgettable
                    sporting experiences.
                  </p>
                  <div className={styles.bullet_points}>
                    <div className={styles.dot}>
                      Professional-grade tennis courts
                    </div>
                    <div className={styles.dot}>
                      Flexible court booking options
                    </div>
                    <div className={styles.dot}>
                      Coaching programs for all levels
                    </div>
                    <div className={styles.dot}>
                      Regular tournaments and leagues
                    </div>
                    <div className={styles.dot}>
                      Clean changing rooms and amenities
                    </div>
                  </div>
                  </>
                  )}
                  {activeTab3 === 'price3' && (
                    <Tennis_pricing />
                  )}
                  <div className={styles.button}>
                    <Link href='/booking'>
                      <Button text="Book Now" />
                    </Link>
                  </div>
                  
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 xl:pt-10 mt-30" id="about">
          <div className="container mx-auto">
            <div className="flex flex-col gap-12 xl:gap-15 xl:flex-row xl:items-top">
              <div className="flex-1">
                <motion.div
                  className="max-w-[540px]"
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className={styles.title}>Pickle Ball:</div>
                  <div className={styles.details}>
                    <button className={`${styles.features} ${activeTab2 === "features2" ? styles.active : ""}`} onClick={() => setActiveTab2("features2")}>Features</button>
                    <button className={`${styles.features} ${activeTab2 === "price2" ? styles.active : ""}`} onClick={() => setActiveTab2("price2")}>Charges</button>
                  </div>
                  {activeTab2 == "features2" && (
                    <>
                  <p className="mb-10">
                    With premium courts, modern amenities, and a passion for
                    excellence, we are committed to creating unforgettable
                    sporting experiences.
                  </p>
                  <div className={styles.bullet_points}>
                    <div className={styles.dot}>
                      Professional-grade pickleball courts
                    </div>
                    <div className={styles.dot}>
                      Flexible court booking options
                    </div>
                    <div className={styles.dot}>
                      Coaching programs for all levels
                    </div>
                    <div className={styles.dot}>
                      Regular tournaments and leagues
                    </div>
                    <div className={styles.dot}>
                      Clean changing rooms and amenities
                    </div>
                  </div>
                  </>
                  )}
                  {activeTab2 == "price2" && (
                    <Pickleball_pricing />   
                )}
                  <div className={styles.button}>
                    <Link href="/booking">
                      <Button text="Book Now" />
                    </Link>
                    
                  </div>
                  
                

                </motion.div>
              </div>
              <motion.div
                className="flex-1 xl:flex xl:justify-center"
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="relative xl:w-[444px] xl:h-[493px]">
                  <div className="hidden xl:block absolute -top-4 -left-4 -z-10 w-[444px] h-[493px] bg-accent" />
                  <Image
                    src="/assets/img/sports/sports_pickleball.png"
                    width={444}
                    height={492}
                    alt="About"
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="pt-10 xl:pt-10 mt-30" id="about">
          <div className="container mx-auto">
            <div className="flex flex-col gap-12 xl:gap-10 xl:flex-row xl:items-top">
              <motion.div
                className="flex-1 xl:flex xl:justify-left"
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="relative xl:w-[444px] xl:h-[493px]">
                  <div className="hidden xl:block absolute -top-4 -left-4 -z-10 w-[444px] h-[493px] bg-accent" />
                  <Image
                    src="/assets/img/sports/sports_volleyball.png"
                    width={444}
                    height={492}
                    alt="About"
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              <div className="flex-1">
                <motion.div
                  className="max-w-[540px]"
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className={styles.title}>Volleyball:</div>
                  <div className={styles.details}>
                    <div className={`${styles.features} ${activeTab4 === "features4" ? styles.active : ""}`} onClick={() => setActiveTab4("features4")}>Features</div>
                    <div className={`${styles.features} ${activeTab4 === "price4" ? styles.active : ""}`} onClick={() => setActiveTab4("price4")}>Charges</div>
                  </div>
                  {activeTab4 == "features4" && (
                    <>
                  <p className="mb-10">
                    With premium courts, modern amenities, and a passion for
                    excellence, we are committed to creating unforgettable
                    sporting experiences.
                  </p>
                  <div className={styles.bullet_points}>
                    <div className={styles.dot}>
                      Professional-grade volleyball courts
                    </div>
                    <div className={styles.dot}>
                      Flexible court booking options
                    </div>
                    <div className={styles.dot}>
                      Coaching programs for all levels
                    </div>
                    <div className={styles.dot}>
                      Regular tournaments and leagues
                    </div>
                    <div className={styles.dot}>
                      Clean changing rooms and amenities
                    </div>
                  </div>
                  </>
                  )}
                  {activeTab4 == "price4" && (
                    <Volleyball_pricing />
                  )}
                  <div className={styles.button}>
                    <Link href='/booking'>
                      <Button text="Book Now" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sportspage;
