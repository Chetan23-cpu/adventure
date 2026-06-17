import Image from "next/image";
import Pretile from "./Pretitle";
import Button from "./Buttom";

import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">

          {/* text */}
          <div className="flex-1">
            <motion.div 
              className="max-w-[540px]"
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2}}
              >
              <Pretile text="About us" />

              <h2 className="h2 mb-6">
                Focused On Excellence In Every Game
              </h2>

              <p className="mb-11">
                With premium courts, modern amenities, and a passion for excellence, we are committed to creating unforgettable sporting experiences. From beginners taking their first steps onto the field to seasoned athletes pushing their limits, NETPLAY ARENA is where dedication meets opportunity.
              </p>

              {/* signature */}
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt="CEO Signature"
                  unoptimized
                />
                <p>Company CEO</p>
              </div>

              <Button text="Learn More" />
            </motion.div>
          </div>

          {/* image */}
          <motion.div 
            className="flex-1 xl:flex xl:justify-center"
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2}}>
            <div className="relative xl:w-[444px] xl:h-[493px]">

              <div className="hidden xl:block absolute -top-4 -left-4 -z-10 w-[444px] h-[493px] bg-accent" />

              <Image
                src="/assets/img/about/img.jpg"
                width={444}
                height={492}
                alt="About"
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;