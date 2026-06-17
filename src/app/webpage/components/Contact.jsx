import { RiChat1Line, RiMap2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <motion.div
        className="container mx-auto"
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>
              <p className="mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* contact items*/}
              <div className="flex flex-col gap-[40px]">
                <div className="flex items-start gap-[20px]">
                  {/* icon */}
                  <div className="mt-0">
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>

                  {/* text */}
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Chat to us
                    </h5>

                    <p className="mb-4">Our friendly team is here to help.</p>

                    <p className="font-semibold text-primary">
                      hi@urbanbuild.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  {/* icon */}
                  <div className="mt-0">
                    <RiMap2Line className="text-[28px] text-accent" />
                  </div>

                  {/* text */}
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Office
                    </h5>

                    <p className="mb-4">Come and say hello at our office.</p>

                    <p className="font-semibold text-primary">
                      1250 Brickstone Ave, Dallas, TX 75201, USA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  {/* icon */}
                  <div className="mt-0">
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>

                  {/* text */}
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h5>

                    <p className="mb-4">Mon-Fri *am to 5pm</p>

                    <p className="font-semibold text-primary">
                      +91 (7827090225)
                    </p>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles="flex gap-[40px] mt-10"
                iconStyles="text-primary text-[20px]"
              />
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request a quote</h2>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
