import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";

const Info = () => {
  return (
    <AnimatePresence>
      <motion.div
        id="about-me"
        initial={{ x: "-100px", opacity: 0, scale: 0.5 }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="designation text-white font-grotesk text-3xl px-14  h-auto"
      >
        I craft modern websites utilizing cutting-edge technologies such as
        JavaScript, React, Angular, and TypeScript. I seamlessly blend these
        with HTML and CSS to create dynamic and visually stunning user
        interfaces. With a passion for engineering user-centric experiences, I
        bring innovation and precision to every project.
      </motion.div>
      <Button text={"About Me"} className="mx-10" />
    </AnimatePresence>
  );
};

export default Info;
