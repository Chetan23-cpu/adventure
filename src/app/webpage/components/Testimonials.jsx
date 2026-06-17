import Image from "next/image";
import Button from "./Buttom";
import Pretile from "./Pretitle";
import Slider from "./Slider";

import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/*text */}
          <motion.div
            className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Pretile text="Testimonials" />
            <h2 className="h2 mb-6">Built on Trust, Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commercial spaces, our clients share their
              experiences of working with us. See how we've helped them bring
              their dreams to life with expert craftmanship.
            </p>
            <Button text="Read More" />
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col xl:flex-row  xl:justify-end"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* image and slider */}
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                fill
                className="object-cover"
                quality={100}
                alt=""
              />
            </div>
            <motion.div
              className="relative z-20 xl:absolute xl:bottom-0 xl:right-[200px] max-w-max"
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Quote icon img */}
              <Image
                src="/assets/img/testimonials/quote.svg"
                width={54}
                height={36}
                alt=""
                className="absolute z-20 -top-4 left-[60px]"
              />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
